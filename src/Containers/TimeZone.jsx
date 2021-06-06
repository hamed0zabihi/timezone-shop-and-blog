import { Route, Switch } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import SingleProduct from "../Components/Product/SingleProduct";
import About from "./About";
import Home from "./Home/Home";

const TimeZone = () => {
  return (
    <Switch>
      <MainLayout>
        <Route path="/about" component={About} />
        <Route path="/product/:id" exact component={SingleProduct} />
        <Route path="/" exact component={Home} />
      </MainLayout>
    </Switch>
  );
};

export default TimeZone;
