function findLongest(names) {
    let longest_name = '';
    for (let i = 0; i < names.length; i += 1) {
        if (names[i].length > longest_name.length) {
            longest_name = names[i];
}
    }
    return longest_name;
}
let array = [ "Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele"];

let answer = findLongest(array);

console.log(answer);