document.getElementById("button").addEventListener("click",()=>{
  let Fname=document.getElementById("name").value.trim();
  let year=document.getElementById("year").value.trim();
  let url=document.getElementById("url");
	if(Fname && year){
    url.innerHTML=`https://localhost:8080/?name=${Fname}&year=${year}`
  }
  else if(Fname){
    url.innerHTML=`https://localhost:8080/?name=${Fname}`
  }
  else if(year){
    url.innerHTML=`https://localhost:8080/?year=${year}`
  }
  else{
    url.innerHTML=`https://localhost:8080/`
  }
})