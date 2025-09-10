// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('cursor');
    const mattress1 = document.getElementById('mattress1');
    const mattress2 = document.getElementById('mattress2');
    const mattress3 = document.getElementById('mattress3');
    const mattress = document.getElementById('mattress');


 

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
    
    if (mattress1) {
        mattress1.addEventListener('mouseenter', function() {
            cursor.classList.add('sleep1');
        });

        mattress1.addEventListener('mouseleave', function() {
            cursor.classList.remove('sleep1');
        });
    }

    if (mattress2) {
        mattress2.addEventListener('mouseenter', function() {
            cursor.classList.add('sleep2');
        });

        mattress2.addEventListener('mouseleave', function() {
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

    if (mattress) {
        mattress.addEventListener('mouseenter', function() {
            cursor.classList.add('awake');
        });

        mattress.addEventListener('mouseleave', function() {
            cursor.classList.remove('awake');
        });
    }
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.menu');
    if (window.scrollY > 50) {       // adjust threshold
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });