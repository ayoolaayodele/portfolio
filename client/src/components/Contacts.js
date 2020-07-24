import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Axios from 'axios';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  button: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tomato',
  },
}));

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
    },
    '&:hover fieldset': {
      borderColor: 'tan',
    },
    '& .Mui-focused fieldset': {
      borderColor: 'tan',
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();

  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    disabled: false,
    emailSent: '',
  });

  const { name, email, subject, message, emailSent, disabled } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();

    setContact({
      disabled: true,
    });

    Axios.post('http://localhost:5000/api/email', contact)
      .then((res) => {
        if (res.data.success) {
          setContact({
            disabled: false,
            emailSent: true,
          });
        } else {
          setContact({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        setContact({
          disabled: false,
          emailSent: false,
        });
      });
  };

  return (
    <Box component='div'>
      <Navbar />
      <Grid container justify='center'>
        <Box container='form' className={classes.form}>
          <Typography
            variant='h5'
            style={{
              color: 'tomato',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            Hire me!
          </Typography>

          <InputField
            fullWidth={true}
            label='Name'
            name='name'
            variant='outlined'
            inputProps={{ style: { color: 'white' } }}
            margin='dense'
            value={name}
            size='medium'
            onChange={onChange}
          />
          <br />
          <InputField
            fullWidth={true}
            label='Email'
            name='email'
            variant='outlined'
            inputProps={{ style: { color: 'white' } }}
            margin='dense'
            value={email}
            size='medium'
            onChange={onChange}
          />
          <br />
          <InputField
            fullWidth={true}
            label='Subject'
            name='subject'
            variant='outlined'
            inputProps={{ style: { color: 'white' } }}
            margin='dense'
            value={subject}
            size='medium'
            onChange={onChange}
          />
          <InputField
            fullWidth={true}
            label='Message'
            name='message'
            variant='outlined'
            inputProps={{ style: { color: 'white' } }}
            margin='dense'
            value={message}
            size='medium'
            onChange={onChange}
          />
          <br />
          <Button
            className={classes.button}
            variant='outlined'
            fullWidth={true}
            endIcon={<SendIcon />}
            disabled={disabled}
            onClick={onSubmit}
          >
            contact me
          </Button>
          {emailSent === true && (
            <p className='d-inline success-msg'>Email Sent</p>
          )}
          {emailSent === false && (
            <p className='d-inline err-msg'>Email Not Sent! Please try again</p>
          )}
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
