// const track = document.querySelector(`.corausel-track ul`);
// const slide = Array.from(track.children);
// const nextbtn =document.querySelector(`.next`);
// const backbtn = document.querySelector(`.back`);
// const dotsNav = document.querySelector(`.corausel-nav`);
// const dots = Array.from(dotsNav.children);
// const btn = document.querySelector(`corausel-indicator`)

// const slideWidth = slide[0].getBoundingClientRect().width;
// console.log(dotsNav);

// // arrange the slide next to one another 
// slide[0].style.left = 0 ;
// slide[1].style.left = slideWidth;

// const img = document.querySelector(`.corausel-track`);
// const i = 0 ;
// const imgs = [`.img1`,`img2`,`img3`,`img4`];
// console.log(imgs[3])
//     const slideIndex = 0;
//     showSlides();

//     function showSlides() {
//     var i;
//     const slides = document.querySelector(".corausel-track li");
//     const dots = document.querySelector(".corausel-nav");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
function init(){
    let nama = ` reki desmahaldi`;
    function tampilnama (){
        console.log(nama)
    }
    console.dir(tampilnama);
}
init()






























