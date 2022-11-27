const formUser = document.querySelector('#formUser');
const btnClose = document.querySelector('#btnClose');
const toggleFormMobile = document.querySelector('#toggleFormMobile');
const toggleFormDesktop = document.querySelector('#toggleFormDesktop');

const htmlElement = document.querySelector('html');
const toggleDarkDesktop = document.querySelector('#toggleDarkDesktop');
const toggleDarkMobile = document.querySelector('#toggleDarkMobile');
const iconDarkMobile = document.querySelector('#iconDarkMobile');

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

if (htmlElement.classList.contains('dark')) {
  toggleDarkDesktop.classList.replace('fa-moon', 'fa-sun');
} else if (!htmlElement.classList.contains('dark')) {
  toggleDarkDesktop.classList.replace('fa-sun', 'fa-moon');
} else if (htmlElement.classList.contains('dark')) {
  iconDarkMobile.classList.replace('fa-moon', 'fa-sun');
} else if (!htmlElement.classList.contains('dark')) {
  iconDarkMobile.classList.replace('fa-sun', 'fa-moon');
}

toggleDarkDesktop.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    htmlElement.classList.add('dark');
    localStorage.theme = 'dark';
  }

  if (htmlElement.classList.contains('dark')) {
    toggleDarkDesktop.classList.replace('fa-moon', 'fa-sun');
  }
  if (!htmlElement.classList.contains('dark')) {
    toggleDarkDesktop.classList.replace('fa-sun', 'fa-moon');
  }
});
toggleDarkMobile.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    htmlElement.classList.add('dark');
    localStorage.theme = 'dark';
  }

  if (htmlElement.classList.contains('dark')) {
    iconDarkMobile.classList.replace('fa-moon', 'fa-sun');
  }
  if (!htmlElement.classList.contains('dark')) {
    iconDarkMobile.classList.replace('fa-sun', 'fa-moon');
  }
});

btnClose.addEventListener('click', () => {
  formUser.classList.toggle('hidden');
});

toggleFormMobile.addEventListener('click', () => {
  formUser.classList.toggle('hidden');
});

toggleFormDesktop.addEventListener('click', () => {
  formUser.classList.toggle('hidden');
});
