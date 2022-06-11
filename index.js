import express from 'express';

const port = 3333;

const app = (await import('./backend/server.js')).app;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening at http://localhost:${port}`);
});
