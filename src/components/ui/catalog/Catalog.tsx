import { IProduct } from '@/interfaces/product.inteface'
import { FC } from 'react'
import Loader from '../Loader'
import ProductItem from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader />

	return (
		<section>
			{title && <h1>{title}</h1>}
			{products.length ? (
				<div className="grid grid-cols-4 gap-10">
					{products.map((product) => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog
