window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
        document.body.style.setProperty(
            "--scroll-per",
            `${(window.pageYOffset / document.body.offsetHeight) * 200}%`
        );
    },
    false
);

document.getElementById("centerDivClick").addEventListener("click", function(){
    document.getElementById('CenteringDivs').scrollIntoView();
});

document.getElementById("felxClick").addEventListener("click", function(){
    document.getElementById('flexArticle').scrollIntoView();
});