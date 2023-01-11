// Write Your Code Below
function compare(a,b){
    if(a===b){
        console.log("equal in type and value")
    } else if (a==b){
        console.log("equal in value but not type")
    } else {console.log("not equal")}
    return
}

const less10 = function(a){
    let xy = [];
    for (i=0;i<a.length;i++){
        if(a[i]<10){xy.push(true)}else{xy.push(false)}
    }
    console.log(xy);
    return
}

list = [1,15,4,20,150,9,10]

compare(1,"1")
less10(list)

