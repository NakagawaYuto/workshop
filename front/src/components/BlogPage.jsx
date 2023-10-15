import * as React from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const baseURL = "https://jsonplaceholder.typicode.com/posts/"

const Blog = () => {
  // パラメータから値を取得する.
  const params = useParams();
  const [blog, setBlog] = React.useState(null);

  React.useEffect(() => 
    {
      axios.get(baseURL+String(params.id)).then((response) => {
        setBlog(response.data);
      });
    }, []);
  if (!blog) return null;
  return (
    <>
      <Grid container alignItems='center' justify='center' direction="column">
        <Grid item>
          <Typography variant="h3" gutterBottom style={{ margin: 20, fontFamily:'serif' }}>
            {blog.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" style={{ marginBottom: 15, fontFamily:'serif' }} >
            {blog.body}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" style={{ marginBottom: 15, fontFamily:'serif' }} >
            <a target="_blank" href="https://www.google.com/">
              https://www.google.com/
            </a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};


export default Blog;