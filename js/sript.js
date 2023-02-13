// change color text header when scrolling
var names = document.getElementById('name');
var twitter = document.getElementById('twitter');
var instagram = document.getElementById('instagram');
var youtube = document.getElementById('youtube');
var facebook = document.getElementById('facebook');
var home = document.getElementById('home');
var videos = document.getElementById('videos');
var fotos = document.getElementById('fotos');
var barT = document.getElementById('bar top');
var barM = document.getElementById('bar middle');
var barB = document.getElementById('bar bottom');
var sidebarHome = document.getElementById('sidebarHome');
var sidebarVideos = document.getElementById('sidebarVideos');
var sidebarFotos = document.getElementById('sidebarFotos');
var twitter2 = document.getElementById('twitter+');
var instagram2 = document.getElementById('instagram+');
var youtube2 = document.getElementById('youtube+');
var facebook2 = document.getElementById('facebook+');


window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
        names.className = "names";
        twitter.className = "network_scroll";
        instagram.className = "network_scroll";
        youtube.className = "network_scroll";
        facebook.className = "network_scroll";
        home.className = "menus_scroll";
        fotos.className = "menus_scroll";
        videos.className = "menus_scroll";
        barT.style.backgroundColor = "black";
        barM.style.backgroundColor = "black";
        barB.style.backgroundColor = "black";
        sidebarHome.style.color = "black";
        sidebarVideos.style.color = "black";
        sidebarFotos.style.color = "black";
        instagram2.style.color = "black";
        youtube2.style.color = "black";
        facebook2.style.color = "black";
        twitter2.style.color = "black";
         
        } else {
            names.className = "name";
            instagram.className = "network";
            youtube.className = "network";
            twitter.className = "network";
            facebook.className = "network";
            home.className = "menus";
            fotos.className = "menus";
            videos.className = "menus";
            barT.style.backgroundColor = "#f8f3f0";
            barM.style.backgroundColor = "#f8f3f0";
            barB.style.backgroundColor = "#f8f3f0";
            sidebarHome.style.color = "white";
            sidebarVideos.style.color = "white";
            sidebarFotos.style.color = "white";
            sidebarNet.style.color = "white";
            instagram2.style.color = "white";
            youtube2.style.color = "white";
            facebook2.style.color = "white";
            twitter2.style.color = "white";
        }
        
    }
)

    
    // Hamburger Menu
    


  $(document).ready(function() {

        function toggleSidebar() {
          $(".button").toggleClass("active");
          $("main").toggleClass("move-to-left");
          $(".sidebar-item").toggleClass("active");
          $(".sidebar").toggleClass("visible");
        }
      
        $(".button").on("click tap", function() {
          toggleSidebar();
        });
      
        $(document).keyup(function(e) {
          if (e.keyCode === 27) {
            toggleSidebar();
          }
        });
      
      });