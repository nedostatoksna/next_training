import { getPosts } from "@/api/getData";
import Head from "next/head";
import Link from "next/link";
import style from "@/styles/Posts.module.css";

 const getStaticProps = async() => {
    const posts = await getPosts();
    return {
        props: {
            posts
        }
    }
 }

export default function PostsPage({ posts }) {
    return (
        <>
           <Head>
                <title>posts page</title>
            </Head>
            <div className={style.posts_page_wrapper}>
                <h1 className={style.header}>Posts page</h1>
                <div className={style.post_card}>
                    <ul className={style.posts_wrapper}>
                        {
                            posts.map(post => (
                                <li 
                                    key={post.id}
                                    className={style.post_wrapper}
                                >
                                    <Link href={`/posts/${post.id}`}>
                                        {post.title}
                                    </Link>
                                    <p className={style.post_content}>
                                        {post.body}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                
            </div>
        </>
    )
  }

  export { getStaticProps };
