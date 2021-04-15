// disini adalah tempat awal url jika project di jalankan
// tiap file didalam pages akan membuat route nya otomatis
// bahkan jika file itu ada didalam folder
// maka foldernya bakalan jadi nama route
// tapi file dengan nama index akan seacara otomatis jadi halaman awal,
// dari sebuah route ( / ) contoh : localhost:3000/channel

import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Halaman awal</h1>
      <p className={styles.text}>lorem ipsum</p>
      <p className={styles.text}>lorem ipsum</p>
      <Link href="">
        <a className={styles.btn}>See another</a>
      </Link>
    </div>
  )
}
