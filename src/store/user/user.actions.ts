//import { AuthService } from '@/services/auth/auth.service'
import { IAuthResponse } from '@/types/user.interface'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IEmailPassword } from './user.interface'

/*REGISTER*/
// export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
// 	'auth/register',
// 	async (data, thumkApi) => {
// 		try {
// 			const response = await AuthService.main('register', data)
// 			return response
// 		} catch (error) {
// 			return thunkApi.rejectWithValue(error)
// 		}
// 	}
// )

/*LOGIN*/

/*CKECK AUTH*/
