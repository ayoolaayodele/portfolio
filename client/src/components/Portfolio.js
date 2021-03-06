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
        {/* project 3 */}
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
                  Coders BookStore
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  This is a full stack/MERN stack(MongoDb, Express React, Node)
                  Ecommerce App from Scratch to Deployment
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='http://165.232.114.51/'
              >
                Live
              </Button>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://github.com/ayoolaayodele/ecommerce-front'
              >
                FrontCode
              </Button>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://github.com/ayoolaayodele/ecommerce-back'
              >
                BackCode
              </Button>
            </CardActions>
          </Card>
        </Grid>

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
                  Meet Developers
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  This is a full stack MERN stack application built with
                  MongoDB, Express, React, NodeJS and Redux for its state
                  management. It is an application to connect with other
                  developers.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://meetdevs.herokuapp.com/'
              >
                Live
              </Button>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href='https://github.com/ayoolaayodele/MeetDevs'
              >
                Code
              </Button>
            </CardActions>
          </Card>
        </Grid>

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
                  of materials used on a road site.This application was built
                  with bootstrap and vanilla javascript
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

        {/* project 4 */}
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
                  Interact
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
      </Grid>
    </Box>
  );
};

export default Portfolio;
