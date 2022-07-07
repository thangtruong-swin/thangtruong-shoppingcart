import listProducts from '../data';

export function getProductsType(type) {
  return listProducts.find(
    (item) => item.type.trim() === type.trim()
  );
}