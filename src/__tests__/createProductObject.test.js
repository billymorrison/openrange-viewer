import createProductObject from "../functions/createProductObject";
import product from "../product.json";
import attrSets from "../attributeSets.json";

describe("Product Attribute Aggregation Function", () => {
    test("function takes the values from product and adds them to attribute sets", () => {
        const testOutput = createProductObject(product, attrSets)
        const { Base } = testOutput.data

        expect(Base.Depth).toEqual("4.67");
        expect(Base.PartNo).toEqual("62A9GAT1UK");
    })
})