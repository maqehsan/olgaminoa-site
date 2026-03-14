import { useState } from 'react'
import styles from './Wishlist.module.css'

const items = [
  {
    name: 'Babolat Pure Drive Gen11',
    note: 'The flagship racquet. 300g, 16x19 string pattern.',
    url: 'https://www.babolat.com/us/pure-drive-gen11-unstrung/101552.html',
    image: 'https://media.babolat.com/image/upload/f_auto,q_auto,c_pad,w_600,h_600/v1707748921/Product_Media/2025/Tennis/Racquets/Expert/101552-PD_GEN11_STRUNG-100-1-Face.png',
  },
  {
    name: 'Adidas F50 Elite FG',
    note: 'The F50 is back. Lightweight, low-profile, built for speed.',
    url: 'https://www.adidas.com/us/f50-elite-firm-ground-soccer-cleats/IE0596.html',
    image: 'https://www.footballbootsdb.com/logos/boots/2024/09/66ed858132958.jpg',
  },
  {
    name: 'Keychron K2 Pro',
    note: 'Compact 75% layout, hot-swappable, wireless. QMK/VIA support.',
    url: 'https://www.keychron.com/products/keychron-k2-pro-qmk-via-wireless-mechanical-keyboard',
    image: 'https://www.keychron.com/cdn/shop/products/Keychron-K2-Pro-QMK-VIA-Wireless-Mechanical-Keyboard-for-Mac-Windows-PBT-keycaps-PCB-screw-in-stabilizer-hot-swappable-red-switch_7f3edd88-59f3-4516-b953-05cdc3d3bece.jpg?v=1671268326',
  },
]

function WishlistCard({ item }) {
  const [imgError, setImgError] = useState(false)

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      <div className={styles.imageWrap}>
        {!imgError ? (
          <img
            src={item.image}
            alt={item.name}
            className={styles.image}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.imageFallback}>No image</div>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{item.name}</div>
        {item.note && <p className={styles.note}>{item.note}</p>}
      </div>
    </a>
  )
}

export default function Wishlist() {
  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Wishlist</h1>
        <p className={styles.sub}>Things I want. Click any card to go to the product.</p>
      </div>
      <div className={styles.grid}>
        {items.map((item) => (
          <WishlistCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}
