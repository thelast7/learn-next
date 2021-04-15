import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const notFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <div className="not-found">
      <h1>Oppsss..</h1>
      <h2>Halaman tidak ditemukan</h2>
      <p>silahkan kembali ke <Link href="/"><a>Home</a></Link></p>
    </div>
  )
}

export default notFound