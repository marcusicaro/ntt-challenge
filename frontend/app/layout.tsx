import type { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import { Nav } from './components/Nav';

import './styles/globals.scss';
import styles from './styles/layout.module.scss';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body>
          <section className={styles.container}>
            <Nav />

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>Footer</footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
