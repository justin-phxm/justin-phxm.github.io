import { useForm, SubmitHandler } from "react-hook-form";
import { GrFormClose } from "react-icons/gr";
import { useEffect, useState } from "preact/hooks";
import hljs from "highlight.js";
import ContactView from "./ContactView";
type Inputs = {
  example: string;
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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const name = watch("example");
  const email = watch("email");
  const message = watch("message");
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="p-2 w-52 flex flex-row justify-between items-center lg:border-r border-slate-800 ">
          <div className="text-slate-500 whitespace-nowrap hidden lg:block">
            contacts
          </div>
          <GrFormClose class="hidden lg:block cursor-pointer hover:bg-gray-700" />
        </div>
        <div class="lg:border-t flex flex-row border-slate-800">
          <div className="w-1/2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              class="flex-col p-4 text-slate-500"
            >
              <div className="py-2">
                <div className="pb-2">_name:</div>
                <input
                  {...register("example")}
                  placeholder="test"
                  class=" bg-slate-950 rounded-lg shadow border border-slate-500 w-full sm:w-72 h-10"
                />
              </div>
              <div className="py-2">
                <div className="pb-2">_email:</div>
                <input
                  class=" bg-slate-950 rounded-lg shadow border border-slate-500 w-full sm:w-72 h-10"
                  placeholder="required..."
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className=" py-2">
                <div className="pb-2">_message:</div>
                <input
                  label="_message:"
                  placeholder="myMessage placeholder"
                  {...register("message")}
                  class=" bg-slate-950 rounded-lg shadow border border-slate-500 w-full sm:w-72 h-36"
                />
              </div>

              <div className="py-2">
                <button class="bg-slate-800 rounded-lg justify-center items-center gap-2.5 inline-flex">
                  <input
                    class="text-white text-sm font-['Fira Code'] cursor-pointer"
                    defaultValue="submit-message"
                    type="submit"
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="hidden p-4 w-1/2 lg:flex lg:flex-col border-l border-slate-800 items-center content-center">
            <ContactView name={name} email={email} message={message} />
          </div>
        </div>
      </div>
    </>
  );
}
