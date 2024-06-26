// Methods Are Functions That ARe Performed On Objects.

const calculator = {
    add: function(a, b){
        return a+b;
    },
    mul: function(a, b){
        return a*b;
    },
    sub: function(a, b){
        return a-b;
    },
    div: function(a, b){
        return a/b;
    }
};

console.log(`\n${calculator.add(1243,23)}\n`);
console.log(`${calculator.mul(1243,23)}\n`);
console.log(`${calculator.sub(1243,23)}\n`);
console.log(`${calculator.div(1243,23)}\n`);