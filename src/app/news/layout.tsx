export const metadata = {
  title: 'Tin tức • Nguyễn Minh Châu',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
