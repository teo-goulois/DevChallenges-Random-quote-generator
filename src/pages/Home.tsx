import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Components
import QuoteComponent from "../components/QuoteComponent";
import RandomButton from "../components/RandomButton";
// Types
import { ArrowRightIcon } from "../utilities/Icons";
// Context
import { QuoteContext } from "../context/quoteContext";

const Home = () => {
  const navigate = useNavigate();
  const { quote, loading, newRandomQuote } = useContext(QuoteContext)


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center ">
      {/* random generator */}
      <RandomButton generate={newRandomQuote} />

      <div className="w-[70%] md:w-[50%]">
        {loading ? (
          <img alt="loader" className="w-[50%] ml-auto mr-auto " src="./ball-triangle.svg" ></img>
        ) : (
          <>
            <QuoteComponent quote={quote[0]} />
            <button
              onClick={() => {
                navigate(`/quotes/${quote[0].quoteAuthor}`);
              }}
              className="button parent py-4 md:py-8 px-2 md:px-4 hover:bg-primary ml-8 flex items-center justify-between mt-14"
            >
              <div className="flex flex-col items-start justify-start">
                <p className="text-2xl font-bold parent-hover:text-gray text-[#4F4F4F] text-left">
                  {quote[0]?.quoteAuthor}
                </p>
                <p className="text-light-gray font-medium text-sm ">
                  {quote[0]?.quoteGenre}{" "}
                </p>
              </div>
              <ArrowRightIcon
                className="parent-hover:block"
                width="2rem"
                height="2rem"
                fill="#F2F2F2"
              />
            </button>
          </>
        )}
      </div>

      <p className="absolute bottom-10 text-[#A9A9A9] text-sm font-medium ">
        created by <span className="font-bold underline">téo goulois</span> -
        devChallenges.io
      </p>
    </div>
  );
};

export default Home;
