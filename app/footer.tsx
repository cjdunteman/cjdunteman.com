import Link from "next/link"

export default function Footer() {
    return (
        <footer>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/projects">Projects</Link>
            <p>CJ Dunteman ©</p>
        </footer>
    )
}