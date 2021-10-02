class RightTriangle {
    constructor() {

    }

    drawPattern(rows) {
        let str = '';
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j <= i; j++) {
                    str += ' *'
            }
            str += '\n'
        }
        console.log(str);
    }
}

new RightTriangle().drawPattern(5);

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *
