'use client';

import { usePathname } from 'next/navigation';

import styles from '../styles/layout.module.scss';

export const Nav = () => {
  const pathname = usePathname();

  return <nav className={styles.nav}>Header</nav>;
};
