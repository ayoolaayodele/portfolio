import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';

const useStyles = makeStyles({
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto',
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component='div'>
      <Navbar />
      <Grid container justify='center'>
        {/* project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='project 1'
                image={project1}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5'>
                  Road Estimator
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  This is a Civil Engineering application to quantify quantity
                  of materials on road site. This material includes asphalt,
                  subbase and laterites.This application was built with HTML,
                  CSS and vanilla javascript
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://road-estimator12345.netlify.app'
              >
                Live
              </Button>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://github.com/ayoolaayodele/road-estimator'
              >
                Code
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='project 2'
                image={project2}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5'>
                  Project 2
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  This is a MERN stack javascript project, built with MongoDB,
                  Express, React and Node JS. It is a Social application built
                  from scratch and deployed to heroku.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://frontendinteract.herokuapp.com/'
              >
                Live
              </Button>
              <span></span>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://github.com/ayoolaayodele/socialapp-frontend'
              >
                FrontCode
              </Button>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://github.com/ayoolaayodele/socialapp-backend'
              >
                BackCode
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='project 3'
                image={project3}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5'>
                  Project 3
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae eaque, incidunt esse numquam velit sequi. Culpa
                  corporis blanditiis laudantium expedita?
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://github.com/ayoolaayodele/socialapp-frontend'
              >
                Live
              </Button>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://github.com/ayoolaayodele/socialapp-frontend'
              >
                Code
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='project 4'
                image={project4}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5'>
                  Project 4
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae eaque, incidunt esse numquam velit sequi. Culpa
                  corporis blanditiis laudantium expedita?
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://google.com'
              >
                Live
              </Button>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://google.com'
              >
                Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
