import LazyLoader from '../components/LazyLoader/LazyLoader';

export const metadata = {
  title: 'Thành tích • Nguyễn Minh Châu',
};

export default function AcomplishmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyLoader>{children}</LazyLoader>;
}
