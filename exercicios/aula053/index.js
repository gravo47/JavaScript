//escopo global
function returnFunction(){//escopo da função returnFunction
    const name = 'Luiz';
    return function(){ //escopo da função Function
        return name;
    }
};

const callReturn = returnFunction();

console.log(callReturn());