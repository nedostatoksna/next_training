import Image from "next/image";
import Link from "next/link";
import logo from "../../public/JSONPlaceholderLogo.png";

export default function Header() {
    return (
        <header>
            <Image
                src={logo}
                alt="JSON Placeholder logo"
                width={200}
                height={100}
            />
            <ul>
                <li><Link href="/">to homepage</Link></li>
            </ul>
        </header>
    )
  }
