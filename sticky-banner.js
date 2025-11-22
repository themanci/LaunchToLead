document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('header-container');
    const banner = document.querySelector('.company-launch-banner');
    const mainContent = document.querySelector('main');

    if (headerContainer && banner && mainContent) {
        const stickyWrapper = document.createElement('div');
        stickyWrapper.id = 'sticky-top-container';
        stickyWrapper.className = 'fixed top-0 left-0 right-0 z-40';

        const parent = headerContainer.parentNode;
        
        parent.insertBefore(stickyWrapper, headerContainer);

        stickyWrapper.appendChild(headerContainer);
        stickyWrapper.appendChild(banner);

        const adjustMainContentPadding = () => {
            const wrapperHeight = stickyWrapper.offsetHeight;
            mainContent.style.paddingTop = `${wrapperHeight}px`;
        };

        // Use a MutationObserver to wait for the navigation to be injected.
        const observer = new MutationObserver((mutationsList, observer) => {
            for(const mutation of mutationsList) {
                if (mutation.type === 'childList' && headerContainer.querySelector('nav')) {
                    adjustMainContentPadding();
                    observer.disconnect(); // Stop observing once the nav is loaded.
                    break;
                }
            }
        });

        observer.observe(headerContainer, { childList: true });

        window.addEventListener('resize', adjustMainContentPadding);
    }
});
