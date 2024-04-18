import { ICatalogPagination } from '@/interfaces/catalog.interface.pagination'
import { FC } from 'react'
import Button from '../button/Button'
import ProductItem from './product-item/ProductItem'
import SortDropdown from './product-item/SortDropdown'

const CatalogPagination: FC<ICatalogPagination> = ({ products, title }) => {
	// const [page, setPage] = useState(1)

	// const [sortType, setSortType] = useState<EnumProductSort>(
	// 	EnumProductSort.NEWEST
	// )

	// const { data, isLoading } = useQuery(['products', sortType], () =>
	// 	ProductService.getAll({
	// 		page,
	// 		perPage: 4,
	// 		sort: sortType
	// 	})
	// )

	return (
		<section>
			{title && <h1 className="font-bold">{title}</h1>}
			<SortDropdown />
			{products.length ? (
				<>
					<div className="grid grid-cols-4 gap-10">
						{products.map((product) => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className="text-center mt-16">
						<Button size="sm" variant="orange">
							Загрузить ещё
						</Button>
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
