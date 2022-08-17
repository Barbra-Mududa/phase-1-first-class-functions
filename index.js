function receivesAFunction(call){
    return call();
} 


function returnsANamedFunction(){
    return function callBack(){}
}

function returnsAnAnonymousFunction() {
    return function () {};
  }