# Soolung-project

![soolung-mockup](https://user-images.githubusercontent.com/82587107/209748921-f2cf47db-d11c-49ad-a74b-1100d69b3d47.jpg)



- 프로젝트 기간 : 2022.12.22 ~ 2022.12.28

🔗 [배포링크](https://soolung-project.vercel.app/)

🔗 [시연영상 유튜브](https://www.youtube.com/watch?v=ORML5FRdbYI)

<br/>

### 소개

- 술렁술렁은 애주가들의 커뮤니티입니다.
- 주종별로 추천 콘텐츠,소개글 (아티클)이 발행되며 유저들은 댓글로 **술에 대한 평점**을 남길 수 있습니다.
- 자유게시판에서 애주가들이 커뮤니케이션을 할 수 있습니다.

<br/>
<br/>

## 🙌 팀원 소개

| 이름   | 깃허브                                       |
| ------ | -------------------------------------------- |
| 이유정 | [@yujleee](https://github.com/yujleee)       |
| 김유안 | [@innasz](https://github.com/innasz)         |
| 박진산 | [@wallofwolf](https://github.com/wallofwolf) |
| 이상원 | [@vpvm96](https://github.com/vpvm96)         |
| 이태현 | [@Lth97](https://github.com/Lth97)           |

역할 분담 관련해서는 프로젝트 노션을 참고해주세요.

📑 [프로젝트 정리 노션](https://yjworking.notion.site/yjworking/5-67b64ace1a0d43139012a5a55f9842e4)

<br/>
<br/>

## 🖥 기술 스택

### Front-end

`React` `Redux-toolkit` `Redux-Thunk` `Axios` `Material UI` `Styled-components`

- Material UI (탭, 모달창 등 UI 작업의 편의를 위해 사용)
- Styled-components (MUI가 익숙치 않은 팀원들을 위해, MUI의 부족한 부분을 채우기 위해 사용

### Back-end

`JSON-Server`

### Deploy

`Glitch` `Vercel`

<br/>
<br/>

## 🗂 디렉토리 구조

```
📦public
 ┣ 📂favicon
 ┣ 📜index.html
 ┗ 📜robots.txt
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂article
 ┃ ┣ 📂board
 ┃ ┣ 📂button
 ┃ ┣ 📂error
 ┃ ┣ 📂main
 ┃ ┗ 📜GlobalStyles.jsx
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂routes
 ┣ 📂store
 ┃ ┣ 📂config
 ┃ ┗ 📂modules
 ┣ 📂utils
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┣ 📜setupTest.js
 ┣ 📜.env
 ┗ 📜.prettierrc
```

- assets: 로고 및 이미지 파일들
- components:
  - article: 아티클 페이지 관련 컴포넌트들
  - board: 게시판 페이지 관련 컴포넌트들
  - button : 공통적으로 사용하는 버튼 컴포넌트
  - error: 콘텐츠 없을 경우 등 에러 관련 컴포넌트들
  - main: 메인 배너 컴포넌트
  - GlobalStyles.jsx : css 초기화 컴포넌트
- hooks : 커스텀 훅
- pages: 각 페이지 컴포넌트들
- route: 라우터 설정 파일
- store:
  - config: 중앙 리듀서관련 파일  
  - modules: 각 슬라이스 관련 파일들 
- util: 기타 공용적으로 사용하는 라이브러리 관련 파일들 

<br/>
<br/>

## 🤝 규칙

- **커밋 컨벤션 (유다시티 커밋 컨벤션 참고!)**
  | 키워드 | 설명 |
  | --- | --- |
  | feat | 새로운 기능을 추가한 경우 |
  | fix | 버그를 고친 경우 |
  | refactor | 코드 리팩토링 |
  | docs | 문서를 수정한 경우 |
  | perf | 성능개선 |
  | chore | 그런트 작업 업데이트, 프로덕션 코드 변경 없음 |

- **코드 컨벤션**
  - prettierrc로 prettier 설정 통일
  - 변수/함수/핸들러함수 이름 통일
    - 변수는 명사형 / 복수데이터 변수는 명사복수형
      - ex) `todo`
      - ex) `todos`
  - 핸들러함수명은 handle을 앞에 붙이기
    - ex) `handleTodoFormSubmit`

<br/>
<br/>

## 👥 깃허브 협업 방식

Git Flow 방식을 이용했습니다.

- `main` : `dev` 브랜치로부터 최종병합되는 브랜치. (배포용)
- `dev` : 주된 작업들이 합쳐지는 브랜치
- `dev`에서 뻗어나온 개인 브랜치 : 각자의 작업이 진행되는 브랜치

<br/>
<br/>

## 💡 구현 기능

- main
  - 메인 슬라이더 (slick slicer 이용)
  - 아티클 술 종류 6개씩 노출 (탭으로 구현)
  - 게시글 최신순 5개 노출
- article
  - 모든 술 종류 노출 (탭으로 구현)
- articleDetail
  - 댓글로 평점 작성
  - 주류별 댓글 조회, 수정, 삭제
  - 평점 실시간 반영
- board
  - 모든 게시글 모음
  - 페이지네이션
  - 게시글 검색
  - 글쓰기
- boardDetail
  - 게시글 수정, 삭제
  - 게시글별 댓글 조회
  - 댓글 입력, 수정, 삭제
- mypage
  - 프로필 이미지, 닉네임, 비밀번호 변경
  - 유저가 작성한 리뷰글 목록 노출

<br/>
<br/>

## 🔥 트러블 슈팅

추후 작성 예정

<br/>
<br/>

## 📝 회고 및 관련 기록

🎉 [프로젝트 S.A](https://iodized-shade-f34.notion.site/SA-02196741e11640eeaa17aee74261bb84)

🚧 [프로젝트 진행 노션](https://iodized-shade-f34.notion.site/SA-02196741e11640eeaa17aee74261bb84)

📑 [프로젝트 진행 관련 기록](https://i-ten.tistory.com/251)

📓 [프로젝트를 마치며, KPT 회고](https://i-ten.tistory.com/258)
