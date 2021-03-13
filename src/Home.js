import { useState } from 'react';

function Home() {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  return <div className="home">
    {blogs.map((blog) => {
      return <div className="blog-preview" key={blog.id}>
        <div>
          {blog.title}
        </div>
        Author: {blog.author}
      </div>
    })}
  </div>
}

export default Home;
