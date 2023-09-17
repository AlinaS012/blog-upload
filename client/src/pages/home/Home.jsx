import { useState, useEffect, useContext } from 'react'
import Header from '../../components/header/Header'
import BlogPost from '../../components/blogPost/BlogPost'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios'
import './home.css'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const location = useLocation()
  const url = "http://localhost:8800"

  useEffect(() => {
    const fetchData = async () => {
      
      // try {
        
        if (location.state) {
          const res = await axios.get(url + `/blogs/?category=${location.state}`);
          setBlogs(res.data);
         
        } else {
          const res = await axios.get(url + '/blogs/?category=Life');
          setBlogs(res.data);
        }
        
      // } catch (err) {
      //   console.log(err);
      // }
    };
    fetchData();
  }, [location.state]);

  // const {cat} = useContext(CatContext)
  // console.log(cat)
  return (
    <div className='home'>

      <Header />
      <div className="homePosts">
        <div className="posts">
          {blogs.map(blog => (
            <BlogPost
              id={blog._id}
              image={blog.image}
              title={blog.title}
              desc={blog.desc}
              category={blog.category}
              time={blog.createdAt} />
          ))
          }
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Home
