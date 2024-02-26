import { Product } from "@/types/productTypes";

export const ProductListItemDescription = ({ product: { title, price, category } }: Product) => {
	return (
		<div>
			<div>
				<h3 className="text-sm font-semibold text-red-700">title:{title}</h3>
				<p className="text-sm text-red-500">
					<span className="text-red-900">category:{category}</span>
				</p>
			</div>
			<p className="text-sm font-medium text-red-900">
				<span className="text-red-900">price: {price}</span>
			</p>
		</div>
	);
};
