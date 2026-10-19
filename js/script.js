// ===== قائمة الجوال =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// إغلاق القائمة عند النقر على رابط
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== تغيير خلفية شريط التنقل عند التمرير =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(30, 58, 95, 1)';
  } else {
    navbar.style.background = 'rgba(30, 58, 95, 0.95)';
  }
});

// ===== تبويبات المنيو =====
const tabBtns = document.querySelectorAll('.tab-btn');
const menuContents = document.querySelectorAll('.menu-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove('active'));
    menuContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(tab).classList.add('active');
  });
});

// ===== نموذج الحجز =====
const reservationForm = document.getElementById('reservationForm');
const formMessage = document.getElementById('formMessage');

reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  // يمكنك ربط النموذج بخدمة مثل Formspree أو WhatsApp
  const waMessage = `مرحبًا، أريد حجز طاولة:%0Aالاسم: ${name}%0Aالهاتف: ${phone}%0Aالتاريخ: ${date}%0Aالوقت: ${time}%0Aعدد الأشخاص: ${guests}`;
  const waLink = `https://wa.me/201012005888?text=${waMessage}`;

  formMessage.textContent = 'تم استلام طلبك! سيتم تحويلك إلى واتساب لتأكيد الحجز...';
  formMessage.style.color = '#5a6e3a';

  setTimeout(() => {
    window.open(waLink, '_blank');
    reservationForm.reset();
    formMessage.textContent = '';
  }, 1500);
});

// ===== السنة في التذييل =====
document.getElementById('year').textContent = new Date().getFullYear();
