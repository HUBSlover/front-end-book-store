import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import persistReducer from 'redux-persist/es/persistReducer'

const persistConfig = {
	key: 'book-store',
	storage,
	whitelist: ['cart']
}

// const rootReducer = combineReducers({
// 	cart: cartSlice.reducer,
// 	carousel: carouselSlice.reducer
// })

// const PersistReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
// 	reducer: persistReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
// 			}
// 		})
// })

//export const persistor = persistStore(store)

//export type TypeRootState = ReturnType<typeof rootReducer>
