export default function StocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto max-w-7xl pt-2 px-2 flex-grow">
      <div className="justify-center">{children}</div>
    </section>
  );
}
