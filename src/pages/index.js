import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome to SnapTask</h1>
      <Link href="/upload"><a>Go to Upload</a></Link>
      <br />
      <Link href="/dashboard"><a>Go to Dashboard</a></Link>
    </>
  );
}
