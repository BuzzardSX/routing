import all from './all'

const Home = () => <div>Home (index) page</div>

const About = () => <div>About page</div>

export default [
	{
		path: '/',
		element: Home
	},
	{
		path: '/about',
		element: About
	},
	all
]
