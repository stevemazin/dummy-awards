import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
// Components
import Layout from "./hocs/Layout";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Activate from "./containers/Activate";
import Vote from "./containers/Vote";
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import GlobalStyles from "./components/Utilities/globalStyles";
import SinglePost from "./components/Blog/SinglePost";
import ComingSoon from "./components/ComingSoon/ComingSoon";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={() => {
          console.log("Redux loading...");
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
              {/* Work In Progress */}
              <Route path="/terms" exact component={ComingSoon} />
              <Route path="/privacy-policy" exact component={ComingSoon} />
              <Route path="/buy-tickets" exact component={ComingSoon} />
              <Route path="/gallery" exact component={ComingSoon} />
              <Route path="/winners" exact component={ComingSoon} />
              <Route path="/advertise-with-us" exact component={ComingSoon} />
              <Route path="/submit-work" exact component={ComingSoon} />
              <Route path="/sponsor-us" exact component={ComingSoon} />
            </Switch>
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
