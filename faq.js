// FAQ Page Interactivity

// Toggle FAQ items
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Search functionality
const searchInput = document.getElementById('faq-search');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question span').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer-content').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Hide sections with no visible items
    document.querySelectorAll('.faq-section').forEach(section => {
        const visibleItems = section.querySelectorAll('.faq-item[style="display: block"]').length;
        const allItems = section.querySelectorAll('.faq-item').length;
        
        if (searchTerm === '' || visibleItems > 0) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});

// Filter functionality
document.querySelectorAll('.faq-filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        // Update active button
        document.querySelectorAll('.faq-filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Clear search
        searchInput.value = '';
        
        // Show/hide sections
        if (filter === 'all') {
            document.querySelectorAll('.faq-section').forEach(section => {
                section.style.display = 'block';
            });
            document.querySelectorAll('.faq-item').forEach(item => {
                item.style.display = 'block';
            });
        } else {
            document.querySelectorAll('.faq-section').forEach(section => {
                if (section.dataset.category === filter) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        }
    });
});
