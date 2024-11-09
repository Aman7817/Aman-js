///    immmediately invoked function expression (iife)

(function chai(){
    console.log(`DB connected`);

})();

( () =>  {
    console.log(`DB connected two ${name}`);
} )(`Aman`)
//chai()