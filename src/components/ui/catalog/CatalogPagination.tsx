import { EnumUrls } from '@/components/config/urls'
import { ICatalogPagination } from '@/interfaces/catalog.interface.pagination'
import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/types/enum.product.sort'
import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import Loader from '../Loader'
import Button from '../button/Button'
import ProductItem from './product-item/ProductItem'
import SortDropdown from './product-item/SortDropdown'
import Heading from '../Heading'

const CatalogPagination: FC<ICatalogPagination> = ({ title }) => {
	const [page, setPage] = useState(1)

	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const { data: response, isLoading } = useQuery({
		queryKey: [EnumUrls.PRODUCTS, sortType, page],
		queryFn: () => {
			return ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType
			})
		}
	})

	if (isLoading) return <Loader />

	console.log(title)

	return (
		<section>
			{title && <Heading className="mb-5" title={title} />}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			{response?.data.products ? (
				<>
					<div className="grid grid-cols-4 gap-10">
						{response?.data.products.map((product) => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className="text-center mt-16">
						{Array.from({ length: response.data.products.length / 4 }).map(
							(_, index) => {
								const pageNumber = index + 1
								return (
									<Button
										size="sm"
										variant={page === pageNumber ? 'orange' : 'white'}
										onClick={() => setPage(pageNumber)}
										className="mx-3"
									>
										{pageNumber}
									</Button>
								)
							}
						)}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
