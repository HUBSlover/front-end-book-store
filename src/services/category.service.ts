import { instance } from '@/api/api.interceptor'
import { IEmailPassword } from '@/store/user/user.interface'
import { ICategory } from '@/types/category.interface'
import axios from 'axios'

const CATEGORIES = 'categories'

export const CategoryService = {
	async getAll() {
		return instance<ICategory[]>({
			url: CATEGORIES,
			method: 'GET'
		})
	},

	async getById(id: string) {
		return instance<ICategory[]>({
			url: `${CATEGORIES}/${id}}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<ICategory[]>({
			url: `${CATEGORIES}/by-slug/${slug}}`,
			method: 'GET'
		})
	}
}
