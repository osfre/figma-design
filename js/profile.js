let btn_profile = document.querySelector(".btn-profile");
let ul_profile = document.querySelector(".profile-setting-dash li ul");
let ul_profile_mobile = document.querySelector("#mid-nav .profile-setting-dash-mobile li ul");
let lord_icon = document.querySelector("lord-icon");

btn_profile.onclick = function() {
  ul_profile.classList.toggle("active-profile");
  console.log("osama");
}

lord_icon.onclick = function() {
  ul_profile_mobile.classList.toggle("active-profile-mobile");
  console.log("osama");
}

