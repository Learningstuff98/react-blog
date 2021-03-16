function BlogList(props) {
  return <div className="blog-list">
    {props.blogs.map((blog) => {
      return <div className="blog-preview" key={blog.id}>
        <div>
          {blog.title}
        </div>
        Author: {blog.author}
      </div>
    })}
  </div>
}

export default BlogList;
