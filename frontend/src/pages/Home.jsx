// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    // 나중에 선택한 국가 같이 넘기면 됨
    navigate('/main');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '48px 80px' }}>
      <header style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>
          TripTailor
        </h1>
        <p style={{ fontSize: '18px', color: '#555' }}>
          여행을 재단하듯, 나만의 맞춤 일정을 만들어 보세요.
        </p>
      </header>

      <section>
        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>
          여행할 국가를 선택하세요
        </h2>

        {/* 나중에 국기 카드 그리드로 바꾸면 됨 */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
          <button
            style={{ padding: '16px 24px', borderRadius: '8px', border: '1px solid #ddd' }}
            onClick={handleStart}
          >
            영국 (예시)
          </button>
          <button
            style={{ padding: '16px 24px', borderRadius: '8px', border: '1px solid #ddd' }}
            onClick={handleStart}
          >
            프랑스 (예시)
          </button>
        </div>

        <button
          style={{
            marginTop: '32px',
            padding: '14px 28px',
            borderRadius: '999px',
            border: 'none',
            background: '#111827',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
          }}
          onClick={handleStart}
        >
          시작하기
        </button>
      </section>
    </div>
  );
}

export default Home;
