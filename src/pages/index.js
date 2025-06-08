import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      maxWidth: '640px',
      margin: '80px auto',
      padding: '0 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#222',
      lineHeight: 1.6,
      textAlign: 'center',
    }}>
      <h1 style={{ fontWeight: '700', fontSize: '3rem', marginBottom: '0.5rem', color: '#0070f3' }}>
        Welcome to SnapTask
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: '#555' }}>
        Your AI-powered task scheduler to organize your day smarter and faster.
      </p>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <Link href="/about" style={navLinkStyle}>About</Link>
        <Link href="/contact" style={navLinkStyle}>Contact</Link>
      </nav>
    </main>
  );
}

const navLinkStyle = {
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  backgroundColor: '#0070f3',
  color: 'white',
  fontWeight: '600',
  textDecoration: 'none',
  boxShadow: '0 4px 8px rgb(0 112 243 / 0.2)',
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
};

