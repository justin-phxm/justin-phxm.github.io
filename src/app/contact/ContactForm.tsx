"use client";
import { useMutation } from "@tanstack/react-query";
import {
  type FieldErrors,
  type UseFormRegister,
  useForm,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { type ContactInput, contactSchema } from "@/lib/contact";
import AnimatedComponent from "@/styles/AnimatedComponent";
import { submitContact } from "./actions";
import ContactView from "./ContactView";

type Inputs = ContactInput;
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm<Inputs>();
  const submission = useMutation({
    mutationFn: submitContact,
    retry: false,
    onSuccess: () => reset({ name: "", email: "", message: "" }),
  });
  const { isPending, isSuccess, isError, mutate } = submission
  const submitData = handleSubmit((data) => {
    if (isPending) return;
    submission.reset();
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof Inputs;
        setError(field, { message: issue.message });
      }
      return;
    }
    mutate(result.data);
  });
  const name = watch("name");
  const email = watch("email");
  const message = watch("message");

  return (
    <div className="flex flex-1 flex-col divide-x-2 divide-slate-800 border-slate-800 md:flex-row lg:border-t">
      <form
        onSubmit={submitData}
        className="flex flex-col items-center justify-center gap-2 p-4 text-slate-500 md:w-1/2"
      >
        <AnimatedComponent className="w-full">
          <Input register={register} name="name" errors={errors} />
          <Input register={register} name="email" errors={errors} />
          <Input
            register={register}
            name="message"
            errors={errors}
            className="py-8"
          />
          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg bg-slate-800 p-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
          <output aria-live="polite" className="mt-2 block text-sm">
            {isSuccess && (
              <span className="text-emerald-400">
                Thanks! Your message was saved successfully.
              </span>
            )}
            {isError && (
              <span className="text-red-400">
                Unable to send your message. Please try again later.
              </span>
            )}
          </output>
        </AnimatedComponent>
      </form>
      <div className="flex items-center p-4 md:w-1/2 md:justify-center">
        <AnimatedComponent variants="fadeLeft">
          <ContactView name={name} email={email} message={message} />
        </AnimatedComponent>
      </div>
    </div>
  );
}

const Input = ({
  register,
  name,
  placeholder,
  errors,
  className,
}: {
  register: UseFormRegister<Inputs>;
  name: keyof Inputs;
  placeholder?: string;
  errors?: FieldErrors<Inputs>;
  className?: string;
}) => (
  <div className="flex w-full flex-col gap-2">
    <label htmlFor={`contact-${name}`}>_{name}:</label>
    <input
      {...register(name, { required: "This field is required" })}
      id={`contact-${name}`}
      type={name === "email" ? "email" : "text"}
      maxLength={name === "message" ? 5000 : name === "email" ? 254 : 100}
      aria-invalid={Boolean(errors?.[name])}
      aria-describedby={errors?.[name] ? `contact-${name}-error` : undefined}
      placeholder={placeholder ?? name}
      className={twMerge(
        "h-10 w-full min-w-72 rounded-lg border border-slate-500 bg-slate-950 p-2 shadow",
        className,
      )}
    />
    {errors?.[name] && (
      <span id={`contact-${name}-error`}>{errors[name].message}</span>
    )}
  </div>
);
