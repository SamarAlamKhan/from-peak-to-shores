const deviceMobile = window.matchMedia('(orientation: portrait) and (max-width: 767.98px)').matches;
const deviceTablet = window.matchMedia('(min-width: 768px) and (max-width: 1400px)').matches;

const imageUrls = [
    "./Assets/Phone/Peaks_Cover_L1.jpg",
    "./Assets/Phone/Kanchenjunga_L3.jpg",
    "./Assets/Phone/Nanda_Devi_L1.jpg",
    "./Assets/Phone/Mount_Nun_L1.jpg",
    "./Assets/Phone/Doddabetta_L1.jpg",
    "./Assets/Tablets/Taj_Mahal_L6.jpg",
    "./Assets/Tablets/Doddabetta_L1.jpg",
    "./Assets/Tablets/Mount_Nun_L1.jpg",
    "./Assets/Tablets/Nanda_Devi_L1.jpg",
    "./Assets/Tablets/Nanda_Devi_L1.jpg",
    "./Assets/Tablets/Kanchenjunga_L3.jpg",
    "./Assets/Tablets/Peaks_Cover_L1.jpg",
    "./Assets/Kanchenjunga_L3.jpg",
    "./Assets/Nanda_Devi_L1.jpg",
    "./Assets/Mount_Nun_L1.jpg",
    "./Assets/Doddabetta_L1.jpg",
    "./Assets/Taj_Mahal_L2.png",
    "./Assets/Red_Fort_L1.jpg",
    "./Assets/Hu_Tomb_L2.jpg",
    "./Assets/Hawa_Mahal_L1.jpg",
    "./Assets/Jama_Masjid_L1.jpg",
    "./Assets/India_Gate_L2.jpg",
    "./Assets/Gateway_Of_India_L1.jpg",
    "./Assets/Golden_Temple_L1.jpg",
    "./Assets/Qutub_Minar_L1.jpg",
    "./Assets/Ajanta_Ellora_L1.jpg",
];

function preloadImages() {

    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        
    });
};

window.addEventListener('load', () => {

    heroDesc.textContent = heroDesc.getAttribute('data-desc');
    setTimeout(preloadImages, 100);

});

// Peaks-Section
const peakScrollContainer = document.querySelector('.peak-scroll-container');
const peakLeft = document.querySelector('.peak-button-left');
const peakRight = document.querySelector('.peak-button-right');
const totalPeaks = document.querySelectorAll('.peak-thumb').length;

peakCurrentIndex = 0;

const scrollToIndex = (index) => {
    const scrollWidth = peakScrollContainer.clientWidth;
    
    peakScrollContainer.scrollTo({
        left: index * scrollWidth,
        behavior: 'smooth'
    });
    peakCurrentIndex = index;
};

peakLeft.addEventListener('click', () => {
    if(peakCurrentIndex > 0) {
        scrollToIndex(peakCurrentIndex - 1)
    } else {
        scrollToIndex(totalPeaks - 1)
    };
});

peakRight.addEventListener('click', () => {
    if(peakCurrentIndex < (totalPeaks - 1)) {
        scrollToIndex(peakCurrentIndex + 1)
    } else {
        scrollToIndex(peakCurrentIndex = 0)
    };
});


// Monuments-Section
const monuments = document.querySelector('.Monuments');
const hero = document.querySelector('.hero');
const heroText = document.querySelector('.hero-text');
const thumbs = document.querySelectorAll('.thumb');
const heroDesc = document.querySelector('.hero-desc');
const heroTitle = document.querySelector('.hero-title');
const monumentHeading = document.querySelector('.monument-heading');
const thumbnailSlider = document.querySelector('.thumbnail-slider');
const totalThumbs = thumbs.length - 1;
const thumbWidth = (((thumbnailSlider.clientWidth) * 2.45) / 9) - 55;

thumbs.forEach((thumb) => {

    let index = Array.from(thumbs).indexOf(thumb);
    let title = thumb.getAttribute('data-title');

    if(!deviceMobile) {
            thumb.addEventListener('mouseover', () => {

                thumb.style.transform = `scale(1.3)`;
                if(index == 0) {
                    thumbs[index+1].style.transform = `scale(1.1)`;    
                } else if(index == totalThumbs) {
                    thumbs[index-1].style.transform = `scale(1.1)`;   
                } else {
                    thumbs[index-1].style.transform = `scale(1.1)`;
                    thumbs[index+1].style.transform = `scale(1.1)`;
                }

            });

            thumb.addEventListener('mouseout', () => {

                thumb.style.filter = "none";
                thumb.style.transform = `scale(1)`;
                if(index == 0) {
                    thumbs[index+1].style.transform = `scale(1)`;    
                } else if(index == totalThumbs) {
                    thumbs[index-1].style.transform = `scale(1)`;   
                } else {
                    thumbs[index-1].style.transform = `scale(1)`;
                    thumbs[index+1].style.transform = `scale(1)`;
                }

            });
    }

    thumb.addEventListener('click', () => {

        setTimeout(() => {

            if (deviceMobile) {
                thumbnailSlider.style.width = "85%";
                hero.style.maxHeight = "20vh";
                // hero.style.overflowY = "auto";
                heroText.style.height = "100%";
                heroText.style.width = "100%";
                heroText.style.overflowY = "auto";
                monuments.style.backgroundImage = `url('${thumb.dataset.mobilebg}')`;
                monumentHeading.style.backgroundColor = thumb.getAttribute('data-mobilecolor');
            } else {
                monuments.style.backgroundImage = `url('${thumb.dataset.bg}')`;
                monumentHeading.style.backgroundColor = thumb.getAttribute('data-color');
            };
            // monuments.style.backgroundImage = `url('${thumb.dataset.bg}')`;
            monuments.classList.remove("fade");
            heroDesc.textContent = thumb.getAttribute('data-desc');
            heroTitle.textContent = thumb.getAttribute('data-title');
            hero.computedStyleMap.filter = "blur(2px)";
            hero.style.backdropFilter = "blur(1.5px)";
            hero.style.height = "auto";

            if(index == 4 || index == 2) {
                hero.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            } else {
                hero.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
            };

        }, 300);

    });  

});

window.addEventListener('load', () => {

    heroDesc.textContent = heroDesc.getAttribute('data-desc');
    setTimeout(preloadImages, 100);

});
