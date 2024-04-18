import { IProduct } from './product.inteface'

export interface ICatalogPagination {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}
