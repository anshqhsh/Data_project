## LIST_TABLE - FE

## 사용 스팩

- code base (optional)
  - React.JS
  - Next.JS
  - webpack
  - bootstrap
  - dotenv-webpack
  - react-bootstrap
  - sass

## 목표

데이터를 통해 과제를 구현한다.

## .env 설정법

REACT_APP_BASE_URL = { 제공 받은 API 주소}

## 프로젝트 실행

- yarn add next
- yarn start

## 구현 목표

1. 테이블 Component

- 정보를 받아 테이블을 생성
- 페이징 기능
- 특정 컬럼 정렬 기능 : 미구현
  받아온 리스트 값에 해당 컬럼값 정렬을 통해 구현 가능

2. 필터 기능

- 성별, 인종, 민족
- 나이, 사망 여부 : 미구현
  구현목표 :
  나이는 드롭다운 메뉴를 구현 하여 나이대 별로 필터링을 구현
  사망 여부는 기존의 드롭다운 메뉴와 동일한 방법으로 가능

3. 테이블 목록의 환자 클릭시 상세정보 출력 : 미구현
   테이블 목록에 onClick 기능을 추가 하여 해당 목록의 UserId를 받고 state를 변경 fetch API를 통해 데이터를 불러 와 기존의 테이블 태그를 Detail Component를 생성 후 값을 바꾸어 데이터를 넣고
   setDetailView 를 선언하여 테이블의 바깥쪽을 클릭할 시 값을 false로 바꿔 DetailCompoent를 기존의 태그로 변경 하는 기능을 추가 다른 목록을 선택하면 받아 온 ID를 state값을 변경 하는 방식으로 구현

4. PieChart : 미구현
   bootstrap 라이브러리를 이용하여 파이차트를 구현
   성별 환자수, 인종별 환자수, 민족별환자수, 성별+인종별 환자수, 성별+민족별 환자수 비율로 계산하여 보여 주는 방식으로 구현

5. 필터에 따라 pieChart 그래프 변화 : 미구현
   구현한 필터에 필터가 되어 있는 list가 있어 그대로 구현

   문제점 - 현재 필터는 단일 필터만 적용이 되어 있어 다중 필터 기능을 추가 해야 할 것으로 보임

## 실행 가이드

1. 폴더 최상단에 .env파일을 생성후 API 주소를 등록
   REACT_APP_BASE_URL = { 제공 받은 API 주소}
2. yarn add next로 Next 모듈 설치
3. yarn start
4. 좌측 상단에 테이블 페이징 기능을 통해 10, 20, 30, 40, 50, 100 개로 테이블을 목록을 볼 수 있습니다.
   하단의 페이지 숫자도 함께 변경 됨
5. 상단탭의 드롭다운 형태를 통해 민족, 성별, 인종의 필터링 기능 - 한가지의 필터만 작동 됨
