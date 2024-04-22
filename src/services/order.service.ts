import { instance } from '@/api/api.client'
import { EnumUrls } from '@/components/config/urls'
import { IOrder } from '@/interfaces/order.interface'
import axios from 'axios'

export const OrderService = {
	async getAll() {
		try {
			// return await instance<IOrder[]>({
			// 	url: EnumUrls.ORDERS,
			// 	method: 'GET'
			// })
			return axios.get<IOrder[]>(EnumUrls.ORDERS)
		} catch (error) {
			console.log(error)
		}
	}
}
