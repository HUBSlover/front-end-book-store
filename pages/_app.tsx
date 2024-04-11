import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '@/assets/styles/globals.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

// import { persistor, store } from '@/store/store'
// import { PersistGate } from 'redux-persist/integration/react'

// export default function App({ Component, pageProps }: AppProps) {
// 	return (
// 		<QueryClientProvider client={queryClient}>
// 			<Provider store={store}>
// 				<PersistGate loading={null} persistor={persistor}>
// 					<Component {...pageProps} />
// 				</PersistGate>
// 			</Provider>
// 		</QueryClientProvider>
// 	)
// }
