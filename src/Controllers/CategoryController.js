import { prisma } from '../generated/prisma-client';
import { success, error } from '../returnFunc';

class CategoryController {
   async checkId(param) {
        let check  = false;
        await this.getCategoryById(param).then(resp => {
             switch (resp.status) {
                 case 'success':
                     check = true;
                 break;
                 case 'error' :
                     check = false;
                 break;
                 default :
                 check = false;
                 break;
             }
         });
         return check;
    }

    getAllCategory() {
        return new Promise(async (next) => {
            const Categorys = await prisma.categories()
            if (Categorys.length > 0) {
                next(success(Categorys));
            } else {
                next(success('no category'));
            }
        })
    }

    getCategoryById(id) {
        return new Promise(async (next) => {
            const Category = await prisma.category(id);
            if (Category) {
                next(success(Category));
            } else {
                next(error('No category found for this id'));
            }
        })
    }

    addCategory(param) {
        return new Promise(async (next) => {
            if (param.name) {
                const Categorys = await prisma.createCategory(param);
                next(success(Categorys));
            } else {
                next(success('Empty fields'));
            }
        });
    }

   async deleteCategory(param) {
        let check = this.checkId(param);

        return new Promise(async (next) => {
            if (await check) {
                const Category = await prisma.deleteCategory(param);
                next(success('The Category has beed deleted'));
            } else {
                next(error('No Category with this id'));
            }
        });
    }

    async updateCategory(param) {
        return new Promise(async (next) => {
            if (param.where.id && param.data.name) {
                const Categorys = await prisma.updateCategory(param);
                next(success(Categorys));
            } else {
                next(success('Empty fields. Please check all fields.'));
            }
        });
    }
}

export default new CategoryController();