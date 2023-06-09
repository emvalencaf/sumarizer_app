import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../../assets";
import { useLazyGetSummaryQuery } from "../../services/article";
import DisplayResult from "../DisplayResult";

const Search = () => {
    // states
    const [article, setArticle] = useState({
        url: '',
        summary: '',
    });
    const [allArticles, setAllArticles] = useState([]);
    const [copied, setCopied] = useState('');

    // get from local storage all articles summarized
    useEffect(() => {
        const aarticlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));

        if (aarticlesFromLocalStorage) {
            setAllArticles(aarticlesFromLocalStorage);
        }
    }, []);


    // get Summary service
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    // handle for submit event
    const handleSubmit = async (e) => {

        e.preventDefault();

        const { data } = await getSummary({
            articleUrl: article.url
        });

        if (data?.summary) {
            const newArticle = {
                ...article,
                summary: data.summary,
            };
            const updatedAllArticles = [newArticle, ...allArticles];

            setArticle(newArticle);
            setAllArticles(updatedAllArticles);

            console.log(newArticle);

            // updated the articles saved on local storage 
            localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
        }
    };

    // handle for change event
    const handleChange = (e) => {
        setArticle({ ...article, url: e.target.value });
    };

    // handle copy
    const handleCopy = (copyUrl) => {
        setCopied(copyUrl);
        navigator.clipboard.writeText(copyUrl);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col w-full gap-2">
            <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
                <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />
                <input
                    type="url"
                    placeholder="Enter a url"
                    value={article.url}
                    onChange={handleChange}
                    required
                    className="url_input peer"
                />
                <button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:Text-gray-700">
                    ↵
                </button>
            </form>
            {/* BROWSER URL HISTORY */}
            <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
                {allArticles && allArticles.map((item, index) => (
                    <div key={`link-${index}`} onClick={() => setArticle(item)} className="link_card">
                        <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                            <img src={copied === item.url ? tick : copy} alt="copy-icon" className="w=[40%] h-[40%] object-contain" />
                        </div>
                        <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                            {item.url}
                        </p>
                    </div>
                ))}

            </div>
            {/* Display Results */}
            <div className="my-10 max-w-full flex justify-center items-center">
                {isFetching ? (
                    <img src={loader} alt="loader-icon" className="w-20 h-20 object-contain" />
                ) : error ? (
                    <p className="font-inter font-bold text-black text-center">Well, that wasnt supposed to happen... <br />
                        <span className="font-satoshi font-normal text-gray-700">
                            {error?.data?.error}</span></p>
                ) : article.summary && <DisplayResult article={article} />}
            </div>
        </div>
    );
};

export default Search;