import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'
import { IUser } from '@/types/user.interface'

const USERS = 'users'

type TypeData = {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}

export const CategoryService = {
	async getProfile() {
		return instance<IUser[]>({
			url: `${USERS}/profile}`,
			method: 'GET'
		})
	},

	async updateProfile(data: TypeData) {
		return instance<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data
		})
	},

	async toggleFavorite(productId: string) {
		return instance<IUser>({
			url: `${USERS}/profile/favorites/${productId}}`,
			method: 'PATCH'
		})
	}
}
