import { instance } from '@/api/api.client'
import { EnumUrls } from '@/components/config/urls'
import { IReview } from '@/interfaces/review.interface'
import { CreateReviewData } from '@/types/create.review.data'
import axios from 'axios'

export const ReviewService = {
	async getAll() {
		try {
			// return await instance<IReview[]>({
			// 	url: EnumUrls.REVIEWS,
			// 	method: 'GET'
			// })
			return axios.get<IReview[]>(EnumUrls.REVIEWS)
		} catch (error) {
			console.log(error)
		}
	},

	async leave(productId: string, data: CreateReviewData) {
		try {
			// return await instance<IReview[]>({
			// 	url: `${EnumUrls.REVIEWS}/leave/${productId}}`,
			// 	method: 'POST',
			// 	data
			// })
			return axios.get<IReview[]>(`${EnumUrls.REVIEWS}/leave/${productId}}`)
		} catch (error) {
			console.log(error)
		}
	},

	async getAverageByProduct(productId: string) {
		try {
			// return await instance<number>({
			// 	url: `${EnumUrls.REVIEWS}/average-by-product/${productId}`,
			// 	method: 'GET'
			// })
			return axios.get<number[]>(
				`${EnumUrls.REVIEWS}/average-by-product/${productId}`
			)
		} catch (error) {
			console.log(error)
		}
	}
}
