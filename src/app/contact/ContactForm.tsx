"use client";
import { useState, useTransition } from "react";
import AnimatedComponent from "@/styles/AnimatedComponent";
import {
  type FieldErrors,
  type UseFormRegister,
  useForm,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";
import ContactView from "./ContactView";
import { saveContactSubmission } from "./actions";
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
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [isPending, startTransition] = useTransition();
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const submitData = handleSubmit((data) => {
    setSubmitMessage(null);
    setSubmitError(null);

    startTransition(async () => {
      try {
        await saveContactSubmission(data);
        setSubmitMessage("Thanks! Your message was saved successfully.");
        reset();
      } catch (error) {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "Unable to save your message right now. Please try again.",
        );
      }
    });
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
          <Input register={register} name={"name"} required errors={errors} />
          <Input register={register} name={"email"} required errors={errors} />
          <Input
            register={register}
            name={"message"}
            required
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
          {submitMessage && (
            <p className="text-sm text-emerald-400">{submitMessage}</p>
          )}
          {submitError && <p className="text-sm text-red-400">{submitError}</p>}
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
  <div className="flex w-full flex-col gap-2">
    <p>_{name}:</p>
    <input
      {...register(name, { required })}
      placeholder={name ?? placeholder}
      className={twMerge(
        "h-10 w-full min-w-72 rounded-lg border border-slate-500 bg-slate-950 p-2 shadow",
        className,
      )}
    />
    {errors && errors[name] && <span>This field is required</span>}
  </div>
);
