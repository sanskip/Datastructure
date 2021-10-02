function is_repeated_char(string) {
    let flag = true;
    let freq = {};
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
            flag = false;
        } else {
            freq[character] = 1;
        }
    }
    return flag;
}

function longest_substring_without_repeating_characters(str1) {

    var max_length = 0,
        maxp = '';

    for (var i = 0; i < str1.length; i++) {
        var subs = str1.substr(i, str1.length);

        for (var j = subs.length; j >= 0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;

            if (is_repeated_char(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }

    return maxp;
}
console.log(longest_substring_without_repeating_characters("abracadabra"));

console.log(longest_substring_without_repeating_characters("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));
