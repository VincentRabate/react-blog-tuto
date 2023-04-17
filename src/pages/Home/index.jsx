import React from 'react'
import Header from '../../components/Home/Header'
import Searchbar from '../../components/Home/Searchbar'
import BlogList from '../../components/Home/BlogList'
import { blogList } from '../../config/data'

const Home = () => {
  return (
    <div>
        {/* Page Header */}
        <Header />
        {/* Search Bar */}
        <Searchbar />
        {/* Blog List & Empti List */}
        <BlogList blogs={blogList}/>
    </div>
  )
}

export default Home