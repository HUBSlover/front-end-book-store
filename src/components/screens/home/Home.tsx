import Meta from '@/components/ui/Meta'
import CatalogPagination from '@/components/ui/catalog/CatalogPagination'
import Layout from '@/components/ui/layout/Layout'
import { TypePaginationProducts } from '@/types/type.pagination.products'
import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title="Home">
			<Layout>
				<CatalogPagination title="Книги" products={products || []} />
			</Layout>
		</Meta>
	)
}

export default Home
