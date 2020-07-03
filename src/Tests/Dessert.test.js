import { assert } from 'chai';
import Dessert from '../Controllers/DessertController';

suite('Test controller Dessert', async () => {

    test('should get one Dessert', (done) => {      
        let boolFalseStructure = false;
        let boolFalseTypeOf = false
        let param = {id : ""};

        const structureOjectDessert = {
            id: 'string',
            price: 'number',
            name: 'string'
        }
        
        Dessert.getAllDessert()
        .then((result) => {
            param.id = result.result[0].id 
        }).then(result2 => {
            Dessert.getDessertById(param).then(resp => {
                const keyStructure = Object.keys(structureOjectDessert);
                for(const i in resp.result[0]){
                    if(keyStructure.indexOf(i) === -1){
                        boolFalseStructure = true;
                    }
                    if(typeof(resp.result[0][i]) !== structureOjectDessert[i]){
                        boolFalseTypeOf = true;   
                    }
                }
                assert.equal(boolFalseStructure, false, 'error in structure object')
                assert.equal(boolFalseTypeOf, false, 'error in typeof object key')
                assert.typeOf(resp,'object', 'must be an object')
                done();
            });
        })
        .catch((err) => {
            console.log(err);
            done();
        })
    })
    

    test('should delete a Dessert', (done) => {
        let param = {
            id: ""
        };
        let lengthBefore = "";
        let lengthAfter = "";
        let boolIsDeleted = false;

        Dessert.getAllDessert()
            .then(result => {
                lengthBefore = result.result.length;
                param.id = result.result[0].id;
            })
            .then(newResult =>
                Dessert.deleteDessert(param).then(resp => {
                })
            )
            .then(finalResult =>
                Dessert.getAllDessert().then(result3 => { 
                    lengthAfter = result3.result.length;
                    if(lengthAfter < lengthBefore) {
                        boolIsDeleted = true;
                    };
                })   
            )
            assert.equal(boolIsDeleted, false, 'error file not deleted');
            done();
    })

    test('should get all Desserts', (done) => {      
        let boolFalseStructure = false;
        let boolFalseTypeOf = false

        const structureOjectDessert = {
            id: 'string',
            price: 'number',
            name: 'string',
        }
        
        Dessert.getAllDessert()
        .then((result) => {
            const keyStructure = Object.keys(structureOjectDessert);
            for(const i in result.result[0]){
                if(keyStructure.indexOf(i) === -1){
                    boolFalseStructure = true;
                }
                if(typeof(result.result[0][i]) !== structureOjectDessert[i]){
                    boolFalseTypeOf = true;   
                }
            }
            assert.equal(boolFalseStructure, false, 'error in structure object')
            assert.equal(boolFalseTypeOf, false, 'error in typeof object key')
            assert.typeOf(result,'object', 'must be an object')
            
            done();
        })
        .catch((err) => {
            console.log(err);
            done();
        })
    })

    test('should post a Dessert', (done) => {      
        let boolFalseStructure = false;
        let boolFalseTypeOf = false

        const valueStructureOjectDessert = {
            price:10,
            name:"Test",
        }
        
        Dessert.addDessert(valueStructureOjectDessert)
        .then((result) => {
            const keyStructure = Object.keys(valueStructureOjectDessert);
            for(const i in result.result[0]){
                if(keyStructure.indexOf(i) === -1){
                    boolFalseStructure = true;
                }
                if(typeof(result.result[0][i]) !== valueStructureOjectDessert[i]){
                    boolFalseTypeOf = true;   
                }
            }
            assert.equal(boolFalseStructure, false, 'error in structure object')
            assert.equal(boolFalseTypeOf, false, 'error in typeof object key')
            assert.typeOf(result,'object', 'must be an object')
            
            done();
        })
        .catch((err) => {
            console.log(err);
            done();
        })
    })
})