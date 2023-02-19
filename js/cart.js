let increas = document.querySelector(".increas")|| "";
let span_increas = document.querySelector(".span-increas")|| "";
let mins = document.querySelector(".mins") || "";
increas.onclick = () => {
  span_increas.innerHTML++;
}
mins.onclick = () => {
  if(span_increas.innerHTML > 0) {
    span_increas.innerHTML--;
  }
}
let increas1 = document.querySelector(".increas1") || "";
let span_increas1 = document.querySelector(".span-increas1") || "";
let mins1 = document.querySelector(".mins1") || "";
increas1.onclick = () => {
  span_increas1.innerHTML++;
}
mins1.onclick = () => {
  if(span_increas1.innerHTML > 0) {
    span_increas1.innerHTML--;
  }
}
let cart_details = document.querySelectorAll(".cart-details") ||"";
let remove_item = document.querySelectorAll(".remove_item")||"";

remove_item.forEach(element => {
  element.onclick = () => {
    cart_details.forEach(cart => {
      if(element.id == cart.dataset.remove) {
        cart.classList.add("active")
      }
    });
  }
});
