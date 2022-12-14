import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SearchResult({ spots }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>お一人様旅行プランナー</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>提案されたプランはこちら</h2>
        {spots.map((spot, index) => (
          <div key={spot.name}>
            {index !== 0 && <p>↓電車で移動</p>}
            <div className="spot">
              <div className="spot_time">
                <p>{spot.name}</p>
                <p>{spot.time}</p>
              </div>
              <div className="spot_image">
                {/* <Image */}
                {/*   src={`https://muit-travel-backend.herokuapp.com${spot.picture}`} */}
                {/*   alt={spot.name} */}
                {/*   width={200} */}
                {/*   height={200} */}
                {/* /> */}
              </div>
              <p className="spot_description">{spot.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const queryParams = new URLSearchParams(context.query)
  const spots = await fetch(
    'https://muit-travel-backend.herokuapp.com/api/routes/search?' + queryParams
  ).then((res) => res.json())

  return {
    props: {
      spots,
    },
  }
}
