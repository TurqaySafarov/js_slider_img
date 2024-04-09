let index = 1;
let slides = document.getElementsByClassName("Slides");

async function startSlideshow() {
  try {
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    const data = await res.json();
    
    for (let i = 0; i < 30; i++) {
      if (i >= slides.length) {
        let newSlide = document.createElement("div");
        newSlide.className = "Slides";
        document
          .querySelector(".container")
          .insertBefore(newSlide, document.querySelector(".next"));
        slides = document.getElementsByClassName("Slides");
      }
      slides[i].innerHTML = `<img src="${data[i].download_url}" alt="Slide">`;
    }
    showSlides(index);
    setInterval(() => {
      plusSlides(1); 
    }, 3000);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

startSlideshow();

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides((index += n));
}


