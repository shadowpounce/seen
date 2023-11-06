import { Home } from './Home/Home'
import { Privacy } from './Privacy/Privacy'
import { Terms } from './Terms/Terms'

export const pages = [
  {
    title: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    title: 'Terms and conditions',
    path: '/terms-and-conditions',
    element: <Terms />,
  },
  {
    title: 'Privacy policy',
    path: '/privacy-policy',
    element: <Privacy />,
  },
]
