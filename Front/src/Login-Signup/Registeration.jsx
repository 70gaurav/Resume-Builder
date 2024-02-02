import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./register.css";
import { toggleHandler, visibilityHandler } from "../Features/registerSlice";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Components/Header";
import CancelIcon from "@mui/icons-material/Cancel";

function Registeration() {
  const data = useSelector((state) => {
    return state.register;
  });

  console.log(data.toggle);

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="register">
        {data.visibility ? (
          <div className="form-wrapper">
            <div className="form-close">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(visibilityHandler(false));
                }}
              >
                <CancelIcon fontSize="large" />
              </a>
            </div>
            <div className="form-selector">
              <a
                href=""
                className={data.toggle === "register" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(toggleHandler("register"));
                }}
              >
                Register
              </a>
              <a
                href=""
                className={data.toggle === "signin" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(toggleHandler("signin"));
                }}
              >
                Sign In
              </a>
            </div>
            {data.toggle === "signin" ? <Login /> : <Signup />}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Registeration;
