import { createBrowserRouter } from 'react-router-dom'

export default (routes) => createBrowserRouter(
	routes.map(
		({ element: Element, ...route }) => ({
			element: <Element />,
			...route
		}))
)
