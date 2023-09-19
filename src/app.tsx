import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
import Game from "./Game.tsx";
export function App() {
  return (
    <>
      <NavBar />
      <section class="hidden md:inline-block w-full md:flex-row md:flex">
        <Game />
      </section>
      <Footer />
    </>
  );
}
