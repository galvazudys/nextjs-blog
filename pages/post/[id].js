import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import Head from "next/head";
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({postData}) {
  return (
  <Layout>
    <Head>
        <title>{postData.title}</title>
    </Head>
    <article>
        <h1 className={utilStyles.headingX}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
            <Date dateString={postData.date}/>
        </div>
        <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}/>
    </article>
   
    <br/>
    {postData.id}
    <br/>
    
    
  </Layout>);
}

export async function getStaticPaths() {
  //Retunr a list of possible value for id
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //Getch necessary data for the bloh post using params.id

  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
