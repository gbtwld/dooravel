const prev_button = document.querySelector(".prev_post");
const next_button = document.querySelector(".next_post");
const currentPath = path_Identifier();
let current_arr_index = 0;

const html_arr = [
  "/seattle_1st.html",
  "/seattle_2nd.html",
  "/seattle_3rd.html",

  "/portland.html",

  "/sanfrancisco_1st.html",

  "/vegas.html",
  "/vegas_1st.html",

  "/la.html",
];

function btn_selector() {
  if (current_arr_index === 0) {
    prev_button.classList.add("not_exist");
  } else if (current_arr_index === 7) {
    next_button.classList.add("not_exist");
  }
}

prev_button.addEventListener("click", (event) => {
  if (current_arr_index > 0) {
    console.log(`https://dooravel.cf${html_arr[current_arr_index - 1]}`);
    window.location.replace = `https://dooravel.cf${
      html_arr[current_arr_index - 1]
    }`;
  } else {
    console.log("There's no post.");
  }
});

next_button.addEventListener("click", (event) => {
  if (current_arr_index < 7) {
    window.location.replace = `https://dooravel.cf${
      html_arr[current_arr_index + 1]
    }`;
  } else {
    console.log("There's no post.");
  }
});

function handleCurrentArrAdress() {
  for (let i = 0; i < html_arr.length; i++) {
    if (currentPath == html_arr[i]) {
      current_arr_index = i;
      break;
    }
  }
}

function path_Identifier() {
  const currentpath = window.location.pathname;
  return currentpath;
}

function init() {
  btn_selector();
  handleCurrentArrAdress();
  console.log(current_arr_index);
}

init();
