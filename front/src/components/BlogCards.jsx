import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';

const BlogCards = ({ Blogs }) => {
  const navigate = useNavigate();
  var Cards = [];
  for (let i = 0; i < Blogs.length; i++) {
    const blog = Blogs[i]
    Cards.push(
      <Grid item>
        <Card sx={{ maxWidth: 800 }} elevation={4} style={{margin: 10}}>
          <CardActionArea onClick={() => { navigate('/blog/'+String(blog.id))}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                { blog.title }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                { blog.body }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
  return (
    <>
      <Grid container alignItems='center' justify='center' direction="column">
        { Cards }
      </Grid>
    </>
  )
}


export default BlogCards;
