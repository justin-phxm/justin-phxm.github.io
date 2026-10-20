"use client";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  } = useForm<Inputs>({
    defaultValues: { name: "", email: "", message: "" },
  });
  const submission = useMutation({
    mutationFn: submitContact,
    retry: false,
    onSuccess: () => reset({ name: "", email: "", message: "" }),
  });
  const { isPending, isSuccess, isError, mutate } = submission;
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
        className="flex min-w-0 flex-col items-center justify-center gap-2 p-4 text-slate-500 md:w-1/2"
      >
        <AnimatedComponent className="w-full">
          <FieldGroup className="gap-2">
            {(["name", "email", "message"] as const).map((name) => {
              const controlProps = {
                ...register(name, { required: "This field is required" }),
                id: `contact-${name}`,
                maxLength:
                  name === "message" ? 5000 : name === "email" ? 254 : 100,
                "aria-invalid": Boolean(errors[name]),
                "aria-describedby": errors[name]
                  ? `contact-${name}-error`
                  : undefined,
                placeholder: name,
                className:
                  "rounded-lg border-slate-500 bg-slate-950 p-2 text-base shadow dark:bg-slate-950 md:text-base",
              };

              return (
                <Field
                  key={name}
                  data-invalid={Boolean(errors[name])}
                  className="gap-2"
                >
                  <FieldLabel
                    htmlFor={`contact-${name}`}
                    className="text-base font-normal"
                  >
                    _{name}:
                  </FieldLabel>
                  {name === "message" ? (
                    <Textarea
                      {...controlProps}
                      rows={3}
                      className={`${controlProps.className} min-h-20 resize-y field-sizing-fixed`}
                    />
                  ) : (
                    <Input
                      {...controlProps}
                      type={name === "email" ? "email" : "text"}
                      autoComplete={name}
                      className={`${controlProps.className} h-10`}
                    />
                  )}
                  {errors[name] && (
                    <FieldError
                      id={`contact-${name}-error`}
                      errors={[errors[name]]}
                    />
                  )}
                </Field>
              );
            })}
          </FieldGroup>
          <Button
            type="submit"
            variant="secondary"
            disabled={isPending}
            className="mt-2 h-auto rounded-lg p-2 text-base font-normal text-slate-500 disabled:opacity-60"
          >
            {isPending ? "Submitting..." : "Submit"}
          </Button>
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
      <div className="flex min-w-0 items-center p-4 md:w-1/2 md:justify-center">
        <AnimatedComponent
          variants="fadeLeft"
          className="min-w-0 wrap-anywhere"
        >
          <ContactView name={name} email={email} message={message} />
        </AnimatedComponent>
      </div>
    </div>
  );
}
