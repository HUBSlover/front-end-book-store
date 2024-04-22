import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
//import Search from './Search'
//import HeaderCart from './cart/HeaderCart'

export const Header: FC = () => {
	return (
		<header
			className="bg-secondary w-full py-6 px-6 grid"
			style={{
				gridTemplateColumns: '1fr 3fr 1.2fr'
			}}
		>
			<Link href="/">
				<Image
					priority
					width={180}
					height={37}
					src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-PNG-Photos.png"
					alt="Book Store"
				/>
			</Link>
			{/* <Search /> */}
			<div className="flex items-center justify-end gap-10">
				<Link href="/favorites" className="text-white"></Link>
				{/* <HeaderCart />
				<HeaderProfile /> */}
			</div>
		</header>
	)
}
