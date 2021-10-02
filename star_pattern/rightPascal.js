class RightPascal {
    constructor() {

    }

    drawPattern(rows) {
        let str = '';
        // upstream
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j <= i; j++) {
                    str += ' *'
            }
            str += '\n'
        }
        // Downstream
        rows=rows-1;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j <= rows-i-1; j++) {
                    str += ' *'
            }
            str += '\n'
        }
        console.log(str);
    }
}

new RightPascal().drawPattern(5);

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *
