// get ul as global variable
const navbar = document.getElementById('navbar-list');
// get sections as global variable
const sections = document.querySelectorAll('section');

// build the nav
const navagation = () =>{
    
    let navList = '';
    // iterate through sections list
    sections.forEach( section =>{

        const sectionID = section.id;
        const sectionData = section.dataset.nav;
        
        navList += `<li><a class="menu__link" href="#${sectionID}">${sectionData}</a></li>`
    });

    //appending to nav
    navbar.innerHTML = navList;
};

navagation();

// Add class 'active' to section when near top of viewport
const sectionOptions = {
    root: null, //the viewport
    threshold: 0.25,
    rootMargin: "0px"
}

const sectionObserver = new IntersectionObserver(function(
    entries,
    sectionObserver
    ) {
    entries.forEach(entry => {
        if(entry.isIntersecting) { //if it is not intersecting excute
            entry.target.classList.add('active-class');
        } else {
        entry.target.classList.remove('active-class');
        //sectionObserver.unobserve(entry.target);//to stop observing once it is done
        }
    });
}, sectionOptions);

//to loop through all sections 
sections.forEach(section =>{
    sectionObserver.observe(section);
});