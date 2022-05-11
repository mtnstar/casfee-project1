import express from 'express';

const app = express();
const port = 3333;

app.use(express.static('app'));

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening at http://localhost:${port}`);
});
