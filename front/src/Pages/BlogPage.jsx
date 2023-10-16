import * as React from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import Draggable from 'react-draggable';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';

import CommentButton from '../components/CommentButton';
import CommentCards from '../components/CommentCards';


function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Blog = () => {
  // パラメータから値を取得する.
  const params = useParams();
  const [blog, setBlog] = React.useState(null);
  const [comments, setComments] = React.useState(null);

  const blogURL = "http://127.0.0.1:8080/blog/" + String(params.id) + '/'
  const commentURL = "http://127.0.0.1:8080/comment/"

  const comments_for_this_blog = []

  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = React.useState({
    comment: '', // コメントフィールド
    blog: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const dataToSend = {
      comment: formData.comment, // コメントフィールドの値
      blog: blog.id, // 隠し値
    };
    // const response = await axios.post('http://127.0.0.1:8080/comment/', dataToSend);

    // CSRFトークンを取得
    const csrfToken = window.csrfToken;

    try {
      // POSTリクエストを送信
      const response = await axios.post(
        'http://127.0.0.1:8080/comment/',
        dataToSend, 
        {
          headers: {
            'X-CSRFToken': csrfToken,  // CSRFトークンをヘッダーに含める
            'Content-Type': 'application/json',
          },
        }
      );
  
      // レスポンスを処理する
      console.log('Response:', response.data);
    } 
    catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  React.useEffect(() => 
    {
      axios.get(blogURL).then((response) => {
        setBlog(response.data);
      });
      axios.get(commentURL).then((response) => {
        setComments(response.data);
      });
    }, []);
  if (!blog) return null;
  for (let i = 0; i < comments.length; i++) {
    if(comments[i].blog == blog.id){
      comments_for_this_blog.push(comments[i])
    }
  }
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
            {blog.url}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" style={{ marginBottom: 15, fontFamily:'serif' }} >
            {blog.body}
          </Typography>
        </Grid>
        <CommentCards Comments={comments_for_this_blog}></CommentCards>
        <CommentButton onClick={handleClickOpen}></CommentButton>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Comment
          </DialogTitle>
          <form onSubmit={handleSubmit}>
            <input type="text" name='comment' onChange={handleChange} placeholder="Comment"/>
            <button type="submit">Submit</button>
          </form>
        </Dialog>
      </Grid>
    </>
  );
};


export default Blog;