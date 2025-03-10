import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div>
      <main className="overflow-hidden">
        <Header />
        <Hero />
      </main>
    </div>
  );
};

export default App;
