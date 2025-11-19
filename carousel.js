// 3D Card Carousel (Cover Flow Style)
class CardCarousel {
    constructor(container) {
        this.container = container;
        this.items = Array.from(container.querySelectorAll('.card-carousel-item'));
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.updatePositions();
        this.attachEventListeners();
    }

    updatePositions() {
        this.items.forEach((item, index) => {
            // Remove all position classes
            item.classList.remove('active', 'left-1', 'left-2', 'left-3', 'right-1', 'right-2', 'right-3', 'hidden');
            
            const diff = index - this.currentIndex;
            
            if (diff === 0) {
                item.classList.add('active');
            } else if (diff === -1) {
                item.classList.add('left-1');
            } else if (diff === -2) {
                item.classList.add('left-2');
            } else if (diff <= -3) {
                item.classList.add('left-3');
            } else if (diff === 1) {
                item.classList.add('right-1');
            } else if (diff === 2) {
                item.classList.add('right-2');
            } else if (diff >= 3) {
                item.classList.add('right-3');
            }
        });

        this.updateIndicators();
        this.updateCounter();
    }

    next() {
        if (this.currentIndex < this.items.length - 1) {
            this.currentIndex++;
            this.updatePositions();
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updatePositions();
        }
    }

    goTo(index) {
        if (index >= 0 && index < this.items.length) {
            this.currentIndex = index;
            this.updatePositions();
        }
    }

    attachEventListeners() {
        // Click on cards to navigate
        this.items.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.goTo(index);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prev();
            } else if (e.key === 'ArrowRight') {
                this.next();
            }
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                this.next();
            }
            if (touchEndX > touchStartX + 50) {
                this.prev();
            }
        };

        this.handleSwipe = handleSwipe;
    }

    updateIndicators() {
        const wrapper = this.container.closest('.card-carousel-wrapper');
        if (!wrapper) return;

        const indicators = wrapper.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    updateCounter() {
        const wrapper = this.container.closest('.card-carousel-wrapper');
        if (!wrapper) return;

        const counter = wrapper.querySelector('.carousel-counter');
        if (counter) {
            counter.textContent = `${this.currentIndex + 1} / ${this.items.length}`;
        }
    }
}

// Initialize all carousels on page load
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.card-carousel');
    const carouselInstances = [];

    carousels.forEach(carousel => {
        const instance = new CardCarousel(carousel);
        carouselInstances.push(instance);

        // Set up navigation buttons
        const wrapper = carousel.closest('.card-carousel-wrapper');
        if (!wrapper) return;

        const prevBtn = wrapper.querySelector('.carousel-prev');
        const nextBtn = wrapper.querySelector('.carousel-next');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => instance.prev());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => instance.next());
        }

        // Set up indicator click handlers
        const indicators = wrapper.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => instance.goTo(index));
        });
    });
});
