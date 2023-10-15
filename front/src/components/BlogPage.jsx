import { useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  return (
    <div>
      <h1>Blog</h1>
      <p>{params.id}</p>
    </div>
  );
};


export default Blog;