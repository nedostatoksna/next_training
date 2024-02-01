import Link from "next/link";
import style from "@/styles/NavBoard.module.css";

export default function NavBoard() {
    return (
        <div className={style.nav_wrapper}>
            <ul>
                <hr />
                <li className={style.link_wrapper}>
                    <Link className={style.nav_link} href="/users">/users</Link>
                    <p className={style.nav_text}>страница пользователей</p>
                </li>
                <hr />
                <li className={style.link_wrapper}>
                    <Link className={style.nav_link} href="/users/5">/users/5</Link>
                    <p className={style.nav_text}>страница конкретного пользователя</p>
                </li>
                <hr />
                <li className={style.link_wrapper}>
                    <Link className={style.nav_link} href="/posts">/posts</Link>
                    <p className={style.nav_text}>страница постов</p>
                </li>
                <hr />
                <li className={style.link_wrapper}>
                    <Link className={style.nav_link} href="/posts/5">/posts/5</Link>
                    <p className={style.nav_text}>страница конкретного поста</p>
                </li>
                <hr />
                <li className={style.link_wrapper}>
                    <Link className={style.nav_link} href="/users/5/posts">/users/5/posts</Link>
                    <p className={style.nav_text}>страница постов конкретного пользователя</p>
                </li>
                <hr />
                <li className={style.link_wrapper}>
                    <Link className={style.nav_link} href="/users/5/albums">/users/5/albums</Link>
                    <p className={style.nav_text}>страница альбомов конкретного пользователя</p>
                </li>
                <hr />
            </ul>
        </div>
    )
  }
