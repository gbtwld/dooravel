import routes from "../routes";
import Series from "../models/Series";

export const homeControl = async (req, res) => {
  try {
    const series = await Series.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", series });
  } catch (error) {
    console.log(error);
  }
};
export const joinControl = (req, res) =>
  res.render("join", { pageTitle: "Join" });
export const loginControl = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const logoutControl = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });
export const usersControl = (req, res) =>
  res.render("users", { pageTitle: "Users" });
export const editProfileControl = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit-Profile" });
export const changePasswordControl = (req, res) =>
  res.render("changePassword", { pageTitle: "Change-Password" });
export const profileControl = (req, res) =>
  res.render("profile", { pageTitle: "Profile" });
