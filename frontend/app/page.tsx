import type { Metadata } from 'next';
import { Movies } from './components/movies/Movies';

export default function IndexPage() {
  return <Movies />;
}

export const metadata: Metadata = {
  title: 'Redux Toolkit',
};
