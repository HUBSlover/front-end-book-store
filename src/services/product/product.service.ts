import { instance } from '@/api/api.client'
import { EnumUrls } from '@/components/config/urls'
import { IProduct } from '@/interfaces/product.inteface'
import { TypePaginationProducts } from '@/types/type.pagination.products'
import { TypeProductDataFilters } from '../../types/type.product.data.filters'
import axios from 'axios'

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		try {
			// return await instance<TypePaginationProducts>({
			// 	url: EnumUrls.PRODUCTS,
			// 	method: 'GET',
			// 	params: queryData
			// })
			return instance.get<TypePaginationProducts>(EnumUrls.PRODUCTS, {
				params: queryData
			})
		} catch (error) {
			console.log(error)
		}
	},

	/*?????????????????????????????????????????*/
	/*Посмотрим, потом мб в гетол его тоже*/
	async getSimilar(id: string) {
		try {
			// return await instance<IProduct[]>({
			// 	url: `${EnumUrls.PRODUCTS}/similar/${id}`,
			// 	method: 'GET'
			// })
			return instance.get<IProduct[]>(`${EnumUrls.PRODUCTS}/similar/${id}`)
		} catch (error) {
			console.log(error)
		}
	},

	async getById(id: string) {
		try {
			// return await instance<IProduct>({
			// 	url: `${EnumUrls.PRODUCTS}/${id}`,
			// 	method: 'GET'
			// })
			return instance.get<IProduct>(`${EnumUrls.PRODUCTS}/${id}`)
		} catch (error) {
			console.log(error)
		}
	}
}
