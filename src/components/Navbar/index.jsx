// components
import GithubButton from "../Githubutton";
import Logo from "../Logo";

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <Logo />
            <GithubButton />
        </nav>
    );
};

export default NavBar;