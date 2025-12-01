// src/pages/Main.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LandmarkPanel from '../components/LandmarkPanel';

// 화면설계서 기준: 지도 + 하단 리스트 + 우측 상세패널 느낌으로 뼈대만 만든 상태
const dummyLandmarks = [
  { id: 1, name: '빅벤', description: '런던의 상징적인 시계탑.', lat: 51.5007, lng: -0.1246 },
  { id: 2, name: '타워 브리지', description: '템즈강을 가로지르는 대표적인 다리.', lat: 51.5055, lng: -0.0754 },
];

function Main() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleGoReport = () => {
    navigate('/report');
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* 왼쪽: 지도 + 랜드마크 리스트 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '16px 20px', borderBottom: '1px solid #e5e7eb' }}>
          <h1 style={{ fontSize: '20px', fontWeight: '600' }}>TripTailor – 영국</h1>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            지도를 탐색하며 방문할 랜드마크를 선택하세요.
          </p>
        </header>

        {/* 지도 영역(현재는 더미 박스) */}
        <div
          style={{
            flex: 1,
            margin: '16px 20px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            background: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#6b7280',
          }}
        >
          여기 지도(Map API) 들어갈 예정
        </div>

        {/* 하단: 랜드마크 리스트 + 리포트 이동 버튼 */}
        <footer
          style={{
            padding: '12px 20px 16px',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <ul style={{ display: 'flex', gap: '8px', margin: 0, padding: 0, listStyle: 'none' }}>
            {dummyLandmarks.map((lm) => (
              <li
                key={lm.id}
                onClick={() => setSelected(lm)}
                style={{
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                {lm.name}
              </li>
            ))}
          </ul>

          <button
            onClick={handleGoReport}
            style={{
              padding: '10px 20px',
              borderRadius: '999px',
              border: 'none',
              background: '#111827',
              color: 'white',
              fontSize: '14px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            여행 리포트 보기
          </button>
        </footer>
      </div>

      {/* 오른쪽: 상세 패널 */}
      <LandmarkPanel selected={selected} />
    </div>
  );
}

export default Main;
