// pages/_app.js
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { AppProvider } from '../context/AppContext';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </AppProvider>
  );
}

