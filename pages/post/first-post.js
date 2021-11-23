import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/john-towner-3Kv48NS4WUU-unsplash.jpg"
        height={200}
        width={500}
        alt="my picture"
      />
    </>
  );
}
