import { instance } from '@/api/api.interceptor'
import { IEmailPassword } from '@/store/user/user.interface'
import { IAuthResponse } from '@/types/user.interface'
import axios from 'axios'

// export const AuthService = {
// 	async main(type: 'login' | 'register', data: IEmailPassword) {
// 		const response = await instance<IAuthResponse>({
// 			url: `/auth/${type}`,
// 			method: 'POST',
// 			data
// 		})

// 		return response.data
// 	}
// }
