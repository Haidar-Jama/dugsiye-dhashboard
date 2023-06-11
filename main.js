
const colorSwitcher = document.querySelectorAll(".theme");
const container = document.querySelector(".btn")


colorSwitcher.forEach(function(color){
    
     color.addEventListener('click', function(e){
          
             if (e.target.id === "brown"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
               
               btnRefresh.style.backgroundColor=e.target.id;
               
             };
             if (e.target.id === "limegreen"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
             };
             if (e.target.id === "darkorange"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
             };
             if (e.target.id === "darkviolet"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
             };
             if (e.target.id === "teal"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
             };
             if (e.target.id === "navy"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
             };
             if (e.target.id === "red"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
             };
             if (e.target.id === "magenta"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
             };
             if (e.target.id === "gold"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
             };
             if (e.target.id === "darkturquoise"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
             };
             if (e.target.id === "chocolate"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
             };
             if (e.target.id === "indigo"){
               container.style.backgroundColor = e.target.id;
               document.body.style.backgroundColor=e.target.id;
               btnRefresh.style.backgroundColor=e.target.id;
             };
         
         });
     });


      
      let text = document.querySelector("#text");
      let input = document.querySelector(".fontsize");
      let inputTwo = document.querySelector(".fontColor");
      let inputTree = document.querySelector(".fontWeight");
      let fontFamily = document.querySelector("#fonts")
      let textTransform = document.querySelector("#textTransform")
      let refreshBtn = document.querySelector("#btnRefresh")
      
    

      function updateValue(e) {
        text.textContent = e.target.value;
      }
       
     


     input.addEventListener("keyup" , ()=>{
          text.style.fontSize=input.value;
     });

     inputTwo.addEventListener("keyup" , ()=>{
          text.style.color=inputTwo.value;
     });

     inputTree.addEventListener("keyup" , ()=>{
          text.style.fontWeight=inputTree.value;
     })

     fontFamily.addEventListener("change" , ()=>{
          text.style.fontFamily=fontFamily.value;
     })
     textTransform.addEventListener("change" , ()=>{
          text.style.textTransform=textTransform.value;
     })

    

     function handleClick() {
       window.location.reload();
     }
     
     refreshBtn.addEventListener("click", handleClick);
     
    

