import { ICatalog } from '@/interfaces/catalog.interface'
import { FC } from 'react'
import Loader from '../Loader'
import Button from '../button/Button'
import ProductItem from './product-item/ProductItem'
import SortDropdown from './product-item/SortDropdown'

const Catalog: FC<ICatalog> = ({
	products,
	isLoading,
	title,
	isPagination = false
}) => {
	if (isLoading) return <Loader />

	return (
		<section>
			{title && <h1 className="mb-5">{title}</h1>}
			{isPagination && <SortDropdown />}
			{products.length ? (
				<>
					<div className="grid grid-cols-4 gap-10">
						{products.map((product) => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					{isPagination && <Button variant="orange">Load more</Button>}
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog
