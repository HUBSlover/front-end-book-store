// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import {
// 	FLUSH,
// 	PAUSE,
// 	PERSIST,
// 	persistStore,
// 	PURGE,
// 	REGISTER,
// 	REHYDRATE
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// import { cartSlice } from './cart/cart.slice'
// import persistReducer from 'redux-persist/es/persistReducer'

// const persistConfig = {
// 	key: 'book-store',
// 	storage,
// 	whitelist: ['cart']
// }

// // const rootReducer = combineReducers({
// // 	cart: cartSlice.reducer,
// // 	carousel: carouselSlice.reducer
// // })

// //const persistReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
// 	reducer: persistReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
// 			}
// 		})
// })

// export const persistor = persistStore(store)

// //export type TypeRootState = ReturnType<typeof rootReducer>
