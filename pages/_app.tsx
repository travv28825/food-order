import type { AppProps } from 'next/app';

import AuthProvider from '../context/Auth';
import UserProvider from '../context/User';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </AuthProvider>
  );
}

export default MyApp;
