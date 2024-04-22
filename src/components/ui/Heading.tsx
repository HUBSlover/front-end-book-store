import { IHeading } from '@/interfaces/heading.interface'
import { FC, PropsWithChildren } from 'react'

const Heading: FC<PropsWithChildren<IHeading>> = ({ className, title }) => {
	return (
		<h1
			style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
			//className={`font-bold ${className}`}
		>
			{title}
		</h1>
	)
}
export default Heading
