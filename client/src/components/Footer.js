import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayoola-ayodele-5a9a55150/',
    icon: <LinkedIn />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ayoolaayodele',
    icon: <GitHub />,
  },

  {
    name: 'Twitter',
    url: 'https://twitter.com/findpecker',
    icon: <Twitter />,
  },
];

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0,
      maxWidth: '250px',
    },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width='auto' style={{ background: '#222' }}>
      {socialLinks.map((socialLink, key) => (
        <a href={socialLink.url}>
          <BottomNavigationAction
            className={classes.root}
            style={{ padding: 10 }}
            icon={socialLink.icon}
          />
        </a>
      ))}
    </BottomNavigation>
  );
};

export default Footer;
