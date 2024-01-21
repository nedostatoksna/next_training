import { getPosts } from "@/api/posts";
import Head from "next/head";
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
            <main>
                <h1> Posts page</h1>
                <ul>
                    {
                        posts.map(post => (
                            <li key={post.id}>
                      
                            <a href={`/posts/${post.id}`}>
                                {post.title}
                            </a>

                            </li>
                        ))
                    }
                </ul>
            </main>

        </>
     
    )
  }

  export { getStaticProps };
