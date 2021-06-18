function ask(){

    name = prompt("What is your name?");
      
        if(name != null && isNaN(name) & name != ""){
              document.write("Hello ", name);
        }else{
          alert("Invalid name, please try again")
          ask();
        }
    }
    
    ask();