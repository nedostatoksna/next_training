import { getPosts } from "@/api/posts";
import Head from "next/head";
import Link from "next/link";
// меняются ли данные (posts, как массив данных)??
 // если данные страницы меняются со временем:
// const getServerSideProps = async() => {
//     const posts = await getPosts();
//     return {
//         props: {
//             posts
//         }
//     }
// }
// если данные неизменны:
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
                <title>It is posts page</title>
            </Head>
                <h1> Posts page</h1>
                <ul>
                    {
                        posts.map(post => (
                            <li key={post.id}>
                      
                            <Link href={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                            {/* <Link href={{
                                pathname:`/posts/${post.id}`,
                                query: {
                                    slug: post.title
                                }
                            }}>{post.title}</Link> */}

                            </li>
                        ))
                    }
                </ul>

        </>
     
    )
  }

  export { getStaticProps };
