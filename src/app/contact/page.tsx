import AnimatedComponent from "@/styles/AnimatedComponent";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
export default function page() {
  return (
    <div className="flex size-full flex-col lg:flex-row">
      <AnimatedComponent variants="fadeRight">
        <div className="flex h-full flex-col gap-1 border-slate-800 lg:border-r">
          <ContactInfo />
        </div>
      </AnimatedComponent>
      <ContactForm />
    </div>
  );
}
