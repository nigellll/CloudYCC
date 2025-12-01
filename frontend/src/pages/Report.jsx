// src/pages/Report.jsx

function Report() {
  return (
    <div style={{ minHeight: '100vh', padding: '32px 80px' }}>
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
          여행 리포트
        </h1>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          선택한 랜드마크와 여행 정보를 한눈에 확인할 수 있어요.
        </p>
      </header>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>여행 기본 정보</h2>
        <div
          style={{
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            padding: '16px 20px',
            maxWidth: '480px',
          }}
        >
          <p>여행 국가: 영국 (예시)</p>
          <p>여행 기간: 5일</p>
          <p>동행 인원: 2명</p>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>방문 예정 랜드마크</h2>
        <ol
          style={{
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            padding: '16px 20px',
            maxWidth: '480px',
          }}
        >
          <li>빅벤</li>
          <li>타워 브리지</li>
        </ol>
      </section>
    </div>
  );
}

export default Report;
