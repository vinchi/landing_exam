# HeartLink - 데이팅앱 랜딩페이지

![HeartLink Logo](https://img.shields.io/badge/HeartLink-Dating%20App%20Landing-blue?style=for-the-badge&logo=heart)

당신의 진정한 사랑을 찾아드리는 최고의 데이팅앱 **HeartLink**의 랜딩페이지입니다.

## 🚀 주요 특징

- **반응형 디자인**: 모든 디바이스에서 완벽하게 작동
- **모던 UI/UX**: 최신 디자인 트렌드 적용
- **성능 최적화**: 빠른 로딩 속도와 부드러운 애니메이션
- **접근성**: 모든 사용자가 편리하게 이용 가능
- **SEO 최적화**: 검색 엔진 최적화 적용

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

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: `#ff6b9d` (핑크)
- **Secondary**: `#6c63ff` (보라)
- **Accent**: `#ffd93d` (노랑)
- **Text Primary**: `#2c3e50` (다크 그레이)
- **Background**: `#f8f9fa` (라이트 그레이)

### 타이포그래피
- **Font Family**: Noto Sans KR
- **Font Weights**: 300, 400, 500, 700
- **Responsive Sizes**: 0.875rem ~ 3rem

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

## 📱 반응형 브레이크포인트

- **Mobile**: 360px ~ 480px
- **Tablet**: 481px ~ 768px
- **Desktop**: 769px ~ 1200px
- **Large Desktop**: 1201px+

## 🎯 주요 기능

### 1. 네비게이션
- 고정 헤더 (스크롤 시 스타일 변경)
- 반응형 햄버거 메뉴
- 스무스 스크롤 네비게이션

### 2. 히어로 섹션
- 임팩트 있는 헤드라인
- 3D 폰 모킹업 (마우스 인터랙션)
- 통계 카운터 애니메이션
- CTA 버튼

### 3. 특징 섹션
- 6가지 주요 특징 소개
- 호버 효과 및 애니메이션
- 아이콘 기반 시각적 표현

### 4. 이용방법
- 4단계 프로세스 설명
- 회전하는 단계 번호 애니메이션
- 직관적인 아이콘 사용

### 5. 후기 섹션
- 실제 사용자 후기
- 카드 형태 레이아웃
- 호버 효과

### 6. 가입 폼
- 유효성 검사
- 실시간 피드백
- 성공/에러 메시지

## 🔧 커스터마이징

### 색상 변경
`src/public/css/style.css`의 CSS 변수를 수정하세요:

```css
:root {
  --primary-color: #ff6b9d;
  --secondary-color: #6c63ff;
  --accent-color: #ffd93d;
  /* ... */
}
```

### 콘텐츠 수정
`src/public/index.html`에서 텍스트와 이미지를 수정하세요.

### 기능 추가
`src/public/js/main.js`에서 JavaScript 기능을 확장하세요.

## 📊 성능 최적화

- **이미지 최적화**: WebP 포맷 사용 권장
- **CSS 최적화**: CSS 변수 및 효율적인 선택자 사용
- **JavaScript 최적화**: 이벤트 위임 및 디바운싱 적용
- **로딩 최적화**: 지연 로딩 및 압축 적용

## 🔒 보안

- **Helmet.js**: 보안 헤더 설정
- **CORS**: 크로스 오리진 요청 제어
- **입력 검증**: 클라이언트 및 서버 사이드 검증
- **XSS 방지**: 사용자 입력 이스케이프

## 🌐 배포

### Heroku 배포
```bash
# Heroku CLI 설치 후
heroku create your-app-name
git push heroku main
```

### Vercel 배포
```bash
# Vercel CLI 설치 후
vercel
```

### Docker 배포
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

---

**HeartLink** - 당신의 진정한 사랑을 찾아드립니다 💕 