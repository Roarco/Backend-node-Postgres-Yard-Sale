const express = require('express');
const routerApi = require('./app/index')
const app = express();
const port = 3001;



//usando un middleware nativo de express
app.use(express.json());

routerApi(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);