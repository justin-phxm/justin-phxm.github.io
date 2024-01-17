import SideBar from "./SideBar.tsx";
import ContactForm from "./ContactForm.tsx";

export default function Contact({}: { path: string }) {
  return (
    <>
      <div class="flex flex-col lg:flex-row h-full w-full">
        <SideBar />
        <ContactForm />
      </div>
    </>
  );
}
