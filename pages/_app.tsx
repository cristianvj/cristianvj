import { Layout } from '../components';
import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
