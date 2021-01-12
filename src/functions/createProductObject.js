const createProductObject = (productAttributes, attributeSets) => {
    let { data } = attributeSets;
    data = data.map((attrSet) => {
            return {
                ...attrSet,
                attributes: filterOutAttributes(attrSet.attributes, productAttributes)
            }
    })
    
    const product = {
        ...attributeSets,
        primaryId: productAttributes.primaryId,
        data: setKeysInAttributeSet(data),
    };

    for(const [key] of Object.entries(product.data)) {
        product.data[key] = setAttributeValues(product.data[key].attributes)
    };
    
    setHiddenSets(product, ["Base", "Media", "Edit Dates"])
    return product;
};

const filterOutAttributes = (value, productAttributes) => {
    return value.reduce((result, attr) => {
        if(productAttributes[attr.shortName]) {
            result.push({
                ...attr,
                attributeData: productAttributes[attr.shortName]
            })
        }
        return result;
    }, []);
};

const filterEmptyAttributeSets = (attrSet) => attrSet.filter((element) => Object.keys(element.attributes).length);

const setKeysInAttributeSet = (data) => {
    data = filterEmptyAttributeSets(data)
    return data.reduce((result, attrSet) => {
        result = {
            ...result,
            [attrSet.name]: attrSet,
        }
        return result;
    }, {})
}

const setAttributeValues = (attrSet) => {
    return attrSet.reduce((result, attr) => {
        result = {
            ...result,
            [attr.name]: attr.attributeData,
        }
        return result;
    }, {})
}

const setHiddenSets = (product, array) => {
    const returnProduct = array.forEach(element => {
        product.data[element] = {
            ...product.data[element],
            hidden: true
        }
    });
    return returnProduct;
}

export default createProductObject;