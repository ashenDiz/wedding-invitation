// ==========================================
// Bulma Hamburger Menu
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// ==========================================
// Smooth Anchor Scrolling
// ==========================================
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// ==========================================
// Combined Scroll Events (To-Top Button & Progress Bar)
// ==========================================
window.addEventListener("scroll", function() {
  
  // 1. Scroll To Top Button Logic
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if(document.getElementById("toTop")) {
        document.getElementById("toTop").style.display = "block";
    }
  } else {
    if(document.getElementById("toTop")) {
        document.getElementById("toTop").style.display = "none";
    }
  }

  // 2. Top Progress Bar Logic (If you added it)
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  
  if(document.getElementById("myBar")) {
      document.getElementById("myBar").style.width = scrolled + "%";
  }
});


// ==========================================
// Old Preloader (Updated to jQuery 3+ syntax)
// ==========================================
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});

$(window).on("load", function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});


// ==========================================
// Subtle Gold Dust Canvas Effect
// ==========================================
const canvas = document.getElementById("petalCanvas");
if (canvas) {
    const ctx = canvas.getContext("2d");
    let particlesArray = [];

    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Resize canvas when window resizes
    window.addEventListener("resize", function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5; // Tiny dots
        this.speedX = Math.random() * 0.5 - 0.25; // Drift left/right
        this.speedY = Math.random() * 0.5 - 0.25; // Drift up/down
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges seamlessly
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = `rgba(184, 138, 117, ${this.opacity})`; // Warm terracotta/gold theme
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize and animate
    function initParticles() {
      particlesArray = [];
      let numberOfParticles = (canvas.width * canvas.height) / 9000; 
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
}

// ==========================================
// Audio Player Logic (Updated for SVGs)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");
    
    const musicIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`;
    const pauseIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;

    if (musicBtn && music) {
        musicBtn.addEventListener("click", function() {
            if (music.paused) {
                music.play();
                musicBtn.classList.add("playing");
                musicBtn.innerHTML = pauseIcon; 
            } else {
                music.pause();
                musicBtn.classList.remove("playing");
                musicBtn.innerHTML = musicIcon;
            }
        });
    }
});