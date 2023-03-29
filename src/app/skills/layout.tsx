export const metadata = {
  title: 'Kỹ năng • Nguyễn Minh Châu',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
