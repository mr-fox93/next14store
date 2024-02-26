import { Product } from "@/types/productTypes";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export const ProductListItem = ({ product }: Product) => {
	return (
		<li>
			<article>
				<ProductCoverImage alt={product.title} src={product.image} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
