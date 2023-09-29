import { createBrowserRouter } from 'react-router-dom'

const createNode =
	({ element: Element, children, ...route }) => ({
		element: <Element />,
		children: children?.map(createNode),
		...route
	})

export default (routes) => createBrowserRouter(
	routes.map(createNode)
)
