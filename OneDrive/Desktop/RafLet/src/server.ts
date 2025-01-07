import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import bodyParser from 'body-parser'; 
import itemRoutes from './backand/routes/item.ts';
import userRoutes from './backand/routes/user.ts';

const corsOptions = { 
    origin: 'http://localhost:5173', 
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization']
}

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(fileUpload());
app.use("/items", itemRoutes);
app.use("/users", userRoutes);

// Pornește serverul
app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});