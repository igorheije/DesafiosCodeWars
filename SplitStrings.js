function solution(str){
    let string = str
    if(str.length%2!==0){string = str.concat('','_')}
    let array = []
    for(let i=0; i<str.length; i+=2){
        const solu = string.slice(i).split('',2).join('')
        array.push(solu).flat
    }
    
    return array
}

console.log(solution("abcdefg"))