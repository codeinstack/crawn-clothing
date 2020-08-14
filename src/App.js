import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

// In Future will be deleting the below pages data functional component. at present just for checking
//Deletions starts
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
const JacketsPage = () => (
  <div>
    <h1>JacketsPage</h1>
  </div>
);
const SneakersPage = () => (
  <div>
    <h1>SneakersPage</h1>
  </div>
);
const WomensPage = () => (
  <div>
    <h1>WomensPage</h1>
  </div>
);
const MensPage = () => (
  <div>
    <h1>MensPage</h1>
  </div>
);
//Deletion ends here in future

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop/hats" component={HatsPage} />
        <Route path="/shop/jackets" component={JacketsPage} />
        <Route path="/shop/sneakers" component={SneakersPage} />
        <Route path="/shop/womens" component={WomensPage} />
        <Route path="/shop/mens" component={MensPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
