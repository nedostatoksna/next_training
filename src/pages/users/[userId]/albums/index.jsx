import { getAlbums, getUsers, getUserData } from "@/api/getData";
import Head from "next/head";
import Link from "next/link";
import style from "@/styles/UserAlbums.module.css";

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
    const pageTitle = `user ${params.userId} albums`
    const albums = await getAlbums()
    const user = await getUserData(params.userId)
    
    return { props: {
      pageTitle,
      albums,
      user
    }}
  }

export default function UserAlbumsPage({ pageTitle, albums, user }) {

    return (
        <>
           <Head>
                <title>{pageTitle}</title>
            </Head>
                <ul className={style.albums_wrapper}>
                    {
                    albums
                        .filter(album => album.userId === user.id)
                        .map(album => (
                        <li 
                            key={album.id}
                            className={style.album_wrapper}
                        >
                        <p className={style.album_user}>
                            Album by {user.name}
                        </p>
                            <Link 
                                href={`/users/${album.userId}/albums/${album.id}`}
                                className={style.album_link}
                            >
                                {album.title}
                            </Link>
                        </li>
                        ))
                    }
                </ul>
               
        </>
     
    )
  }

  export { getStaticPaths, getStaticProps };