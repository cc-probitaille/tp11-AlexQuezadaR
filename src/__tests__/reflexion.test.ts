import {createClassEnv} from "../reflexion";

describe("createClassEnv", () => {
    afterAll(() => {
        delete process.env.CLASS_NAME;
    });

    it("should create a dynamic class with specific methods/properties", () => {
        process.env.CLASS_NAME = "Animal";

        const dynamicClass = createClassEnv();
        const instance = new dynamicClass("Tiger", 4);

        expect(instance.getClassName()).toBe("Animal");
        expect(instance.getVar1()).toBe("Tiger");
        expect(instance.getVar2()).toBe(4);
        expect(instance.getFunctionString()).toBe("Tiger..4");
    });

    it("should throw error if CLASS_NAME is missing", () => {
        delete process.env.CLASS_NAME;

        expect(() => createClassEnv()).toThrow(
            "The environment variable CLASS_NAME is missing"
        );
    });

    it("should throw error if the class is not found",() => {
        process.env.CLASS_NAME = "NonExistentClass";

        expect(() => createClassEnv()).toThrow(
            "The class 'NonExistentClass' cant be found"
        );
    });
});