import Home from '@/components/screens/home/Home'
import { ProductService } from '@/services/product/product.service'
import { TypePaginationProducts } from '@/types/type.pagination.products'
import { GetStaticProps, NextPage } from 'next'
import { NULL } from 'sass'

const HomePage: NextPage<TypePaginationProducts> = () => {
	return <Home />
}

export const getStaticProps: GetStaticProps<
	TypePaginationProducts
> = async () => {
	const { data } = await ProductService.getAll({
		page: 5,
		perPage: 4
	})

	if (data)
		return {
			props: data
		}
	else
		return {
			props: NULL
		}
}

export default HomePage
