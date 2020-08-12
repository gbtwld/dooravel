const navbar = document.querySelector(".menu-ul");
const sidebar = document.querySelector(".sitemap-ul");
const currentSite = URL_Identifier();

function sidebarChanger() {
  const a_targets = sidebar.querySelectorAll("a");

  if (currentSite.includes("seattle")) {
    a_targets[0].classList.add("curcity");
    if (currentSite.includes("1st")) {
      a_targets[1].classList.add("curpage");
    } else if (currentSite.includes("2nd")) {
      a_targets[2].classList.add("curpage");
    } else if (currentSite.includes("3rd")) {
      a_targets[3].classList.add("curpage");
    }
  } else if (currentSite.includes("portland")) {
    a_targets[4].classList.add("curcity");
    // if (currentSite.includes("1st")) {
    //   a_targets[5].classList.add("curpage");
    // } else if (currentSite.includes("2nd")) {
    //   a_targets[6].classList.add("curpage");
    // }
  } else if (currentSite.includes("sanfrancisco")) {
    a_targets[7].classList.add("curcity");
    // if (currentSite.includes("1st")) {
    //   a_targets[8].classList.add("curpage");
    // } else if (currentSite.includes("2nd")) {
    //   a_targets[9].classList.add("curpage");
    // } else if (currentSite.includes("3rd")) {
    //   a_targets[10].classList.add("curpage");
    // } else if (currentSite.includes("4th")) {
    //   a_targets[11].classList.add("curpage");
    // }
  } else if (currentSite.includes("vegas")) {
    a_targets[12].classList.add("curcity");
    if (currentSite.includes("1st")) {
      a_targets[14].classList.add("curpage");
    } else {
      a_targets[13].classList.add("curpage");
    }
    //   else if (currentSite.includes("2nd")) {
    //   a_targets[15].classList.add("curpage");
    // } else if (currentSite.includes("3rd")) {
    //   a_targets[16].classList.add("curpage");
    // } else if (currentSite.includes("4th")) {
    //   a_targets[17].classList.add("curpage");
    // } else if (currentSite.includes("5th")) {
    //   a_targets[18].classList.add("curpage");
  } else if (currentSite.includes("la")) {
    a_targets[19].classList.add("curcity");
    //     if (currentSite.includes("1st")) {
    //       a_targets[20].classList.add("curpage");
    //     } else if (currentSite.includes("2nd")) {
    //       a_targets[21].classList.add("curpage");
    //     } else if (currentSite.includes("3rd")) {
    //       a_targets[22].classList.add("curpage");
    //     } else if (currentSite.includes("4th")) {
    //       a_targets[23].classList.add("curpage");
    //     } else if (currentSite.includes("5th")) {
    //       a_targets[24].classList.add("curpage");
    //     }
    //   }
  }
}

function navbarChanger() {
  const targets = navbar.querySelectorAll("a");

  if (currentSite.includes("seattle")) {
    targets[0].classList.add("curcity");
  } else if (currentSite.includes("portland")) {
    targets[1].classList.add("curcity");
  } else if (currentSite.includes("sanfrancisco")) {
    targets[2].classList.add("curcity");
  } else if (currentSite.includes("vegas")) {
    targets[3].classList.add("curcity");
  } else if (currentSite.includes("la")) {
    targets[4].classList.add("curcity");
  }
}

function URL_Identifier() {
  const currentURL = window.location.href;
  return currentURL;
}

function init() {
  navbarChanger();
  sidebarChanger();
}

init();
