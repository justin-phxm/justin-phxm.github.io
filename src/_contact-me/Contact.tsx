import SideBar from "../SideBar.tsx";

export default function Contact({}: { path: string }) {
  return (
    <>
      <div className="">
        <div className="text-white sm:hidden py-4 px-3 text-sm">
          _contact-me
        </div>
        <SideBar />
      </div>
    </>
  );
}
