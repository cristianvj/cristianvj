import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';

import type { NextPage, GetStaticProps } from 'next';

import { getPosts } from '../services';

import { Post } from '../interfaces';

interface Props {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Cristian Villota J - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          { posts.map((post, id) => <PostCard postNode={post} key={id} />) }
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className='lg:sticky relative top-8'>
            <PostWidget categories={undefined} slug={undefined} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
};

export const getStaticProps: GetStaticProps = async() => {
  const posts: Post[] = (await getPosts());
  return { props: { posts } };
};

export default Home;