import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SharedLayout from "./components/SharedLayout";

import Activities from "./pages/Activities";
import Donations from "./pages/Donations";
import Events from "./pages/Events";
import Galleries from "./pages/Galleries";
import Home from "./pages/Home";
import Team from "./pages/Team";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events/>} />
          <Route path="/donation" element={<Donations/>} />
          {/* path="*" fonctionne si l'url ne correspond à rien de déclaré ci-dessus */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
