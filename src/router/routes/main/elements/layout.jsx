import { Outlet } from 'react-router-dom'

export default () =>
	<div>
		<div>Main layout</div>
		<div>
			<a href='/'>Home</a>
			<a href='/about'>About</a>
		</div>
		<div>
			<Outlet />
		</div>
	</div>
