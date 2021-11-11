var arabic=document.getElementById("arabic");
var english=document.getElementById("english");
var fransh=document.getElementById("fransh");
var text=document.getElementById("text");
arabic.onclick=()=>{
    setLanguage("arabic");
    localStorage.setItem("lang",arabic);
};
english.onclick=()=>{
    setLanguage("english");
    localStorage.setItem("lang",english);
};
fransh.onclick=()=>{
    setLanguage("fransh");
    localStorage.setItem("lang",fransh);
};
onload=()=>{
setLanguage(localStorage.getItem("lang"));
};
function setLanguage(getLanguage){
 if(getLanguage==="arabic"){
  text.innerHTML="انا عراقي";
 }else if(getLanguage==="english"){
text.innerHTML="Iam Iraqi";
 } else if(getLanguage==="fransh"){
   text.innerHTML="je suis irakien";
 }
}