class HollowTriangle {
    constructor() {

    }

        drawPattern(rows) {
            let str = '';
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j <= i; j++) {
                    if(i==0 || i==rows-1){
                        str += ' *'
                    }else{
                        if(j==0 || j==i){
                            str += ' *' 
                        }else{
                            str += '  '
                        }
                    }
                        
                }
                str += '\n'
            }
            console.log(str);
        }
}

new HollowTriangle().drawPattern(5);

// *
// * *
// *   *
// *     *
// * * * * *