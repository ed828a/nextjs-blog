import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/post";
import Date from "../components/date";

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <div className={styles.container}>
                <Head>
                    <title>{siteTitle}</title>
                    {/* <link rel="icon" href="/favicon.ico" /> */}
                </Head>

                <main>
                    <p className={styles.title}>
                        Learn <Link href="/posts/first-post">This page!</Link>
                    </p>

                    <p className={styles.description}>
                        Get started by editing <code>pages/index.js</code>
                    </p>

                    <section
                        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                    >
                        <h2 className={utilStyles.headingLg}>Blog</h2>
                        <ul className={utilStyles.list}>
                            {allPostsData.map(({ id, date, title }) => (
                                <li className={utilStyles.listItem} key={id}>
                                    <Link href={`/posts/${id}`}>{title}</Link>
                                    <br />
                                    <small className={utilStyles.lightText}>
                                        <Date dateString={date} />
                                    </small>
                                </li>
                            ))}
                        </ul>
                    </section>
                </main>

                <footer style={{ marginTop: "3rem" }}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{" "}
                        <img
                            src="/vercel.svg"
                            alt="Vercel"
                            className={styles.logo}
                        />
                    </a>
                </footer>
            </div>
        </Layout>
    );
}

export async function getStaticProps(props) {
    const allPostsData = getSortedPostsData();

    return {
        props: { allPostsData },
    };
}
