function shareTo(platform) {
    // Use the current window location to ensure we share the exact page the user is on
    // This avoids issues where copied pages might still point to the original og:url
    const urlToShare = window.location.href;
    
    const url = encodeURIComponent(urlToShare);
    const title = encodeURIComponent(document.title);
    let shareUrl = '';

    switch (platform) {
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'copy':
            navigator.clipboard.writeText(urlToShare).then(() => {
                // Visual feedback
                const btn = document.activeElement;
                const originalIcon = btn.innerHTML;
                
                // Create a temporary tooltip or change icon
                const checkIcon = '<i data-lucide="check" class="w-4 h-4"></i>';
                
                // If the button has an icon inside, replace it temporarily
                if (btn.querySelector('svg') || btn.querySelector('i')) {
                    btn.innerHTML = checkIcon;
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                    
                    setTimeout(() => {
                        btn.innerHTML = originalIcon;
                        if (typeof lucide !== 'undefined') lucide.createIcons();
                    }, 2000);
                } else {
                    alert('Link copied to clipboard!');
                }
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
            return; // Don't open a window for copy
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}
