import { Component } from "react";
import { ReactComponent as ListStyle } from "../assets/images/ListStyle.svg";
import '../assets/css/Navbar.css'

class Lists extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      navStates: {
        "Attendees": true,
      },
    };
  }
  handleClick = (e) => {
    this.setState({
      navStates: {
        [e.target.id]: true,
      },
    });
  };
  
  render() {
    const { navStates } = this.state;
    const menuItems = ["Guide", "Attendees", "Content", "Exhibitors"].map(
      (name, index) => (
        <li key={index} className="navLinks">
          <span
            key={index}
            id={name}
            onClick={this.handleClick}
            className={"navTitle " + (navStates[name] ? " active" : "")}
          >
            <ListStyle className={navStates[name] ? "listIcon" : "ActiveIconColor"} /> {name}
          </span>
          {navStates[name] ? (
            <ul className="navDropdown">
              <li className="innerNav"><span className="dropdownLinks">Attendees</span></li>
              <li className="innerNav"><span className="dropdownLinks">Attendee Types</span></li>
              <li className="innerNav"><span className="dropdownLinks">Packages</span></li>
              <li className="innerNav"><span className="dropdownLinks">Reg Codes</span></li>
              <li className="innerNav"><span className="dropdownLinks">Discounts</span></li>
            </ul>
          ) : null}
        </li>
      )
    );

    return <ul className="navList">{menuItems}</ul>;
  }
}

export default Lists;
