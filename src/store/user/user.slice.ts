import { getStoreLocal } from '@/utils/local-storage'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
	user: getStoreLocal('user'),
	isLoading: false
}

// export const userSlice{
// ice = createSlice({
// 	name: 'user',
// 	initialState,
// 	reducers: {},
// 	extraReducers: (builder) => {
// 		builder.addCase(register.pending, (state) => {
// 			state.isLoading = true
// 		}),
// 			builder.addCase(register.fulfilled, (state, action) => {}),
// 	}
// })

/*LOGIN*/

/*AUTH*/
