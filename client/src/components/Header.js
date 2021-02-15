import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';

// CSS STYLES
const useSyles = makeStyles((theme) => ({
 
  title: {
    color: 'tomato',
  },
  subtitle: {
     textAlign: 'center',
    color: 'white',
    marginBottom: '3rem',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useSyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify='center'>
      </Grid>

      <Typography className={classes.title} variant='h4'>
        <Typed strings={['Ayoola Ayodele']} typeSpeed={40} />
        <br />
      </Typography>
      <Typography className={classes.subtitle} variant='h5'>
        <Typed
          strings={['Full Stack Developer', 'MERN Stack', 'PHP']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
