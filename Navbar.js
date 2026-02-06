export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#020617', padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Face Page</div>
      <div>
        <button style={{ marginRight: '10px' }}>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
}
