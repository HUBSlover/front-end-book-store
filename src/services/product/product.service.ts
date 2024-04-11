import { instance } from '@/api/api.interceptor'
import { IProduct } from '@/types/product.inteface'
import { PRODUCTS, TypeProductDataFilters } from './product.types'

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		return instance<IProduct[]>({
			url: PRODUCTS,
			method: 'GET',
			params: queryData
		})
	},

	/*?????????????????????????????????????????*/
	/*Посмотрим, потом мб в гетол его тоже*/
	async getSimilar(id: string) {
		return instance<IProduct[]>({
			url: `${PRODUCTS}/similar/${id}`,
			method: 'GET'
		})
	},

	async getById(id: string) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'GET'
		})
	}
}
