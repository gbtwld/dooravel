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
const POST_DETAIL = "/:seriesId/:postId";
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
  seriesDetail: (id) => {
    if (id) {
      return `/${id}`;
    } else {
      return SERIES_DETAIL;
    }
  },
  seriesEdit: (id) => {
    if (id) {
      return `/${id}/edit`;
    } else {
      return SERIES_EDIT;
    }
  },
  seriesDelete: (id) => {
    if (id) {
      return `/${id}/delete`;
    } else {
      return SERIES_DELETE;
    }
  },

  postWrite: (id) => {
    if (id) {
      return `/${id}/post-write`;
    } else {
      return POST_WRITE;
    }
  },
  postDetail: (seriesId, postId) => {
    if (seriesId && postId) {
      return `/${seriesId}/${postId}`;
    } else {
      return POST_DETAIL;
    }
  },
  postEdit: (seriesId, postId) => {
    if (seriesId && postId) {
      return `/${seriesId}/${postId}/post-edit`;
    } else {
      return POST_EDIT;
    }
  },
  postDelete: (seriesId, postId) => {
    if (seriesId && postId) {
      return `/${seriesId}/${postId}/post-delete`;
    } else {
      return POST_DELETE;
    }
  },
};

export default routes;
