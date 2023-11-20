function replacealpha(str,n){
    let i=0
    let result=''
    while(i<str.length-n){
        result+=str[i+n]
        console.log(str[i+n]);
        i++
    }
    return result
}

console.log(replacealpha("ashwinkv",2));