import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";

const App = () => {
  return (
    <div>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
      </main>
    </div>
  );
};

export default App;
