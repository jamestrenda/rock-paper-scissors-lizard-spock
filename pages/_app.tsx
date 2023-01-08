import type { AppProps } from 'next/app';
import { Layout } from '@/components/layout.component';
import { GameProvider } from '@/components/gameProvider.component';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GameProvider>
  );
}
