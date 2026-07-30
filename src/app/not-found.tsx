import Link from "next/link";
import { VscVscode } from "react-icons/vsc";

export default function NotFound() {
  return (
    <div className="flex size-full flex-col items-center">
      <VscVscode className="flex size-full flex-1 text-slate-950/50" />
      <div className="h-1/2 w-full bg-slate-950 pl-8 pt-8">
        <h2>404 - Not Found</h2>
        <p>Could not find requested resource</p>
        <Link className="hover:underline" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
