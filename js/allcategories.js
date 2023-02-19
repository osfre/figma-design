let btn_categories = document.querySelector(".btn-categories");
let ctergories = document.querySelector(".ctergories-inputs");

btn_categories.onclick = () =>  {
  ctergories.classList.toggle("show-categories");
  btn_categories.classList.toggle("show-rotat");
}

fetch("../JSON.JSON")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    let parentBox1 = document.querySelectorAll(".allcategories-container");
    var html1 = "";
    parentBox1.forEach(element => {
      data.forEach(item => {
        html1 += `
        <div class="col mb-2">
                <div class="content">
                  <div class="card px-2">
                    <img src="${item.img}" class="card-img-top mt-2" alt="...">
                    <div class="card-body">
                      <p class="card-text">${item.card_text}</p>
                      <a class="price-product" href="product_details.html">${item.price}</a>
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
      element.innerHTML = html1;
      html1 = ""
    });
  })
  .catch(error => {
    console.error("Error retrieving or parsing data:", error);
  });
