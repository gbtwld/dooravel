const toChatBtn = document.querySelector(".toChat__btn");

const toChatHandler = () => {
  window.location.href = "#btn_wrap";
  toChatBtn.classList.add("toChat__btn__clicked");
};

const scrollHandler = () => {
  const currentScrollPosition = window.scrollY;
};

toChatBtn.addEventListener("click", toChatHandler);
document.addEventListener("scroll", scrollHandler);
