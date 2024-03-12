const express = require('express')
const router = express.Router();

 
// app.use('/usernames', addMsgToRequest);

app.get('/usernames', (req, res) => {
  let usernames = req.users.map(function(user) {
    return {id: user.id, username: user.username};
  });
  res.send(usernames);
});

// app.use('/username', addMsgToRequest);
app.get('/username/:name', (req, res) => {
    let username = req.params.name;
    let users_with_name = req.users.filter(function(user) {
        return user.username === username;
    });
    console.log(users_with_name);
    if (users_with_name.length == 0) {
        res.send({
            error: {message: `${username} not found`, status: 404}
        });
    }
    

    res.send(users_with_name);
});

module.exports = router