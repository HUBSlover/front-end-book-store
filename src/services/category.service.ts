import { instance } from '@/api/api.client'
import { EnumUrls } from '@/components/config/urls'
import { ICategory } from '@/interfaces/category.interface'
import axios from 'axios'

export const CategoryService = {
	async getAll() {
		try {
			// return await instance<ICategory[]>({
			// 	url: EnumUrls.CATEGORIES,
			// 	method: 'GET'
			// })
			return axios.get<ICategory[]>(EnumUrls.CATEGORIES)
		} catch (error) {
			console.log(error)
		}
	},

	async getById(id: string) {
		try {
			// return await instance<ICategory[]>({
			// 	url: `${EnumUrls.CATEGORIES}/${id}}`,
			// 	method: 'GET'
			// })
			return axios.get<ICategory[]>(`${EnumUrls.CATEGORIES}/${id}}`)
		} catch (error) {
			console.log(error)
		}
	},

	async getBySlug(slug: string) {
		try {
			// return await instance<ICategory[]>({
			// 	url: `${EnumUrls.CATEGORIES}/by-slug/${slug}}`,
			// 	method: 'GET'
			// })
			return axios.get<ICategory[]>(`${EnumUrls.CATEGORIES}/by-slug/${slug}}`)
		} catch (error) {
			console.log(error)
		}
	}
}
