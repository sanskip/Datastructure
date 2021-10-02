class Pyramid{
    constructor(){

    }

    drawPattern(rows){
        let string = "";
        for(let i=0;i<rows;i++){
            for(let k=0;k<rows-i-1;k++){
                string += "  ";
            }
            for(let j=0; j< 2*i+1;j++){
                if(i==0 || i==rows-1){
                    string += " *"; 
                }else{
                    if(j==0 || j==2*i){
                        string += " *";
                    }else{
                        string += "  ";
                    }
                }
            }

            string += "\n";
        }
        console.log(string)
    }
}

new Pyramid().drawPattern(5);


// $ node hollowPyramid.js  
//          *
//        *   *
//      *       *
//    *           *
//  * * * * * * * * *