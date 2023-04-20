import Image from 'next/image';
import React from 'react';
import { FC } from 'react';
import { Author } from '../../interfaces';

interface Props {
  author: Author;
}

const Author: FC<Props> = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-orange-600 bg-opacity-80'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          alt={author.name}
          unoptimized
          height='100px'
          width='100px'
          className='align-middle rounded-full'
          src={author.photo.url}
        />
      </div>
      <h3 className='satisfy-font text-white my-4 text-4xl font-bold'>
        {author.name}
      </h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author;