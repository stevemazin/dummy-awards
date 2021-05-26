import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./hocs/Layout";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Activate from "./containers/Activate";
import Vote from "./containers/Vote";
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import Loader from "./components/Utilities/Loader";
import GlobalStyles from "./components/Utilities/globalStyles";
import SinglePost from "./components/Blog/SinglePost";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", (e) => {
      setIsLoading(false);
    });
  });

  // if (isLoading) {
  //   return (
  //     <>
  //       <GlobalStyles />
  //       <Loader />
  //     </>
  //   );
  // }

  return (
    <Provider store={store}>
      <PersistGate
        loading={() => {
          console.log("loading redux...");
        }}
        persistor={persistor}
      >
        <Router>
          <GlobalStyles />
          <Route path="/login" exact component={Login} />
          <Route path="/sign-up" exact component={Register} />
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route exact path="/activate/:uid/:token" component={Activate} />
              <Route path="/reset-password" exact component={ResetPassword} />
              <Route path="/post" exact component={SinglePost} />
              <Route path="/vote/artists" exact component={Vote} />
              <Route path="/vote/songs" exact component={Vote} />
              <Route path="/vote/movies" exact component={Vote} />
            </Switch>
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
