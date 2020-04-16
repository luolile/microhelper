// gt, gte, lt, lte extra validators
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.validators = window.ParsleyConfig.validators || {};

ParsleyValidator.addValidator(
	'gt',
	function (value, requirement) {
    return parseFloat(value) > parseFloat($(requirement).val());
  }, 32);

// Greater than or equal to validator
ParsleyValidator.addValidator(
	'gte',
	function (value, requirement) {
    return parseFloat(value) >= parseFloat($(requirement).val());
  }, 32);

// Less than validator
ParsleyValidator.addValidator(
	'lt',
	function (value, requirement) {
    return parseFloat(value) < parseFloat($(requirement).val());
  }, 32);

// Less than or equal to validator
ParsleyValidator.addValidator(
	'lte',
	function (value, requirement) {
    return parseFloat(value) <= parseFloat($(requirement).val());
  }, 32);

//minwords, maxwords, words extra validators
window._countWords = function (string) {
  return string
      .replace( /(^\s*)|(\s*$)/gi, "" )
      .replace( /[ ]{2,}/gi, " " )
      .replace( /\n /, "\n" )
      .split(' ').length;
};

ParsleyValidator.addValidator(
	'minwords',
	function (value, nbWords) {
		return window._countWords(value) >= nbWords;
	}, 32);

ParsleyValidator.addValidator(
	'maxwords',
	function (value, nbWords) {
		return window._countWords(value) <= nbWords;
	}, 32);

ParsleyValidator.addValidator(
	'words',
	function (value, arrayRange) {
		var length = window._countWords(value);
		return length >= arrayRange[0] && length <= arrayRange[1];
	}, 32);

//luhn extra validators
ParsleyValidator.addValidator(
	'luhn',
	function(value) {
            value = value.replace(/[ -]/g, '');
            var digit, n, sum, _j, _len1, _ref2;
            sum = 0;
            _ref2 = value.split('').reverse();
            for (n = _j = 0, _len1 = _ref2.length; _j < _len1; n = ++_j) {
              digit = _ref2[n];
              digit = +digit;
              if (n % 2) {
                digit *= 2;
                if (digit < 10) {
                  sum += digit;
                } else {
                  sum += digit - 9;
                }
              } else {
                sum += digit;
              }
            }
            return sum % 10 === 0;
          }, 32)
	.addMessage('en', 'luhn', 'This value should be lower than or equal to %s.');

ParsleyValidator.addValidator(
	'dateiso',
	function (value) {
		    if (value) {
		    	return /^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/.test(value);
		    } else {
		    	return true;
		    }
		  }, 256);

ParsleyValidator.addValidator(
		'tele',
		function (value) {
			    if (value) {
			    	return /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})$)|(^((\(\d{3}\))|(\d{3}\-))?(1\d{10})$)/.test(value);
			    } else {
			    	return true;
			    }
			  }, 250);
ParsleyValidator.addValidator(
		'decimal',
		function (value,pointNum) {
			var reg = "^([1-9][0-9]*(\\.[0-9]{1,"+pointNum+"})?|0\\.(?!0+$)[0-9]{1,"+pointNum+"})$";
			var exp = new RegExp(reg);
			    return exp.test(value);
			  }, 256);