import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import BuyGame from "./components/BuyGame";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exacth path="/:name/:idx" component={BuyGame} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
