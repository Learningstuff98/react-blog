import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
  const { data } = useFetch('http://localhost:8000/blogs');

  return <div className="home">
    <BlogList
      blogs={data}
    />
  </div>
}

export default Home;
