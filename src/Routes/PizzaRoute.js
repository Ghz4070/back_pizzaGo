import express from 'express';
import PizzaController from '../Controllers/PizzaController';
import { error } from '../returnFunc';
import JWT from 'jsonwebtoken';

export const anonymeRoutePizza = express.Router();
export const adminRoutePizza = express.Router();

anonymeRoutePizza.route('/')
    .get(async (req, res) => {
        const Pizzas = await PizzaController.getAllPizza();
        res.json(Pizzas);
    })
anonymeRoutePizza.route('/:id')
    .get(async (req, res) => {
        const Pizza = await PizzaController.getPizzaById(req.params.id);
        res.json(Pizza);
    })
anonymeRoutePizza.route('/category/:cat')
    .get(async (req, res) => {
        const Pizza = await PizzaController.getPizzaByCat(req.params.cat);
        res.json(Pizza);
    })

adminRoutePizza.route('/add')
    .post(async (req, res) => {
        if(!req.body.categoryId && !req.body.sizeId) res.json(error('Error, empty value categoryId or sizeId'));

        const decode = await JWT.decode(req.headers['x-access-token'], {complete: true});
        const { role } = decode.payload;
        
        const pizza = {
            name: req.body.name,
            composition: req.body.composition,
            size: {
                connect : {
                   id: req.body.sizeId
                }
            },
            category: {
                connect: {
                    id: req.body.categoryId
                }
            }
        };

        if (role.indexOf('ROLE_ADMIN') !== -1){
            const addPizza = await PizzaController.createPizza(pizza);
            res.json(addPizza);
        }else {
            res.json(error('You are not an admin'));
        }
        
    })

adminRoutePizza.route('/delete/:id')
    .delete(async (req, res) => {
        const decode = await JWT.decode(req.headers['x-access-token'], {complete: true});
        const { role } = decode.payload;

        if (role.indexOf('ROLE_ADMIN') !== -1){
            const pizzaParam = {id : req.params.id};
            const deletePizza = await PizzaController.deletePizzaById(pizzaParam);
            res.json(deletePizza);
        }else {
            res.json(error('You are not an admin'));
        }
    })

adminRoutePizza.route('/update/:id')
    .put(async (req, res) => {
        const decode = await JWT.decode(req.headers['x-access-token'], {complete: true});
        const { role } = decode.payload;

        if (role.indexOf('ROLE_ADMIN') !== -1){
            const updateObject = {
                id: req.params.id,
                composition: req.body.composition,
                sizeId : req.body.sizeId,
                categoryId: req.body.categoryId
            }
            
            const updatePizza = await PizzaController.updatePizzaById(updateObject);
            res.json(updatePizza);
        }else {
            res.json(error('You are not an admin'));
        }
    })
