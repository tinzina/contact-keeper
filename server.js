const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.json({ express: 'Hello From Express' });
});

//Define Routes users, contacts, auth
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
