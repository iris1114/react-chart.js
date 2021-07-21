import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GroupBar from "./component/GroupBar";
import Header from "./component/Header";
import HorizontalBar from "./component/HorizontalBar";
import VerticalBar from "./component/VerticalBar";
import LineChart from "./component/Line";
import DoughnutChart from "./component/Doughnut";
import ScatterChart from "./component/Scatter";
import PieChart from "./component/Pie";
import RadarChart from "./component/Radar";
import Dynamic from "./component/Dynamic";
import MultiType from "./component/MultiType";

const App = () => {
  return (
    <StyledApp>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HorizontalBar} />
          <Route path="/horizontalBar" exact component={HorizontalBar} />
          <Route path="/verticalBar" exact component={VerticalBar} />
          <Route path="/groupBar" exact component={GroupBar} />
          <Route path="/line" exact component={LineChart} />
          <Route path="/doughnut" exact component={DoughnutChart} />
          <Route path="/scatter" exact component={ScatterChart} />
          <Route path="/pie" exact component={PieChart} />
          <Route path="/radar" exact component={RadarChart} />
          <Route path="/dynamic" exact component={Dynamic} />
          <Route path="/multi" exact component={MultiType} />
        </Switch>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.section`
  max-width: 1000px;
  margin: auto;

  .title {
    text-align: center;
  }
  .text-center {
    text-align: center;
  }
`;
