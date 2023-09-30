import { Outlet, Link } from 'react-router-dom'

export default () =>
	<div>
		<div>Main layout</div>
		<div>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
		</div>
		<div>
			<Outlet />
		</div>
	</div>
