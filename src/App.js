import React from "react";
import { Route, BrowserRouter,Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "../src/pages/HomePage/HomePage";
import InfoPage from "../src/pages/InfoPage/InfoPage";
import BrainTeaser from "../src/pages/BrainTeaser/BrainTeaser";
import BrainTeaserInfo from "../src/pages/BrainTeaserInfo/BrainTeaserInfo";
import CleaningPage from "../src/pages/CleaningPage/CleaningPage";
import CleanupPageInfo from "../src/pages/CleanupPageInfo/CleanupPageinfo";
import Callbacks from "../src/pages/CallBacks/CallBacks";
import CallbacksInfo from "../src/pages/CallbacksInfo/Callbacks";
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
      <Route path="brainTeaser/info" element={<BrainTeaserInfo />}/>
      <Route path="brainTeaser/pooints" element={<Points />} />

      <Route path="cleanup" element={<CleaningPage />} />
      <Route path="cleanup/info" element={<CleanupPageInfo />} />
      <Route path="cleanup/points" element={<Points />} />

      <Route path="callbacks" element={<Callbacks />} />
      <Route path="callbacks/info" element={<CallbacksInfo />} />
      <Route path="callbacks/points" element={<Points />} />

      <Route path="*" element={<NotFound />} />



      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
