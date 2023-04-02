const form = document.getElementById("form");

const tbody = document.getElementById("tbody");

const priceHead = document.getElementById("total-price");

let totalPrice = 0;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let inventoryObj = {
        Name:form.name.value,
        Category:form.category.value,
        Brand:form.brand.value,
        Price:form.price.value,
        DeliveredBy:form.deliveredBy.value,
    };
    console.log(inventoryObj);

    prodChecker(inventoryObj);

});

const prodChecker = (obj) => {
    if(obj.Name == "" || obj.Category == "" || obj.Brand == "" || obj.Price == "" || obj.DeliveredBy == "") {
        alert("Fill all the required details");
    }else {
        const tr = document.createElement("tr");

        const objName = document.createElement("td");
        objName.textContent = obj.Name;

        const objcategory = document.createElement("td");
        objcategory.textContent = obj.Category;

        const objBrand = document.createElement("td");
        objBrand.textContent = obj.Brand;

        const objPrice = document.createElement("td");
        objPrice.textContent = obj.Price;

        const objPriceSegment = document.createElement("td");
        const segment = priceSegment(obj.Price);
        objPriceSegment.textContent = segment;

        const objDelivered = document.createElement("td");
        objDelivered.textContent = obj.DeliveredBy;

        const deleteObj = document.createElement("td");
        deleteObj.textContent = "Delete";
        deleteObj.style.color = "red";
        deleteObj.addEventListener("click", function (elem) {
            const num = elem.target.parentNode.childNodes[3].textContent;

            elem.target.parentNode.remove();

            removeTotal(num);
        })

        tr.append(objName,objcategory,objBrand,objPrice,objDelivered,objPriceSegment,deleteObj);

        tbody.append(tr);

        totalInventoryAmount();
    }
}


const priceSegment = (price) => {
    if(price>40000) {
        return "Expensive";
    }else if(price>=10000 && price<=40000) {
        return "Affordable";
    }else {
        return "Cheap";
    }
}


const totalInventoryAmount = () => {
    totalPrice = totalPrice + Number(form.price.value);
    console.log(form.price.value);

     return priceHead.innerText = `Total Price ₹ ${totalPrice}`;

}

const removeTotal = (num) => {
    totalPrice = totalPrice - Number(num);

   return  priceHead.innerText = `Total Price ₹ ${totalPrice}`;
}