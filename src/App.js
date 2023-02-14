import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "../src/pages/HomePage/HomePage";
import InfoPage from "../src/pages/InfoPage/InfoPage";
import BrainTeaser from "../src/pages/BrainTeaser/BrainTeaser";
import CleaningPage from "../src/pages/CleaningPage/CleaningPage";
import CallBacks from "../src/pages/CallBacks/CallBacks";
import NotFound from "../src/pages/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mainInfo" element={<InfoPage />} />

          <Route path="brainTeaser" element={<BrainTeaser />} />

          <Route path="mainInfo/brainTeaser" element={<BrainTeaser />} />
          <Route path="mainInfo/cleanup" element={<CleaningPage />} />
          <Route path="mainInfo/callbacks" elements={<CallBacks />} />

          <Route path="cleanup" element={<CleaningPage />} />

          <Route path="callbacks" element={<CallBacks />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
