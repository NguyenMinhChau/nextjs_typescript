import LazyLoader from '../components/LazyLoader/LazyLoader';

export const metadata = {
  title: 'Kỹ năng • Nguyễn Minh Châu',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyLoader>{children}</LazyLoader>;
}
