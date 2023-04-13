
function products(n,e,t,i,d,p){
    this.name = n;
    this.email = e;
    this.desc = d;
    this.type = t;
    this.image = i;
    this.price = p;
};

const btn = document.querySelector("#addProduct");

const name = document.querySelector("#name");

const email = document.querySelector("#email");

const type = document.querySelector("#typeName");

const image = document.querySelector("#image");

const desc = document.querySelector("#description");

const price = document.querySelector("#price");

let data = JSON.parse(localStorage.getItem("products")) || [];



const storeData = (e) => {

    e.preventDefault();

    let Name = name.value;
    let Email = email.value;
    let Type = type.value;
    let Desc = desc.value;
    let Image = image.value;
    let Price = price.value;

    let newProduct = new products(Name,Email,Type,Image,Desc,Price);

    data.push(newProduct);

    console.log(data);

    localStorage.setItem("products",JSON.stringify(data));
}

btn.addEventListener("click",storeData);