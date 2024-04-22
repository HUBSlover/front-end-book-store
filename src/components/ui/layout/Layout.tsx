import { FC, PropsWithChildren } from 'react'
import Sidebar from './sidebar/Sidebar'
import { Header } from './header/Header'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<Header />
			<div className="grid grid-flow-col">
				<Sidebar />
				<main className="p-12">{children}</main>
			</div>
		</div>
	)
}

export default Layout
