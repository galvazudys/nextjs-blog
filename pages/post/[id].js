import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/post";

export default function Post() {
  return <Layout></Layout>;
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

  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
