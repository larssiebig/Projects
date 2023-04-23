let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let dashboardBtn = document.querySelector(".bx-grid-alt");
let aboutmeBtn = document.querySelector(".bx-user");
let settingsBtn = document.querySelector(".bx-cog");
let contactBtn = document.querySelector(".bx-envelope");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search icon
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function toggleSettings()
{
  settingsBtn.addEventListener("click", ()=>{
    
  });
};

function menuBtnChange() 
{
  if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the icons class
  }else {
    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the icons class
  }
}

