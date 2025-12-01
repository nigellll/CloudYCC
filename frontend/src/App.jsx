import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import Report from './pages/Report';

function App() {
  return (
    <div>
      {/* 개발용 상단 네비게이션 (나중에 숨겨도 됨) */}
      <nav
        style={{
          padding: '10px 20px',
          borderBottom: '1px solid #e5e7eb',
          marginBottom: '8px',
          display: 'flex',
          gap: '12px',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/main">Main</Link>
        <Link to="/report">Report</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;
