import Meta from '@/components/ui/Meta'
import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'
import { TypePaginationProducts } from '@/types/type.pagination.products'
import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title="Home">
			<Layout>
				<Catalog title="Products" products={products || []} isPagination />
			</Layout>
		</Meta>
	)
}

export default Home
