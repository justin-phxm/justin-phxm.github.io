import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
export default function page() {
  return (
    <div className="flex size-full flex-col lg:flex-row">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
