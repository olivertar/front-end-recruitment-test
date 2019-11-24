(function() {
  'use strict';

  // Task 1
  // Add JS to clone bacon image and attach this action to Yeah, ...

  const baconButton = document.getElementById('button-add-more-bacon');
  const baconImage = document.getElementById('more-bacon');

  if ( baconButton && baconImage ) {
    baconButton.addEventListener('click', function() {
      const imageToClone = baconImage.querySelector('img').cloneNode(false);
      if (imageToClone) {
        baconImage.appendChild( imageToClone );
      }
    });
  }
})();

