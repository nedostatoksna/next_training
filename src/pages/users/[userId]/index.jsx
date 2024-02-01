import { getUserData, getUsers } from "@/api/getData";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import style from "@/styles/User.module.css";

 const getStaticProps = async({params}) => {
    const user = await getUserData(params.userId);
    return { 
        props: { user }
    }
 }

 const getStaticPaths = async() => {
    const users = await getUsers();
    const paths = users.map(user => ({
            params: { userId: user.id.toString() }
        })
    )
    return {
        paths,
        fallback: false 
    }
 }

export default function UserPage({ user }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading</div>
    }
    const fetcher = (url) => fetch(url).then(res => res.json);
    const { data, error } = useSWR('/api/user', fetcher);
    if (!data) {
        return <div>loading...</div>
    }
    if (error) {
        return <div>error</div>
    }
    if (router.isFallback) {
        return <div>error</div>
    }
    return (
        <div className={style.user_page_wrapper}>
           <Head>
                <title>{user.name}</title>
            </Head>
            <div className={style.user_info_wrapper}>
                <div className={style.names_wrapper}>
                    <h2 className={style.user_name}>{user.name}</h2>
                    <h3 className={style.user_company}>{user.company.name}</h3>
                </div>
                <div className={style.contacts_wrapper}>
                    <h4>{user.email}</h4>
                    <h5>{user.website}</h5>
                    <h6>{user.phone}</h6>
                </div>
            </div>
            <hr />
            <div className={style.links_wrapper}>
                <p className={style.link}>
                    <Link href={`/users/${user.id}/posts`}>
                        posts by {user.name}
                    </Link>
                </p>
                <p className={style.link}>
                    <Link href={`/users/${user.id}/albums`}>
                        albums by {user.name} 
                    </Link>
                </p>
            </div>
        </div>
    )
  }

  export { getStaticPaths, getStaticProps };