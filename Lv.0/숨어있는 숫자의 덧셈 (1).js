// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
// 입출력 예
// my_string	result
// "aAb1B2cC34oOp"	10
// "1a2b3c4d123"	16

function solution(my_string) {
    
    var answer = 0;
    
    let a = my_string.replace(/[a-zA-Z]/g,"")
    
    // let add = a.map(num => Number(num)).reduce((a,b) => a+b);
    
    for (let i = 0; i < a.length; i++) {
        answer += parseInt(a[i])
    }
    
    // return my_string.match(/[0-9]/g).reduce((a,b) => parseInt(a)+parseInt(b)); 쉽게 가능
    
    return answer;
}