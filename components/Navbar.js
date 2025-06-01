export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <a href="/">Home</a> | <a href="/dashboard">Dashboard</a> | <a href="/admin">Admin</a> | <a href="/login">Login</a> | <a href="/register">Register</a>
    </nav>
  );
}
