import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { handlers1 } from '../__mocks__/handlers1';
import { handlers2 } from '../__mocks__/handlers2';
import { handlers3 } from '../__mocks__/handlers3';
import { handlers4 } from '../__mocks__/handlers4';
import { handlers5 } from '../__mocks__/handlers5';
import { handlers6 } from '../__mocks__/handlers6';
import { handlers7 } from '../__mocks__/handlers7';
import { handlers8 } from '../__mocks__/handlers8';
import { theme } from '../styles/theme';

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

if (typeof window !== 'undefined') {
  const { setupWorker } = require('msw/browser');

  const worker = setupWorker(
    ...handlers1,
    ...handlers2,
    ...handlers3,
    ...handlers4,
    ...handlers5,
    ...handlers6,
    ...handlers7,
    ...handlers8
  );
  worker.start({ onUnhandledRequest: 'bypass' });

  {
    // worker.start({ onUnhandledRequest: 'error' });
    // worker.start({ onUnhandledRequest: 'warn' });
  }
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: AppProps) {
  const router = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} key={router.asPath} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
