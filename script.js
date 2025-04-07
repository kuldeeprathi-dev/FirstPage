document.addEventListener("DOMContentLoaded",function(){
var  text = "Welcome to the FirstPage";
var index = 0;
var typingElement = document.getElementById("wel");

function typeLetter() {
    if (!typingElement) {
        console.error("Element with ID 'wel' not found !");
        return;
    }
    if(index < text.length){
        typingElement.innerHTML = text.substring(0,index + 1);
        index++;
        setTimeout(typeLetter, 150);
    } else{
        setTimeout(() => {
            // typingElement.innerContent = "";
            index = 0;
            typeLetter();
        } , 2000);
    }
    
}
// document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeLetter, 1000);
});
let menuTimeout;

function openMenu() {
    const menuBox = document.getElementById("menuBox");
    if (menuBox) {
        menuBox.classList.remove("hidden"); // Show the menu
        menuTimeout = setTimeout(closeMenu, 3000); // Auto-close after 3 seconds
    } else {
        console.error("Menu box not found");
    }
}

function closeMenu() {
    const menuBox = document.getElementById("menuBox");
    if (menuBox) {
        menuBox.classList.add("hidden"); // Hide the menu
    } else {
        console.error("Menu box not found");
    }
}

function attachMenuEvents() {
    const plusButton = document.getElementById("plusButton");
    const menuBox = document.getElementById("menuBox");

    if (plusButton && menuBox) {
        // Attach click event to plus button
        plusButton.addEventListener("click", function () {
            openMenu();
        });

        // Stop auto-close when hovering over menu
        menuBox.addEventListener("mouseenter", function () {
            clearTimeout(menuTimeout);
        });

        // Resume auto-close when mouse leaves the menuBox
        menuBox.addEventListener("mouseleave", function () {
            menuTimeout = setTimeout(closeMenu, 3000);
        });
    } else {
        console.error("Plus button or menu box not found");
    }
}

// Ensure to call `attachMenuEvents` on every page load
document.addEventListener("DOMContentLoaded", function () {
    attachMenuEvents();
});
// for alert massage 
// document.getElementById('plusButton').addEventListener('click', function() {
//     alert("Plus button clicked!");
//   });
//   For downlosd the kuldeeprathourresume

  document.getElementById("downloadBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Default behavior rokna (page reload na ho)
    
    const fileUrl = "KuldeepRathourResume.pdf.zst"; // File ka sahi path
    const fileName = "KuldeepRathourResume.pdf.zst"; // Save hone wala naam
    
    const link = document.createElement("a"); 
    link.href = fileUrl;
    link.download = fileName; // Force download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  