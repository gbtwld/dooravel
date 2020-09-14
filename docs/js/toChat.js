const toChatBtn = document.querySelector(".toChat__btn");

const toChatHandler = () => {
  window.location.href = "#disqus_thread";
  toChatBtn.classList.add("toChat__btn__clicked");
};

const scrollHandler = () => {
  const currentScrollPosition = window.scrollY;
};

toChatBtn.addEventListener("click", toChatHandler);
document.addEventListener("scroll", scrollHandler);
