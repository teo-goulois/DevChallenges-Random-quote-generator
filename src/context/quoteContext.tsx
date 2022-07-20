import { createContext, useEffect, useState } from "react";
// Types
import { Quote } from "../types/Types";
// Hooks
import { generateRandomQuote } from "../hooks/Hooks";

type Props = {
  children: React.ReactNode;
};

type QuoteContextType = {
  quote: Quote[];
  loading: boolean;
  newRandomQuote: () => Promise<void>;
};

export const QuoteContext = createContext<QuoteContextType>({
  quote: [],
  loading: true,
  newRandomQuote: async () => {},
});

export function QuoteProvider({ children }: Props) {
  const [quote, setQuote] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getQuote = async () => {
      const quoteData = await generateRandomQuote();
      setQuote(quoteData);
      setLoading(false)
    };
    getQuote();
  }, []);

  const newRandomQuote = async () => {
    setLoading(true);
    const newQuoteData = await generateRandomQuote();
    setQuote(newQuoteData);
    setLoading(false);
  };

  const value = { quote, loading, newRandomQuote };
  return (
    <QuoteContext.Provider value={value}>{children} </QuoteContext.Provider>
  );
}
