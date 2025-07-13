# 여놀 (여기서 놀자) - 우리 동네 실시간 모임 랜딩페이지

![여놀 Logo](https://img.shields.io/badge/여놀-우리%20동네%20실시간%20모임-blue?style=for-the-badge&logo=meetup)

오늘 저녁, 심심하다면? **여놀**에서 우리 동네 새로운 친구들을 만나보세요!

## 🚀 주요 특징

- **실시간 위치 기반**: 내 주변에서 열리는 모임을 바로 확인하고 참여할 수 있습니다.
- **간편한 번개 모임**: 누구나 1분 만에 쉽게 번개 모임을 만들 수 있습니다.
- **안전한 채팅**: 모임 멤버들끼리만 소통하는 안전한 채팅 기능을 제공합니다.
- **모던 UI/UX**: 최신 디자인 트렌드를 적용하여 사용하기 편리하고 아름답습니다.
- **반응형 디자인**: 모든 디바이스에서 완벽하게 작동합니다.

## 🛠 기술 스택

### Backend
- **Node.js** - 서버 런타임
- **Express.js** - 웹 프레임워크
- **Helmet** - 보안 미들웨어
- **CORS** - 크로스 오리진 리소스 공유
- **Compression** - 응답 압축

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - 모던 스타일링 (CSS 변수, Grid, Flexbox)
- **JavaScript (ES6+)** - 인터랙티브 기능
- **Font Awesome** - 아이콘 라이브러리
- **Google Fonts** - 웹 폰트

## 📁 프로젝트 구조

```
landing_exam/
├── package.json              # 프로젝트 설정 및 의존성
├── README.md                 # 프로젝트 문서
└── src/
    ├── server.js             # Express 서버 메인 파일
    └── public/               # 정적 파일들
        ├── index.html        # 메인 랜딩페이지
        ├── 404.html          # 404 에러 페이지
        ├── css/              # 스타일시트
        │   ├── style.css     # 메인 CSS
        │   └── responsive.css # 반응형 CSS
        └── js/               # JavaScript 파일
            └── main.js       # 메인 JavaScript
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
# 개발 모드 (nodemon 사용)
npm run dev

# 프로덕션 모드
npm start
```

### 3. 브라우저에서 확인

```
http://localhost:3000
```

## 🎯 주요 기능

### 1. 내 주변 모임 탐색
- 실시간 지도를 통해 주변에서 열리는 다양한 번개 모임을 한눈에 확인합니다.

### 2. 간편한 모임 개설
- 단 몇 번의 터치만으로 원하는 시간과 장소에 새로운 모임을 만들 수 있습니다.

### 3. 관심사 기반 추천
- 사용자의 관심사에 맞는 모임을 추천받아 더 즐겁게 참여할 수 있습니다.

### 4. 안전한 실시간 채팅
- 모임에 참여한 멤버들과만 소통할 수 있는 채팅방에서 약속을 조율하고 미리 친해질 수 있습니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.