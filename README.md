## [Team Project] 

### 🔎 프로젝트 명 '클레이팟 (KlayPod)'

![](https://velog.velcdn.com/images/-__-/post/10d95bf0-fa27-4e8f-a2d8-288b26076bab/image.png)

'클레이팟 (KlayPod)' 은
클레이튼 체인 위에서 구현된 디파이를
APY / TVL 순으로 찾아주는(Search) 프로젝트입니다
페어예치 / 단일예치 (+ 스테이킹)

**'클레이튼 체인'** 만을 위한 DeFi 스캐너(Scanner) 입니다.
(+ 추후에 다른 체인도 업데이트 가능)

- APR (Annual Percentage Rate : 연간 이자율) - 단리
- APY (Annual Percentage Yield : 연간 수익률) - 복리
- TVL (Total Value Locked : 총 예치금)

---

### 프로젝트 개요

'클레이팟 (KlayPod)'은 클레이튼 체인 디파이 섹터에서 가장 높은 수익 목표로 서비스를 제공하는 프로젝트입니다.

쇼핑을 할 때 '네이버쇼핑', '다나와' 등 인터넷 가격 정보 사이트를 즐겨 이용합니다. 원하는 물건을 가장 유리한 조건으로 구매하기 위해서입니다. 쇼핑의 효율을 극대화하려는 이런 경향은 소비자들에게서 공통적으로 나타나는 습성입니다.

여러 코인의 가격이 시시각각 변하는 디파이 세계에서도 가격비교 정보는 매우 유용 할 것입니다. **'클레이팟'** 은 이런 투자자들을 위해 있는 일종의 디파이 가격비교 서비스 스캐너(Scanner) 입니다.

**'클레이팟'** 은 서치 기능 외에도 부가 기능을 제공합니다.

- '클레이팟' 코인 보유자는 '클레이팟'의 방향성을 투표하는 거버넌스에 참여할 수 있습니다.
- 사용자는 '클레이팟' 코인을 스테이킹하여 수익 창출을 할 수 있습니다.

---

### 클레이튼 DeFi 생태계

![](https://velog.velcdn.com/images/-__-/post/f07ec1b1-64d0-4837-99b9-5fba94774f23/image.png)

클레이튼 생태계는 지속적인 성장 중 입니다.
단순히 디지털 자산을 거래소에 보관하는 것을 떠나서 적극적으로 다양한 디파이 서비스를 사용하는 클레이튼 사용자들이 빠르게 늘어나고 있습니다.

**'클레이팟'** 프로젝트는 클레이튼 생태계 디파이 서비스를 사용하려는 사용자들에게 좀 더 간편한 서비스를 제공하기 위함입니다.

---

### 클레이튼 DeFi TVL

![](https://velog.velcdn.com/images/-__-/post/28384126-c5f3-463b-92f2-1f15bab9d031/image.png)

클레이튼 생태계의 전반적인 TVL을 이끌고 있는 클레이스왑(Klayswap)은 클레이튼 생태계 최대 규모의 탈중앙화 거래소(DEX)입니다

하지만 클레이스왑 말고도 수익률이 좋은 DEX / 디파이 서비스들이 있습니다
**'클레이팟'** 은 그걸 대신 찾아드리는 서비스입니다.

---

### 🧬 서비스 아키텍처
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/737f2ae1-a8da-45b4-aa7a-2c777706b1d5/KlayPod_Architecture.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T112540Z&X-Amz-Expires=86400&X-Amz-Signature=1f43afeb3258189ad36f02b65c03633b845dbf257bef07b4a300ef567ccbcec3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KlayPod_Architecture.PNG.png%22&x-id=GetObject)

---

### 🎥 시연 영상!
1. 메인 페이지
![메인 화면 진입 및 스크롤](https://user-images.githubusercontent.com/20445415/197382762-71a4988b-ab3f-476d-935d-2a94ead3532d.gif)
[klaypod.com](http://klaypod.com)
으로 들어가서 제일 처음 보이는 메인 페이지 입니다.
`Enter App` 버튼을 누르면 대시보드와 메인 기능을 이용할 수 있고, `Docs` 버튼을 누르면 클레이팟에 대한 문서가 작성된 gitbook 페이지로 이동합니다.
스크롤을 내리면 클레이팟 프로젝트이 스캔하는 Dex 리스트, 이용할 수 있는 서비스들에 대한 설명, 그리고 클레이팟 팀과 컨택할 수 있는 링크가 있습니다.

2. 대시보드 페이지
![Enter App -> 대시보드 진입](https://user-images.githubusercontent.com/20445415/197382885-23733a10-c1a6-46f3-a0d8-49c03b4b3bc5.gif)
대시보드에서는 페어 상품 목록과 Defi 프로젝트 목록을 볼 수 있습니다.


3. 유동성 규모 순 조회
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7b20fc8a-0448-47f1-a46a-cb0d89978994/09-TVL%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T112420Z&X-Amz-Expires=86400&X-Amz-Signature=c29ef291abeb6b34c76382b292b10341b8505f56876a38eb9fca94d3225aed21&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2209-TVL%25EB%25AC%25B4%25ED%2595%259C%25EC%258A%25A4%25ED%2581%25AC%25EB%25A1%25A4.gif%22&x-id=GetObject)

4. 프로젝트 TVL 순 조회
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ab0d7531-ab9b-4cec-88fb-403024a679cf/05-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%A1%B0%ED%9A%8C.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T112431Z&X-Amz-Expires=86400&X-Amz-Signature=242fcc36894bbca18e1ededb76f7e8c8c74bb31c6af8cc96e11ee7f2600f1e4f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2205-%25ED%2594%2584%25EB%25A1%259C%25EC%25A0%259D%25ED%258A%25B8%25EC%25A1%25B0%25ED%259A%258C.gif%22&x-id=GetObject)

---

### 참고할 만한 사이트 📃

- https://defiprime.com/#defi_projects

- https://www.klaylabs.net/

- https://swapscanner.io/ko

- https://defillama.com/

- https://kr.beincrypto.com/learn-kr/89-2/

- https://1inch.io/ko/

- https://github.com/1inch

- https://debank.com/protocol

- https://claimswap.org/

- https://brunch.co.kr/@sylviasolution/109

- https://xangle.io/research/61d8021cd7cf330287545676

- https://www.coindeskkorea.com/news/articleView.html?idxno=73680

- https://soccerspen.com/ko/what-is-dex-aggregator/

- https://www.coinzigzag.com/ko/1%EC%9D%B8%EC%B9%98-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC%EB%9E%80-1inch-%EC%BD%94%EC%9D%B8%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B5%AC%EB%A7%A4%ED%95%98%EB%82%98%EC%9A%94

---

<img width="545" alt="스크린샷 2022-07-27 오전 10 25 42" src="https://user-images.githubusercontent.com/20445415/181140319-690dc2fb-5da4-4f76-ba99-38732798b219.png">


