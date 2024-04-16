import { FC, PropsWithChildren } from 'react'
import Sidebar from './sidebar/Sidebar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<div
				className="grid"
				style={{
					gridTemplateColumns: '1fr 4fr'
				}}
			>
				<Sidebar />
				<main>{children}</main>
			</div>
		</div>
	)
}

export default Layout
