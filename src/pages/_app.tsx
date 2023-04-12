import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';

import GlobalStyle from './styles/global';
import Header from '../components/Header';


export default function App({ Component, pageProps }: AppProps) {
  return (
          <ThemeProvider theme={light}>
              <GlobalStyle />
              <Header />
              <Component {...pageProps} />
          </ThemeProvider>
        )
}
