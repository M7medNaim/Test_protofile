let header=document.querySelector(".nav");
let buttonHead=document.querySelector(".showHeader");
let sections=document.querySelectorAll("section");
let links=document.querySelectorAll(".links button");
let settingBtn=document.querySelector("div.col1");
let divColors=document.querySelector("div.colors");
let moonBtn=document.querySelector("button.moonBtn");
let icons=document.querySelectorAll("button.moonBtn i");
let colors=document.querySelectorAll("div.colors div");

let count=parseInt(localStorage.getItem("counter"))|0;
let c=0;

showTypeMood();
for (let index = 0; index < links.length; index++) {
     links[index].onclick=_=>{
        links.forEach(element => {
           element.classList.remove("activeLink") 
        });
        links[index].classList.add("activeLink")
        sections.forEach(element => {
            element.classList.remove("activ");
        }); 
        sections[index].classList.add("activ")
     }    
}

settingBtn.onclick=_=>{
    // settingBtn.classList.toggle("tranc");
    // // divColors.style.setProperty("transform","translate(0px,0px)")
    // divColors.classList.toggle("tranc");

    if(c%2==0){
        c++;
        settingBtn.classList.toggle("tranc");
        divColors.style.setProperty("transform","translate(0px,0px)")
    }else{
        c++;
        settingBtn.classList.toggle("tranc");
        divColors.style.setProperty("transform","translate(280px,0px)")
    }

}

moonBtn.onclick=_=>{
    if(count==0){
        count++;
        icons[0].style.setProperty("display","none")
        icons[1].style.setProperty("display","block");
        document.body.classList.toggle("dark")
        localStorage.setItem("mood","dark")
        localStorage.setItem("counter",count)
        let display=["none","block"];
        localStorage.setItem("shap",JSON.stringify(display));
    }else{
       count=0;
        icons[0].style.setProperty("display","block")
        icons[1].style.setProperty("display","none");
        document.body.classList.toggle("dark") 
        localStorage.setItem("mood","light");
        localStorage.setItem("counter",count)
        let display=["block","none"];
        localStorage.setItem("shap",JSON.stringify(display));
    }

}

buttonHead.onclick=_=>{
    header.classList.toggle("show");
}

function showTypeMood(){
    let mood=localStorage.getItem("mood");
    let display=JSON.parse(localStorage.getItem("shap"))
    if(mood=="dark"){
        document.body.setAttribute("class","dark");
    }
    if(display!=null){
        icons[0].style.setProperty("display",display[0])
        icons[1].style.setProperty("display",display[1]);
    }
}

colors.forEach(element => {
    element.onclick = _=>{
            let color=element.getAttribute("class");
            document.body.setAttribute("class",color)
    }
  
});