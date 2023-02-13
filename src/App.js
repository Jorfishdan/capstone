import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "../src/pages/HomePage/HomePage";
import InfoPage from "../src/pages/InfoPage/InfoPage";
import BrainTeaser from "../src/pages/BrainTeaser/BrainTeaser";
import CleaningPage from "../src/pages/CleaningPage/CleaningPage";
import Callbacks from "../src/pages/CallBacks/CallBacks";
import NotFound from "../src/pages/NotFound/NotFound";
import Points from "../src/pages/Points/Points";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mainInfo" element={<InfoPage />} />

          <Route path="brainTeaser" element={<BrainTeaser />} />
          <Route path="brainTeaser/points" element={<Points />} />

          <Route path="mainInfo/brainTeaser" element={<BrainTeaser />} />
          <Route path="mainInfo/cleanup" element={<CleaningPage />} />
          <Route path="mainInfo/callbacks" elements={<Callbacks />} />

          <Route path="cleanup" element={<CleaningPage />} />
          <Route path="cleanup/points" element={<Points />} />

          <Route path="callbacks" element={<Callbacks />} />
          <Route path="callbacks/points" element={<Points />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
