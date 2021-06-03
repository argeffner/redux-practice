// initially could use a window.onload = function
const face = document.getElementById('face');

document.getElementById('happy').addEventListener("click", () => {
    store.dispatch({type: "HAPPY", payload: 'മ◡മ'})
    document.body.style.background = 'aqua';
});
document.getElementById('sad').addEventListener("click", () => {
    store.dispatch({type: "SAD", payload: '⊙︿⊙'})
    document.body.style.background = 'aliceblue';
});
document.getElementById('angry').addEventListener("click", () => {
    store.dispatch({type: "ANGRY", payload: '⋋__⋌'})
    document.body.style.background = 'antiquewhite';
});
document.getElementById('confused').addEventListener("click", () => {
    store.dispatch({type: "CONFUSED", payload: '(@_@)'})
    document.body.style.background = 'beige';
});

//subscribe tells you when the store changes; 
//requires the use of a function 
function getFace() {
face.innerHTML = store.getState().face;
}
getFace();
store.subscribe(getFace)