//iniciar scrollspy

$("body").scrollspy({target: "#menu-navegacion"});

//scroll suavizado

$("#menu-navegacion a").on("click",function(e){
    if(this.hash != ""){
        e.preventDefault();
        const hash=this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        },800,function(){
            window.location.hash=hash;
        })
    }
})
