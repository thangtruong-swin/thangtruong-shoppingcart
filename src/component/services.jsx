import listProducts from '../data';

export function getProductsType({id}) {
  // const filtered = listProducts.filter(
  //   (item) => item.type === type
  // ).map((item) => {item });
  
  const filtered = listProducts.filter(function (item) {
    // console.log("you are here: " + id);
    // console.log("you are here2: " + item.category);
    
    return item.type === id;
  })
}