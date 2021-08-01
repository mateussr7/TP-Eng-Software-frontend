import { ApplicationState } from "../store";

export const getLoggedUser = ({ userReducer }: ApplicationState) =>
  userReducer.loggedUser;

export const getLogged = ({ userReducer }: ApplicationState) =>
  userReducer.logged;
