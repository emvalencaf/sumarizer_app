import NavBar from "../Navbar";

const Header = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <NavBar />
            <h1 className="head_text">
                Summarize Your Articles with <br className="max-md:hidden"/>
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading with a sumarize app, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
            </h2>
        </header>
    );
};

export default Header;