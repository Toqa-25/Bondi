/********************************************************************/
// vars
let form= document.getElementById("nav-form") ,
    navLinkes = Array.from (document.querySelectorAll(".nav-link")),
    workItems = Array.from (document.querySelectorAll(".work-list-item")),
    sections =  (document.querySelectorAll(".section")),
    home =  document.getElementById("home"),
    homeNave =  document.querySelector('[data-id="home"]'),
    servNave =  document.querySelector('[data-id="services"]')

/********************************************************************/
active(navLinkes)
active(workItems)
// function
function active(array){
    array.map(arrayItem => {
        arrayItem.onclick=function(e){
            remvoveAllActive(array)
            e.currentTarget.classList.add("active")
        }
    })
}

onscroll = function(){
    var scrollPosition = document.documentElement.scrollTop ;
    sections.forEach(section => {
        if(scrollPosition > section.offsetTop - 32 && scrollPosition < section.offsetTop + section.offsetHeight   ){
            var sectionIdName = section.attributes.id.value
            activeSection(navLinkes, sectionIdName)
        }
        else if (scrollPosition < home.offsetHeight){
            remvoveAllActive(navLinkes)
            homeNave.classList.add("active")           
        }
    });
    
}

homeNave.onclick = function(){
    window.scrollTo({top:0 , behavior:'smooth'})

}
 function activeSection(array, sectionId){
    remvoveAllActive(array)
    array.map(arrayItem => {
        if ( arrayItem.dataset.id == sectionId ){
            arrayItem.classList.add("active")
        }
    })        
 }
 function remvoveAllActive(array){
    array.map(arrayItem => {
        arrayItem.classList.remove("active")
    })
 }
/********************************************************************/
console.log(navLinkes)
console.log(homeNave)
// window.addEventListener("load" , function(){
//     console.log("ser")
//     servNave.click()
//  })
    //  window.onload=