export const desktopCategories = [
	{ _id: "D001", name: "iMac" },
	{ _id: "D002", name: "Mac-Mini" },
	{ _id: "D003", name: "Dell" },
	{ _id: "D004", name: "HP" },
	{ _id: "D005", name: "Acer" },
	{ _id: "D006", name: "Asus" },
];

export const laptopCategories = [
	{ _id: "L001", name: "MacbookPro" },
	{ _id: "L002", name: "MacbookAir" },
	{ _id: "L003", name: "Dell XPS" },
	{ _id: "L004", name: "HP-Omen" },
	{ _id: "L005", name: "Laptop-Acer" },
	{ _id: "L006", name: "ASus-Zenbook" },
];

export const mobileCategories = [
	{ _id: "M001", name: "iPhone" },
	{ _id: "M002", name: "Samsung" },
	{ _id: "M003", name: "OPPO" },
	{ _id: "M004", name: "LG" },
	{ _id: "M005", name: "Google" },
	{ _id: "M006", name: "Nokia" },
];

export function getDesktopCategories() {
	return desktopCategories.filter((cat) => cat);
}

export function getLaptopCategories() {
	return laptopCategories.filter((lap) => lap);
}

export function getMobileCategories() {
	return mobileCategories.filter((mol) => mol);
}
