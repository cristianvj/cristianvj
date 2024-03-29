import React, { useEffect, useRef, useState, FC } from 'react';

import { submitComment } from '../../services';

import { Comment } from '../../interfaces';

interface Props {
  slug: string;
};

const CommentsForm: FC<Props> = ({ slug }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef<HTMLTextAreaElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const emailEl = useRef<HTMLInputElement>(null);
  const storeDataEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameEl.current!.value = window.localStorage.getItem('name') || "";
    emailEl.current!.value = window.localStorage.getItem('email') || "";
  }, []);

  const handleCommentSubmission = () => {
    setError(false);
    
    const { value: comment } = commentEl.current || {value: null};
    const { value: name } = nameEl.current || {value: null};
    const { value: email } = emailEl.current || {value: null};
    const { checked: storeData } = storeDataEl.current || {value: null};

    if(!comment || !name || !email) {
      setError(true);
      return;
    };

    const commentObj: Comment = {
      name, 
      email, 
      comment, 
      slug
    };

    if(storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
      });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a comment
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea 
          ref={commentEl} 
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
          name="comment"
          placeholder='Comment'
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input 
          type="text" 
          ref={nameEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='name'
        />  
        <input 
          type="email" 
          ref={emailEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='email'
        />  
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label 
            htmlFor="storeData" 
            className="text-gray-500 cursor-pointer ml-2"
          >
            Save my e-mail and name for the next time I comment.
          </label>
        </div>
      </div>
      {
        error && <p className='text-xs text-red-500'>Todos los campos son requeridos</p>
      }
      <div className="mt-8">
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='transition duration-500 ease hover:bg-orange-900 inline-block bg-orange-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
        >
          Post Comment
        </button>
        {
          showSuccessMessage && 
            <span
              className='text-xl float-right font-semibold mt-3 text-green-500'
            >
              Comment submitted for review
            </span>
        }
      </div>
    </div>
  )
};

export default CommentsForm;