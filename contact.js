// Optional: Loading favicon animation
const favicons = ["loading-frame1.png", "loading-frame2.png", "loading-frame3.png"];
let index = 0;
const loadingInterval = setInterval(() => {
    document.getElementById("favicon").href = favicons[index];
    index = (index + 1) % favicons.length;
}, 300);

window.onload = function () {
    clearInterval(loadingInterval);
    document.getElementById("favicon").href = "simplified-favicon-32x32.png";
};

// send button///
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function () {
    //   alert("Message Sent!");
    });
  });

//   email_input//////////////

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const sendButton = document.getElementById("sendButton");
    const errorMsg = document.getElementById("error-msg");

    emailInput.addEventListener("input", function () {
        const email = emailInput.value;

        if (email.includes("@") && email.includes("mail")) {
            errorMsg.style.display = "none";
            sendButton.disabled = false;
        } else {
            errorMsg.style.display = "block";
            sendButton.disabled = true;
        }
    });

    sendButton.addEventListener("click", function () {
        alert("Message Sent Successfully! ✅");
    });
});
//////////////not open basin pages////////
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // 🚫 Stop redirect

    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert("✅ Message Sent!");
            form.reset();
        } else {
            alert("❌ Error! Please try again.");
        }
    })
    .catch(error => {
        alert("❌ Network error. Please try later.");
    });
});


  



