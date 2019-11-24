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

  // Task 3
  // Add simple JS validation to checkout form created earlier.

  const formObject = document.getElementById('checkout-form');
  const success = document.querySelector('dialog');

  /* validation patterns */
  const patternRequired = /([^\s])/;
  const patternEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const patternCcNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  const patternCvv = /^\d{3}$/;
  const patternExpDate = /^(0[1-9]|1[0-2])\/\d{2}$/;

  let errors = false;

  if ( formObject ) {
    Element.prototype.appendAfter = function(element) {
      element.parentNode.parentNode.insertBefore(this, element.parentNode.nextSibling);
    }, false;

    success.querySelector('.close').addEventListener('click', function() {
      success.close();
    });

    formObject.addEventListener('submit', function( e ) {
      e.preventDefault();
      errors = false;
      cleanValidation();

      const requiredArray = formObject.querySelectorAll('.required');
      const validateEmailArray = formObject.querySelectorAll('.validate-email');
      const validateCcNumberArray = formObject.querySelectorAll('.validate-cc-number');
      const validateCvvArray = formObject.querySelectorAll('.validate-cvv');
      const validateExpDateArray = formObject.querySelectorAll('.validate-exp-date');

      requiredArray.forEach(function(element) {
        validateField(element, patternRequired, 'This field is mandatory');
      });

      validateEmailArray.forEach(function(element) {
        validateField(element, patternEmail, 'Enter a valid email');
      });

      validateCcNumberArray.forEach(function(element) {
        validateField(element, patternCcNumber, 'Enter a valid CC Number');
      });

      validateCvvArray.forEach(function(element) {
        validateField(element, patternCvv, 'Enter a valid CVV Number');
      });

      validateExpDateArray.forEach(function(element) {
        validateField(element, patternExpDate, 'Enter a valid Expiration Date');
      });

      if (errors == false) {
        success.showModal();
      }
    });
  }

  const validateField = function(element, pattern, message) {
    element.classList.remove('invalidate');
    if ( !pattern.test((element.value).trim()) ) {
      element.classList.add('invalidate');
      const divError = document.createElement('span');
      divError.innerHTML = message;
      divError.classList.add('validation-fail');
      divError.appendAfter(element);
      if (errors == false) {
        errors = true;
      }
    }
  };

  const cleanValidation = function() {
    const validateFailArray = formObject.querySelectorAll('.validation-fail');
    validateFailArray.forEach(function(element) {
      element.parentNode.removeChild(element);
    });
  };
})();

