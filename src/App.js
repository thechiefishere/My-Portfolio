import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { AppProvider } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <Router>
        <main
          className="main"
          style={{ backgroundImage: "url(/images/background.jpg)" }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </AppProvider>
  );
}

export default App;
