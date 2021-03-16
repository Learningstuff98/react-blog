import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setBlogs(data)
    })
  }, []);

  return <div className="home">
    <BlogList
      blogs={blogs}
    />
  </div>
}

export default Home;
