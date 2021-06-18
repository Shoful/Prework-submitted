function namechanger(){
    var names_array = ["bob","jimmy","max b", "bernie", "jordan", "future hendrix"];
    var even = []; 
    var odd = []; 

   
    for (var i=0; i<names_array.length; i++) {
        var name = names_array[i];
        if (name.length %2 == 0) {
                   
            even.push('b' + name.substring(1, name.length));
        }
        else {
          
            odd.push(name.substr(0, name.length -1) + 'c');
        }
    }

    console.log(even);
    console.log(odd);

    return even;
}
var even_array = namechanger();
console.log(even_array);

