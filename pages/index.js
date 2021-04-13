// disini adalah tempat awal url jika project di jalankan
// tiap file didalam pages akan membuat route nya otomatis
// bahkan jika file itu ada didalam folder
// maka foldernya bakalan jadi nama route
// tapi file dengan nama index akan seacara otomatis jadi halaman awal,
// dari sebuah route ( / ) contoh : localhost:3000/channel

export default function Home() {
  return (
    <div>
      <h1>Halaman awal</h1>
    </div>
  )
}
