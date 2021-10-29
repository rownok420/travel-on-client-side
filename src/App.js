import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Share/Header/Header";
import Footer from "./Pages/Share/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About";
import Destination from "./Pages/Destination/Destination/Destination";
// import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/destination">
                            <Destination />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
