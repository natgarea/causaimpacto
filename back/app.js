require("dotenv").config();

const bodyParser    = require("body-parser");
const cookieParser  = require("cookie-parser");
const express       = require("express");
const favicon       = require("serve-favicon");
const mongoose      = require("mongoose");
const logger        = require("morgan");
const path          = require("path");

const session       = require("express-session");
const MongoStore    = require("connect-mongo")(session);
const flash         = require("connect-flash");
const cors          = require("cors");

require("./configs/db.config");

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
var whitelist = ["http://localhost:3000"];
var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Enable authentication using session + passport
app.use(
  session({
    secret: "irongenerator",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(flash());
require("./passport")(app);

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

const userRouter = require('./routes/user');
app.use('/api/user', userRouter);


module.exports = app;
