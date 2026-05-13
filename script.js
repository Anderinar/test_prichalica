// Initialize Lucide icons
lucide.createIcons();

// --- Accordion Logic ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    
    trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items (optional, but requested for cleaner UI)
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-content').style.height = '0';
        });
        
        if (!isActive) {
            item.classList.add('active');
            // Calculate the actual height of the content
            const scrollHeight = content.scrollHeight;
            content.style.height = scrollHeight + 'px';
        }
    });
});

// --- Lead Form Mock Submission ---
const leadForm = document.getElementById('lead-form');

if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = leadForm.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.disabled = true;
        btn.innerHTML = 'Отправка...';
        
        // Simulate a small delay for feedback
        setTimeout(() => {
            btn.innerHTML = 'Заявка отправлена!';
            btn.classList.add('bg-green-600');
            
            // Clean up
            leadForm.reset();
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                btn.classList.remove('bg-green-600');
            }, 3000);
        }, 1500);
    });
}

// --- Smooth Entrance Animation ---
document.addEventListener('DOMContentLoaded', () => {
    const heroH1 = document.querySelector('h1');
    const heroP = document.querySelector('section.wavy-bg p');
    const heroBtn = document.querySelector('section.wavy-bg button');
    
    if (heroH1) heroH1.classList.add('animate-up');
    if (heroP) {
        setTimeout(() => heroP.classList.add('animate-up'), 200);
    }
    if (heroBtn) {
        setTimeout(() => heroBtn.classList.add('animate-up'), 400);
    }
});

// --- Placeholder for Mobile Menu (Simple Sidebar or Modal) ---
const mobileBtn = document.getElementById('mobile-menu-btn');
if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        alert('Меню в разработке. Все разделы доступны в десктопной версии или футере.');
    });
}
