

/************ Product class *******************/
console.log("*******Product test*********");

// Create 1 product using the constructor and show it in the console
console.log("Create 1 product using the constructor");
let temp = new Product("Banana","Its a banana","https://img.freepik.com/vector-gratis/platano-aislado-simple_1308-125007.jpg"
,"no se",12,2.20,"fruit")
    console.log(temp)
// Try to set the uuid and catch the exception showing the message in the console
console.log("Try to set the uuid and catch the exception");
try {
  temp.uuid = "help me"
} catch (e) {
    console.log(e);
}

// Try to create a product with an invalid property and catch the exception showing the message in the console
console.log("Try to create a product with an invalid property and catch the exception");
try {
    let temp2 = new Product("Banana","Its a banana","https://img.freepik.com/vector-gratis/platano-aislado-simple_1308-125007.jpg"
    ,"no se",12,-2.20,"fruit")
} catch (e) {
    console.log(e);
}

// Test cleanObject method and show the result in the console
console.log("Test cleanObject method");
let test3 ={
["_name"]:"Orange",
["_uuid"]:"dahsdgkashdkashdhas",
["_imageUrl"]:"NO",
["_Category"]:"Fruit",
["_pricePerUnit"]:12.4,
["_stock"]:20,
["_unit"]:"kg",
["_description"]:"Its an orange",
["_personalProblems"]:true
}
console.log(test3)
Product.cleanObject(test3)
console.log(test3)

// Test createFromObject method and show the result in the console
console.log("Test createFromObject method");
test3 ={
    ["_name"]:"Orange",
    ["_imageUrl"]:"NO",
    ["_Category"]:"Fruit",
    ["_pricePerUnit"]:12.4,
    ["_stock"]:20,
    ["_unit"]:"kg",
    ["_description"]:"Its an orange",
    ["_personalProblems"]:true
    }
    console.log(test3)
    test3 = Product.createFromObject(test3)
    console.log(test3)

// Test toHtml methods printing the result in the console
    // Product.toHtmlRow   change the order of the properties
    console.log("Product.toHtmlRow   change the order of the properties");
    console.log(Product.toHtmlRow(test3, ["_name", "_uuid","_unit"]))
    
    // Product.toHtmlDiv   hide two properties
    console.log("Product.toHtmlDiv   hide two properties");
    console.log(Product.toHtmlDiv(test3, ["_name", "_uuid","_unit"]))
    
    // object.toHTML    test it with any of the previous methods
    console.log("object.toHTML    test it with any of the previous methods");
    console.log(test3.toHTML(Product.toHtmlDiv))

    
/************ ProdList *******************/
console.log("*******ProdList test*********");

// add a product to the list and show the list in the console using ProdList.log

console.log("add a product to the list");
ProdList.createProduct(temp)
ProdList.log()
// create a product and add it to the list using the method addProduct and show the list in the console using ProdList.log
console.log("create a product and add it to the list using the method addProduct");
ProdList.addProduct("Apple","An apple",`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXPQZYfQaetIj_95FyfqHSieL83f1hfBNLw&usqp=CAU`,"kg",20,1.1,"Fruit",)
ProdList.log();
// get a product by id and show it in the console
console.log("get a product by id");
ProdList.log(ProdList.getProductById(temp.uuid))

// Create a for loop to add 5 products with this data
    let names = ["watermelon", "onion", "avocado", "banana", "white bread"];
    let descriptions = ["from Mexico", "from Puebla", "from Michoacan", "from Aguascalientes", "from Jalisco"];
    let units = ["piece", "kg", "kg", "kg", "piece"];
    let categories = ["fruit", "vegetable", "vegetable", "fruit", "bread"];
    let prices = [80.50, 125.00, 98.00, 32.00, 62.50];
    let stocks = [15, 5, 10, 8, 25];
    let images = [`https://i5.walmartimages.com/asr/a83e3e11-9128-4d98-8f6f-8c144e0d8e5e.a5fafdef89b7430bd13cae9037294d87.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF`,
`https://images.immediate.co.uk/production/volatile/sites/30/2019/08/Onion-72ea178.jpg?resize=768,574`,
`https://media.post.rvohealth.io/wp-content/uploads/sites/3/2021/07/Stocksy_txpa387b205vt9300_Medium_3358820_thumb-732x549.jpg`,
`https://target.scene7.com/is/image/Target/GUEST_cf4773e6-afec-4aa1-89e7-74b7dfc09973`,
`https://www.goldmedalbakery.com/content/uploads/2019/12/Jumbo-22oz-White.jpg`,
]; // ADD IMAGES TO THE PRODUCTS:
let test = new Product(names[0],descriptions[0],images[0],units[0],stocks[0],prices[0],categories[0])
ProdList.createProduct(test)
for (let index = 1; index < names.length; index++) {
    ProdList.addProduct(names[index],descriptions[index],images[index],units[index],stocks[index],prices[index],categories[index]);
}


//Display products in HTML  (Do it with View.renderList() and View.renderTable() )
    // Display the list of products in the HTML (use the method renderList)
    //console.log("Display the list of products in the HTML (use the method renderList)");
    View.renderList()

    //Display the table of products in the HTML (use the method renderTable)
    //console.log("Display the table of products in the HTML (use the method renderTable)");
    View.renderTable()


