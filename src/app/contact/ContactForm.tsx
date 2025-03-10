"use client";
import {
  useForm,
  type UseFormRegister,
  type FieldErrors,
} from "react-hook-form";
import ContactView from "./ContactView";
import { twMerge } from "tailwind-merge";
type Inputs = {
  name: string;
  email: string;
  message: string;
};
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const submitData = handleSubmit((data) => console.log(data));
  const name = watch("name");
  const email = watch("email");
  const message = watch("message");

  return (
    <div className="flex flex-1 flex-row divide-x-2 divide-slate-800 border-slate-800 lg:border-t">
      <form
        onSubmit={submitData}
        className="flex w-1/2 flex-col items-center justify-center gap-2 p-4 text-slate-500"
      >
        <Input register={register} name={"name"} />
        <Input register={register} name={"email"} required errors={errors} />
        <Input register={register} name={"message"} className="h-36" />
        <button type="submit" className="rounded-lg bg-slate-800 p-2">
          Submit
        </button>
      </form>
      <div className="hidden w-1/2 items-center justify-center p-4 lg:flex">
        <ContactView name={name} email={email} message={message} />
      </div>
    </div>
  );
}

const Input = ({
  register,
  name,
  placeholder,
  required,
  errors,
  className,
}: {
  register: UseFormRegister<Inputs>;
  name: keyof Inputs;
  placeholder?: string;
  required?: boolean;
  errors?: FieldErrors<Inputs>;
  className?: string;
}) => (
  <div className="flex flex-col gap-2">
    <p className="">_{name}:</p>
    <input
      {...register(name, { required })}
      placeholder={name ?? placeholder}
      className={twMerge(
        "h-10 w-full rounded-lg border border-slate-500 bg-slate-950 p-2 shadow sm:w-72",
        className,
      )}
    />
    {errors && errors[name] && <span>This field is required</span>}
  </div>
);
