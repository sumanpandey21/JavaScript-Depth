// Sometime global scope pollution create a problem ,so to remove this pollution we used IIFE.
// semicolan is necessary in this function

(function display() { //Named IIFE
    console.log("Hello world.");
})();

((name) => { //Unamed IIFE
    console.log(`Hello from ${name}.`);

})("arrow IIFE");

