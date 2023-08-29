

var icon = document.getElementById("darkmode");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.getElementsByClassName = "ri-sun-line";
        nav.style.transition = "2s"
        page1.style.transition = "2s"
        page2.style.transition = "2s"
        page3.style.transition = "2s"
        page4.style.transition = "2s"
        page5.style.transition = "2s"
        ryuzaki.style.transition = "2s"
        container.style.transition = "2s"
        body.style.transition = "2s"
        
    }else{
        icon.getElementById("dark-mode")
    }
}


const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 120%',
      end: 'center 50%',
      scrub: true,
    },
  });
});

