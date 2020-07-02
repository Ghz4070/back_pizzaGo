//Module installed
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
// import {PORT, url} from

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

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app/user`, anonymeRouteUser);
app/drink`, anonymeRouteDrink);
app/pizza`, anonymeRoutePizza);
app/dessert`, anonymeRouteDessert);
app/category`, anonymeRouteCategory);
app/promo`, anonymeRoutePromo);
app/size`, anonymeRouteSize);
app/order`, anonymeRouteOrder);

app.use(`/admin/user`, checkToken ,adminRouteUser);
app.use(`/admin/pizza`, checkToken, adminRoutePizza);
app.use(`/admin/category`, checkToken, adminRouteCategory);
app.use(`/admin/drink`, checkToken, adminRouteDrink);
app.use(`/admin/dessert`, checkToken, adminRouteDessert);
app.use(`/admin/promo`, checkToken, adminRoutePromo);
app.use(`/admin/size`, checkToken, adminRouteSize);
app.use(`/admin/order`, checkToken, adminRouteOrder);


// app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));