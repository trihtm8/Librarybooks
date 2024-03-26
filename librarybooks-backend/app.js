const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());

const rootUnsupportedMethods = ['post', 'put', 'delete', 'patch', 'options', 'head'];
app.all('/', (req, res, next) => {
    if (rootUnsupportedMethods.includes(req.method.toLowerCase())) {
        return next(new ApiError(405, 'Unsupported method'));
    } else {
        next();
    }
});

app.get("/", (req, res)=> {
    res.json({ message: "Welcom to librarybooks-backend" });
});

// app.use("/api/publishers", publicshersRouter);
// app.use("/api/books", booksRouter);
// app.use("/api/borrowcards", borrowcardsRouter);
// app.use("/api/librarians", librariansRouter);
// app.use("/app/students", studentsRouter);

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;