// Global Routers
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User Routers
const USERS = "/users";
const PROFILE = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Post Routers
const SERIES = "/series";
const SERIES_CREATE = "/series-create";
const SERIES_DETAIL = "/:seriesId";
const SERIES_EDIT = "/:seriesId/edit";
const SERIES_DELETE = "/:seriesId/delete";
const POST_DETAIL = "/:seriesID/:postID";
const POST_WRITE = "/:seriesId/post-write";
const POST_EDIT = "/:seriesId/:postId/post-edit";
const POST_DELETE = "/:seriesId/:postId/post-delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,

  users: USERS,
  profile: PROFILE,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,

  series: SERIES,
  seriesCreate: SERIES_CREATE,
  seriesDetail: SERIES_DETAIL,
  seriesEdit: SERIES_EDIT,
  seriesDelete: SERIES_DELETE,

  postWrite: POST_WRITE,
  postDetail: POST_DETAIL,
  postEdit: POST_EDIT,
  postDelete: POST_DELETE,
};

export default routes;
