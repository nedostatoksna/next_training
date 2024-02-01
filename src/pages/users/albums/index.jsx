import { getAlbums, getUsers, getUserData } from "@/api/getData";
import Head from "next/head";
import Link from "next/link";

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
                <ul>
                    {
                    albums
                        .filter(album => album.userId === user.id)
                        .map(album => (
                        <li key={album.id}>
                        Album by {user.name}
                            <Link href={`/users/${album.userId}/albums/${album.id}`}>
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