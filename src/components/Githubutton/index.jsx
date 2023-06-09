const GithubButton = () => {

    // handle click event
    const handleClick = () => {
        window.open('https://github.com/emvalencaf');
    };

    return (
        <button 
            type="button"
            onClick={handleClick}
            className="black_btn"
        >
            Github
        </button>
    );
};

export default GithubButton;