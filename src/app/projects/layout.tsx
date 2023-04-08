import LazyLoader from '../components/LazyLoader/LazyLoader';

export const metadata = {
  title: 'Dự án • Nguyễn Minh Châu',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyLoader>{children}</LazyLoader>;
}
