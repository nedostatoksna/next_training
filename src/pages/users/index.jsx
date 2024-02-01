import { getUsers } from "@/api/getData";
import Head from "next/head";
import Link from "next/link";
import style from "@/styles/Users.module.css";

 const getStaticProps = async() => {
    const users = await getUsers();
    return {
        props: {
            users
        }
    }
 }

export default function UsersPage({ users }) {
    return (
        <>
           <Head>
                <title>users page</title>
            </Head>
            <ul className={style.users_wrapper}>
                {
                    users.map(user => (
                        <li 
                            key={user.id}
                            className={style.user}
                        >
                            <Link 
                                href={`/users/${user.id}`}
                                className={style.name}
                            >
                                {user.name}  
                            </Link>
                            <p className={style.company}>{user.company.name}</p>
                        </li>
                    ))
                }
            </ul>
        </>
     
    )
  }

  export { getStaticProps };
