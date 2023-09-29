import routes from './routes'
import create from './create'
import { RouterProvider } from 'react-router-dom'

const router = create(routes)

export default () => <RouterProvider router={router} />
