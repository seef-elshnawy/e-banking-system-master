import React from "react";
import { NavLink } from "react-router-dom";
import signIn from "./signin.module.scss";
import { request } from "../utilities/request";

export default function SignIn() {
  function login(e) {
    request.post("identity/login", e);
  }

  return (
    <div className={signIn.sign}>
      <div className={signIn.form}>
        <form className={signIn.formBody} onSubmit={login}>
          <h1> Maze ID</h1>
          <div className={signIn.input}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              minLength={8}
              required
            />
            <div className={signIn.flexHorizontal}>
              <input type="checkbox" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <NavLink className={signIn.forgotPass} to="/forgotPassword">
              Forgot Password?
            </NavLink>
          </div>
          <div className={signIn.flex}>
            <button
              style={{ marginBottom: 10, marginTop: 20 }}
              className={signIn.btnSign}
              type="submit"
            >
              LOG IN
            </button>
            <NavLink className={signIn.newAccount} to="/signUp">
              Create New Account?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}