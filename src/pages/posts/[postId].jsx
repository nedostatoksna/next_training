import { getPostData, getPosts } from "@/api/posts";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

 const getStaticProps = async({params}) => {
    const post = await getPostData(params.postId);
    return { 
        props: { post },
        // revalidate: 10, // частота пересборки страницы
        // notFound: !post, // 404 проверка на то что страница есть
        // redirect: {
        //     destination: "/",
        //     permanent: false
        // } // переводит на другие страницы
    }
 }

 // инкрементальная статическая регенерация - пересборка страницы без ребилда


 const getStaticPaths = async() => {

    const posts = await getPosts();
    const paths = posts.map(post => ({
            params: { postId: post.id.toString() }
        })
    )
    return {
        paths,
        fallback: false // - 404
        // true - отправить на промежуточную страницу
        // "blocking" - белая страница и перезагрузка. 
        // и роботам это нравится

    }
 }

export default function PostPage({ post }) {
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
        <>
           <Head>
                <title>Post</title>
            </Head>
            <main>
                <h1>Post page</h1>
                <h2>{post.title}</h2>
                <h3>{post.body}</h3>

            </main>

        </>
     
    )
  }

  export { getStaticPaths, getStaticProps };