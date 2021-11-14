import Header from "./component/Header";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <main>
        <Header />
      </main>
    </AppProvider>
  );
}

export default App;
