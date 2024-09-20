
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Loaded');
});

// window.addEventListener('load', function() {
//     const fourlogo = document.querySelector('.fourlogo');
//     fourlogo.style.transform = 'scale(1.2)';
//     fourlogo.style.transform = 'scale(1.0.5)';
//   });

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const slider = document.querySelector('.slider');
    
    // Function to move the slider to the active link
    function moveToActiveLink() {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) {
            const navItem = activeLink.parentElement;
            slider.style.width = `${navItem.offsetWidth}px`;
            slider.style.left = `${navItem.offsetLeft}px`;
        }
    }

    // Initial placement of slider under the active link
    moveToActiveLink();

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove 'active' class from all links
            links.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            e.target.classList.add('active');

            // Move the slider to the clicked link
            moveToActiveLink();

            // Delay navigation to allow slider animation (if needed)
            setTimeout(() => {
                window.location.href = e.target.href;
            }, 300); // Adjust the delay to match the CSS transition
        });
    });
});



var modal = document.getElementById("infoModal");

// Get the buttons that open the modal
var buttons = document.querySelectorAll(".info-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the paragraph to display the content
var modalText = document.getElementById("modal-text");

// Information to display in the modal for each button
var infoTexts = {
    "Clients": "Our commitment to clients involves providing the best AI solutions tailored to their needs.",
    "Society": "We strive to positively impact society by offering sustainable and innovative AI technologies.",
    "Employees": "Our employees are our greatest asset. We are dedicated to creating a positive and supportive work environment.",
    "Shareholders": "We ensure transparency and accountability to our shareholders, delivering consistent value and growth."
};

// When the user clicks on any button, open the modal and display the corresponding text
buttons.forEach(function(button) {
    button.onclick = function() {
        modal.style.display = "block";
        var info = this.getAttribute("data-info");
        modalText.textContent = infoTexts[info];
    };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};