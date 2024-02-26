import { Product } from "@/types/productTypes";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ product }: Product) => {
	return (
		<ul className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 ">
			<ProductListItem product={product} />
		</ul>
	);
};
