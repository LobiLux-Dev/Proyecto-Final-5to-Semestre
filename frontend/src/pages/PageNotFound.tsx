import { useEffect } from 'react'

const PageNotFound = () => {
  useEffect(() => {
    document.title = 'B-LOQ - Page Not Found'
  })

  return <h1>Page Not Found</h1>
}

export default PageNotFound
