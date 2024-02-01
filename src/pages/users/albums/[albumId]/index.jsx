import { getAlbums, getPhotos } from "@/api/getData";
import Head from "next/head";

 const getStaticPaths = async() => {
    const albums = await getAlbums();
    const paths = albums.map(album => ({
            params: { albumId: album.id.toString() }
        })
    )
    return {
        paths,
        fallback: false 
    }
 }

 const getStaticProps = async({ params }) => {
    const album = await getAlbumData(params.albumId);
    const photos = await getPhotos(params.albumId);
    
    return { props: {
      album,
      photos
    }}
  }

  export default function AlbumPage({ album, photos }) {

    return (
        <>
           <Head>
                <title>{"album " + album.id}</title>
            </Head>
                <h1>album page</h1>
                <h2>{album.title}</h2>
                {
                    photos.map(photo => (
                        <li>
                            <Image src={photo.url} />
                        </li>
                    ))
                }
        </>
    )
  }

  export { getStaticPaths, getStaticProps };