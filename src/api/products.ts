export const getProducts = async () => {
	type ProductResponseItem = {
		id: string;
		title: string;
		price: number;
		category: string;
		image: string;
	};

	const response = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const products = (await response.json()) as ProductResponseItem[];
	return products;
};
