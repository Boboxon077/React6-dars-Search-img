import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

function App() {

  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "Contact",
          element: <Contact />
        },

      ]
    }
  ])

  return <RouterProvider router={roots} />
}

export default App 