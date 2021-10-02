class DownwardTriangle {
    constructor() {

    }

    drawPattern(rows) {
        let str = '';
        for (let i = rows; i >0; i--) {
            for (let j = 0; j <i; j++) {
                    str += ' *'
            }
            str += '\n'
        }
        console.log(str);
    }
}

new DownwardTriangle().drawPattern(5);

// * * * * *
// * * * *
// * * *
// * *
// *
