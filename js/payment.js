let bank = document.querySelectorAll("#payment-way div");
let check = document.querySelectorAll(".checkbox-form form .payment-method .row label");



check.forEach(ch => {
  ch.onclick = () => {
    console.log("osamaa"); 
    bank.forEach(el => {
      el.classList.remove("active-pay");
      if( el.getAttribute("id") == ch.getAttribute("id")) {
        el.classList.toggle("active-pay")
        console.log("osamaa");
        }
    });
  }
});