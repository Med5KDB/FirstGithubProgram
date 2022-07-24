prompt("Welcome to DUT 1 TR","A chaque fois que la souris bouge vous elargissez la photo voulue");
const panels = document.querySelectorAll('.med')
 
 panels.forEach((med) => {
    med.addEventListener('mousemove', () => {
        removeActiveClasses()
        med.classList.add('active')
    })
 })
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}// c'est la fonction removeActiveClasses qui permet de reduire les autres images a chaque fois que l'on clique sur une par ex




//  const panels = document.querySelectorAll('.med')
// panels.forEach((med)=>{
//     med.addEventListener('click',onClick)
// const panels = document.querySelectorAll('.med').length;
// for(let i=0; i<panels;i++){
//     document.que
// }