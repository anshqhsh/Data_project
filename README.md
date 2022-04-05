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

- yarn start

## 구현 목표

1. 테이블 Component

- 정보를 받아 테이블을 생성
- 페이징 기능
- 특정 컬럼 정렬 기능 : 미구현

2. 필터 기능

- 성별, 인종, 민족
- 나이, 사망 여부 : 미구현

3. 테이블 목록의 환자 클릭시 상세정보 출력 : 미구현

4. PieChart : 미구현

5. 필터에 따라 pieChart 그래프 변화 : 미구현

## 실행 가이드

1. 폴더 최상단에 .env파일을 생성후 API 주소를 등록
   REACT_APP_BASE_URL = { 제공 받은 API 주소}
2. yarn init 을 통해 모듈 설치
3. yarn start
4. 좌측 상단에 테이블 페이징 기능을 통해 10, 20, 30, 40, 50, 100 개로 테이블을 목록을 볼 수 있습니다.
   하단의 페이지 숫자도 함께 변경 됨
5. 상단탭의 드롭다운 형태를 통해 민족, 성별, 인종의 필터링 기능 - 한가지의 필터만 작동 됨
