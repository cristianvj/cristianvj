import React, { useState, useEffect, FC } from 'react';
import Link from 'next/link';

import moment from 'moment';
import { getRecentPosts, getSimilarPosts } from '../../services';

import { Category, Post } from '../../interfaces';
import Image from 'next/image';
import { grpahCMSImageLoader } from '../../utils/utils';

interface Props {
  categories?: Category[] | string[];
  slug?: string;
};

const PostWidget: FC<Props> = ({ categories, slug }) => {
  
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (slug && categories) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    };
  }, [slug]);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {
          slug? 'Related Posts' : 'Recent Posts'
        }
      </h3>
      {
        relatedPosts.map( post => (
          <div key={post.title} className='flex items-center w-full mb-4'>
            <div className="w-15 flex-none">
              <Image
                unoptimized
                loader={grpahCMSImageLoader}
                src={post.featuredImage.url} 
                alt="" 
                width= {"60"}
                height= {"60"}
                className="align-middle rounded-full" 
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">
                { moment(post.createdAt).format('MMM DD, YYYY') }
              </p>
              <Link href={`/post/${post.slug}`} key={post.title}>
                <a className = {"text-md"}> { post.title } </a>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default PostWidget;