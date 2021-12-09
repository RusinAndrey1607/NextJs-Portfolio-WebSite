import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MyContainer from '../components/MyContainer'
import styles from '../styles/Home.module.css'


type HomePropsType = {
  users: UserType[]
}
const Home: NextPage<HomePropsType> = ({ users }) => {
  return (
    <MyContainer title='React Home Page'>
      <main className={styles.main}>
        <ul className={styles.users__list}>
          {users.map((user: UserType) => <li key={user.id} className={styles.users__list__item}>Name : <Link href={`/users/${user.id}`}><a className={styles.user__name__link}>{user.name} </a></Link></li>)}
        </ul>
      </main>
    </MyContainer>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}

export type UserType = {

  "id": number
  "name": string
  "username": string
  "email": string
  "address": {
    "street": string
    "suite": string
    "city": string
    "zipcode": string
    "geo": {
      "lat": string
      "lng": string
    }
  },
  "phone": string
  "website": string
  "company": {
    "name": string
    "catchPhrase": string
    "bs": string

  }
}
export default Home

