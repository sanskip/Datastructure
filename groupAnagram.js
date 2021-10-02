class GroupAnagram{
    constructor(){

    }
    static groupAnagram(strs){
        let result = {};
        for (let word of strs) {
            let cleansed = word.split("").sort().join("");
            if (result[cleansed]) {
              result[cleansed].push(word);
            } else {
              result[cleansed] = [word];
            }
          }
        return Object.values(result);
    }
}

console.log(GroupAnagram.groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));