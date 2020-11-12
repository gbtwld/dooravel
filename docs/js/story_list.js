const prev_button = document.querySelector(".prev_post");
const next_button = document.querySelector(".next_post");
const currentPath = path_Identifier();
let current_arr_index = 0;

//페이지들 주소 배열
const html_arr = [
  "seattle_1st.html",
  "seattle_2nd.html",
  "seattle_3rd.html",

  "portland.html",

  "sanfrancisco_1st.html",
  "sanfrancisco_2nd.html",
  "sanfrancisco_3rd.html",

  "vegas.html",
  "vegas_1st.html",

  "la.html",
];

//버튼의 존재여부 결정 함수
function btn_selector() {
  if (current_arr_index === 0) {
    prev_button.classList.add("not_exist");
  } else if (current_arr_index === 9) {
    next_button.classList.add("not_exist");
  }
}

//현재 페이지가 페이지 주소 배열의 몇번째인지
function handleCurrentArrAdress() {
  for (let i = 0; i < html_arr.length; i++) {
    if (currentPath.includes(html_arr[i])) {
      current_arr_index = i;
      console.log(current_arr_index);
      break;
    }
  }
}

//다음글 버튼 클릭 이벤트
if (next_button) {
  next_button.addEventListener("click", (event) => {
    if (current_arr_index < 9) {
      window.location.href = `https://dooravel.cf/${
        html_arr[current_arr_index + 1]
      }`;
    } else {
      console.log("There's no post.");
    }
  });
}

//이전글 버튼 클릭 이벤트
if (prev_button) {
  prev_button.addEventListener("click", (event) => {
    if (current_arr_index > 0) {
      window.location.href = `https://dooravel.cf/${
        html_arr[current_arr_index - 1]
      }`;
    } else {
      console.log("There's no post.");
    }
  });
}

//현재 페이지의 주소 알리는 함수
function path_Identifier() {
  const currentpath = window.location.pathname;
  return currentpath;
}

function init() {
  handleCurrentArrAdress();
  btn_selector();
}

init();
