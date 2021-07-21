import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <NavLink activeClassName="selected" className="link" to="/horizontalBar">
        Horizontal Bar
      </NavLink>
      <NavLink activeClassName="selected" className="link" to="/verticalBar">
        Vertical Bar
      </NavLink>
      <NavLink activeClassName="selected" className="link" to="/groupBar">
        Grouped Bar
      </NavLink>
      <NavLink activeClassName="selected" className="link" to="/line">
        Line Chart
      </NavLink>
      <NavLink activeClassName="selected" className="link" to="/doughnut">
        Doughnut Chart
      </NavLink>
      <NavLink activeClassName="selected" className="link" to="/scatter">
        Scatter Chart
      </NavLink>
      <NavLink activeClassName="selected" className="link" to="/pie">
        Pie Chart
      </NavLink>
      <NavLink activeClassName="selected" className="link" to="/radar">
        Radar Chart
      </NavLink>
      <NavLink activeClassName="selected" className="link" to="/dynamic">
        Dynamic Chart
      </NavLink>
      <NavLink activeClassName="selected" className="link" to="/multi">
        Multi Chart
      </NavLink>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0px 60px;

  .link {
    margin: 10px 8px;
    text-decoration: none;
    color: #000;

    @media (max-width: 576px) {
      margin: 10px;
    }

    &:hover {
      color: #418ad4;
    }
  }

  .selected {
    color: #418ad4;
  }
`;

export default Header;
