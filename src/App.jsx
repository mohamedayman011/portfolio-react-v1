import Home from "./components/home/Home";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

function App() {
    return (
        <>
            <Home />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
            <Footer />
            <Nav />
        </>
    );
}

export default App;
