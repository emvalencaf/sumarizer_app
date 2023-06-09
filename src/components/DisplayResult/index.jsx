// eslint-disable-next-line react/prop-types
const DisplayResult = ({article}) => {
    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="bue_gradient">Summary</span>
            </h2>
            <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-700 ">
                    {/*  eslint-disable-next-line react/prop-types*/}
                    {article && article?.summary}
                </p>
            </div>
        </div>
    );
};

export default DisplayResult;