const path = require("path"); // Core module
const express = require("express"); // External module
const rootDir = require("./routes/utils/pathUtils"); // Updated path to pathUtils

const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");

const app = express();

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data
app.use(homeRouter); // Use the routers
app.use(contactRouter);

// Handle 404 errors
app.use((req, res, next) => {

  res.status(404).sendFile(path.join(rootDir, 'views', 'error.html'));
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
