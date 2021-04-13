// pada anchor tag ( <a></a> ) gaperlu ditambahkan href
// import <Link> dan tambahin href disitu

import Link from 'next/link'

const navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  )
}

export default navbar