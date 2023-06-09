import LazyLoader from '../components/LazyLoader/LazyLoader';

export const metadata = {
  title: 'Mốc thời gian • Nguyễn Minh Châu',
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyLoader>{children}</LazyLoader>;
}
