import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Switcher from "./components/Switcher";
import FirstPerson from "./components/FirstPerson";
import SecondPerson from "./components/SecondPerson";

function App() {
  return (
    <Fragment>
      <Switcher />
      <Routes>
        <Route index path="/" element={<FirstPerson />} />
        <Route index path="first-person" element={<FirstPerson />} />
        <Route path="second-person" element={<SecondPerson />} />
      </Routes>
    </Fragment>
  );
}

export default App;
