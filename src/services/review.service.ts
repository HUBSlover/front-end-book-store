import { instance } from '@/api/api.interceptor'
import { IEmailPassword } from '@/store/user/user.interface'
import { ICategory } from '@/types/category.interface'
import axios from 'axios'

const REVIEWS = 'reviews'

type TypeData = {
	rating: number
	text: string
}

export const CategoryService = {
	async getAll() {
		return instance<ICategory[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async leave(productId: string, data: TypeData) {
		return instance<ICategory[]>({
			url: `${REVIEWS}/leave/${productId}}`,
			method: 'POST',
			data
		})
	}
}
