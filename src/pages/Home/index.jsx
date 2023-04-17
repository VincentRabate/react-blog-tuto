import React, {useState} from 'react';
import EmptyList from '../../components/common/EmptyList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/Searchbar';
import BlogList from '../../components/Home/BlogList';
import { blogList } from '../../config/data'

const Home = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    //search Submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

    //search for blogs ny category
const handleSearchResults=()=>{
    const allBlogs = blogList;
    const filteredBlogs=allBlogs.filter((blog)=>
        blog.category.toLowerCase().includes(searchKey.toLowerCase()
        .trim())
    );
    setBlogs(filteredBlogs);
};

    const handleClearSearch=()=>{
        setBlogs(blogList);
        setSearchKey('');
    };

  return (
    <div>
        {/* Page Header */}
        <Header />
        {/* Search Bar */}
        <SearchBar 
        value={searchKey} 
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(event)=>setSearchKey(event.target.value)}
        />
        {/* Blog List & Empty List */}
        {!blogs.length ? < EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  ); 
}

export default Home