import { Home } from './elements'
import { Outlet } from 'react-router-dom'

const Layout = () =>
	<div>
		<Outlet />
	</div>

const About = () => <div>About page</div>

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