// Update the product list, change some value of a product
console.log("Update the product list, change some value of a product");
test._stock=33333;
console.log(test)
ProdList.updateProduct(test.uuid,test)
ProdList.log()

// Delete a product from the list
console.log("Delete a product from the list");
ProdList.deleteProduct(temp.uuid);
ProdList.log()

// Filter by category (includes) and show the result in the console
console.log("Filter by category (includes)");
let filets = [{ property:"_Category", 
                value: "fruit",
                operator: "includes"
}]
ProdList.log(ProdList.filterProducts(filets,true))



// Filter by category (includes) and price and show the result in the console
    // Filter by category and price > 90
    console.log("Filter by category and price > 90");
    filets = [{ property:"_Category", 
                value: "vegetable",
                operator: "includes"
},
{ property:"_pricePerUnit", 
    value: 90,
    operator: ">"
}]
ProdList.log(ProdList.filterProducts(filets,true))
    // Filter by category and price < 90
    console.log("Filter by category and price < 90");
    filets = [{ property:"_Category", 
                value: "fruit",
                operator: "includes"
},
{ property:"_pricePerUnit", 
    value: 90,
    operator: "<"
}]
ProdList.log(ProdList.filterProducts(filets,true))
    // Filter by category or price > 90
    console.log("Filter by category or price > 90");
    filets = [{ property:"_Category", 
                value: "fruit",
                operator: "includes"
},
{ property:"_pricePerUnit", 
    value: 90,
    operator: ">"
}]
ProdList.log(ProdList.filterProducts(filets,false))

// Filter by multiple properties
    // intersection = true
    console.log("Filter with multiple properties intersection = true");
    filets = [{ property:"_Category", 
                value: "vegetable",
                operator: "includes"
},
{ property:"_pricePerUnit", 
    value: 90,
    operator: ">"
},{property:"_unit", 
value: "kg",
operator: "includes"
}]
ProdList.log(ProdList.filterProducts(filets,true))
    
    
    // intersection = false
    console.log("Filter with multiple properties intersection = false");
    filets = [{ property:"_Category", 
                value: "fruit",
                operator: "includes"
},
{ property:"_pricePerUnit", 
    value: 90,
    operator: ">"
},{property:"_unit", 
value: "kg",
operator: "includes"
}]
ProdList.log(ProdList.filterProducts(filets,false))



// ******** ShoppingCart ******** //
console.log("*******ShoppingCart test*********");
let cart = new ShoppingCart();

// Add about 4 items (using addItem) and show the shopping cart in the console
console.log("Add about 4 items (using addItem)");
cart.addItem(ProdList.products[0].uuid,3)
cart.addItem(ProdList.products[4].uuid,7)
cart.addItem(ProdList.products[3].uuid,8)
cart.addItem(ProdList.products[2].uuid,9)
console.table(cart.productProxies);

// Update quantity of a product in the cart and show the shopping cart in the console
console.log("Update quantity of a product in the cart");
cart.addItem(ProdList.products[2].uuid,3)
cart.updateItem(ProdList.products[4].uuid,7)
console.table(cart.productProxies);
// Delete a product, and show the shopping cart in the console
console.log("Delete a product");
cart.removeItem(ProdList.products[3].uuid)
console.table(cart.productProxies);


// Calculate the total of the shopping cart and show it in the console
console.log("Calculate the total of the shopping cart");
console.log(cart.calculateTotal());

// Optional: Show the shopping cart in the HTML (use the method showShoppingCart) in div#cart
ShoppingCart.showShoppingCart((arg)=>{document.querySelector(`#cart`).innerHTML = arg;},cart.toHtml())

// ******** Self  assessment ******** //
// This object will help you to keep track of your progress
// Change the value of each property to true if you have completed the item


let evaluation = {
    "productClass": {
        "constructor": true,
        "getters": true,
        "setters": true,
        "cleanObject": true,
        "createFromObject": true,
        "toHtmlRow": true,
        "toHtmlDiv": true,
        "toHTML": true
    },
    "prodListClass": {
        "addProduct": true,
        "createProduct": true,
        "getProducts": true,
        "getProductById": true,
        "updateProduct": true,
        "deleteProduct": true,
        "toHtmlList": true,
        "toHtmlTable": true,
        "filterProducts": true
    },
    "shoppingCart": {
        "constructor": true,
        "getters": true,
        "setters": true,
        "addItem": true,
        "updateItem": true,
        "deleteItem": true,
        "calculateTotal": true,
        "showShoppingCart": true
    }
}

let conclusions = `
  This activity was verry stressfull but i was a fine activty to understand the use of js in html.
  The main problems I encountered were that the objects when caling ol returning, since it was a return and not a specific variable, it detectet it as an object and i coudnt use properties fast
  and that the instruccion where a little confuccion on some parts. But appart,from that it was an interestin activity(I did have to find some functions on the internet, W3school is amazing)
  and it made me see how it not so easy to make a web page

`