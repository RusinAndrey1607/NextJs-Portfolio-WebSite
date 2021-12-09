import { NextPage } from 'next'
import { UserType } from '..'
import MyContainer from '../../components/MyContainer'
import styles from './../../styles/user.module.css'


const User: NextPage<{ user: UserType }> = ({ user }) => {

    return (
        <MyContainer title={`User: ${user.name}`}>
            <div className={styles.user}>
                <p className={styles.user__option}>UserName : {user.name} </p>
                <p className={styles.user__option}>Phone : {user.phone}</p>
                <p className={styles.user__option}>Email : {user.email}</p>

                <p className={styles.user__option}>Address : {user.address.city}</p>

            </div>
        </MyContainer>

    )
}

export async function getServerSideProps({ params }: any) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()

    // Pass post data to the page via props
    return { props: { user } }
}

export default User