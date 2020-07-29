import React from "react";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import styles from './App.module.css'
import Store from "./Store";
import Shoe from "./Shoe";
import NewStore from "./NewStore";
import Slider from './Slider'
import Latest from "./Latest";
import Main from './Main'

function App() {
  return (
        <Router>
        <Routes >
          <Redirect from="/" to="/home" />
          <Route path="/" element={<Main />}>
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<NewStore />}>
              <Route path="/" element={<Store />} />
              <Route path=":slug" element={<Shoe />} />
            </Route>
          </Route>
        </Routes>
      </Router>
  );
}

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.topheader}>
        <h1>Your feet will never feel the same again</h1>
        <Slider />
      </div>
      <Latest />
    </div>
  );
}

export default App;
