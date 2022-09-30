import { Card, CardContent, Grid, CardMedia, Typography } from '@mui/material'
function Showcard(props) {
  return (
    <Grid item xs={6} md={2} sm={4}>
      <Card sx={{ width: 200, mb: 2 }}>
        <CardMedia component="img" image={props.url} alt={props.title} />
        <CardContent sx={{ backgroundColor: 'silver' }}>
          <Typography variant="body2" color="primary">
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default Showcard
