import { Layout, Home, About } from './elements'

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
