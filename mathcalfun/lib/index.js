var addInt = function(a,b){
    if((a == "" || b == "")){
        return "Please provide all parameters."
    }
    else{
        return a+b;
    }
}

var subInt = function(a,b){
    if((a == "" || b == "")){
        return "Please provide all parameters."
    }
    else{
        return a-b;
    }
}

var divInt = function(a,b){
    if((a == "" || b == "")){
        return "Please provide all parameters."
    }
    else{
        return a/b;
    }
}

var mulInt = function(a,b){
    if((a == "" || b == "")){
        return "Please provide all parameters."
    }
    else{
        return a*b;
    }
}

module.exports = {
    addInt,
    subInt,
    mulInt,
    divInt
 }


