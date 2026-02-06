import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ padding: '40px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Welcome to Face Page</h1>
        <p style={{ fontSize: '18px', marginTop: '10px' }}>
          Real connections. Real friends. Real visibility.
        </p>
      </main>
    </div>
  );
  }
