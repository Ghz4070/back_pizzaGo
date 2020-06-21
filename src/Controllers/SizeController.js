import { prisma } from '../generated/prisma-client';
import { success, error } from '../returnFunc';

class SizeController {
    getAllSize() {
        return new Promise(async (next) => {
            const Sizes = await prisma.sizes();
            if (Sizes.length > 0) {
                next(success(Sizes));
            } else {
                next(success('no Size'));
            }
        })
    }

    getSizeById(id) {
        return new Promise(async (next) => {
            const Size = await prisma.size(id)
            
            if (Size) {
                next(success(Size));
            }else {
                next(error('Id not found'));
            }
        })
    }

    createSize(sizeObject) {
        return new Promise(async (next) => {
            if(typeof(sizeObject.name) !== 'string' || typeof(sizeObject.price) !== 'number') next(error('Error/Miss in types field'));

            const Size = await prisma.createSize(sizeObject);
            next(success(Size));
        })
    }

    updateSize(sizeObject) {
        return new Promise(async (next) => {
            if(!sizeObject.where.id && !sizeObject.data.name && !sizeObject.data.price) next(error('Error, miss body or id'));
            
            const updateSize = await prisma.updateSize(sizeObject);
            next(success(updateSize));
        })
    }
}

export default new SizeController;
