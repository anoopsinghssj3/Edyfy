import passport from "passport";
import LocalStrategy from "passport-local";
import { Admin } from "../models/admin.model";

//For establishing session(to be built later)
// app.use(cookieParser());
// app.use(session({ secret: 'keyboard cat' }));

app.use(passport.initialize(userProperty("admin")));
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

export { passportAdminConfig };
