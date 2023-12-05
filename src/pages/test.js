import { Link } from 'gatsby'
import React from 'react'

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <Link to="/broken">Broken</Link>
    </div>
  )
}

export default TestPage;