const {saveObject, getObject, updateObject, getObjects, deleteObject } = require('./sold-product.controller');

describe("SoldProductsController", () => {
    describe("saveObject", () => {
        
        it("should exist", () => {
            expect(saveObject).toBeDefined();
        });

    });
    describe("getObject", () => {
        
        it("should exist", () => {
            expect(getObject).toBeDefined();
        });
    });
    describe("updateObject", () => {
        
        it("should exist", () => {
            expect(updateObject).toBeDefined();
        });
    });
    describe("getObjects", () => {
        
        it("should exist", () => {
            expect(getObjects).toBeDefined();
        });
    });
    describe("deleteObject", () => {
        
        it("should exist", () => {
            expect(deleteObject).toBeDefined();
        });
    });
});