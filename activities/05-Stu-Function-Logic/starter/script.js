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
    for (i=0;i<a.length;i++){
        if(a[i]<10){console.log(a[i],": is less than 10")}else{console.log(a[i],": is greater than or equal to 10")}
    }
    return
}

list = [1,15,4,20,150,9,10]

compare(1,"1")
less10(list)

