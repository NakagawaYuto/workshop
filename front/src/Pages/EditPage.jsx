import * as React from 'react';
import axios from "axios";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import BlogCardsEdit from '../components/BlogCardsEdit';
import BlogAddButton from '../components/BlogAddButton';


const baseURL = "https://jsonplaceholder.typicode.com/posts"

const Edit = () => {
  const [blogs, setBlogs] = React.useState(null);
  const [dialog, setDialog] = React.useState(false);

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
      {dialog}
      <Grid container alignItems='center' justify='center' direction="column">
        <Grid item>
          <Typography variant="h5" gutterBottom style={{ margin: 20, fontFamily:'serif' }}>
            好きな本を投稿しよう！
          </Typography>
        </Grid>
      </Grid>
      <BlogCardsEdit Blogs={blogs}></BlogCardsEdit>
      <BlogAddButton setClickFlag={setDialog}></BlogAddButton>
    </>
  );
};


export default Edit;