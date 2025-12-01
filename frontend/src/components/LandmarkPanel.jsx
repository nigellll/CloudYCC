// src/components/LandmarkPanel.jsx

function LandmarkPanel({ selected }) {
  if (!selected) {
    return (
      <aside
        style={{
          width: '320px',
          borderLeft: '1px solid #e5e7eb',
          padding: '16px',
          background: '#fafafa',
        }}
      >
        <p>지도의 마커를 클릭하면 랜드마크 상세 정보가 여기에 표시됩니다.</p>
      </aside>
    );
  }

  return (
    <aside
      style={{
        width: '320px',
        borderLeft: '1px solid #e5e7eb',
        padding: '16px',
        background: '#fafafa',
      }}
    >
      <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
        {selected.name}
      </h2>
      <p style={{ marginBottom: '12px', color: '#4b5563' }}>{selected.description}</p>

      <div style={{ fontSize: '14px', color: '#6b7280' }}>
        <p>위도: {selected.lat}</p>
        <p>경도: {selected.lng}</p>
      </div>

      <button
        style={{
          marginTop: '16px',
          width: '100%',
          padding: '10px 0',
          borderRadius: '8px',
          border: 'none',
          background: '#111827',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        일정에 추가
      </button>
    </aside>
  );
}

export default LandmarkPanel;
