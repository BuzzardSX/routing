import { Home } from './elements'
import { Outlet } from 'react-router-dom'

const Layout = () =>
	<div>
		<Outlet />
	</div>

export default {
	path: '/',
	element: Layout,
	children: [
		{
			index: true,
			element: Home
		},
		{
			path: '/about',
			element: About
		}
	]
}
