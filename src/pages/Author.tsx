import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Image from "../utilities/ball-triangle.svg";

// Components
import QuoteComponent from "../components/QuoteComponent";
import RandomButton from "../components/RandomButton";
// Types
import { Quote } from "../types/Types";
// Context
import { QuoteContext } from "../context/quoteContext";

const Author = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { newRandomQuote } = useContext(QuoteContext);

  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // get quotes from specified author
  useEffect(() => {
    const getQuotes = async () => {
      const res = await axios.get(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${params.author}`
      );
      setQuotes(res.data.data);
      setLoading(false);
    };
    getQuotes();
  }, [params.author]);

  const generateNewRandomQuote = async () => {
    await newRandomQuote();
    navigate("/");
  };

  return (
    <div className="w-screen min-h-screen h-fit flex flex-col items-center justify-center">
      <RandomButton generate={generateNewRandomQuote} />
      <div className="w-[70%] md:w-[50%]">
        {loading ? (
          <img alt="loader" className="w-[50%] ml-auto mr-auto " src={Image} />
        ) : (
          <>
            <h1 className="text-2xl md:text-4xl font-bold text-primary ml-8 py-4">
              {params?.author}{" "}
            </h1>
            {quotes.map((quote) => {
              return <QuoteComponent quote={quote} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Author;
