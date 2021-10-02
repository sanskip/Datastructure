class LinearSearch{
    constructor(){

    }

    search(arr,element){
        for (let i =0; i< arr.length; i++){
            if(arr[i]==element){
                return true;
            }
        }
        return false;
    }
}

let linearSearch =new LinearSearch();
let arr = [ 1, 2, 3, 4, 5 ];
let search_element = 5;
console.log(linearSearch.search(arr,search_element));
search_element = 6;
console.log(linearSearch.search(arr,search_element));