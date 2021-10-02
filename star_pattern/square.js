class Square{
    constructor(){

    }

    drawPattern(rows){
        let str='';
        for(let i=0;i<rows;i++){
            for(let j=0;j<rows;j++){
                str+=' *'
            }  
            str+='\n'
        }
        console.log(str);
    }
}

new Square().drawPattern(5);

// * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
