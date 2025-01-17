import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pair } from 'src/schemas/pair.schema';
import { Project } from 'src/schemas/project.schema';

@Injectable()
export class DashboardRepository {
  constructor(
    @InjectModel(Pair.name) private readonly pairModel: Model<Pair>,
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}

  async findPairAndSort(sort: string, cursor: number): Promise<Object> {
    // 정렬 기준(sort)가 query string에 주어지지 않았다면 디폴트 값인 tvl 순으로 정렬한다.
    if (!sort) sort = 'tvl';

    const sortBy = {};
    sortBy[sort.toLowerCase()] = 'desc';

    // cursor 값이 주어지지 않았다면 첫 fetch이므로 가장 큰 값을 넣어준다.
    if (!cursor) cursor = Number.MAX_SAFE_INTEGER;

    const limit = 10;
    try {
      const sorted = await this.pairModel
        .find(
          sort === 'tvl'
            ? { isActive: true, tvl: { $lt: cursor } }
            : sort === 'apr'
            ? { isActive: true, apr: { $lt: cursor } }
            : null,
        )
        .populate('project_id')
        .sort(sortBy)
        .limit(limit + 1);

      // 조회된 값이 없다면
      if (!sorted) throw new NotFoundException('No pairs found!');

      // 가져올 데이터가 남아있거나 모든 데이터를 가져왔다면
      const hasMorePairs = sorted.length === limit + 1;
      let nextCursor = null;

      if (hasMorePairs) {
        // 다음 cursor 값을 기억해둔다
        const nextCursorPair = sorted[limit - 1];
        nextCursor =
          sort === 'tvl' ? nextCursorPair.tvl : sort === 'apr' ? nextCursorPair.apr : null;
        sorted.pop();
      }

      return {
        result: sorted,
        pagination: {
          limit: limit,
          count: sorted.length,
          hasMorePairs: hasMorePairs,
          nextCursor: nextCursor,
        },
      };
    } catch (error) {
      throw new Error('error: sortAndFilterPair in dashoboard.repository.ts');
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async findFilteredPairAndSort(sort: string, cursor: number, filter: string): Promise<Object> {
    // 정렬 기준(sort)가 query string에 주어지지 않았다면 디폴트 값인 tvl 순으로 정렬한다.
    if (!sort) sort = 'tvl';

    const sortBy = {};
    sortBy[sort.toLowerCase()] = 'desc';

    // cursor 값이 주어지지 않았다면 첫 fetch이므로 가장 큰 값을 넣어준다.
    if (!cursor) cursor = Number.MAX_SAFE_INTEGER;

    const limit = 10;

    try {
      const found = await this.pairModel
        .find(
          sort === 'tvl'
            ? { isActive: true, tvl: { $lt: cursor } }
            : sort === 'apr'
            ? { isActive: true, apr: { $lt: cursor } }
            : null,
        )
        .populate({
          path: 'project_id',
          match: { name: new RegExp('^' + filter + '$', 'i') }, // 대소문자 상관없이 알파벳만 정확히 일치하면 되도록
        })
        .sort(sortBy)
        .exec();

      const result = found.filter((pair) => pair.project_id !== null).slice(0, 11);

      // 조회된 값이 없다면
      if (!result) throw new NotFoundException('No pairs found!');

      // 가져올 데이터가 남아있거나 모든 데이터를 가져왔다면
      const hasMorePairs = result.length === limit + 1;
      let nextCursor = null;

      if (hasMorePairs) {
        // 다음 cursor 값을 기억해둔다
        const nextCursorPair = result[limit - 1];
        nextCursor =
          sort === 'tvl' ? nextCursorPair.tvl : sort === 'apr' ? nextCursorPair.apr : null;
        result.pop();
      }

      return {
        result: result,
        pagination: {
          limit: limit,
          count: result.length,
          hasMorePairs: hasMorePairs,
          nextCursor: nextCursor,
        },
      };
    } catch (error) {
      throw new Error('error: sortAndFilterPair in dashoboard.repository.ts');
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async findPairByKeyword(keyword: string, cursor: number, sort: string): Promise<Object> {
    if (!sort) sort = 'tvl';

    const sortBy = {};
    sortBy[sort.toLowerCase()] = -1;

    if (!cursor) cursor = Number.MAX_SAFE_INTEGER;

    const limit = 10;
    try {
      // sort 기준(tvl/apr)의 값이 cursor보다 작은 데이터만을 'limit+1'만큼 가져온다.
      const searched = await this.pairModel
        .find(
          sort === 'tvl'
            ? { isActive: true, pair: new RegExp(keyword, 'i'), tvl: { $lt: cursor } }
            : sort === 'apr'
            ? { isActive: true, pair: new RegExp(keyword, 'i'), apr: { $lt: cursor } }
            : null,
        )
        .populate('project_id')
        .sort(sortBy)
        .limit(limit + 1);

      if (!searched) throw new NotFoundException('No pairs searched!');

      const hasMorePairs = searched.length === limit + 1;
      let nextCursor = null;

      if (hasMorePairs) {
        const nextCursorPair = searched[limit - 1];
        nextCursor =
          sort === 'tvl' ? nextCursorPair.tvl : sort === 'apr' ? nextCursorPair.apr : null;
        searched.pop();
      }

      return {
        result: searched,
        pagination: {
          limit: limit,
          count: searched.length,
          hasMorePairs: hasMorePairs,
          nextCursor: nextCursor,
        },
      };
    } catch (error) {
      throw new Error('error: searchPair in dashoboard.repository.ts');
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async findProjectAndSort(): Promise<Object> {
    const sorted = await this.projectModel.find().sort({ tvl: 'desc' });
    return {
      result: sorted,
      pagination: null,
    };
  }
}
