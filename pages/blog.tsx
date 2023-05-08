import { PostCard, Categories, PostWidget } from '../components';

import type { NextPage } from 'next';

import { getPosts } from '../services';

import { Post, PropsPostNode } from '../interfaces';
import { FeaturedPosts } from '../sections';
import { useEffect, useState } from 'react';

const Blog: NextPage = () => {

  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
      getPosts()
        .then((result) => setPosts(result));
  }, []);

  return (
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
)}

export default Blog;