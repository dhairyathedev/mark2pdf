import Link from "next/link";
import 'animate.css';
import Head from "next/head";

export default function Custom404() {
    return(
        <div className="dark:bg-black dark:text-white duration-300 flex justify-center items-center h-screen flex-col">
            <Head>
                <title>
                    404: This page could not be found
                </title>
            </Head>
            <h1 className="text-[6vw] font-semibold">
                Ummm! It looks like you are lost.
            </h1>
            <Link href="/">
                <a className="text-[6vw] text-green-600 font-black animate__animated animate__heartBeat">
                    Go back to the homepage
                </a>
            </Link>
        </div>
    )
}