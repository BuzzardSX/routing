import { Outlet } from 'react-router-dom'

export default () =>
	<div>
		<div>Main layout</div>
		<div>
			<Outlet />
		</div>
	</div>
