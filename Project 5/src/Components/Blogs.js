import React, { useContext } from 'react'
import Spinner from './Spinner';
import { AppContext } from '../Context/AppContext';

const Blogs = () => {

const {loading, posts} = useContext(AppContext);

return (
    <div className='w-11/12 max-w-[550px] py-5 flex flex-col gap-y-6 mt-10 mb-10'>
        {
            loading ? (<Spinner/>) : (
                posts.length === 0 ? (<div><p>No Posts Available</p></div>) 
                                   : (posts.map((post) => 
                                   (
                                    <div key={post.id} className='border p-4 m-2 shadow-sm hover:scale-105 transition-all  duration-800'>
                                        <p className='font-bold text-md mb-1'>{post.title}</p>
                                        <p className='text-sm'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
                                        <p className='text-sm'>Posted on <span>{post.date}</span></p>
                                        <p className='text-[14px] mt-2 mb-2'>{post.content}</p>
                                        <div className='text-xs text-blue-600 font-bold underline flex gap-[2px] flex-wrap'>
                                            {post.tags.map((tag,index) => {return <span key={index}>{`#${tag}`}</span>})}
                                        </div>
                                    </div>
                                   )))
            )
        }
    </div>
  )
}

export default Blogs