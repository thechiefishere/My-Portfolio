import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <main
        className="main"
        style={{ backgroundImage: "url(/images/background.jpg)" }}
      >
        <Header />
        <Home />
        <About />
        <Projects />
      </main>
    </AppProvider>
  );
}

export default App;
