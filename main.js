
// collection element
let scrollerBar = document.querySelector(".scroll-bar");
let progressBar = document.querySelector(".progress-bar");

scrollerBar.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})


window.addEventListener("scroll",()=>{
    // document.documentElement.clientHeight : the main target of existence this element to overall of the content in the end of the page
    let completedHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    progressBar.style.width = `${(scrollTop / completedHeight) * 100 }%`;


    if(this.scrollY >= 1000) {
        scrollerBar.classList.add("show");
    }else{
        scrollerBar.classList.remove("show");       
    }
})

$(window).on("load", function() {
    // fadeOut used to hidden the page content  
    $(".center-page span").fadeOut(1000,function(){
        /* parent: refer to the : center-page */
        $(this).parent().fadeOut(2000 , function(){
            $(this).remove(); /* remove element from dom */
        });
    });

    $("body").css("overflow","auto");
});
