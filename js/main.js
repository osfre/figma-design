let btn = document.querySelector(".btn-nav");
let ulElement = document.querySelector(".nav-mobile-categories")
let icon = document.querySelector(".btn-nav i.fa-solid.fa-bars");
let exitnav = document.querySelector(".exitnav")


btn.onclick = function () {
  ulElement.classList.add("show");
  icon.classList.add("changecolor")
  opsit.classList.add("show-opsit");

}
exitnav.onclick = function () {
  ulElement.classList.remove("show");
  opsit.classList.remove("show-opsit");
  icon.classList.remove("changecolor")
}




let login_section = document.querySelector(".login-section");
let btn_login = document.querySelector(".btn-login i");
let opsit = document.querySelector(".opsity");
let icon2 = document.querySelector(".btn-login i.fa-regular.fa-user");
let exit_leftSide = document.querySelector(".exit");


btn_login.onclick = () => {
  login_section.classList.add("show_login");
  icon2.classList.add("changecolor2");
  opsit.classList.add("show-opsit");
}
exit_leftSide.onclick = () => {
  login_section.classList.remove("show_login");
  icon2.classList.remove("changecolor2");
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

fetch("../JSON.JSON")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    let parentBox = document.querySelectorAll(".product-main-container");
    let parentBox1 = document.querySelectorAll(".allcategories-container");
    var html = "";
    parentBox.forEach(element => {
      data.forEach(item => {
        html += `
        <div class="col swiper-slide">
                          <div class="content ">
                            <div class="card px-2">
                              <img src="${item.img}" class="card-img-top mt-2" alt="...">
                                <div class="card-body">
                                <p class="card-text">${item.card_text}</p>
                                <span>${item.price}</span>
                                <span class="old-price">${item.old_price ? item.old_price : "" }</span>
                                <span class="dicont">
                                  <p>${item.discount ? item.discount : "" }</p>
                                  <p>${item.discount1 ? item.discount1 : "" }</p>
                                </span>
                                </div>
                            </div>
                          </div>
        </div>
        `
      });
      element.innerHTML = html;
      html = ""
    });
  })
  .catch(error => {
    console.error("Error retrieving or parsing data:", error);
  });
  


  let increas_cart = document.querySelector(".increas_cart") || "";
  let span_increas_cart = document.querySelector(".span-increas_cart") || "";
  let decreas_cart = document.querySelector(".decreas_cart") || "";
  increas_cart.onclick = () => {
    span_increas_cart.innerHTML++;
  }
  decreas_cart.onclick = () => {
    if(span_increas_cart.innerHTML > 0) {
      span_increas_cart.innerHTML--;
    }
  }

var loader = document.querySelector('.pre-loader');
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      fade = loader;
        var intervalID = setInterval(function () {
              
            if (!fade.style.opacity) {
                fade.style.opacity = 1;
            }
              
              
            if (fade.style.opacity > 0) {
                fade.style.opacity -= 0.1;
            } 
              
            else {
                clearInterval(intervalID);
            }
              
        }, 150);
        loader.style.display = "none";
    }
};



let FormContact = document.querySelector(".form-va");


FormContact.addEventListener("submit", (e) => {
  e.preventDefault();
  falidait()
})

function falidait() {
      var userName = document.getElementById("name-contact").value;
      var email = document.getElementById("email-contact").value;
      var msg = document.getElementById("msg-contact").value;
      var error = document.querySelector(".message");
      var text = "" ;
          if(userName.length < 7 ) {
              text = "Please Inter Valid Name";
              error.innerHTML = text;
              return false;
          } 
          else if (email.indexOf("@") == -1 || email.length < 10) {
              text = "Please Inter Valid Email";
              error.innerHTML = text;
              return false;
          }
          else if (msg.length < 11) {
              text = "Please Inter Valid message";
              error.innerHTML = text;
              return false;
          } else {
              sendmail()
              return true;
          }
  }
function sendmail(){
  var param = {
      name:document.getElementById('name-contact').value,
      email:document.getElementById('email-contact').value,
      message: document.getElementById('msg-contact').value
  };

const serviceid ="service_tv1sr5h";
const templateid= "template_e9v7m1t";

emailjs
.send(serviceid,templateid,param)
.then((
  res)=>{
      document.getElementById('name-contact').value ="",
      document.getElementById('email-contact').value= "",
      document.getElementById('msg-contact').value ="",
      alert("your message is sent successfully");
  })

.catch((err)=> console.log(err));
}

