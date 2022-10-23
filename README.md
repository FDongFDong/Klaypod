# [Team Project] 

- [[Team Project]](#team-project)
  - [프로젝트 소개](#프로젝트-소개)
    - [로드맵](#로드맵)
    - [POD Token이란?](#pod-token이란)
    - [POD Token Economy](#pod-token-economy)
  - [Role](#role)
  - [Stack](#stack)
  - [시연 영상](#시연-영상)



## 프로젝트 소개

🔎 프로젝트 명 '클레이팟 (KlayPod)'

![스크린샷, 2022-07-27 16-27-13](https://user-images.githubusercontent.com/20445415/197384871-d05be991-5ab8-451f-9cfc-7edbfc201f12.png)

- **팀명** : 클레이팟 (KlayPod)
- **프로젝트 명** : 클레이팟 - Klaytn DeFi Tool
- **팀원** : 김동규(팀장), 차초희, 한아름, 심상준
- **팀 노션** : [](https://www.notion.so/1b678592d26e4571bc4e1525f73ba931)
- **Github 링크** : [https://github.com/codestates/BEB-04-Klaypod](https://github.com/codestates/BEB-04-Klaypod)
- **배포 링크** : [https://klaypod.com/](https://klaypod.com/)
- **Docs** : [https://c-w.gitbook.io/klaypod/](https://c-w.gitbook.io/klaypod/)
___

![klaypod소개](https://user-images.githubusercontent.com/20445415/197384913-918e2922-892c-4469-b5cc-80ea6c88a4f5.png)

**‘클레이팟’** 은 클레이튼 체인 디파이 섹터에서 가장 높은 수익 목표로 서비스를 제공하는 프로젝트입니다.

![프로젝트소개](https://user-images.githubusercontent.com/20445415/197384978-f77461f8-9d59-4c91-ab47-7bca5081e5be.png)

 쇼핑을 할 때 '네이버쇼핑', '다나와' 등 인터넷 가격 정보 사이트를 즐겨 이용합니다. 원하는 물건을 가장 유리한 조건으로 구매하기 위해서입니다.
쇼핑의 효율을 극대화하려는 이런 경향은 소비자들에게서 공통적으로 나타나는 습성입니다.
여러 코인의 가격이 시시각각 변하는 디파이 세계에서도 가격비교 정보는 매우 유용 할 것입니다.
클레이튼 생태계는 지속적인 성장 중 입니다. 단순히 디지털 자산을 거래소에 보관하는 것을 떠나서 적극적으로 다양한 디파이 서비스를 사용하는 클레이튼 사용자들이 빠르게 늘어나고 있습니다.
**'클레이팟'** 프로젝트는 클레이튼 생태계 디파이 서비스를 사용하려는 사용자들에게 좀 더 간편한 서비스를 제공하기 위한 일종의 **디파이 가격비교 서비스** 스캐너(Scanner) 입니다.

___

### 로드맵
![스크린샷, 2022-07-27 17-01-29](https://user-images.githubusercontent.com/20445415/197384877-68d1dbad-126a-4b47-bd63-ef0963e75045.png)

**'클레이팟'** 은 스캐너 기능 외에도 부가 기능을 제공합니다. **(로드맵 참조)**

- ‘클레이튼’ 코인으로 ‘클레이팟’ POD 토큰을 구입(스왑) 할 수 있습니다.
- 사용자는 '클레이팟' POD 토큰을 스테이킹하여 수익 창출을 할 수 있습니다.
- '클레이팟' POD 토큰 보유자는 '클레이팟' 의 방향성을 투표하는 거버넌스에 참여할 수 있습니다.

---

### POD Token이란?

![podtoken](https://user-images.githubusercontent.com/20445415/197385009-cacb7f70-c565-4c9c-b01d-9078fe6be22b.png)

POD 토큰은 클레이팟 컨텐츠의 활성화를 위한 클레이팟 만의 자체발행 KIP-7 토큰 입니다.

클레이팟의 서비스를 이용하는 사용자가 늘어나고 커뮤니티가 성장할수록, POD 토큰의 가치는 높아질 것입니다.

로드맵의 방향성 대로 꾸준히 성장하며 POD 토큰의 가치를 높이겠습니다.

---

### POD Token Economy

![토큰이코](https://user-images.githubusercontent.com/20445415/197385018-fcd161bf-b940-47d3-9296-4dfcc5a3fdc1.png)

1. POD 토큰을 스테이킹하여 수익 창출을 할 수 있습니다.
2. 유동성 풀을 형성하여 높은 이자 수익을 창출할 수 있습니다.
3. POD 토큰 보유자는 '클레이팟' 의 방향성을 투표하는 거버넌스에 참여할 수 있습니다.

___

## Role

- 팀장

Collaboration
- 데일리 스크럼 진행
  - 주기적으로 팀원 역할 체크 및 의견 조율 진행
- 위클리 스크럼 진행
  - 한주간 진행상황 공유
- 기능별 역할 배분

Crawling
- 기능 구현
  - Klaytn Network에서 운용중인 DeFi 사이트 필터링
  - 5개의 Pair Pool Data 추출 및 크롤링 구현
    - KlaySwap
    - ClaimSwap
    - KokonutSwap
    - PalaSwap
    - UFOSwap
  - 10개의 DeFi 프로젝트 리스트, TVL, Logo 추출 및 크롤링 구현
    - KlaySwap
    - KokonutSwap
    - ClaimSwap
    - ...
  - 30분마다 주기적으로 데이터 크롤링하도록 자동화 기능 구현
  
DB
  - 추출된 데이터 가공 후 데이터 셋 제작
  
Contract
  - Uniswap V2를 이용한 Swap 기능 구현
  - POD(KlayPod 자체 토큰) 토큰 발행

## Stack

**Crawling**

- Selenium
- Python
- Anaconda
- MongoDB
- Selenium

**Blockchain**

- Solidty
- Klaytn Network
- Truffle
- Ganache

**Collaboration Tool**

- Github
- Discord
- Notion
- Figma
- Miro

___

## 시연 영상
1. 메인 페이지
    
    ![메인 화면 진입 및 스크롤](https://user-images.githubusercontent.com/20445415/197382762-71a4988b-ab3f-476d-935d-2a94ead3532d.gif)
    > [klaypod.com](http://klaypod.com)
으로 들어가서 제일 처음 보이는 메인 페이지 입니다.
`Enter App` 버튼을 누르면 대시보드와 메인 기능을 이용할 수 있고, `Docs` 버튼을 누르면 클레이팟에 대한 문서가 작성된 gitbook 페이지로 이동합니다.
스크롤을 내리면 클레이팟 프로젝트이 스캔하는 Dex 리스트, 이용할 수 있는 서비스들에 대한 설명, 그리고 클레이팟 팀과 컨택할 수 있는 링크가 있습니다.

2. 대시보드 페이지
  
    ![Enter App -> 대시보드 진입](https://user-images.githubusercontent.com/20445415/197382885-23733a10-c1a6-46f3-a0d8-49c03b4b3bc5.gif)
    > 대시보드에서는 페어 상품 목록과 Defi 프로젝트 목록을 볼 수 있습니다.


3. 수익률(APR)/유동성(TVL) 조회
    
    3-1 수익률(APR) 조회
    
      ![APR 조회](https://user-images.githubusercontent.com/20445415/197382956-d3135790-2818-47f2-a89d-547bd3d621a2.gif)


    > 페어상품을 수익률(APR)이 높은 순으로 보여줍니다.
    > 페어 상품의 로고와 심볼, 프로젝트의 로고와 프로젝트 명, TVL, APR 정보를 볼 수 있습니다.

    3-2 유동성(TVL) 규모 순 조회

    ![TVL 조회](https://user-images.githubusercontent.com/20445415/197383090-1e373294-cb61-4843-af87-a69cbec590df.gif)

  - 예치 버튼 클릭 -> 예치 상품 페이지로 이동
  ![예치 상품 페이지로 이동](https://user-images.githubusercontent.com/20445415/197382994-5330e628-fde5-4e2f-91da-aff5f8f779fc.gif)
    > 예치하고자 하는 페어 상품의 예치 버튼을 누르면 해당 링크로 새탭열기 합니다.

4. 지갑 연결
    
  ![지갑연결전](https://user-images.githubusercontent.com/20445415/197383436-1b2fa245-b721-48e4-bcb8-598e661f4435.gif)
  
  > 지갑을 연결하기 전, 내비게이션 바의 Swap, Staking, Wallet 을 클릭하면 “지갑을 연결하세요!” 와 같은 알림창이 뜨며 해당 기능으로의 접근을 제한합니다.

  ![카이카스지갑연결](https://user-images.githubusercontent.com/20445415/197383454-f9cd7580-a179-46f9-a39e-b0b37e1826eb.gif)
  > 내비게이션 바의 `지갑 아이콘` 을 클릭하여 카이카스 지갑을 연결합니다.
  > 지갑 연결이 완료된 후에 또 한 번 `지갑 아이콘` 을 클릭하면 *“Kaikas 연결완료”* 로 변경된 글자를 확인할 수 있습니다.

5. 스왑/스테이킹
  
  ![지갑자산확인](https://user-images.githubusercontent.com/20445415/197383496-761b37ba-d6f1-40c4-9ba4-506f7fbe806e.gif)

  ![지갑자산에서 스왑스테이킹이동](https://user-images.githubusercontent.com/20445415/197383519-3a85dea0-2bae-4d5c-9358-36d01ff28140.gif)

6. Docs

  ![Docs이동](https://user-images.githubusercontent.com/20445415/197383571-98086076-4e66-4b04-98e4-baeca51a8fca.gif)
 
  > 클레이팟 프로젝트에 대한 문서를 확인할 수 있습니다.

---


