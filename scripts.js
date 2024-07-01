document.addEventListener('DOMContentLoaded', function() {
  
    const languageButton = document.querySelector('.language-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    const contactBar = document.querySelector('.contact-bar');
    const sections = document.querySelectorAll('section');
    const contactLinks = contactBar.querySelectorAll('.contact-button');

    function toggleDropdown() {
        dropdownContent.classList.toggle('show');
    }

    languageButton.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown();
    });

    
    document.addEventListener('click', function(event) {
        const targetElement = event.target;
        const isLanguageButton = targetElement.matches('.language-button') || targetElement.closest('.dropdown-content');

        if (!isLanguageButton && dropdownContent.classList.contains('show')) {
            toggleDropdown();
        }
    });

    function toggleContactBar() {
        contactBar.style.visibility = window.scrollY > 100 ? 'visible' : 'hidden';
        contactBar.style.opacity = window.scrollY > 100 ? '1' : '0';
    }

    function highlightActiveSection() {
        const fromTop = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const isInSection = fromTop >= sectionTop && fromTop <= sectionTop + sectionHeight;

            section.classList.toggle('active', isInSection);
        });
    }

   
    window.addEventListener('scroll', function() {
        toggleContactBar();
        highlightActiveSection();
    });

    contactLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".top-nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function() {
            
            links.forEach(link => link.classList.remove("active"));
            
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
});

document.addEventListener("DOMContentLoaded", function() {
   
});

document.addEventListener("DOMContentLoaded", function() {
    
});

console.log('Scripts yüklendi.');
document.addEventListener('DOMContentLoaded', function() {

    const languageButton = document.querySelector('.language-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    function toggleDropdown() {
        dropdownContent.classList.toggle('show');
    }

    languageButton.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown(); //
    });

    
    document.addEventListener('click', function(event) {
        const targetElement = event.target;
        const isLanguageButton = targetElement.matches('.language-button') || targetElement.closest('.dropdown-content');

        if (!isLanguageButton && dropdownContent.classList.contains('show')) {
            toggleDropdown(); 
        }
    });
});
