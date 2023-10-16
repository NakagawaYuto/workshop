import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

const CommentCards = ({ Comments }) => {
  var Cards = [];
  for (let i = 0; i < Comments.length; i++) {
    const comment = Comments[i]
    Cards.push(
      <Grid item key={comment.id}>
        <Card sx={{ maxWidth: 800 }} elevation={4} style={{margin: 10}}>
          <CardActionArea >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                { comment.comment }
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


export default CommentCards;
