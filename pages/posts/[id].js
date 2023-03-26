import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostDataById } from "../../lib/post";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

const Post = ({ postData }) => {
    console.log("postData.title", postData.title);
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </Layout>
    );
};

export async function getStaticPaths() {
    const paths = getAllPostIds();
    // paths must is in form [{params: {id: "id-string"}}]
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostDataById(params.id);
    return {
        props: { postData },
    };
}

export default Post;
