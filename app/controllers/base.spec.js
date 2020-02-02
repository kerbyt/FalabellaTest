const BaseController = require('./base.controller');

let base = new BaseController();

describe("BaseController", () => {
    describe("saveObject", () => {
        
        it("should exist", () => {
            expect(base.saveObject).toBeDefined();
        });

    });
    describe("getObject", () => {
        
        it("should exist", () => {
            expect(base.getObject).toBeDefined();
        });
    });
    describe("updateObject", () => {
        
        it("should exist", () => {
            expect(base.updateObject).toBeDefined();
        });
    });
    describe("getObjects", () => {
        
        it("should exist", () => {
            expect(base.getObjects).toBeDefined();
        });
    });
    describe("deleteObject", () => {
        
        it("should exist", () => {
            expect(base.deleteObject).toBeDefined();
        });
    });
});