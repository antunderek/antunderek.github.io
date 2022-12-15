// Papermod hugo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var id = this.getAttribute("href").substr(1);
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView({
                behavior: "smooth"
            });
        } else {
            document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView();
        }
    });
});

var mybutton = document.getElementById("top-link");
window.onscroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.visibility = "visible";
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.visibility = "hidden";
        mybutton.style.opacity = "0";
    }
};

