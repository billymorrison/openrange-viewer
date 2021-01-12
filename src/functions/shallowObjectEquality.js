function shallowObjectEquality(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
        console.log("NO MATCH!")
      return false;
    }
  
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        console.log("NO MATCH!")
        return false;
      }
    }
    console.log("MATCH!")
    return true;
  }

  export default shallowObjectEquality;