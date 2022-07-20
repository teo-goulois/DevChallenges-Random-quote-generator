import React from "react";

// Types
import { Quote } from "../types/Types";

type Props = {
  quote: Quote;
};
const QuoteComponent = ({ quote }: Props) => {
  return (
    <div className="py-6">
      <p className="border-l-4 border-yellow pl-8 text-xl md:text-4xl my-4">{`"${quote?.quoteText}"`}</p>
    </div>
  );
};

export default QuoteComponent;
