import { title } from 'process'
import { FC, PropsWithChildren } from 'react'

const Heading: FC<PropsWithChildren<IHeading>> = ({ className, children }) => {
	return <h1 className={`font-semibold ${className}`}>{title}</h1>
}
export default Heading
