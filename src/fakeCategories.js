export const desktopCategories = [
  { _id: "A001", name: "iMac" },
  { _id: "A002", name: "Mac-Mini" },
  { _id: "A003", name: "Dell" },
  { _id: "A003", name: "HP" },
  { _id: "A003", name: "Acer" },
  { _id: "A003", name: "Asus" }
];

export const laptopCategories = [
  { _id: "A001", name: "Macbook Pro" },
  { _id: "A002", name: "Macbook Air" },
  { _id: "A003", name: "Dell" },
  { _id: "A003", name: "HP" },
  { _id: "A003", name: "Acer" },
  { _id: "A003", name: "Asus" }
];

export const mobileCategories = [
  { _id: "A001", name: "iPhone" },
  { _id: "A002", name: "Samsung" },
  { _id: "A003", name: "OPPO" },
  { _id: "A003", name: "LG" },
  { _id: "A003", name: "Google" },
  { _id: "A003", name: "Nokia" }
];

export function getDesktopCategories() {
  return desktopCategories.filter(cat => cat);
}

export function getLaptopCategories() {
  return laptopCategories.filter(lap => lap);
}

export function getMobileCategories() {
  return mobileCategories.filter(lap => lap);
}
