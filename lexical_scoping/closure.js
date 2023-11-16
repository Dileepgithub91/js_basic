//Lexical Scoping Example
function init(){
    var name="Dileep";

    function displayName(){
        console.log(name);
    }
    displayName();

}
init();