// #BND2 {
//     background-image: url("../assets/icons/BND2.png");
// }


const brands = require("../assets/data/brands_dummy") 


const dummy = (arr) => {
    arr.forEach(element => {
        console.log(`#BND${element.id}background-image: url("../assets/icons/${element.id}");}`) 
    });
};

dummy(brands);