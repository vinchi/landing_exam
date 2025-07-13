const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

// 서버 설정
const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(helmet()); // 보안 헤더 설정
app.use(cors()); // CORS 설정
app.use(compression()); // 응답 압축
app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: true })); // URL 인코딩 파싱
app.use(express.static(path.join(__dirname, 'public'))); // 정적 파일 서빙

// 라우트 설정
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API 라우트 (향후 확장용)
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: '데이팅앱 서버가 정상 작동 중입니다.' });
});

// 404 에러 핸들링
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// 전역 에러 핸들링
app.use((err, req, res, next) => {
  console.error('서버 에러:', err.stack);
  res.status(500).json({ 
    error: '서버 내부 오류가 발생했습니다.',
    message: process.env.NODE_ENV === 'development' ? err.message : '잠시 후 다시 시도해주세요.'
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 여놀 서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`📱 http://localhost:${PORT} 에서 확인하세요.`);
});

module.exports = app; 