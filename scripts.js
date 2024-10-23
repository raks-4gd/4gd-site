
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Loaded');
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const slider = document.querySelector('.slider');
    function moveToActiveLink() {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) {
            const navItem = activeLink.parentElement;
            slider.style.width = `${navItem.offsetWidth}px`;
            slider.style.left = `${navItem.offsetLeft}px`;
        }
    }
    function setActiveLinkBasedOnURL() {
        const currentURL = window.location.pathname; 
        links.forEach(link => {
            const linkURL = new URL(link.href).pathname; 
            if (linkURL === currentURL) {
                link.classList.add('active');
            } else {
                link.classList.remove('active'); 
            }
        });
        moveToActiveLink(); 
    }
    setActiveLinkBasedOnURL();

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            links.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
            moveToActiveLink();
            setTimeout(() => {
                window.location.href = e.target.href;
            }, 500);
        });
    });
});
const smoothElement = document.querySelector('.smooth');
const text1 = 'Technology for the good of humanity';
const text2 = 'Serving those who serve humanity';

let currentText = text2;

function swapText() {
  // Start rolling out the current text
  smoothElement.classList.add('hidden');
  smoothElement.classList.remove('visible');

  // Wait for the roll-out to complete before swapping the text
  setTimeout(() => {
    // Swap the text
    currentText = currentText === text1 ? text2 : text1;
    smoothElement.innerHTML = currentText;

    // Start rolling in the new text
    smoothElement.classList.remove('hidden');
    smoothElement.classList.add('visible');

    // Set different delays based on the current text
    let delay = currentText === text1 ? 10000 : 4000; // Text 1 lasts for 10 seconds, Text 2 for 4 seconds

    // Call the swapText function again after the delay
    setTimeout(swapText, delay);
  }, 1000); // Time for the roll-out transition to complete (matches CSS transition)
}

// Initial delay for Text 1 to start visible for 10 seconds
setTimeout(swapText, 10000);

document.getElementById('location-link').href = "https://maps.app.goo.gl/hPSEGwhzh4MDcMzw8";
document.getElementById('phone').href = "tel:+91 80880 33924";
document.getElementById('email').href = "https://mail.google.com/mail/?view=cm&fs=1&to=connect@4gd.ai&su=Subject&body=Body%20Text";
document.getElementById('social').href = "https://www.linkedin.com/company/4good-ai";
