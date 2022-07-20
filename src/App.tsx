import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
// Pages
import Home from "./pages/Home";
import Author from "./pages/Author";
import NoPage from "./pages/NoPage";
// Context
import { QuoteProvider } from "./context/quoteContext";

function App() {
  return (
    <QuoteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quotes/:author" element={<Author />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </QuoteProvider>
  );
}

export default App;
