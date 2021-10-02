class Pyramid{
    constructor(){

    }

    drawPattern(rows){
        let string = "";
        for(let i=0;i<rows;i++){
            for(let k=0;k<i;k++){
                string += "  ";
            }
            for(let j=0; j< 2*(rows-i)-1;j++){
                string += " *";
            }
            string += "\n";
        }
        console.log(string)
    }
}

new Pyramid().drawPattern(5);


// $ node reversePyramid.js
//  * * * * * * * * *
//    * * * * * * *
//      * * * * *
//        * * *
//          *