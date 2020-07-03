//Module installed
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import {url} from './config';

//Import middleware
dotenv.config();
import { checkToken } from './Middleware/JWT';

// Route import
import { anonymeRouteUser, adminRouteUser } from './Routes/UserRoute';
import { anonymeRouteDrink, adminRouteDrink } from './Routes/DrinkRoute';
import { anonymeRouteDessert, adminRouteDessert } from './Routes/DessertRoute';
import { anonymeRouteCategory, adminRouteCategory } from './Routes/CategoryRoute';
import { anonymeRoutePizza, adminRoutePizza } from './Routes/PizzaRoute';
import { anonymeRoutePromo, adminRoutePromo } from './Routes/PromoRoute';
import { anonymeRouteSize, adminRouteSize } from './Routes/SizeRoute';
import { anonymeRouteOrder, adminRouteOrder } from './Routes/OrderRoute';

const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(`${url}/user`, anonymeRouteUser);
app.use(`${url}/drink`, anonymeRouteDrink);
app.use(`${url}/pizza`, anonymeRoutePizza);
app.use(`${url}/dessert`, anonymeRouteDessert);
app.use(`${url}/category`, anonymeRouteCategory);
app.use(`${url}/promo`, anonymeRoutePromo);
app.use(`${url}/size`, anonymeRouteSize);
app.use(`${url}/order`, anonymeRouteOrder);

app.use(`${url}/admin/user`, checkToken ,adminRouteUser);
app.use(`${url}/admin/pizza`, checkToken, adminRoutePizza);
app.use(`${url}/admin/category`, checkToken, adminRouteCategory);
app.use(`${url}/admin/drink`, checkToken, adminRouteDrink);
app.use(`${url}/admin/dessert`, checkToken, adminRouteDessert);
app.use(`${url}/admin/promo`, checkToken, adminRoutePromo);
app.use(`${url}/admin/size`, checkToken, adminRouteSize);
app.use(`${url}/admin/order`, checkToken, adminRouteOrder);


app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));