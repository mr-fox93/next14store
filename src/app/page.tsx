import { getProducts } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProducts();
	return (
		<main className="container mx-auto mt-10">
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{products?.map((product) => (
					<div
						key={product.id}
						className="flex cursor-pointer flex-col items-center rounded-md border border-gray-300 p-4 transition-transform hover:scale-105"
					>
						<ProductList product={product} />
					</div>
				))}
			</div>
		</main>
	);
}
