import express from 'express';
import Category from '../Controllers/CategoryController';

export const anonymeRouteCategory = express.Router();
export const adminRouteCategory = express.Router();

anonymeRouteCategory.route('/')
    .get(async (req, res) => {
        const Categorys = await Category.getAllCategory();
        res.json(Categorys);
    })

    adminRouteCategory.route('/add')
    .post(async (req, res) => {
        const param = {
            name: req.body.name,
        };
        const Categorys = await Category.addCategory(param);
        res.json(Categorys);
    })

    adminRouteCategory.route('/delete/:id')
    .delete(async (req, res) => {
        const param = {
            id: req.params.id
        };
        const Categorys = await Category.deleteCategory(param);
        res.json(Categorys);
    })

anonymeRouteCategory.route('/:id')
    .get(async (req, res) => {
        const param = {
            id: req.params.id
        }
        const Categorys = await Category.getCategoryById(param);
        res.json(Categorys);
    })

adminRouteCategory.route('/update')
    .put(async (req, res) => {
        const param = {
            where: { id: req.body.id },
            data: {
                name: req.body.name,
            }
        }
        const Categorys = await Category.updateCategory(param);
        res.json(Categorys);
    })