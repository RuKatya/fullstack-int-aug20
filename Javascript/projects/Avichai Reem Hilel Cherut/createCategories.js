const categoryBox = document.querySelector("#categoryBox")
let filter = []

products.forEach(product => {
    if (filter.indexOf(product.category) == -1) {
        filter.push(product.category)
    }
})
let html = ""
filter.sort()
for (i = 0; i < filter.length; i++) {
    html += `<option class="category" data-id="${filter[i]}">${filter[i]}</option>`
}
categoryBox.innerHTML = html
let category = document.querySelectorAll('.category')


let test = document.querySelector("#test")
let html1 = ""
let productName = ""
let filterButtons = document.querySelector("#filterButtons")

let currentCategory = [];

function handleClick(e) {
    productName = e.target.value
    filterButtons.innerHTML = '';
    test.innerHTML = ""
    products.forEach(product =>{
        if(productName == product.category){
            console.log (product.category)
            currentCategory.push(product);
            test.innerHTML += `<p>Product Category: ${product.category}, Product Model: ${product.model}, Price: ${product.price}, Recommendations: ${product.recommendations}</p>`
            // filterButtons.innerHTML = '';
            filterButtons.innerHTML += `<button id='${product.brand}'>${product.brand}</button>`;
        }  
    })

    let afterFilter =[]

    filterButtons.addEventListener('click', e => {
        let chosenFilter = (e.composedPath()[0].id)
        currentCategory.forEach(product =>{

            

            if(chosenFilter == product.brand){
                // console.log (product.category)
                // currentCategory.pop(product);
                // afterFilter.push(product);
                // if(afterFilter.indexOf(product.brand) == -1){
                    
                // }
            
                test.innerHTML =''
                test.innerHTML += `<p>Product brand: ${product.brand}, Product Model: ${product.model}, Price: ${product.price}, Recommendations: ${product.recommendations}</p>`
             
                // filterButtons.innerHTML += `<button >${product.brand}</button>`;
            }
        })

      });


    // for (i = 0; i < products.length; i++) {
    //     if (productName == products[i].category) {
    //         test.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}</p>`
            
    //     }
    // }
}


// function handlePrice(e) {
//     products.sort((a, b) => a.price - b.price)
//     test.innerHTML = ""
//     for (i = 0; i < products.length; i++) {
//         if (productName == products[i].category) {
//             test.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}</p>`

//         }
//     }
// }

// function handleRecommend(e) {
//     products.sort((a, b) => a.recommendations - b.recommendations)
//     test.innerHTML = ""
//     for (i = 0; i < products.length; i++) {
//         if (productName == products[i].category) {
//             test.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}</p>`
//         }
//     }
// }

// filter.forEach(product => {
//     if (filter.indexOf(product.category) == -1) {
//         filter.push(product.category)
//     }
// })
// let filterModel = []
// products.forEach(product => {
//     if (filterModel.indexOf(product.model) == -1) {
//         filterModel.push(product.model)
//     }
// })
// console.log(filterModel)