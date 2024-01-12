import SideBar from "./SideBar.tsx";
import ContactForm from "./ContactForm.tsx";

export default function Contact({}: { path: string }) {
  return (
    <>
      <div class="flex flex-col lg:flex-row h-full w-full">
        <div className="text-white sm:hidden py-4 px-3 text-sm">
          _contact-me
        </div>
        <SideBar />
        <ContactForm />
      </div>
    </>
  );
}
