import axios from "axios";
import { Quote } from "../types/Types";

export const generateRandomQuote: () => Promise<Quote[]> = async () => {
  const res = await axios.get(
    "https://quote-garden.herokuapp.com/api/v3/quotes/random"
  );
  return res.data.data;
};
