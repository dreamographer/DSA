var numDifferentIntegers = function(word) {
    let result=word
    for (let i = 0; i < word.length; i++) {
       if (isNaN(word[i])) {
       result= result.replace(word[i],' ')
       }
    }
    result=result.split(' ')
    result=result.map((ele)=>{if (ele.length>1) {
        return ele.replace(/^0+/,"")}
        return ele
    })        
    
    result=new Set(result)
    console.log(result);
    let count=0
    result.forEach(element => {
        if (element!='') {
            count++
        }
    });
    return count;
};
console.log(numDifferentIntegers("xtimt5kqkz9osexe56ezwwninlyeeqsq5m99904os3ygs12t31n1et4uwzmt5kvv6teisobuxt10k33v1aaxysg4y8nsivxdp3fo9dr7x58m8uc4ofm41ai77u8cvzr5r3s97f5otns59ubqk57xwl00xsp9w2oodt6yxcbscloyr9c2su8gca1ly6rrjufm25luhxhesxwn7bk1as9na4cbabxk"));
