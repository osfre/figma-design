let btn_categories = document.querySelector(".btn-categories");
let ctergories = document.querySelector(".ctergories-inputs");

btn_categories.onclick = () =>  {
  ctergories.classList.toggle("show-categories");
  btn_categories.classList.toggle("show-rotat");
}
