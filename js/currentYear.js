var yearSpan = document.querySelector('#current-year');

let currentYear = new Date();
yearSpan.innerHTML = currentYear.getFullYear();