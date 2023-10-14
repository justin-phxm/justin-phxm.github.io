export default function ContactView({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString().slice(4);
  return (
    <>
      <div className="w-96">
        <span class="text-purple-400 leading-relaxed">const</span>
        <span class="text-slate-500 leading-relaxed"> </span>
        <span class="text-indigo-500 leading-relaxed">button</span>
        <span class="text-slate-500 leading-relaxed"> </span>
        <span class="text-purple-400 leading-relaxed">=</span>
        <span class="text-slate-500 leading-relaxed"> </span>
        <span class="text-indigo-500 leading-relaxed">document</span>
        <span class="text-slate-500 leading-relaxed">.</span>
        <span class="text-indigo-500 leading-relaxed">querySelector</span>
        <span class="text-slate-500 leading-relaxed">(</span>
        <span class="text-orange-300 leading-relaxed">'#sendBtn'</span>
        <span class="text-slate-500 leading-relaxed">
          );
          <br />
          <br />
        </span>
        <span class="text-purple-400 leading-relaxed">const</span>
        <span class="text-slate-500 leading-relaxed"> </span>
        <span class="text-indigo-500 leading-relaxed">message</span>
        <span class="text-slate-500 leading-relaxed"> </span>
        <span class="text-purple-400 leading-relaxed">=</span>
        <span class="text-slate-500 leading-relaxed">
          {" "}
          &#123;
          <br />{" "}
        </span>
        <span class="text-indigo-500 leading-relaxed">name</span>
        <span class="text-slate-500 leading-relaxed">: </span>
        <span class="text-orange-300 leading-relaxed">"{name}"</span>
        <span class="text-slate-500 leading-relaxed">
          ,
          <br />{" "}
        </span>
        <span class="text-indigo-500 leading-relaxed">email</span>
        <span class="text-slate-500 leading-relaxed">: </span>
        <span class="text-orange-300 leading-relaxed">"{email}"</span>
        <span class="text-slate-500 leading-relaxed">
          ,
          <br />{" "}
        </span>
        <span class="text-indigo-500 leading-relaxed">message</span>
        <span class="text-slate-500 leading-relaxed">: </span>
        <span class="text-orange-300 leading-relaxed">"{message}"</span>
        <span class="text-indigo-500 leading-relaxed">
          ,
          <br /> date:{" "}
        </span>
        <span class="text-orange-300 leading-relaxed">"{formattedDate}"</span>
        <span class="text-slate-500 leading-relaxed">
          <br />
          &#125;
          <br />
          <br />
        </span>
        <span class="text-indigo-500 leading-relaxed">button</span>
        <span class="text-slate-500 leading-relaxed">.</span>
        <span class="text-indigo-500 leading-relaxed">addEventListener</span>
        <span class="text-slate-500 leading-relaxed">(</span>
        <span class="text-orange-300 leading-relaxed">'click'</span>
        <span class="text-slate-500 leading-relaxed">, () </span>
        <span class="text-purple-400 leading-relaxed">=&gt;</span>
        <span class="text-slate-500 leading-relaxed">
          {" "}
          &#123;
          <br />{" "}
        </span>
        <span class="text-indigo-500 leading-relaxed">form</span>
        <span class="text-slate-500 leading-relaxed">.</span>
        <span class="text-indigo-500 leading-relaxed">send</span>
        <span class="text-slate-500 leading-relaxed">(</span>
        <span class="text-indigo-500 leading-relaxed">message</span>
        <span class="text-slate-500 leading-relaxed">
          );
          <br />
          &#125;)
        </span>
      </div>
    </>
  );
}
