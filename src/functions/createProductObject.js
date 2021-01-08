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

const filterOutAttributeSets = (attrSet) => attrSet.filter((element) => Object.keys(element.attributes).length);

const setKeysInAttributeSet = (attrSet) => {
    attrSet = filterOutAttributeSets(attrSet)
    return attrSet.reduce((result, attr) => {
        result = {
            ...result,
            [attr.name]: attr,
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

export default createProductObject;