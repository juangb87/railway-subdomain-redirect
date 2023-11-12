const express = require('express');
const app = express();

app.use((req, res, next) => {
    // Extract subdomain from the request
    const subdomain = req.headers.host.split('.')[0];

    // Construct redirect URL
    const targetUrl = `https://nike.com?user=${subdomain}`;

    // Redirect with a 302 status code
    res.redirect(302, targetUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});