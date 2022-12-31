// main function for variable scoping 
(function () {
    
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav--link');
    
    console.log(navLinks)
    
    navToggle.addEventListener('click',() =>{
        document.body.classList.toggle('nav-open');
    })
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        })
    })
      
    
    })(); 
    