/* Declare three variables, a and b and c.*/

let a = 3;
let b = 5;
let c;

let output = 'let a = 3; \nlet b = 5; \nlet c;\n-------------';

output = output + '\na+b =' + (a + b);
output = output + '\na-b =' + (a - b);
output = output + '\na*b =' + (a * b);
output = output + '\na/b =' + (a / b);
output = output + '\na%b =' + (a % b);
output = output + '\na+=b =' + (a += b);
output = output + '\na-=b =' + (a -= b);
output = output + '\na*=b =' + (a *= b);
output = output + '\na/=b =' + (a /= b);
output = output + '\na%=b =' + (a %= b);
output = output + '\na==b =' + (a == b);
output = output + '\na!=b =' + (a != b);
output = output + '\na>b =' + (a > b);
output = output + '\na<b =' + (a < b);
output = output + '\n!a && !c =' + (!a && !c);
output = output + '\n!a || !c =' + (!a || !c);
alert(output);

let first_name = 'Shabnam';
let last_name = 'Goyal';
let email = 'rani0035@algonquinlive.com';

let result = '\nMy name is ' + first_name + ' ' + last_name +
    '.\nYou can contact me at ' + email + '.';
alert(result);
