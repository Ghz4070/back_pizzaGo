import express from 'express';
import Promo from '../Controllers/PromoController';

export const anonymeRoutePromo = express.Router();
export const adminRoutePromo = express.Router();


anonymeRoutePromo.route('/')
    .get(async (req, res) => {
        const Promos = await Promo.getAllPromo();
        res.json(Promos);
    })

anonymeRoutePromo.route('/name/:name')
    .get(async (req, res) => {
        const promo = await Promo.getPromoByName(req.params.name);
        res.json(promo);
    })

anonymeRoutePromo.route('/Byid/:id')
    .get(async (req, res) => {
        const param = {
            id: req.params.id
        }
        const Promos = await Promo.getPromoById(param);
        res.json(Promos);
    })

adminRoutePromo.route('/add')
    .post(async (req, res) => {
        const param = {
            name: req.body.name,
            amount: req.body.amount

        };
        const Promos = await Promo.addPromo(param);
        res.json(Promos);
    })

adminRoutePromo.route('/delete/:id')
    .delete(async (req, res) => {
        const param = {
            id: req.params.id
        };
        const Promos = await Promo.deletePromo(param);
        res.json(Promos);
    })

adminRoutePromo.route('/update')
    .put(async (req, res) => {
        const param = {
            where: { id: req.body.id },
            data: {
                name: req.body.name,
                amount: req.body.amount
            }
        }
        const Promos = await Promo.updatePromo(param);
        res.json(Promos);
    })