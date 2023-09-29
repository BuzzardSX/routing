const Home = () => <div>Home (index) page</div>

const About = () => <div>About page</div>

const NotFound = () => <div>Page not found</div>

export default createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '*',
		element: <NotFound />
	}
])
