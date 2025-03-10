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
    <div className="w-96">
      <span className="leading-relaxed text-purple-400">const</span>
      <span className="leading-relaxed text-slate-500"> </span>
      <span className="leading-relaxed text-indigo-500">button</span>
      <span className="leading-relaxed text-slate-500"> </span>
      <span className="leading-relaxed text-purple-400">=</span>
      <span className="leading-relaxed text-slate-500"> </span>
      <span className="leading-relaxed text-indigo-500">document</span>
      <span className="leading-relaxed text-slate-500">.</span>
      <span className="leading-relaxed text-indigo-500">querySelector</span>
      <span className="leading-relaxed text-slate-500">(</span>
      <span className="leading-relaxed text-orange-300">{"'#sendBtn'"}</span>
      <span className="leading-relaxed text-slate-500">
        );
        <br />
        <br />
      </span>
      <span className="leading-relaxed text-purple-400">const</span>
      <span className="leading-relaxed text-slate-500"> </span>
      <span className="leading-relaxed text-indigo-500">message</span>
      <span className="leading-relaxed text-slate-500"> </span>
      <span className="leading-relaxed text-purple-400">=</span>
      <span className="leading-relaxed text-slate-500">
        {" "}
        &#123;
        <br />{" "}
      </span>
      <span className="leading-relaxed text-indigo-500">name</span>
      <span className="leading-relaxed text-slate-500">: </span>
      <span className="leading-relaxed text-orange-300">{`"${name}"`}</span>
      <span className="leading-relaxed text-slate-500">
        ,
        <br />{" "}
      </span>
      <span className="leading-relaxed text-indigo-500">email</span>
      <span className="leading-relaxed text-slate-500">: </span>
      <span className="leading-relaxed text-orange-300">{`"${email}"`}</span>
      <span className="leading-relaxed text-slate-500">
        ,
        <br />{" "}
      </span>
      <span className="leading-relaxed text-indigo-500">message</span>
      <span className="leading-relaxed text-slate-500">: </span>
      <span className="leading-relaxed text-orange-300">{`"${message}"`}</span>
      <span className="leading-relaxed text-indigo-500">
        ,
        <br /> date:{" "}
      </span>
      <span className="leading-relaxed text-orange-300">
        {`"${formattedDate}"`}
      </span>
      <span className="leading-relaxed text-slate-500">
        <br />
        &#125;
        <br />
        <br />
      </span>
      <span className="leading-relaxed text-indigo-500">button</span>
      <span className="leading-relaxed text-slate-500">.</span>
      <span className="leading-relaxed text-indigo-500">addEventListener</span>
      <span className="leading-relaxed text-slate-500">(</span>
      <span className="leading-relaxed text-orange-300">{"'click'"}</span>
      <span className="leading-relaxed text-slate-500">, () </span>
      <span className="leading-relaxed text-purple-400">=&gt;</span>
      <span className="leading-relaxed text-slate-500">
        {" "}
        &#123;
        <br />{" "}
      </span>
      <span className="leading-relaxed text-indigo-500">form</span>
      <span className="leading-relaxed text-slate-500">.</span>
      <span className="leading-relaxed text-indigo-500">send</span>
      <span className="leading-relaxed text-slate-500">(</span>
      <span className="leading-relaxed text-indigo-500">message</span>
      <span className="leading-relaxed text-slate-500">
        );
        <br />
        &#125;)
      </span>
    </div>
  );
}
