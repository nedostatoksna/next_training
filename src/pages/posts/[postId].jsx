import { getPostData, getPosts } from "@/api/getData";
import Head from "next/head";
import style from "@/styles/Post.module.css";

 const getStaticProps = async({params}) => {
    const post = await getPostData(params.postId);
    return { 
        props: { post }
    }
 }

 const getStaticPaths = async() => {

    const posts = await getPosts();
    const paths = posts.map(post => ({
            params: { postId: post.id.toString() }
        })
    )
    return {
        paths,
        fallback: false 
    }
 }

export default function PostPage({ post }) {

    return (
        <>
           <Head>
                <title>{"Post " + post.id}</title>
            </Head>
            <div className={style.post_wrapper}>
                <h2 className={style.post_title}>{post.title}</h2>
                <p className={style.post_content}>{post.body}</p>

            </div>
        </>
    )
  }

  export { getStaticPaths, getStaticProps };