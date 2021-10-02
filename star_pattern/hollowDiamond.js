class HollowDiamond{
    constructor(){

    }

    drawPattern(rows){
        let string = "";
        // Upside pyramid
        for(let i=0;i<rows;i++){
            for(let k=0;k<rows-i-1;k++){
                string += "  ";
            }
            for(let j=0; j< 2*i+1;j++){
                if(i==0){
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
        // downside pyramid
        rows=rows-1;
        for(let i=0;i<rows;i++){
            for(let k=0;k<i+1;k++){
                string += "  ";
            }
            for(let j=0; j< 2*(rows-i)-1;j++){
                    if(j==0 || j==2*(rows-i)-2){
                        string += " *";
                    }else{
                        string += "  ";
                    }  
            }
            string += "\n";
        }
        console.log(string)
    }
}

new HollowDiamond().drawPattern(5);

// $ node hollowDiamond.js
//          *
//        *   *
//      *       *
//    *           *
//  *               *
//    *           *
//      *       *
//        *   *
//          *