import { getPosts, getUsers, getUserData } from "@/api/getData";
import Head from "next/head";
import style from "@/styles/UsersPosts.module.css";

 const getStaticPaths = async() => {

    const users = await getUsers();
    const usersPaths = users.map(user => ({
            params: { userId: user.id.toString() }
        })
    )
    return {
        paths: usersPaths,
        fallback: false 
    }
 }

 const getStaticProps = async({ params }) => {
    const pageTitle = `user ${params.userId} posts`
    const posts = await getPosts()
    const user = await getUserData(params.userId)
    
    return { props: {
      pageTitle,
      posts,
      user
    }}
  }

export default function UserPostsPage({ pageTitle, posts, user }) {

    return (
        <>
           <Head>
                <title>{pageTitle}</title>
            </Head>
                <ul className={style.posts_wrapper}>
                    {
                    posts
                        .filter(post => post.userId === user.id)
                        .map(post => (
                        <li 
                            key={post.id}
                            className={style.post_card}
                        >
                            <h2 className={style.post_user}>{user.name}</h2>
                            <h3 className={style.header}>{post.title}</h3>
                            <p className={style.content}>{post.body}</p>
                        </li>
                        ))
                    }
                </ul>
               
        </>
     
    )
  }

  export { getStaticPaths, getStaticProps };
