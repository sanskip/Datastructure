class HollowSquare {
    constructor() {

    }

    drawPattern(rows) {
        let str = '';
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < rows; j++) {
                if (i == 0 || i == rows - 1) {
                    str += ' *'
                } else {
                        if (j == 0 || j == rows - 1) {
                            str += ' *';
                        } else {
                            str += '  ';
                        }
                }

            }
            str += '\n'
        }
        console.log(str);
    }
}

new HollowSquare().drawPattern(5);



//  * * * * *
//  *       *
//  *       *
//  *       *
//  * * * * *