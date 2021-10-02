class LeftPascal {
    constructor() {

    }

    drawPattern(rows) {
        let str = '';
        //upStream
        for (let i = 0; i < rows; i++) {
            for (let k = 0; k < rows - i; k++) {
                str += '  ';
            }
            for (let j = 0; j <= i; j++) {

                str += ' *';
            }
            str += '\n';
        }
        //  DownStream
        rows = rows - 1;
        for (let i = rows; i > 0; i--) {
            for (let k = 0; k <=(rows-i)+1; k++) {
                str += '  ';
            }
            for (let j = i; j > 0; j--) {

                str += ' *';
            }
            str += '\n';
        }
        console.log(str);
    }
}

new LeftPascal().drawPattern(5);