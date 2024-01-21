import Link from "next/link";

export default function Header() {
    return (
        <header>
            <ul>
                <li><Link href="/AboutUs">about us</Link></li>
                <li><Link href="/">home</Link></li>
                <li><Link href="/posts">posts</Link></li>
            </ul>
        </header>
    )
  }