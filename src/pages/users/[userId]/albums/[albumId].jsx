import { getAlbums, getPhotos, getUsers, getAlbumData } from "@/api/getData";
import Head from "next/head";
import Image from "next/image";
import style from "@/styles/Album.module.css";

 const getStaticPaths = async () => {
    const albums = await getAlbums();
    const paths = albums.map(album => {
        return {
            'params': { 
                'userId': String(album.userId),
                'albumId': String(album.id)
            }
        } 
    })
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
            <div className={style.album_wrapper}>
                <h2 className={style.album_title}>{album.title}</h2>
                <ul className={style.photos_wrapper}>
                    {
                        photos.map(photo => (
                            <>
                                <li className={style.photo}>
                                    <Image src={photo.url} alt={photo.title} width={200} height={200} />
                                </li>
                            </>
                        ))
                    }
                </ul>
            </div>
        </>
    )
  }

  export { getStaticPaths, getStaticProps };