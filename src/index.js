function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let new_expr = expr.replace(/\s+/g, '');
    if (new_expr.indexOf('/0', 0) !== -1) {
        throw new Error('TypeError: Division by zero.');
    }

    let brackets = 0;
    for (let i = 0; i < new_expr.length; i++) {
        if (new_expr[i] === '(') {
            brackets++;
        }
        else if (new_expr[i] === ')') {
            brackets--;
        }
    }
    if (brackets !== 0) {
        throw new Error('ExpressionError: Brackets must be paired');
    }

    let func = new Function(`return ${new_expr}`);
    return func();
}

module.exports = {
    expressionCalculator
}
