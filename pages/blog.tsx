import { PostCard, Categories, PostWidget } from '../components';

import type { NextPage, GetStaticProps } from 'next';

import { getPosts } from '../services';

import { Post, PropsPostNode } from '../interfaces';
import { FeaturedPosts } from '../sections';

const Blog: NextPage<PropsPostNode> = ({ posts }) => (
  <div className="container mx-auto px-5 mb-8">
    <FeaturedPosts />
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
      <div className='lg:col-span-8 col-span-2'>
        { posts.map((post, id) => <PostCard post={post.node} key={id} />) }
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

export const getStaticProps: GetStaticProps = async() => {
  const posts: Post[] = (await getPosts());
  return { props: { posts } };
};

export default Blog;