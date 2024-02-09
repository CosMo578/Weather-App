export function Article({ children }) {
  return (
    <article className="grid w-full gap-8 px-6 py-8 md:grid-cols-3">
      {children}
    </article>
  );
}
  