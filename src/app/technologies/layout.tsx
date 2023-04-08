import LazyLoader from '../components/LazyLoader/LazyLoader';

export const metadata = {
  title: 'Công nghệ • Nguyễn Minh Châu',
};

export default function TechnologiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyLoader>{children}</LazyLoader>;
}
