class LeftTriangle {
    constructor() {

    }

    drawPattern(rows) {
        let str = '';
        for (let i = 0; i < rows; i++) {
            for(let k=0;k<rows-i;k++){
                str += '  ';
            }
            for (let j = 0; j <= i; j++) {
               
                    str += ' *';
            }
            str += '\n';
        }
        console.log(str);
    }
}

new LeftTriangle().drawPattern(5);