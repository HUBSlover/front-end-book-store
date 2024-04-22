import { TypePaginationProducts } from '@/types/type.pagination.products'
import { IProduct } from './product.inteface'

export interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}
