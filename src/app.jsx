import Router from './router'
import { Suspense } from 'react'

export default () =>
	<Suspense fallback={<div>Loading...</div>}>
		<Router />
	</Suspense>
