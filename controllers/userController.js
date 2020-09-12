import routes from "../routes";

export const homeControl = (req, res) =>
  res.render("home", { pageTitle: "Home" });
export const joinControl = (req, res) => res.send("JOIN");
export const loginControl = (req, res) => res.send("LOGIN");
export const logoutControl = (req, res) => res.send("LOGOUT");
export const usersControl = (req, res) => res.send("USERS");
export const editProfileControl = (req, res) => res.send("EDIT_PROFILE");
export const changePasswordControl = (req, res) => res.send("CHANGE_PASSWORD");
export const profileControl = (req, res) => res.send("PROFILE");
