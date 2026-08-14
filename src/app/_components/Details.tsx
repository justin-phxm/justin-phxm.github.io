export default function Details({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <details className={className} open>
      <summary
        className={
          "cursor-pointer select-none whitespace-nowrap bg-slate-800 px-2 outline-none focus:underline lg:bg-inherit"
        }
      >
        {title}
      </summary>
      <ul className="flex flex-col text-slate-500">{children}</ul>
    </details>
  );
}
