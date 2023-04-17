// import React from 'react';
// import BlogItem from './BlogItem';
// import "./style.css"

// const BlogList = ({blogs}) => (
//     <div className='blogList-wrap'>
//         {blogs.map(blog=>
//         <BlogItem key={blog.id} blog={blog.id} />)}
//         </div>
//   )

// export default BlogList

import React from 'react';
import BlogItem from './BlogItem';
import './style.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
