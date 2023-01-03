var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")
}

//Menu
var sideMenu1 = document.getElementById("sideMenu");

function openMenu() {
    sideMenu1.style.right = "0";
    sideMenu1.classList.remove("hidden");
}

function closeMenu() {
    sideMenu1.style.right = "-200";
    sideMenu1.classList.add("hidden");

}

//message after submit
const msg = document.getElementById("msg")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwibHiS8WJ4jLyxo-rVNQLp-lA7F8_eZlDkrkRlJeebnJKFT3npqgxHh3RekEuTcag/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
                msg.innerHTML = "Message Sent Successfully"
                setTimeout(function() {
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            }

        )
        .catch(error => {
            msg.innerHTML = "Error! Please Try Again"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
})

var typed = new typed(".typing", {
    strings: ["", "Web Designer", "web Developer", "Android Application Developer", "Java Developer", "Graphic Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})