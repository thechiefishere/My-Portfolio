import Header from "./component/Header";
import Home from "./component/Home";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <main
        className="main"
        style={{ backgroundImage: "url(/images/bg2.jpg)" }}
      >
        <Header />
        <Home />
      </main>
    </AppProvider>
  );
}

export default App;
