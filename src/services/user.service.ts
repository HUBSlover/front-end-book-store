import { instance } from '@/api/api.client'
import { EnumUrls } from '@/components/config/urls'
import { IFullUser } from '@/interfaces/full.user.interface'
import { IUser } from '@/interfaces/user.interface'
import { UserData } from '@/types/user.data'
import axios from 'axios'

export const UserService = {
	async getProfile() {
		try {
			// return await instance<IFullUser>({
			// 	url: `${EnumUrls.USERS}/profile`,
			// 	method: `GET`
			// })
			return axios.get<IFullUser[]>(`${EnumUrls.USERS}/profile`)
		} catch (error) {
			console.log(error)
		}
	}
}

export const CategoryService = {
	async getProfile() {
		try {
			// return await instance<IUser[]>({
			// 	url: `${EnumUrls.USERS}/profile}`,
			// 	method: 'GET'
			// })
			return axios.get<IUser[]>(`${EnumUrls.USERS}/profile`)
		} catch (error) {
			console.log(error)
		}
	},

	async updateProfile(data: UserData) {
		try {
			// return await instance<IUser>({
			// 	url: `${EnumUrls.USERS}/profile`,
			// 	method: 'PUT',
			// 	data
			// })
			return axios.get<IUser[]>(`${EnumUrls.USERS}/profile`)
		} catch (error) {
			console.log(error)
		}
	},

	async toggleFavorite(productId: string) {
		try {
			return await instance<IUser>({
				url: `${EnumUrls.USERS}/profile/favorites/${productId}}`,
				method: 'PATCH'
			})
			return axios.patch<IUser[]>(
				`${EnumUrls.USERS}/profile/favorites/${productId}}`
			)
		} catch (error) {
			console.log(error)
		}
	}
}
