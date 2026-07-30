import AnimatedComponent from "@/styles/AnimatedComponent";
import CodeSnippets from "./components/CodeSnippets";
import UserInfo from "./components/UserInfo";

export default function page() {
  return (
    <div className="flex size-full flex-col lg:flex-row">
      <AnimatedComponent
        className="flex flex-col lg:flex-row"
        variants="fadeRight"
      >
        <UserInfo />
      </AnimatedComponent>
      <AnimatedComponent variants="fadeLeft">
        <CodeSnippets />
      </AnimatedComponent>
    </div>
  );
}
