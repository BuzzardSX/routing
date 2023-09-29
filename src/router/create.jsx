import { createBrowserRouter } from 'react-router-dom'

const createRoute =
	({ element: Element, children, ...route }) => ({
		element: <Element />,
		children: children?.map(createRoute),
		...route
	})

export default (routes) => createBrowserRouter(
	routes.map(createRoute)
)
