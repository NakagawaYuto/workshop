import * as React from 'react';
import axios from "axios";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';


import BlogCardsEdit from '../components/BlogCardsEdit';
import BlogAddButton from '../components/BlogAddButton';


const baseURL = "http://127.0.0.1:8080/blog/"

const Edit = () => {
  const [blogs, setBlogs] = React.useState(null);
  const navigate = useNavigate();
  function goToAddPage() {
    navigate('/add/');
  }

  // 初回ロード時の処理を記述する.
  React.useEffect(() => 
    {
      axios.get(baseURL).then((response) => {
        setBlogs(response.data);
      });
    }, []);
  if (!blogs) return null;

  return (
    <>
      <Grid container alignItems='center' justify='center' direction="column">
        <Grid item>
          <Typography variant="h5" gutterBottom style={{ margin: 20, fontFamily:'serif' }}>
            好きな本を投稿しよう！
          </Typography>
        </Grid>
      </Grid>
      <BlogCardsEdit Blogs={blogs}></BlogCardsEdit>
      <BlogAddButton onClick={goToAddPage}></BlogAddButton>
    </>
  );
};


export default Edit;