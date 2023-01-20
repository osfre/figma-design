let increas = document.querySelector(".increas");
let span_increas = document.querySelector(".span-increas");
let mins = document.querySelector(".mins");
increas.onclick = () => {
  span_increas.innerHTML++;
}
mins.onclick = () => {
  if(span_increas.innerHTML > 0) {
    span_increas.innerHTML--;
  }
}