import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import safetyBadge from '../public/safety_wuff_badge.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>OwOSHA</title>
        <meta name="description" content="Home of Safety Wuff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.owosha}>
          <Image
            className={styles.safetyBadge}
            src={safetyBadge}
            alt="Safety Wuff"
            priority
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{objectFit: 'contain'}}
          />
        </div>
      </main>
    </>
  )
}
