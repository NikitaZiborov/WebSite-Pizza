let slides = document.getElementsByClassName("mySlides");

let SlideIndex = 0;
ShowSlides();

function ShowSlides(){
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    SlideIndex++;
    if (SlideIndex > slides.length) {
        SlideIndex = 1;
    }
    slides[SlideIndex - 1].style.display = "block";
    setTimeout(ShowSlides , 4000);
}

let modal_margherita = document.getElementById("modal-margherita");
let img_margherita = document.getElementById("img-margherita");
let modalImg_margherita = document.getElementById("img01");
let captionText_margherita = document.getElementById("caption-margherita");

img_margherita.onclick = function(){
    modal_margherita.style.display = "block";
    modalImg_margherita.src = this.src;
    captionText_margherita.innerHTML = this.alt;
}

let span_margherita = document.getElementsByClassName("close-margherita")[0];
span_margherita.onclick = function() { 
    modal_margherita.style.display = "none";
}


let modal_formaggio = document.getElementById("modal-formaggio");
let img_formaggio = document.getElementById("img-formaggio");
let modalImg_formaggio = document.getElementById("img02");
let captionText_formaggio = document.getElementById("caption-formaggio");

img_formaggio.onclick = function(){
    modal_formaggio.style.display = "block";
    modalImg_formaggio.src = this.src;
    captionText_formaggio.innerHTML = this.alt;
}

let span_formaggio = document.getElementsByClassName("close-formaggio")[0];
span_formaggio.onclick = function() { 
    modal_formaggio.style.display = "none";
}

let modal_chicken = document.getElementById("modal-chicken");
let img_chicken = document.getElementById("img-chicken");
let modalImg_chicken = document.getElementById("img03");
let captionText_chicken = document.getElementById("caption-chicken");

img_chicken.onclick = function(){
    modal_chicken.style.display = "block";
    modalImg_chicken.src = this.src;
    captionText_chicken.innerHTML = this.alt;
}

let span_chicken = document.getElementsByClassName("close-chicken")[0];
span_chicken.onclick = function() { 
    modal_chicken.style.display = "none";
}

let modal_pineapple = document.getElementById("modal-pineapple");
let img_pineapple = document.getElementById("img-pineapple");
let modalImg_pineapple = document.getElementById("img04");
let captionText_pineapple = document.getElementById("caption-pineapple");

img_pineapple.onclick = function(){
    modal_pineapple.style.display = "block";
    modalImg_pineapple.src = this.src;
    captionText_pineapple.innerHTML = this.alt;
}

let span_pineapple = document.getElementsByClassName("close-pineapple")[0];
span_pineapple.onclick = function() { 
    modal_pineapple.style.display = "none";
}

let modal_meat = document.getElementById("modal-meat");
let img_meat = document.getElementById("img-meat");
let modalImg_meat = document.getElementById("img05");
let captionText_meat = document.getElementById("caption-meat");

img_meat.onclick = function(){
    modal_meat.style.display = "block";
    modalImg_meat.src = this.src;
    captionText_meat.innerHTML = this.alt;
}

let span_meat = document.getElementsByClassName("close-meat")[0];
span_meat.onclick = function() { 
    modal_meat.style.display = "none";
}

let modal_parma = document.getElementById("modal-parma");
let img_parma = document.getElementById("img-parma");
let modalImg_parma = document.getElementById("img06");
let captionText_parma = document.getElementById("caption-parma");

img_parma.onclick = function(){
    modal_parma.style.display = "block";
    modalImg_parma.src = this.src;
    captionText_parma.innerHTML = this.alt;
}

let span_parma = document.getElementsByClassName("close-parma")[0];
span_parma.onclick = function() { 
    modal_parma.style.display = "none";
}