// Get translations from global scope (set by Astro)
const translations = window.contactTranslations || {};

const showroomData = {
  baku: {
    title: translations.baku?.office || "Baku Office",
    label: translations.baku?.flagship || "Global Flagship",
    addr: translations.baku?.address || "Eldar Taghizade Street 18A,<br>Baku, Azerbaijan",
    hours: translations.baku?.hours || "Monday - Saturday: 09:00 - 19:00<br>Sunday: Closed",
    phone: translations.baku?.phone || "+ 994 (50) 658 80 80",
    email: translations.baku?.email || "info@artdecooutdoor.com",
    cityName: translations.baku?.cityName || "Baku",
    img: translations.baku?.image || "/images/backgrounds/baku.webp"
  },
  washington: {
    title: translations.washington?.office || "Washington DC",
    label: translations.washington?.flagship || "USA Presence",
    addr: translations.washington?.address || "1221 Connecticut Ave NW,<br>Washington, DC 20036",
    hours: translations.washington?.hours || "Monday - Saturday: 09:00 - 18:30<br>Sunday: Closed",
    phone: translations.washington?.phone || "+ 1 833 800 3326",
    email: translations.washington?.email || "info@artdecooutdoor.com",
    cityName: translations.washington?.cityName || "Washington",
    img: translations.washington?.image || "/images/backgrounds/washington.webp"
  },
  toronto: {
    title: translations.toronto?.office || "Toronto Office",
    label: translations.toronto?.flagship || "Canada Regional",
    addr: translations.toronto?.address || "82 Argento Crescent,<br>Vaughan, ON, L4H 0B6, Canada",
    hours: translations.toronto?.hours || "Monday - Saturday: 09:00 - 17:30<br>Sunday: Closed",
    phone: translations.toronto?.phone || "+ 1 (437) 818 05 08",
    email: translations.toronto?.email || "info@artdecooutdoor.com",
    cityName: translations.toronto?.cityName || "Toronto",
    img: translations.toronto?.image || "/images/backgrounds/toronto.webp"
  },
  ankara: {
    title: translations.ankara?.office || "Ankara Office",
    label: translations.ankara?.flagship || "Turkey Hub",
    addr: translations.ankara?.address || "Mustafa Kemal, Dumlupinar Blv. 266 A,<br>06510 Chankaya / Ankara, Turkey",
    hours: translations.ankara?.hours || "Monday - Saturday: 09:00 - 17:30<br>Sunday: Closed",
    phone: translations.ankara?.phone || "+ 90 (536) 609 05 60",
    email: translations.ankara?.email || "info@artdecooutdoor.com",
    cityName: translations.ankara?.cityName || "Ankara",
    img: translations.ankara?.image || "/images/backgrounds/ankara.webp"
  }
};

let activeCity = 'baku';
const tabs = document.querySelectorAll('.nav-tab');
const navContainer = document.getElementById('navTabs');
const paneVisual = document.getElementById('paneVisual');

// Preload all images on page load for instant switching
const imageCache = {};
document.addEventListener('DOMContentLoaded', () => {
  const successMsg = document.getElementById('successMessage');
  if (successMsg && translations.successMessage) {
    successMsg.textContent = translations.successMessage.replace('{city}', showroomData[activeCity].cityName);
  }

  // Set initial city in hidden input
  const cityHidden = document.getElementById('cityHidden');
  if (cityHidden) {
    cityHidden.value = 'baku';
  }

  // Preload all city images
  Object.keys(showroomData).forEach(city => {
    const img = new Image();
    img.src = showroomData[city].img;
    imageCache[city] = img;
  });
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const cityKey = tab.dataset.city;
    if (cityKey === activeCity) return;

    // Update hidden input
    const cityHidden = document.getElementById('cityHidden');
    if (cityHidden) {
      cityHidden.value = cityKey;
    }

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const offsetLeft = tab.offsetLeft - (navContainer.offsetWidth / 2) + (tab.offsetWidth / 2);
    navContainer.scrollTo({ left: offsetLeft, behavior: 'smooth' });

    const data = showroomData[cityKey];
    
    // Start fade out animation
    paneVisual.classList.add('changing');
    
    // Update content after short fade animation (300ms instead of 600ms)
    setTimeout(() => {
      activeCity = cityKey;

      // Update all content - image is already preloaded
      document.getElementById('cityImg').src = data.img;
      document.getElementById('dispCity').textContent = data.title;
      document.querySelector('.city-label').textContent = data.label;
      document.getElementById('dispAddr').innerHTML = data.addr;
      document.getElementById('dispHours').innerHTML = data.hours;
      document.getElementById('dispPhone').textContent = data.phone;
      document.getElementById('dispEmail').textContent = data.email;
      
      // Update success message with city name
      const successMsg = document.getElementById('successMessage');
      if (successMsg && translations.successMessage) {
        successMsg.textContent = translations.successMessage.replace('{city}', data.cityName);
      }

      // Fade in immediately after DOM update
      requestAnimationFrame(() => {
        paneVisual.classList.remove('changing');
      });
    }, 300);
  });
});

document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const form = document.getElementById('contactForm');
  const formData = new FormData(form);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const phone = formData.get('phone');
  const email = formData.get('email');
  const message = formData.get('message');
  const city = document.getElementById('cityHidden')?.value || 'baku';

  try {
    const response = await fetch('/api/sendemail.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        type: 'contact-city', 
        firstName, 
        lastName, 
        phone, 
        email, 
        message,
        city
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      document.getElementById('successOverlay').classList.add('active');
      const closeBtn = document.getElementById('closeSuccessBtn');
      if (closeBtn) closeBtn.focus();
      form.reset();
    } else {
      console.error('Error:', data.error);
      alert('Failed to send message');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('Failed to send message');
  }
});

function closeSuccess() {
  document.getElementById('successOverlay').classList.remove('active');
  document.getElementById('contactForm').reset();
}
