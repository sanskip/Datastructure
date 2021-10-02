class HourGlass {
    constructor() {

    }

    drawPattern(rows) {
        let string = "";
        // downside pyramid
        rows = rows - 1;
        for (let i = 0; i < rows; i++) {
            for (let k = 0; k < i + 1; k++) {
                string += "  ";
            }
            for (let j = 0; j < 2 * (rows - i) - 1; j++) {
                string += " *";
            }
            string += "\n";
        }

        // Upside pyramid
        for (let i = 1; i < rows; i++) {
            for (let k = 0; k < rows - i; k++) {
                string += "  ";
            }
            for (let j = 0; j < 2 * i + 1; j++) {
                string += " *";
            }
            string += "\n";
        }
        console.log(string)
    }
}

new HourGlass().drawPattern(5);

// $ node hourglass
//    * * * * * * *
//      * * * * *
//        * * *
//          *
//        * * *
//      * * * * *
//    * * * * * * *