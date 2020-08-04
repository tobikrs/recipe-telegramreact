const path = require('path');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;
    const searchElement = document.getElementById('search-inputbox');
    if (searchElement && searchElement.innerHTML === '') {
      const elements = document.querySelectorAll('.dialog-badge:not(.dialog-badge-muted) > .dialog-badge-text');
      if (elements) {
        for (let i = 0; i < elements.length; i++) {
          if (elements[i].innerHTML !== 0) {
            count += parseInt(elements[i].innerHTML, 10);
          }
        }
      }
    }

    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};
