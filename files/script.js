 
        function showModal(name, description, imageUrl) {
            const modal = document.getElementById('logoModal');
            const modalImage = document.getElementById('modalLogoImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalText = document.getElementById('modalText');
            
            modalImage.src = imageUrl;
            modalImage.alt = name + ' logo detailed view';
            
            modalTitle.textContent = name;
            modalText.textContent = description;
            
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('logoModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.getElementById('logoModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Preload images for better user experience
        window.addEventListener('load', function() {
            const imageUrls = [
                'https://placehold.co/400x400/667eea/white?text=TV',
                'https://placehold.co/400x400/4fd1c5/white?text=NG',
                'https://placehold.co/400x400/f56565/white?text=QS',
                'https://placehold.co/400x400/ed8936/white?text=SL',
                'https://placehold.co/400x400/48bb78/white?text=ET',
                'https://placehold.co/400x400/9f7aea/white?text=DS'
            ];
            
            imageUrls.forEach(url => {
                const img = new Image();
                img.src = url;
            });
        });

        function handleLogoError(img) {
    img.style.display = 'none'; // hide broken image

    const titleEl = document.getElementById('modalTitle');
    const initials = titleEl.textContent
        .split(' ')
        .map(w => w[0])
        .join('')
        .toUpperCase();

    img.parentElement.innerHTML =
        `<div style="font-size:4rem;color:#667eea;font-weight:bold;">${initials}</div>`;
}
