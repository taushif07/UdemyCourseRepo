const products = JSON.parse(localStorage.getItem("products")) || [];

const container = document.querySelector("#productContainer");

const display = () => {

    products.forEach((elem,index) => {
        console.log(elem,index);

        let col = document.createElement("div");
        col.setAttribute("class","col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center");

        let img = document.createElement("img");
        img.setAttribute("src",elem.image);
        img.setAttribute("class","productImage");

        let desc = document.createElement("h3");
        desc.textContent = elem.desc;

        let type = document.createElement("p");
        type.textContent = elem.type;

        let price = document.createElement("p");
        price.textContent = elem.price;

        col.append(img,desc,type,price);

        container.append(col);

    })
}

display();