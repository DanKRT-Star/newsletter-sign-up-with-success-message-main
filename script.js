  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('email-error');
  const successMessage = document.getElementById('success-message');
  const submitForm = document.getElementById('submit-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      emailInput.classList.add('error');
      errorMessage.style.display = 'inline';
    } else {
      emailInput.classList.remove('error');
      errorMessage.style.display = 'none';
      alert('Thank you for subscribing!');
      form.reset();
      submitForm.style.display = 'none';
      successMessage.style.display = 'flex';
    }
  });

  const closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', function () {
    successMessage.style.display = 'none';
    submitForm.style.display = 'flex';
  });