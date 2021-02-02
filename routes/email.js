const sendGrid = require('@sendgrid/mail');

app.post('/api/email', (req, res, next) => {
  console.log(req.body);

  sendGrid.setApiKey(process.env.SENDGRIDAPIKEY);

  const msg = {
    to: 'findpecker@gmail.com',
    from: req.body.email,
    subject: req.body.subject,
    text: req.body.message,
  };

  sendGrid
    .send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log('error: ', err);
      res.status(401).json({
        success: false,
      });
    });
  next();
});
