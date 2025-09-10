// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('cursor');
    const competitorMattress = document.getElementById('mattress1');
    const ourMattress = document.getElementById('mattress2');
    const mattress3 = document.getElementById('mattress3');


 

    // Track mouse movement
    document.addEventListener('mousemove', function(e) {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            // Debug: Log mouse position
            // console.log('Mouse at:', e.clientX, e.clientY);
        }
    });

    // Cursor state changes
    if (competitorMattress) {
        competitorMattress.addEventListener('mouseenter', function() {
            cursor.classList.add('sleep1');
        });

        competitorMattress.addEventListener('mouseleave', function() {
            cursor.classList.remove('sleep1');
        });
    }

    if (ourMattress) {
        ourMattress.addEventListener('mouseenter', function() {
            cursor.classList.add('sleep2');
        });

        ourMattress.addEventListener('mouseleave', function() {
            cursor.classList.remove('sleep2');
        });
    }

    if (mattress3) {
        mattress3.addEventListener('mouseenter', function() {
            cursor.classList.add('sleep3');
        });

        mattress3.addEventListener('mouseleave', function() {
            cursor.classList.remove('sleep3');
        });
    }
});