const openTeam = document.querySelector(".open-team");
const closeTeam = document.querySelector(".close-team");
const TeamBg = document.querySelector(".team-bg");
const team = document.querySelector(".team");

openTeam.addEventListener("click",()=>{
   team.classList.remove("hidden")
   team.classList.add("flex")
   TeamBg.classList.remove("hidden")
   TeamBg.classList.add("flex")
})

closeTeam.addEventListener("click",()=>{
   team.classList.remove("flex")
   team.classList.add("hidden")
   TeamBg.classList.remove("flex")
   TeamBg.classList.add("hidden")
})