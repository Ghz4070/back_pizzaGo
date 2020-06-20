//Module installed
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {PORT, url} from './config';

//Import middleware
import { checkToken } from './Middleware/JWT';

// Route import
import { anonymeRouteUser, adminRouteUser } from './Routes/UserRoute';
import { anonymeRouteDrink } from './Routes/DrinkRoute';
import { anonymeRouteDessert } from './Routes/DessertRoute';
import { anonymeRouteCategory, adminRouteCategory } from './Routes/CategoryRoute';
import { anonymeRoutePizza, adminRoutePizza } from './Routes/PizzaRoute';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(`${url}/user`, anonymeRouteUser);
app.use(`${url}/drink`, anonymeRouteDrink);
app.use(`${url}/pizza`, anonymeRoutePizza);
app.use(`${url}/dessert`, anonymeRouteDessert);
app.use(`${url}/category`, anonymeRouteCategory);
app.use(`${url}/admin/user`, checkToken ,adminRouteUser);
app.use(`${url}/admin/pizza`, checkToken, adminRoutePizza);
app.use(`${url}/admin/category`, checkToken, adminRouteCategory);

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));