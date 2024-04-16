import Meta from '@/components/ui/Meta'
import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'
import { TypePaginationProducts } from '@/interfaces/product.inteface'
import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title="Home">
			<Layout>
				<h1></h1>
				<Catalog title="Products" products={products || []} />
			</Layout>
		</Meta>
	)
}

export default Home
