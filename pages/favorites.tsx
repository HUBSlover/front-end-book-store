import Meta from '@/components/ui/Meta'
import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/layout'

const FavoritePage = () => {
	return (
		<Meta title="Favorites">
			<Layout>
				<Catalog products={[]} title="Favorites" />
			</Layout>
		</Meta>
	)
}
