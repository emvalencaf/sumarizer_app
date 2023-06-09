// components
import Hero from "./components/Hero";

// styles
import "./App.css";
import Demo from "./components/Demo";


const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient" />
            </div>
            <div className="app">
                <Hero />
                <Demo />
            </div>
        </main>
    );
};

export default App;