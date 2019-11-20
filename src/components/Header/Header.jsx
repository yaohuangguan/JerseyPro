import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import CartDropDown from "../Cart/CartDropDown/CartDropDown";
import CartIcon from "../Cart/Carticon/CartIcon";
import { connect } from "react-redux";
import "./header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <span className="logoText">青柠</span>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          设计
        </Link>

        {currentUser ? (
          <>
            <CartIcon />
            <Dropdown classname={"option"} currentUser={currentUser} />
          </>
        ) : (
          <div className="options">
            <Link className="option" to="/signin">
              登录
            </Link>

            <Link to="/signup" className="signup">
              注册
            </Link>
          </div>
        )}
      </div>
      {hidden ? null : <CartDropDown></CartDropDown>}
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
