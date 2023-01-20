







let btn = document.querySelector(".btn-nav");
let ulElement = document.querySelector(".nav-mobile-categories")
let exitnav = document.querySelector(".exitnav")


btn.onclick = function () {
  ulElement.classList.add("show");
  opsit.classList.add("show-opsit");

}
exitnav.onclick = function () {
  ulElement.classList.remove("show");
  opsit.classList.remove("show-opsit");
}



let login_section = document.querySelector(".login-section");
let btn_login = document.querySelector(".btn-login i");
let opsit = document.querySelector(".opsity");
let exit_leftSide = document.querySelector(".exit");



btn_login.onclick = () => {
  login_section.classList.add("show_login");
  opsit.classList.add("show-opsit");
}
exit_leftSide.onclick = () => {
  login_section.classList.remove("show_login");
  opsit.classList.remove("show-opsit");
}



let btn_details = document.querySelector(".btn-details");
let details = document.querySelector("#mid-nav .details");
let exit = document.querySelector(".exit-detils");

btn_details.onclick = () =>  {
  details.classList.add("show-details");
  opsit.classList.add("show-opsit");
  }

exit.onclick = () => {
    details.classList.remove("show-details");
    opsit.classList.remove("show-opsit");
}


let search_btn = document.querySelector(".search-mobile");
let search_group = document.querySelector(".search-form");

search_btn.onclick = _ => search_group.classList.toggle("show-search");
