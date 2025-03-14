require('dotenv').config()
const express = require('express')
const cors = require('cors');

const authRoutes = require('./routes/auth-routes')
const homeRoutes = require('./routes/home-routes')
const adminRoutes = require('./routes/admin-routes')
const imageRoutes = require('./routes/image-routes')


const connectDB = require('./database/db')
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// Middleware
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/image', imageRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
