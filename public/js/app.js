(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./resources/js/vendor/jquery.implicitforms.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./resources/js/vendor/jquery.implicitforms.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var implicitForms = function () {
    return {
      initialize: function initialize() {
        this.methodLinks = $('a[data-form]');
        this.registerEvents();
      },
      registerEvents: function registerEvents() {
        this.methodLinks.on('click', this.handleMethod);
      },
      handleMethod: function handleMethod(e) {
        var link = $(this);
        var httpMethod = link.data('form').toUpperCase(); // Ignore if the data-form attribute is not PUT, POST, or DELETE,

        if ($.inArray(httpMethod, ['PUT', 'DELETE', 'POST']) === -1) {
          return;
        } // Allow user to optionally provide data-confirm="Are you sure?"


        if (link.data('confirm')) {
          if (!implicitForms.verifyConfirm(link)) {
            return false;
          }
        }

        var form = implicitForms.createForm(link);
        form.submit();
        e.preventDefault();
      },
      verifyConfirm: function verifyConfirm(link) {
        return confirm(link.data('confirm'));
      },
      createForm: function createForm(link) {
        var form = $('<form>', {
          'method': 'POST',
          'action': link.attr('href')
        });

        var _token = $('<input>', {
          'type': 'hidden',
          'name': '_token',
          'value': link.data('token')
        });

        var _method = $('<input>', {
          'name': '_method',
          'type': 'hidden',
          'value': link.data('form')
        });

        return form.append(_token, _method).appendTo('body');
      }
    };
  }.call(this);
  /**
   * Expose the class either via AMD, CommonJS or the global object
   */


  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return implicitForms;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/expose-loader/index.js?implicitForms!./resources/js/vendor/jquery.implicitforms.js-exposed":
/*!********************************************************************************************************!*\
  !*** ./node_modules/expose-loader?implicitForms!./resources/js/vendor/jquery.implicitforms.js-exposed ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["implicitForms"] = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./jquery.implicitforms.js */ "./node_modules/babel-loader/lib/index.js?!./resources/js/vendor/jquery.implicitforms.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/hashids/dist/hashids.min.js":
/*!**************************************************!*\
  !*** ./node_modules/hashids/dist/hashids.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var s; }}(this,function(t){"use strict";function h(t,e){for(var s=0;s<e.length;s++){var h=e[s];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(t,h.key,h)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){function u(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);var h,a,n="";this.escapeRegExp=function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},this.parseInt=function(t,e){return/^(-|\+)?([0-9]+|Infinity)$/.test(t)?parseInt(t,e):NaN},this.seps="cfhistuCFHISTU",this.minLength=0<parseInt(e,10)?e:0,this.salt="string"==typeof t?t:"","string"==typeof s&&(this.alphabet=s);for(var r=0;r!==this.alphabet.length;r++)-1===n.indexOf(this.alphabet.charAt(r))&&(n+=this.alphabet.charAt(r));if(this.alphabet=n,this.alphabet.length<16)throw"error: alphabet must contain at least X unique characters".replace("X",16);if(-1!==this.alphabet.search(" "))throw"error: alphabet cannot contain spaces";for(var i=0;i!==this.seps.length;i++){var l=this.alphabet.indexOf(this.seps.charAt(i));-1===l?this.seps=this.seps.substr(0,i)+" "+this.seps.substr(i+1):this.alphabet=this.alphabet.substr(0,l)+" "+this.alphabet.substr(l+1)}this.alphabet=this.alphabet.replace(/ /g,""),this.seps=this.seps.replace(/ /g,""),this.seps=this._shuffle(this.seps,this.salt),(!this.seps.length||3.5<this.alphabet.length/this.seps.length)&&(h=Math.ceil(this.alphabet.length/3.5))>this.seps.length&&(a=h-this.seps.length,this.seps+=this.alphabet.substr(0,a),this.alphabet=this.alphabet.substr(a)),this.alphabet=this._shuffle(this.alphabet,this.salt);var p=Math.ceil(this.alphabet.length/12);this.alphabet.length<3?(this.guards=this.seps.substr(0,p),this.seps=this.seps.substr(p)):(this.guards=this.alphabet.substr(0,p),this.alphabet=this.alphabet.substr(p))}var t,e,s;return t=u,(e=[{key:"encode",value:function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];if(!e.length)return"";if(e[0]&&e[0].constructor===Array&&!(e=e[0]).length)return"";for(var h=0;h!==e.length;h++)if(e[h]=this.parseInt(e[h],10),!(0<=e[h]))return"";return this._encode(e)}},{key:"decode",value:function(t){return t&&t.length&&"string"==typeof t?this._decode(t,this.alphabet):[]}},{key:"encodeHex",value:function(t){if(t=t.toString(),!/^[0-9a-fA-F]+$/.test(t))return"";for(var e=t.match(/[\w\W]{1,12}/g),s=0;s!==e.length;s++)e[s]=parseInt("1"+e[s],16);return this.encode.apply(this,e)}},{key:"decodeHex",value:function(t){for(var e=[],s=this.decode(t),h=0;h!==s.length;h++)e+=s[h].toString(16).substr(1);return e}},{key:"_encode",value:function(t){for(var e,s=this.alphabet,h=0,a=0;a!==t.length;a++)h+=t[a]%(a+100);for(var n=e=s.charAt(h%s.length),r=0;r!==t.length;r++){var i=t[r],l=n+this.salt+s;s=this._shuffle(s,l.substr(0,s.length));var p=this._toAlphabet(i,s);if(e+=p,r+1<t.length){var u=(i%=p.charCodeAt(0)+r)%this.seps.length;e+=this.seps.charAt(u)}}if(e.length<this.minLength){var o=(h+e[0].charCodeAt(0))%this.guards.length,f=this.guards[o];(e=f+e).length<this.minLength&&(o=(h+e[2].charCodeAt(0))%this.guards.length,e+=f=this.guards[o])}for(var c=parseInt(s.length/2,10);e.length<this.minLength;){var g=(e=(s=this._shuffle(s,s)).substr(c)+e+s.substr(0,c)).length-this.minLength;0<g&&(e=e.substr(g/2,this.minLength))}return e}},{key:"_decode",value:function(t,e){var s=[],h=0,a=new RegExp("[".concat(this.escapeRegExp(this.guards),"]"),"g"),n=t.replace(a," "),r=n.split(" ");if(3!==r.length&&2!==r.length||(h=1),void 0!==(n=r[h])[0]){var i=n[0];n=n.substr(1),a=new RegExp("[".concat(this.escapeRegExp(this.seps),"]"),"g"),r=(n=n.replace(a," ")).split(" ");for(var l=0;l!==r.length;l++){var p=r[l],u=i+this.salt+e;e=this._shuffle(e,u.substr(0,e.length)),s.push(this._fromAlphabet(p,e))}this.encode(s)!==t&&(s=[])}return s}},{key:"_shuffle",value:function(t,e){var s;if(!e.length)return t;for(var h=(t=t.split("")).length-1,a=0,n=0,r=0;0<h;h--,a++){a%=e.length,n+=s=e.charCodeAt(a);var i=t[r=(s+a+n)%h];t[r]=t[h],t[h]=i}return t=t.join("")}},{key:"_toAlphabet",value:function(t,e){for(var s="";s=e.charAt(t%e.length)+s,t=parseInt(t/e.length,10););return s}},{key:"_fromAlphabet",value:function(t,s){return t.split("").map(function(t){return s.indexOf(t)}).reduce(function(t,e){return t*s.length+e},0)}}])&&h(t.prototype,e),s&&h(t,s),u}();t.default=e});
//# sourceMappingURL=hashids.min.js.map

/***/ }),

/***/ "./node_modules/intl-tel-input/build/js/intlTelInput-jquery.js":
/*!*********************************************************************!*\
  !*** ./node_modules/intl-tel-input/build/js/intlTelInput-jquery.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * International Telephone Input v14.1.0
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// wrap in UMD
(function(factory) {
    if ( true && module.exports) {
        module.exports = factory(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), window, document);
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js") ], __WEBPACK_AMD_DEFINE_RESULT__ = (function($) {
            factory($, window, document);
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function($, window, document, undefined) {
    "use strict";
    // Array of country objects for the flag dropdown.
    // Here is the criteria for the plugin to support a given country/territory
    // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
    // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
    // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
    // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
    // Each country array has the following information:
    // [
    //    Country name,
    //    iso2 code,
    //    International dial code,
    //    Order (if >1 country with same dial code),
    //    Area codes
    // ]
    var allCountries = [ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1684" ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1264" ], [ "Antigua and Barbuda", "ag", "1268" ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Australia", "au", "61", 0 ], [ "Austria (Österreich)", "at", "43" ], [ "Azerbaijan (Azərbaycan)", "az", "994" ], [ "Bahamas", "bs", "1242" ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1246" ], [ "Belarus (Беларусь)", "by", "375" ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1441" ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1284" ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1 ], [ "Cayman Islands", "ky", "1345" ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2 ], [ "Cocos (Keeling) Islands", "cc", "61", 1 ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1767" ], [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (საქართველო)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1473" ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1671" ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1 ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2 ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan (日本)", "jp", "81" ], [ "Jersey", "je", "44", 3 ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kazakhstan (Казахстан)", "kz", "7", 1 ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "Macedonia (FYROM) (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1 ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1664" ], [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1670" ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262", 0 ], [ "Romania (România)", "ro", "40" ], [ "Russia (Россия)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1869" ], [ "Saint Lucia", "lc", "1758" ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1784" ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1721" ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1 ], [ "Swaziland", "sz", "268" ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1868" ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turkey (Türkiye)", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1649" ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1340" ], [ "Uganda", "ug", "256" ], [ "Ukraine (Україна)", "ua", "380" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1 ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ], [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1 ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1 ] ];
    // loop over all of the countries above, restructuring the data to be objects with named keys
    for (var i = 0; i < allCountries.length; i++) {
        var c = allCountries[i];
        allCountries[i] = {
            name: c[0],
            iso2: c[1],
            dialCode: c[2],
            priority: c[3] || 0,
            areaCodes: c[4] || null
        };
    }
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    window.intlTelInputGlobals = {
        getInstance: function getInstance(input) {
            var id = input.getAttribute("data-intl-tel-input-id");
            return window.intlTelInputGlobals.instances[id];
        },
        instances: {}
    };
    // these vars persist through all instances of the plugin
    var id = 0;
    var defaults = {
        // whether or not to allow the dropdown
        allowDropdown: true,
        // if there is just a dial code in the input: remove it on blur, and re-add it on focus
        autoHideDialCode: true,
        // add a placeholder in the input with an example number for the selected country
        autoPlaceholder: "polite",
        // modify the parentClass
        customContainer: "",
        // modify the auto placeholder
        customPlaceholder: null,
        // append menu to specified element
        dropdownContainer: null,
        // don't display these countries
        excludeCountries: [],
        // format the input value during initialisation and on setNumber
        formatOnDisplay: true,
        // geoIp lookup function
        geoIpLookup: null,
        // inject a hidden input with this name, and on submit, populate it with the result of getNumber
        hiddenInput: "",
        // initial country
        initialCountry: "",
        // localized country names e.g. { 'de': 'Deutschland' }
        localizedCountries: null,
        // don't insert international dial codes
        nationalMode: true,
        // display only these countries
        onlyCountries: [],
        // number type to use for placeholders
        placeholderNumberType: "MOBILE",
        // the countries at the top of the list. defaults to united states and united kingdom
        preferredCountries: [ "us", "gb" ],
        // display the country dial code next to the selected flag so it's not part of the typed number
        separateDialCode: false,
        // specify the path to the libphonenumber script to enable validation/formatting
        utilsScript: ""
    };
    // https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Non-geographic_area_codes
    var regionlessNanpNumbers = [ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
    // keep track of if the window.load event has fired as impossible to check after the fact
    window.addEventListener("load", function() {
        // UPDATE: use a public static field so we can fudge it in the tests
        window.intlTelInputGlobals.windowLoaded = true;
    });
    // utility function to iterate over an object. can't use Object.entries or native forEach because
    // of IE11
    var forEachProp = function forEachProp(obj, callback) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            callback(keys[i], obj[keys[i]]);
        }
    };
    // run a method on each instance of the plugin
    var forEachInstance = function forEachInstance(method) {
        forEachProp(window.intlTelInputGlobals.instances, function(key) {
            window.intlTelInputGlobals.instances[key][method]();
        });
    };
    // this is our plugin class that we will create an instance of
    // eslint-disable-next-line no-unused-vars
    var Iti = /*#__PURE__*/
    function() {
        function Iti(input, options) {
            var _this = this;
            _classCallCheck(this, Iti);
            this.id = id++;
            this.telInput = input;
            this.activeItem = null;
            this.highlightedItem = null;
            // process specified options / defaults
            // alternative to Object.assign, which isn't supported by IE11
            var customOptions = options || {};
            this.options = {};
            forEachProp(defaults, function(key, value) {
                _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
            });
            this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
        }
        _createClass(Iti, [ {
            key: "_init",
            value: function _init() {
                var _this2 = this;
                // if in nationalMode, disable options relating to dial codes
                if (this.options.nationalMode) this.options.autoHideDialCode = false;
                // if separateDialCode then doesn't make sense to A) insert dial code into input
                // (autoHideDialCode), and B) display national numbers (because we're displaying the country
                // dial code next to them)
                if (this.options.separateDialCode) {
                    this.options.autoHideDialCode = this.options.nationalMode = false;
                }
                // we cannot just test screen size as some smartphones/website meta tags will report desktop
                // resolutions
                // Note: for some reason jasmine breaks if you put this in the main Plugin function with the
                // rest of these declarations
                // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
                this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (this.isMobile) {
                    // trigger the mobile dropdown css
                    document.body.classList.add("iti-mobile");
                    // on mobile, we want a full screen dropdown, so we must append it to the body
                    if (!this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                }
                // these promises get resolved when their individual requests complete
                // this way the dev can do something like iti.promise.then(...) to know when all requests are
                // complete
                if (typeof Promise !== "undefined") {
                    var autoCountryPromise = new Promise(function(resolve, reject) {
                        _this2.resolveAutoCountryPromise = resolve;
                        _this2.rejectAutoCountryPromise = reject;
                    });
                    var utilsScriptPromise = new Promise(function(resolve, reject) {
                        _this2.resolveUtilsScriptPromise = resolve;
                        _this2.rejectUtilsScriptPromise = reject;
                    });
                    this.promise = Promise.all([ autoCountryPromise, utilsScriptPromise ]);
                } else {
                    // prevent errors when Promise doesn't exist
                    this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {};
                    this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                }
                // in various situations there could be no country selected initially, but we need to be able
                // to assume this variable exists
                this.selectedCountryData = {};
                // process all the data: onlyCountries, excludeCountries, preferredCountries etc
                this._processCountryData();
                // generate the markup
                this._generateMarkup();
                // set the initial state of the input value and the selected flag
                this._setInitialState();
                // start all of the event listeners: autoHideDialCode, input keydown, selectedFlag click
                this._initListeners();
                // utils script, and auto country
                this._initRequests();
            }
        }, {
            key: "_processCountryData",
            value: function _processCountryData() {
                // process onlyCountries or excludeCountries array if present
                this._processAllCountries();
                // process the countryCodes map
                this._processCountryCodes();
                // process the preferredCountries
                this._processPreferredCountries();
                // translate countries according to localizedCountries option
                if (this.options.localizedCountries) this._translateCountriesByLocale();
                // sort countries by name
                if (this.options.onlyCountries.length || this.options.localizedCountries) {
                    this.countries.sort(this._countryNameSort);
                }
            }
        }, {
            key: "_addCountryCode",
            value: function _addCountryCode(iso2, dialCode, priority) {
                if (!this.countryCodes.hasOwnProperty(dialCode)) {
                    this.countryCodes[dialCode] = [];
                }
                var index = priority || 0;
                this.countryCodes[dialCode][index] = iso2;
            }
        }, {
            key: "_processAllCountries",
            value: function _processAllCountries() {
                if (this.options.onlyCountries.length) {
                    var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
                        return country.toLowerCase();
                    });
                    this.countries = allCountries.filter(function(country) {
                        return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                    });
                } else if (this.options.excludeCountries.length) {
                    var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
                        return country.toLowerCase();
                    });
                    this.countries = allCountries.filter(function(country) {
                        return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
                    });
                } else {
                    this.countries = allCountries;
                }
            }
        }, {
            key: "_translateCountriesByLocale",
            value: function _translateCountriesByLocale() {
                for (var i = 0; i < this.countries.length; i++) {
                    var iso = this.countries[i].iso2.toLowerCase();
                    if (this.options.localizedCountries.hasOwnProperty(iso)) {
                        this.countries[i].name = this.options.localizedCountries[iso];
                    }
                }
            }
        }, {
            key: "_countryNameSort",
            value: function _countryNameSort(a, b) {
                return a.name.localeCompare(b.name);
            }
        }, {
            key: "_processCountryCodes",
            value: function _processCountryCodes() {
                this.countryCodes = {};
                for (var i = 0; i < this.countries.length; i++) {
                    var c = this.countries[i];
                    this._addCountryCode(c.iso2, c.dialCode, c.priority);
                    // area codes
                    if (c.areaCodes) {
                        for (var j = 0; j < c.areaCodes.length; j++) {
                            // full dial code is country code + dial code
                            this._addCountryCode(c.iso2, c.dialCode + c.areaCodes[j]);
                        }
                    }
                }
            }
        }, {
            key: "_processPreferredCountries",
            value: function _processPreferredCountries() {
                this.preferredCountries = [];
                for (var i = 0; i < this.options.preferredCountries.length; i++) {
                    var countryCode = this.options.preferredCountries[i].toLowerCase();
                    var countryData = this._getCountryData(countryCode, false, true);
                    if (countryData) this.preferredCountries.push(countryData);
                }
            }
        }, {
            key: "_createEl",
            value: function _createEl(name, attrs, container) {
                var el = document.createElement(name);
                if (attrs) forEachProp(attrs, function(key, value) {
                    return el.setAttribute(key, value);
                });
                if (container) container.appendChild(el);
                return el;
            }
        }, {
            key: "_generateMarkup",
            value: function _generateMarkup() {
                // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
                // easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
                // autocompleted number, which on submit could mean wrong number is saved (esp in nationalMode)
                this.telInput.setAttribute("autocomplete", "off");
                // containers (mostly for positioning)
                var parentClass = "intl-tel-input";
                if (this.options.allowDropdown) parentClass += " allow-dropdown";
                if (this.options.separateDialCode) parentClass += " separate-dial-code";
                if (this.options.customContainer) {
                    parentClass += " ";
                    parentClass += this.options.customContainer;
                }
                var wrapper = this._createEl("div", {
                    "class": parentClass
                });
                this.telInput.parentNode.insertBefore(wrapper, this.telInput);
                this.flagsContainer = this._createEl("div", {
                    "class": "flag-container"
                }, wrapper);
                wrapper.appendChild(this.telInput);
                // selected flag (displayed to left of input)
                this.selectedFlag = this._createEl("div", {
                    "class": "selected-flag",
                    role: "combobox",
                    "aria-owns": "country-listbox"
                }, this.flagsContainer);
                this.selectedFlagInner = this._createEl("div", {
                    "class": "iti-flag"
                }, this.selectedFlag);
                if (this.options.separateDialCode) {
                    this.selectedDialCode = this._createEl("div", {
                        "class": "selected-dial-code"
                    }, this.selectedFlag);
                }
                if (this.options.allowDropdown) {
                    // make element focusable and tab navigable
                    this.selectedFlag.setAttribute("tabindex", "0");
                    this.dropdownArrow = this._createEl("div", {
                        "class": "iti-arrow"
                    }, this.selectedFlag);
                    // country dropdown: preferred countries, then divider, then all countries
                    this.countryList = this._createEl("ul", {
                        "class": "country-list hide",
                        id: "country-listbox",
                        "aria-expanded": "false",
                        role: "listbox"
                    });
                    if (this.preferredCountries.length) {
                        this._appendListItems(this.preferredCountries, "preferred");
                        this._createEl("li", {
                            "class": "divider",
                            role: "separator",
                            "aria-disabled": "true"
                        }, this.countryList);
                    }
                    this._appendListItems(this.countries, "standard");
                    // create dropdownContainer markup
                    if (this.options.dropdownContainer) {
                        this.dropdown = this._createEl("div", {
                            "class": "intl-tel-input iti-container"
                        });
                        this.dropdown.appendChild(this.countryList);
                    } else {
                        this.flagsContainer.appendChild(this.countryList);
                    }
                }
                if (this.options.hiddenInput) {
                    var hiddenInputName = this.options.hiddenInput;
                    var name = this.telInput.getAttribute("name");
                    if (name) {
                        var i = name.lastIndexOf("[");
                        // if input name contains square brackets, then give the hidden input the same name,
                        // replacing the contents of the last set of brackets with the given hiddenInput name
                        if (i !== -1) hiddenInputName = "".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
                    }
                    this.hiddenInput = this._createEl("input", {
                        type: "hidden",
                        name: hiddenInputName
                    });
                    wrapper.appendChild(this.hiddenInput);
                }
            }
        }, {
            key: "_appendListItems",
            value: function _appendListItems(countries, className) {
                // we create so many DOM elements, it is faster to build a temp string
                // and then add everything to the DOM in one go at the end
                var tmp = "";
                // for each country
                for (var i = 0; i < countries.length; i++) {
                    var c = countries[i];
                    // open the list item
                    tmp += "<li class='country ".concat(className, "' id='iti-item-").concat(c.iso2, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "'>");
                    // add the flag
                    tmp += "<div class='flag-box'><div class='iti-flag ".concat(c.iso2, "'></div></div>");
                    // and the country name and dial code
                    tmp += "<span class='country-name'>".concat(c.name, "</span>");
                    tmp += "<span class='dial-code'>+".concat(c.dialCode, "</span>");
                    // close the list item
                    tmp += "</li>";
                }
                this.countryList.insertAdjacentHTML("beforeend", tmp);
            }
        }, {
            key: "_setInitialState",
            value: function _setInitialState() {
                var val = this.telInput.value;
                var dialCode = this._getDialCode(val);
                var isRegionlessNanp = this._isRegionlessNanp(val);
                var _this$options = this.options, initialCountry = _this$options.initialCountry, nationalMode = _this$options.nationalMode, autoHideDialCode = _this$options.autoHideDialCode, separateDialCode = _this$options.separateDialCode;
                // if we already have a dial code, and it's not a regionlessNanp, we can go ahead and set the
                // flag, else fall back to the default country
                if (dialCode && !isRegionlessNanp) {
                    this._updateFlagFromNumber(val);
                } else if (initialCountry !== "auto") {
                    // see if we should select a flag
                    if (initialCountry) {
                        this._setFlag(initialCountry.toLowerCase());
                    } else {
                        if (dialCode && isRegionlessNanp) {
                            // has intl dial code, is regionless nanp, and no initialCountry, so default to US
                            this._setFlag("us");
                        } else {
                            // no dial code and no initialCountry, so default to first in list
                            this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                            if (!val) {
                                this._setFlag(this.defaultCountry);
                            }
                        }
                    }
                    // if empty and no nationalMode and no autoHideDialCode then insert the default dial code
                    if (!val && !nationalMode && !autoHideDialCode && !separateDialCode) {
                        this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
                    }
                }
                // NOTE: if initialCountry is set to auto, that will be handled separately
                // format - note this wont be run after _updateDialCode as that's only called if no val
                if (val) this._updateValFromNumber(val);
            }
        }, {
            key: "_initListeners",
            value: function _initListeners() {
                this._initKeyListeners();
                if (this.options.autoHideDialCode) this._initFocusListeners();
                if (this.options.allowDropdown) this._initDropdownListeners();
                if (this.hiddenInput) this._initHiddenInputListener();
            }
        }, {
            key: "_initHiddenInputListener",
            value: function _initHiddenInputListener() {
                var _this3 = this;
                this._handleHiddenInputSubmit = function() {
                    _this3.hiddenInput.value = _this3.getNumber();
                };
                if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
            }
        }, {
            key: "_getClosestLabel",
            value: function _getClosestLabel() {
                var el = this.telInput;
                while (el && el.tagName !== "LABEL") {
                    el = el.parentNode;
                }
                return el;
            }
        }, {
            key: "_initDropdownListeners",
            value: function _initDropdownListeners() {
                var _this4 = this;
                // hack for input nested inside label (which is valid markup): clicking the selected-flag to
                // open the dropdown would then automatically trigger a 2nd click on the input which would
                // close it again
                this._handleLabelClick = function(e) {
                    // if the dropdown is closed, then focus the input, else ignore the click
                    if (_this4.countryList.classList.contains("hide")) _this4.telInput.focus(); else e.preventDefault();
                };
                var label = this._getClosestLabel();
                if (label) label.addEventListener("click", this._handleLabelClick);
                // toggle country dropdown on click
                this._handleClickSelectedFlag = function() {
                    // only intercept this event if we're opening the dropdown
                    // else let it bubble up to the top ("click-off-to-close" listener)
                    // we cannot just stopPropagation as it may be needed to close another instance
                    if (_this4.countryList.classList.contains("hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) {
                        _this4._showDropdown();
                    }
                };
                this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                // open dropdown list if currently focused
                this._handleFlagsContainerKeydown = function(e) {
                    var isDropdownHidden = _this4.countryList.classList.contains("hide");
                    if (isDropdownHidden && [ "ArrowUp", "ArrowDown", " ", "Enter" ].indexOf(e.key) !== -1) {
                        // prevent form from being submitted if "ENTER" was pressed
                        e.preventDefault();
                        // prevent event from being handled again by document
                        e.stopPropagation();
                        _this4._showDropdown();
                    }
                    // allow navigation from dropdown to input on TAB
                    if (e.key === "Tab") _this4._closeDropdown();
                };
                this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
            }
        }, {
            key: "_initRequests",
            value: function _initRequests() {
                var _this5 = this;
                // if the user has specified the path to the utils script, fetch it on window.load, else resolve
                if (this.options.utilsScript && !window.intlTelInputUtils) {
                    // if the plugin is being initialised after the window.load event has already been fired
                    if (window.intlTelInputGlobals.windowLoaded) {
                        window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
                    } else {
                        // wait until the load event so we don't block any other requests e.g. the flags image
                        window.addEventListener("load", function() {
                            window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
                        });
                    }
                } else this.resolveUtilsScriptPromise();
                if (this.options.initialCountry === "auto") this._loadAutoCountry(); else this.resolveAutoCountryPromise();
            }
        }, {
            key: "_loadAutoCountry",
            value: function _loadAutoCountry() {
                // 3 options:
                // 1) already loaded (we're done)
                // 2) not already started loading (start)
                // 3) already started loading (do nothing - just wait for loading callback to fire)
                if (window.intlTelInputGlobals.autoCountry) {
                    this.handleAutoCountry();
                } else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
                    // don't do this twice!
                    window.intlTelInputGlobals.startedLoadingAutoCountry = true;
                    if (typeof this.options.geoIpLookup === "function") {
                        this.options.geoIpLookup(function(countryCode) {
                            window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase();
                            // tell all instances the auto country is ready
                            // TODO: this should just be the current instances
                            // UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight
                            // away (e.g. if they have already done the geo ip lookup somewhere else). Using
                            // setTimeout means that the current thread of execution will finish before executing
                            // this, which allows the plugin to finish initialising.
                            setTimeout(function() {
                                return forEachInstance("handleAutoCountry");
                            });
                        }, function() {
                            return forEachInstance("rejectAutoCountryPromise");
                        });
                    }
                }
            }
        }, {
            key: "_initKeyListeners",
            value: function _initKeyListeners() {
                var _this6 = this;
                // update flag on keyup
                this._handleKeyupEvent = function() {
                    if (_this6._updateFlagFromNumber(_this6.telInput.value)) {
                        _this6._triggerCountryChange();
                    }
                };
                this.telInput.addEventListener("keyup", this._handleKeyupEvent);
                // update flag on cut/paste events (now supported in all major browsers)
                this._handleClipboardEvent = function() {
                    // hack because "paste" event is fired before input is updated
                    setTimeout(_this6._handleKeyupEvent);
                };
                this.telInput.addEventListener("cut", this._handleClipboardEvent);
                this.telInput.addEventListener("paste", this._handleClipboardEvent);
            }
        }, {
            key: "_cap",
            value: function _cap(number) {
                var max = this.telInput.getAttribute("maxlength");
                return max && number.length > max ? number.substr(0, max) : number;
            }
        }, {
            key: "_initFocusListeners",
            value: function _initFocusListeners() {
                var _this7 = this;
                // mousedown decides where the cursor goes, so if we're focusing we must preventDefault as
                // we'll be inserting the dial code, and we want the cursor to be at the end no matter where
                // they click
                this._handleMousedownFocusEvent = function(e) {
                    if (_this7.telInput !== document.activeElement && !_this7.telInput.value) {
                        e.preventDefault();
                        // but this also cancels the focus, so we must trigger that manually
                        _this7.telInput.focus();
                    }
                };
                this.telInput.addEventListener("mousedown", this._handleMousedownFocusEvent);
                this._handleKeypressPlusEvent = function(e) {
                    if (e.key === "+") _this7.telInput.value = "";
                };
                // on focus: if empty, insert the dial code for the currently selected flag
                this._handleFocusEvent = function() {
                    if (!_this7.telInput.value && !_this7.telInput.readOnly && _this7.selectedCountryData.dialCode) {
                        // insert the dial code
                        _this7.telInput.value = "+".concat(_this7.selectedCountryData.dialCode);
                        // after auto-inserting a dial code, if the first key they hit is '+' then assume they are
                        // entering a new number, so remove the dial code. use keypress instead of keydown because
                        // keydown gets triggered for the shift key (required to hit the + key), and instead of
                        // keyup because that shows the new '+' before removing the old one
                        _this7.telInput.addEventListener("keypress", _this7._handleKeypressPlusEvent);
                        // after tabbing in, make sure the cursor is at the end we must use setTimeout to get
                        // outside of the focus handler as it seems the selection happens after that
                        setTimeout(function() {
                            var len = _this7.telInput.value.length;
                            _this7.telInput.setSelectionRange(len, len);
                        });
                    }
                };
                this.telInput.addEventListener("focus", this._handleFocusEvent);
                // on blur or form submit: if just a dial code then remove it
                this._handleSubmitOrBlurEvent = function() {
                    _this7._removeEmptyDialCode();
                };
                if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
            }
        }, {
            key: "_removeEmptyDialCode",
            value: function _removeEmptyDialCode() {
                var startsPlus = this.telInput.value.charAt(0) === "+";
                if (startsPlus) {
                    var numeric = this._getNumeric(this.telInput.value);
                    // if just a plus, or if just a dial code
                    if (!numeric || this.selectedCountryData.dialCode === numeric) {
                        this.telInput.value = "";
                    }
                }
                // remove the keypress listener we added on focus
                this.telInput.removeEventListener("keypress", this._handleKeypressPlusEvent);
            }
        }, {
            key: "_getNumeric",
            value: function _getNumeric(s) {
                return s.replace(/\D/g, "");
            }
        }, {
            key: "_trigger",
            value: function _trigger(name) {
                // have to use old school document.createEvent as IE11 doesn't support `new Event()` syntax
                var e = document.createEvent("Event");
                e.initEvent(name, true, true);
                // can bubble, and is cancellable
                this.telInput.dispatchEvent(e);
            }
        }, {
            key: "_showDropdown",
            value: function _showDropdown() {
                this.countryList.classList.remove("hide");
                this.countryList.setAttribute("aria-expanded", "true");
                this._setDropdownPosition();
                // update highlighting and scroll to active list item
                if (this.activeItem) {
                    this._highlightListItem(this.activeItem);
                    this._scrollTo(this.activeItem);
                }
                // bind all the dropdown-related listeners: mouseover, click, click-off, keydown
                this._bindDropdownListeners();
                // update the arrow
                this.dropdownArrow.classList.add("up");
                this._trigger("open:countrydropdown");
            }
        }, {
            key: "_toggleClass",
            value: function _toggleClass(el, className, shouldHaveClass) {
                if (shouldHaveClass && !el.classList.contains(className)) el.classList.add(className); else if (!shouldHaveClass && el.classList.contains(className)) el.classList.remove(className);
            }
        }, {
            key: "_setDropdownPosition",
            value: function _setDropdownPosition() {
                var _this8 = this;
                if (this.options.dropdownContainer) {
                    this.options.dropdownContainer.appendChild(this.dropdown);
                }
                if (!this.isMobile) {
                    var pos = this.telInput.getBoundingClientRect();
                    // windowTop from https://stackoverflow.com/a/14384091/217866
                    var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                    var inputTop = pos.top + windowTop;
                    var dropdownHeight = this.countryList.offsetHeight;
                    // dropdownFitsBelow = (dropdownBottom < windowBottom)
                    var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                    var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                    // by default, the dropdown will be below the input. If we want to position it above the
                    // input, we add the dropup class.
                    this._toggleClass(this.countryList, "dropup", !dropdownFitsBelow && dropdownFitsAbove);
                    // if dropdownContainer is enabled, calculate postion
                    if (this.options.dropdownContainer) {
                        // by default the dropdown will be directly over the input because it's not in the flow.
                        // If we want to position it below, we need to add some extra top value.
                        var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight;
                        // calculate placement
                        this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                        this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                        // close menu on window scroll
                        this._handleWindowScroll = function() {
                            return _this8._closeDropdown();
                        };
                        window.addEventListener("scroll", this._handleWindowScroll);
                    }
                }
            }
        }, {
            key: "_getClosestListItem",
            value: function _getClosestListItem(target) {
                var el = target;
                while (el && el !== this.countryList && !el.classList.contains("country")) {
                    el = el.parentNode;
                }
                // if we reached the countryList element, then return null
                return el === this.countryList ? null : el;
            }
        }, {
            key: "_bindDropdownListeners",
            value: function _bindDropdownListeners() {
                var _this9 = this;
                // when mouse over a list item, just highlight that one
                // we add the class "highlight", so if they hit "enter" we know which one to select
                this._handleMouseoverCountryList = function(e) {
                    // handle event delegation, as we're listening for this event on the countryList
                    var listItem = _this9._getClosestListItem(e.target);
                    if (listItem) _this9._highlightListItem(listItem);
                };
                this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                // listen for country selection
                this._handleClickCountryList = function(e) {
                    var listItem = _this9._getClosestListItem(e.target);
                    if (listItem) _this9._selectListItem(listItem);
                };
                this.countryList.addEventListener("click", this._handleClickCountryList);
                // click off to close
                // (except when this initial opening click is bubbling up)
                // we cannot just stopPropagation as it may be needed to close another instance
                var isOpening = true;
                this._handleClickOffToClose = function() {
                    if (!isOpening) _this9._closeDropdown();
                    isOpening = false;
                };
                document.documentElement.addEventListener("click", this._handleClickOffToClose);
                // listen for up/down scrolling, enter to select, or letters to jump to country name.
                // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
                // just hit down and hold it to scroll down (no keyup event).
                // listen on the document because that's where key events are triggered if no input has focus
                var query = "";
                var queryTimer = null;
                this._handleKeydownOnDropdown = function(e) {
                    // prevent down key from scrolling the whole page,
                    // and enter key from submitting a form etc
                    e.preventDefault();
                    // up and down to navigate
                    if (e.key === "ArrowUp" || e.key === "ArrowDown") _this9._handleUpDownKey(e.key); else if (e.key === "Enter") _this9._handleEnterKey(); else if (e.key === "Escape") _this9._closeDropdown(); else if (/^[a-zA-ZÀ-ÿ ]$/.test(e.key)) {
                        // jump to countries that start with the query string
                        if (queryTimer) clearTimeout(queryTimer);
                        query += e.key.toLowerCase();
                        _this9._searchForCountry(query);
                        // if the timer hits 1 second, reset the query
                        queryTimer = setTimeout(function() {
                            query = "";
                        }, 1e3);
                    }
                };
                document.addEventListener("keydown", this._handleKeydownOnDropdown);
            }
        }, {
            key: "_handleUpDownKey",
            value: function _handleUpDownKey(key) {
                var next = key === "ArrowUp" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                if (next) {
                    // skip the divider
                    if (next.classList.contains("divider")) {
                        next = key === "ArrowUp" ? next.previousElementSibling : next.nextElementSibling;
                    }
                    this._highlightListItem(next);
                    this._scrollTo(next);
                }
            }
        }, {
            key: "_handleEnterKey",
            value: function _handleEnterKey() {
                if (this.highlightedItem) this._selectListItem(this.highlightedItem);
            }
        }, {
            key: "_searchForCountry",
            value: function _searchForCountry(query) {
                for (var i = 0; i < this.countries.length; i++) {
                    if (this._startsWith(this.countries[i].name, query)) {
                        var listItem = this.countryList.querySelector("#iti-item-".concat(this.countries[i].iso2));
                        // update highlighting and scroll
                        this._highlightListItem(listItem);
                        this._scrollTo(listItem, true);
                        break;
                    }
                }
            }
        }, {
            key: "_startsWith",
            value: function _startsWith(a, b) {
                return a.substr(0, b.length).toLowerCase() === b;
            }
        }, {
            key: "_updateValFromNumber",
            value: function _updateValFromNumber(originalNumber) {
                var number = originalNumber;
                if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                    var useNational = !this.options.separateDialCode && (this.options.nationalMode || number.charAt(0) !== "+");
                    var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat, NATIONAL = _intlTelInputUtils$nu.NATIONAL, INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
                    var format = useNational ? NATIONAL : INTERNATIONAL;
                    number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
                }
                number = this._beforeSetNumber(number);
                this.telInput.value = number;
            }
        }, {
            key: "_updateFlagFromNumber",
            value: function _updateFlagFromNumber(originalNumber) {
                // if we're in nationalMode and we already have US/Canada selected, make sure the number starts
                // with a +1 so _getDialCode will be able to extract the area code
                // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag
                // from the number), that means we're initialising the plugin with a number that already has a
                // dial code, so fine to ignore this bit
                var number = originalNumber;
                var isNanp = this.selectedCountryData.dialCode === "1";
                if (number && this.options.nationalMode && isNanp && number.charAt(0) !== "+") {
                    if (number.charAt(0) !== "1") number = "1".concat(number);
                    number = "+".concat(number);
                }
                // try and extract valid dial code from input
                var dialCode = this._getDialCode(number);
                var numeric = this._getNumeric(number);
                var countryCode = null;
                if (dialCode) {
                    // check if one of the matching countries is already selected
                    var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
                    var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1;
                    // check if the given number contains a NANP area code i.e. the only dialCode that could be
                    // extracted was +1 (instead of say +1204) and the actual number's length is >=4
                    var isNanpAreaCode = dialCode === "+1" && numeric.length >= 4;
                    var isRegionlessNanpNumber = this.selectedCountryData.dialCode === "1" && this._isRegionlessNanp(numeric);
                    // only update the flag if:
                    // A) NOT (we currently have a NANP flag selected, and the number is a regionlessNanp)
                    // AND
                    // B) either a matching country is not already selected OR the number contains a NANP area
                    // code (ensure the flag is set to the first matching country)
                    if (!isRegionlessNanpNumber && (!alreadySelected || isNanpAreaCode)) {
                        // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first
                        // non-empty index
                        for (var j = 0; j < countryCodes.length; j++) {
                            if (countryCodes[j]) {
                                countryCode = countryCodes[j];
                                break;
                            }
                        }
                    }
                } else if (number.charAt(0) === "+" && numeric.length) {
                    // invalid dial code, so empty
                    // Note: use getNumeric here because the number has not been formatted yet, so could contain
                    // bad chars
                    countryCode = "";
                } else if (!number || number === "+") {
                    // empty, or just a plus, so default
                    countryCode = this.defaultCountry;
                }
                if (countryCode !== null) {
                    return this._setFlag(countryCode);
                }
                return false;
            }
        }, {
            key: "_isRegionlessNanp",
            value: function _isRegionlessNanp(number) {
                var numeric = this._getNumeric(number);
                if (numeric.charAt(0) === "1") {
                    var areaCode = numeric.substr(1, 3);
                    return regionlessNanpNumbers.indexOf(areaCode) !== -1;
                }
                return false;
            }
        }, {
            key: "_highlightListItem",
            value: function _highlightListItem(listItem) {
                var prevItem = this.highlightedItem;
                if (prevItem) prevItem.classList.remove("highlight");
                this.highlightedItem = listItem;
                this.highlightedItem.classList.add("highlight");
            }
        }, {
            key: "_getCountryData",
            value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
                var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
                for (var i = 0; i < countryList.length; i++) {
                    if (countryList[i].iso2 === countryCode) {
                        return countryList[i];
                    }
                }
                if (allowFail) {
                    return null;
                }
                throw new Error("No country data for '".concat(countryCode, "'"));
            }
        }, {
            key: "_setFlag",
            value: function _setFlag(countryCode) {
                var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                // do this first as it will throw an error and stop if countryCode is invalid
                this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
                // update the defaultCountry - we only need the iso2 from now on, so just store that
                if (this.selectedCountryData.iso2) {
                    this.defaultCountry = this.selectedCountryData.iso2;
                }
                this.selectedFlagInner.setAttribute("class", "iti-flag ".concat(countryCode));
                // update the selected country's title attribute
                var title = countryCode ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
                this.selectedFlag.setAttribute("title", title);
                if (this.options.separateDialCode) {
                    var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                    this.selectedDialCode.innerHTML = dialCode;
                    // add 6px of padding after the grey selected-dial-code box, as this is what we use in the css
                    this.telInput.style.paddingLeft = "".concat(this.selectedFlag.offsetWidth + 6, "px");
                }
                // and the input's placeholder
                this._updatePlaceholder();
                // update the active list item
                if (this.options.allowDropdown) {
                    var prevItem = this.activeItem;
                    if (prevItem) {
                        prevItem.classList.remove("active");
                        prevItem.setAttribute("aria-selected", "false");
                    }
                    if (countryCode) {
                        var nextItem = this.countryList.querySelector("#iti-item-".concat(countryCode));
                        nextItem.setAttribute("aria-selected", "true");
                        nextItem.classList.add("active");
                        this.activeItem = nextItem;
                        this.countryList.setAttribute("aria-activedescendant", nextItem.getAttribute("id"));
                    }
                }
                // return if the flag has changed or not
                return prevCountry.iso2 !== countryCode;
            }
        }, {
            key: "_updatePlaceholder",
            value: function _updatePlaceholder() {
                var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                if (window.intlTelInputUtils && shouldSetPlaceholder) {
                    var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                    var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                    placeholder = this._beforeSetNumber(placeholder);
                    if (typeof this.options.customPlaceholder === "function") {
                        placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                    }
                    this.telInput.setAttribute("placeholder", placeholder);
                }
            }
        }, {
            key: "_selectListItem",
            value: function _selectListItem(listItem) {
                // update selected flag and active list item
                var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
                this._closeDropdown();
                this._updateDialCode(listItem.getAttribute("data-dial-code"), true);
                // focus the input
                this.telInput.focus();
                // put cursor at end - this fix is required for FF and IE11 (with nationalMode=false i.e. auto
                // inserting dial code), who try to put the cursor at the beginning the first time
                var len = this.telInput.value.length;
                this.telInput.setSelectionRange(len, len);
                if (flagChanged) {
                    this._triggerCountryChange();
                }
            }
        }, {
            key: "_closeDropdown",
            value: function _closeDropdown() {
                this.countryList.classList.add("hide");
                this.countryList.setAttribute("aria-expanded", "false");
                // update the arrow
                this.dropdownArrow.classList.remove("up");
                // unbind key events
                document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                this.countryList.removeEventListener("click", this._handleClickCountryList);
                // remove menu from container
                if (this.options.dropdownContainer) {
                    if (!this.isMobile) window.removeEventListener("scroll", this._handleWindowScroll);
                    if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                }
                this._trigger("close:countrydropdown");
            }
        }, {
            key: "_scrollTo",
            value: function _scrollTo(element, middle) {
                var container = this.countryList;
                // windowTop from https://stackoverflow.com/a/14384091/217866
                var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                var containerHeight = container.offsetHeight;
                var containerTop = container.getBoundingClientRect().top + windowTop;
                var containerBottom = containerTop + containerHeight;
                var elementHeight = element.offsetHeight;
                var elementTop = element.getBoundingClientRect().top + windowTop;
                var elementBottom = elementTop + elementHeight;
                var newScrollTop = elementTop - containerTop + container.scrollTop;
                var middleOffset = containerHeight / 2 - elementHeight / 2;
                if (elementTop < containerTop) {
                    // scroll up
                    if (middle) newScrollTop -= middleOffset;
                    container.scrollTop = newScrollTop;
                } else if (elementBottom > containerBottom) {
                    // scroll down
                    if (middle) newScrollTop += middleOffset;
                    var heightDifference = containerHeight - elementHeight;
                    container.scrollTop = newScrollTop - heightDifference;
                }
            }
        }, {
            key: "_updateDialCode",
            value: function _updateDialCode(newDialCodeBare, hasSelectedListItem) {
                var inputVal = this.telInput.value;
                // save having to pass this every time
                var newDialCode = "+".concat(newDialCodeBare);
                var newNumber;
                if (inputVal.charAt(0) === "+") {
                    // there's a plus so we're dealing with a replacement (doesn't matter if nationalMode or not)
                    var prevDialCode = this._getDialCode(inputVal);
                    if (prevDialCode) {
                        // current number contains a valid dial code, so replace it
                        newNumber = inputVal.replace(prevDialCode, newDialCode);
                    } else {
                        // current number contains an invalid dial code, so ditch it
                        // (no way to determine where the invalid dial code ends and the rest of the number begins)
                        newNumber = newDialCode;
                    }
                } else if (this.options.nationalMode || this.options.separateDialCode) {
                    // don't do anything
                    return;
                } else {
                    // nationalMode is disabled
                    if (inputVal) {
                        // there is an existing value with no dial code: prefix the new dial code
                        newNumber = newDialCode + inputVal;
                    } else if (hasSelectedListItem || !this.options.autoHideDialCode) {
                        // no existing value and either they've just selected a list item, or autoHideDialCode is
                        // disabled: insert new dial code
                        newNumber = newDialCode;
                    } else {
                        return;
                    }
                }
                this.telInput.value = newNumber;
            }
        }, {
            key: "_getDialCode",
            value: function _getDialCode(number) {
                var dialCode = "";
                // only interested in international numbers (starting with a plus)
                if (number.charAt(0) === "+") {
                    var numericChars = "";
                    // iterate over chars
                    for (var i = 0; i < number.length; i++) {
                        var c = number.charAt(i);
                        // if char is number (https://stackoverflow.com/a/8935649/217866)
                        if (!isNaN(parseInt(c, 10))) {
                            numericChars += c;
                            // if current numericChars make a valid dial code
                            if (this.countryCodes[numericChars]) {
                                // store the actual raw string (useful for matching later)
                                dialCode = number.substr(0, i + 1);
                            }
                            // longest dial code is 4 chars
                            if (numericChars.length === 4) {
                                break;
                            }
                        }
                    }
                }
                return dialCode;
            }
        }, {
            key: "_getFullNumber",
            value: function _getFullNumber() {
                var val = this.telInput.value.trim();
                var dialCode = this.selectedCountryData.dialCode;
                var prefix;
                var numericVal = this._getNumeric(val);
                // normalized means ensure starts with a 1, so we can match against the full dial code
                var normalizedVal = numericVal.charAt(0) === "1" ? numericVal : "1".concat(numericVal);
                if (this.options.separateDialCode && val.charAt(0) !== "+") {
                    // when using separateDialCode, it is visible so is effectively part of the typed number
                    prefix = "+".concat(dialCode);
                } else if (val && val.charAt(0) !== "+" && val.charAt(0) !== "1" && dialCode && dialCode.charAt(0) === "1" && dialCode.length === 4 && dialCode !== normalizedVal.substr(0, 4)) {
                    // ensure national NANP numbers contain the area code
                    prefix = dialCode.substr(1);
                } else {
                    prefix = "";
                }
                return prefix + val;
            }
        }, {
            key: "_beforeSetNumber",
            value: function _beforeSetNumber(originalNumber) {
                var number = originalNumber;
                if (this.options.separateDialCode) {
                    var dialCode = this._getDialCode(number);
                    if (dialCode) {
                        // US dialCode is "+1", which is what we want
                        // CA dialCode is "+1 123", which is wrong - should be "+1" (as it has multiple area codes)
                        // AS dialCode is "+1 684", which is what we want (as it doesn't have area codes)
                        // Solution: if the country has area codes, then revert to just the dial code
                        if (this.selectedCountryData.areaCodes !== null) {
                            dialCode = "+".concat(this.selectedCountryData.dialCode);
                        }
                        // a lot of numbers will have a space separating the dial code and the main number, and
                        // some NANP numbers will have a hyphen e.g. +1 684-733-1234 - in both cases we want to get
                        // rid of it
                        // NOTE: don't just trim all non-numerics as may want to preserve an open parenthesis etc
                        var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                        number = number.substr(start);
                    }
                }
                return this._cap(number);
            }
        }, {
            key: "_triggerCountryChange",
            value: function _triggerCountryChange() {
                this._trigger("countrychange");
            }
        }, {
            key: "handleAutoCountry",
            value: function handleAutoCountry() {
                if (this.options.initialCountry === "auto") {
                    // we must set this even if there is an initial val in the input: in case the initial val is
                    // invalid and they delete it - they should see their auto country
                    this.defaultCountry = window.intlTelInputGlobals.autoCountry;
                    // if there's no initial value in the input, then update the flag
                    if (!this.telInput.value) {
                        this.setCountry(this.defaultCountry);
                    }
                    this.resolveAutoCountryPromise();
                }
            }
        }, {
            key: "handleUtils",
            value: function handleUtils() {
                // if the request was successful
                if (window.intlTelInputUtils) {
                    // if there's an initial value in the input, then format it
                    if (this.telInput.value) {
                        this._updateValFromNumber(this.telInput.value);
                    }
                    this._updatePlaceholder();
                }
                this.resolveUtilsScriptPromise();
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var form = this.telInput.form;
                if (this.options.allowDropdown) {
                    // make sure the dropdown is closed (and unbind listeners)
                    this._closeDropdown();
                    this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                    this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                    // label click hack
                    var label = this._getClosestLabel();
                    if (label) label.removeEventListener("click", this._handleLabelClick);
                }
                // unbind hiddenInput listeners
                if (this.hiddenInput && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                // unbind autoHideDialCode listeners
                if (this.options.autoHideDialCode) {
                    this.telInput.removeEventListener("mousedown", this._handleMousedownFocusEvent);
                    this.telInput.removeEventListener("focus", this._handleFocusEvent);
                    if (form) form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                    this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
                }
                // unbind all events: key events, and focus/blur events if autoHideDialCode=true
                this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
                this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                this.telInput.removeEventListener("paste", this._handleClipboardEvent);
                // remove attribute of id instance: data-intl-tel-input-id
                this.telInput.removeAttribute("data-intl-tel-input-id");
                // remove markup (but leave the original input)
                var wrapper = this.telInput.parentNode;
                wrapper.parentNode.insertBefore(this.telInput, wrapper);
                wrapper.parentNode.removeChild(wrapper);
                delete window.intlTelInputGlobals.instances[this.id];
            }
        }, {
            key: "getExtension",
            value: function getExtension() {
                if (window.intlTelInputUtils) {
                    return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                }
                return "";
            }
        }, {
            key: "getNumber",
            value: function getNumber(format) {
                if (window.intlTelInputUtils) {
                    var iso2 = this.selectedCountryData.iso2;
                    return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
                }
                return "";
            }
        }, {
            key: "getNumberType",
            value: function getNumberType() {
                if (window.intlTelInputUtils) {
                    return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                }
                return -99;
            }
        }, {
            key: "getSelectedCountryData",
            value: function getSelectedCountryData() {
                return this.selectedCountryData;
            }
        }, {
            key: "getValidationError",
            value: function getValidationError() {
                if (window.intlTelInputUtils) {
                    var iso2 = this.selectedCountryData.iso2;
                    return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
                }
                return -99;
            }
        }, {
            key: "isValidNumber",
            value: function isValidNumber() {
                var val = this._getFullNumber().trim();
                var countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null;
            }
        }, {
            key: "setCountry",
            value: function setCountry(originalCountryCode) {
                var countryCode = originalCountryCode.toLowerCase();
                // check if already selected
                if (!this.selectedFlagInner.classList.contains(countryCode)) {
                    this._setFlag(countryCode);
                    this._updateDialCode(this.selectedCountryData.dialCode, false);
                    this._triggerCountryChange();
                }
            }
        }, {
            key: "setNumber",
            value: function setNumber(number) {
                // we must update the flag first, which updates this.selectedCountryData, which is used for
                // formatting the number before displaying it
                var flagChanged = this._updateFlagFromNumber(number);
                this._updateValFromNumber(number);
                if (flagChanged) {
                    this._triggerCountryChange();
                }
            }
        }, {
            key: "setPlaceholderNumberType",
            value: function setPlaceholderNumberType(type) {
                this.options.placeholderNumberType = type;
                this._updatePlaceholder();
            }
        } ]);
        return Iti;
    }();
    /********************
 *  STATIC METHODS
 ********************/
    // get the country data object
    window.intlTelInputGlobals.getCountryData = function() {
        return allCountries;
    };
    // inject a <script> element to load utils.js
    var injectScript = function injectScript(path, handleSuccess, handleFailure) {
        // inject a new script element into the page
        var script = document.createElement("script");
        script.onload = function() {
            forEachInstance("handleUtils");
            if (handleSuccess) handleSuccess();
        };
        script.onerror = function() {
            forEachInstance("rejectUtilsScriptPromise");
            if (handleFailure) handleFailure();
        };
        script.className = "iti-load-utils";
        script.async = true;
        script.src = path;
        document.body.appendChild(script);
    };
    // load the utils script
    window.intlTelInputGlobals.loadUtils = function(path) {
        // 2 options:
        // 1) not already started loading (start)
        // 2) already started loading (do nothing - just wait for the onload callback to fire, which will
        // trigger handleUtils on all instances, invoking their resolveUtilsScriptPromise functions)
        if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
            // only do this once
            window.intlTelInputGlobals.startedLoadingUtilsScript = true;
            // if we have promises, then return a promise
            if (typeof Promise !== "undefined") {
                return new Promise(function(resolve, reject) {
                    return injectScript(path, resolve, reject);
                });
            }
            injectScript(path);
        }
        return null;
    };
    // default options
    window.intlTelInputGlobals.defaults = defaults;
    // version
    window.intlTelInputGlobals.version = "14.1.0";
    var pluginName = "intlTelInput";
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        var args = arguments;
        // Is the first parameter an object (options), or was omitted, instantiate a new instance of the plugin.
        if (options === undefined || typeof options === "object") {
            return this.each(function() {
                if (!$.data(this, "plugin_" + pluginName)) {
                    var iti = new Iti(this, options);
                    iti._init();
                    window.intlTelInputGlobals.instances[iti.id] = iti;
                    $.data(this, "plugin_" + pluginName, iti);
                }
            });
        } else if (typeof options === "string" && options[0] !== "_") {
            // If the first parameter is a string and it doesn't start with an underscore treat this as a call to a public method.
            // Cache the method call to make it possible to return a value
            var returns;
            this.each(function() {
                var instance = $.data(this, "plugin_" + pluginName);
                // Tests that there's already a plugin-instance and checks that the requested public method exists
                if (instance instanceof Iti && typeof instance[options] === "function") {
                    // Call the method of our plugin instance, and pass it the supplied arguments.
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
                // Allow instances to be destroyed via the 'destroy' method
                if (options === "destroy") $.data(this, "plugin_" + pluginName, null);
            });
            // If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };
});

/***/ }),

/***/ "./node_modules/intl-tel-input/build/js/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/intl-tel-input/build/js/utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){var aa=this;function k(a){return"string"==typeof a}function m(a,b){a=a.split(".");var c=aa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function n(a,b){function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.aa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var p=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(k(a))return k(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function q(a,b){a.sort(b||ba)}function ba(a,b){return a>b?1:a<b?-1:0};function ca(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function da(a,b){this.a=a;this.h=!!b.i;this.c=b.b;this.m=b.type;this.l=!1;switch(this.c){case ea:case fa:case ha:case ia:case ja:case ka:case la:this.l=!0}this.g=b.defaultValue}var la=1,ka=2,ea=3,fa=4,ha=6,ia=16,ja=18;function ma(a,b){this.c=a;this.a={};for(a=0;a<b.length;a++){var c=b[a];this.a[c.a]=c}}function na(a){a=ca(a.a);q(a,function(a,c){return a.a-c.a});return a};function r(){this.a={};this.g=this.f().a;this.c=this.h=null}r.prototype.has=function(a){return null!=this.a[a.a]};r.prototype.get=function(a,b){return t(this,a.a,b)};r.prototype.set=function(a,b){u(this,a.a,b)};r.prototype.add=function(a,b){v(this,a.a,b)};
function oa(a,b){for(var c=na(a.f()),d=0;d<c.length;d++){var e=c[d],f=e.a;if(null!=b.a[f]){a.c&&delete a.c[e.a];var g=11==e.c||10==e.c;if(e.h){e=w(b,f);for(var h=0;h<e.length;h++)v(a,f,g?e[h].clone():e[h])}else e=x(b,f),g?(g=x(a,f))?oa(g,e):u(a,f,e.clone()):u(a,f,e)}}}r.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.a={},a.c&&(a.c={}),oa(a,this));return a};
function x(a,b){var c=a.a[b];if(null==c)return null;if(a.h){if(!(b in a.c)){var d=a.h,e=a.g[b];if(null!=c)if(e.h){for(var f=[],g=0;g<c.length;g++)f[g]=d.c(e,c[g]);c=f}else c=d.c(e,c);return a.c[b]=c}return a.c[b]}return c}function t(a,b,c){var d=x(a,b);return a.g[b].h?d[c||0]:d}function y(a,b){if(null!=a.a[b])a=t(a,b,void 0);else a:{a=a.g[b];if(void 0===a.g)if(b=a.m,b===Boolean)a.g=!1;else if(b===Number)a.g=0;else if(b===String)a.g=a.l?"0":"";else{a=new b;break a}a=a.g}return a}
function w(a,b){return x(a,b)||[]}function A(a,b){return a.g[b].h?null!=a.a[b]?a.a[b].length:0:null!=a.a[b]?1:0}function u(a,b,c){a.a[b]=c;a.c&&(a.c[b]=c)}function v(a,b,c){a.a[b]||(a.a[b]=[]);a.a[b].push(c);a.c&&delete a.c[b]}function B(a,b){var c=[],d;for(d in b)0!=d&&c.push(new da(d,b[d]));return new ma(a,c)};function C(){}C.prototype.a=function(a){new a.c;throw Error("Unimplemented");};C.prototype.c=function(a,b){if(11==a.c||10==a.c)return b instanceof r?b:this.a(a.m.prototype.f(),b);if(14==a.c)return k(b)&&pa.test(b)&&(a=Number(b),0<a)?a:b;if(!a.l)return b;a=a.m;if(a===String){if("number"==typeof b)return String(b)}else if(a===Number&&k(b)&&("Infinity"===b||"-Infinity"===b||"NaN"===b||pa.test(b)))return Number(b);return b};var pa=/^-?[0-9]+$/;function D(){}n(D,C);D.prototype.a=function(a,b){a=new a.c;a.h=this;a.a=b;a.c={};return a};function E(){}n(E,D);E.prototype.c=function(a,b){return 8==a.c?!!b:C.prototype.c.apply(this,arguments)};E.prototype.a=function(a,b){return E.o.a.call(this,a,b)};function F(a,b){null!=a&&this.a.apply(this,arguments)}F.prototype.c="";F.prototype.set=function(a){this.c=""+a};F.prototype.a=function(a,b,c){this.c+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.c+=arguments[d];return this};F.prototype.toString=function(){return this.c};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function G(){r.call(this)}n(G,r);var qa=null;function H(){r.call(this)}n(H,r);var ra=null;function I(){r.call(this)}n(I,r);var sa=null;
G.prototype.f=function(){var a=qa;a||(qa=a=B(G,{0:{name:"NumberFormat",j:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,b:9,type:String},2:{name:"format",required:!0,b:9,type:String},3:{name:"leading_digits_pattern",i:!0,b:9,type:String},4:{name:"national_prefix_formatting_rule",b:9,type:String},6:{name:"national_prefix_optional_when_formatting",b:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",b:9,type:String}}));return a};G.f=G.prototype.f;
H.prototype.f=function(){var a=ra;a||(ra=a=B(H,{0:{name:"PhoneNumberDesc",j:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",b:9,type:String},9:{name:"possible_length",i:!0,b:5,type:Number},10:{name:"possible_length_local_only",i:!0,b:5,type:Number},6:{name:"example_number",b:9,type:String}}));return a};H.f=H.prototype.f;
I.prototype.f=function(){var a=sa;a||(sa=a=B(I,{0:{name:"PhoneMetadata",j:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",b:11,type:H},2:{name:"fixed_line",b:11,type:H},3:{name:"mobile",b:11,type:H},4:{name:"toll_free",b:11,type:H},5:{name:"premium_rate",b:11,type:H},6:{name:"shared_cost",b:11,type:H},7:{name:"personal_number",b:11,type:H},8:{name:"voip",b:11,type:H},21:{name:"pager",b:11,type:H},25:{name:"uan",b:11,type:H},27:{name:"emergency",b:11,type:H},28:{name:"voicemail",b:11,type:H},
29:{name:"short_code",b:11,type:H},30:{name:"standard_rate",b:11,type:H},31:{name:"carrier_specific",b:11,type:H},33:{name:"sms_services",b:11,type:H},24:{name:"no_international_dialling",b:11,type:H},9:{name:"id",required:!0,b:9,type:String},10:{name:"country_code",b:5,type:Number},11:{name:"international_prefix",b:9,type:String},17:{name:"preferred_international_prefix",b:9,type:String},12:{name:"national_prefix",b:9,type:String},13:{name:"preferred_extn_prefix",b:9,type:String},15:{name:"national_prefix_for_parsing",
b:9,type:String},16:{name:"national_prefix_transform_rule",b:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",b:8,defaultValue:!1,type:Boolean},19:{name:"number_format",i:!0,b:11,type:G},20:{name:"intl_number_format",i:!0,b:11,type:G},22:{name:"main_country_for_code",b:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",b:9,type:String},26:{name:"leading_zero_possible",b:8,defaultValue:!1,type:Boolean}}));return a};I.f=I.prototype.f;function J(){r.call(this)}n(J,r);var ta=null,ua={$:0,w:1,v:5,u:10,s:20};
J.prototype.f=function(){var a=ta;a||(ta=a=B(J,{0:{name:"PhoneNumber",j:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,b:5,type:Number},2:{name:"national_number",required:!0,b:4,type:Number},3:{name:"extension",b:9,type:String},4:{name:"italian_leading_zero",b:8,type:Boolean},8:{name:"number_of_leading_zeros",b:5,defaultValue:1,type:Number},5:{name:"raw_input",b:9,type:String},6:{name:"country_code_source",b:14,defaultValue:0,type:ua},7:{name:"preferred_domestic_carrier_code",
b:9,type:String}}));return a};J.ctor=J;J.ctor.f=J.prototype.f;/*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var K={1:"US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],
86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],
253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],
386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],
691:["FM"],692:["MH"],800:["001"],808:["001"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],870:["001"],878:["001"],880:["BD"],881:["001"],882:["001"],883:["001"],886:["TW"],888:["001"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],979:["001"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},wa={AC:[,[,,"(?:[01589]\\d|[46])\\d{4}",
,,,,,,[5,6]],[,,"6[2-467]\\d{3}",,,,"62889",,,[5]],[,,"4\\d{4}",,,,"40123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AC",247,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"[01589]\\d{5}",,,,"542011",,,[6]],,,[,,,,,,,,,[-1]]],AD:[,[,,"(?:1|6\\d)\\d{7}|[136-9]\\d{5}",,,,,,,[6,8,9]],[,,"[78]\\d{5}",,,,"712345",,,[6]],[,,"690\\d{6}|[36]\\d{5}",,,,"312345",,,[6,9]],[,,"180[02]\\d{4}",,,,"18001234",,,[8]],[,,"[19]\\d{5}",,,,"912345",,,[6]],[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AD",376,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[136-9]"]],[,"(\\d{4})(\\d{4})","$1 $2",["1"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],,[,,,,,,,,,[-1]],,,[,,"1800\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AE:[,[,,"(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"[2-4679][2-8]\\d{6}",,,,"22345678",,,[8],[7]],[,,"5[024-68]\\d{7}",,,,"501234567",,,[9]],[,,"400\\d{6}|800\\d{2,9}",,,,"800123456"],[,,"900[02]\\d{5}",
,,,"900234567",,,[9]],[,,"700[05]\\d{5}",,,,"700012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AE",971,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"600[25]\\d{5}",,,,"600212345",,,[9]],,,[,,,,,,,,,[-1]]],AF:[,[,,"[2-7]\\d{8}",,,,,,,[9],[7]],[,,"(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}",
,,,"234567890",,,,[7]],[,,"7(?:[014-9]\\d|2[89]|3[01])\\d{6}",,,,"701234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AF",93,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AG:[,[,,"(?:268|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",
,,,"2684601234",,,,[7]],[,,"268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}",,,,"2684641234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"26848[01]\\d{4}",,,,"2684801234",,,,[7]],"AG",1,"011","1",,,"1",,,,,,[,,"26840[69]\\d{4}",,,,"2684061234",,,,[7]],,"268",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AI:[,[,,"(?:264|[58]\\d\\d|900)\\d{7}",,,,
,,,[10],[7]],[,,"2644(?:6[12]|9[78])\\d{4}",,,,"2644612345",,,,[7]],[,,"264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",,,,"2642351234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"AI",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"264",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AL:[,[,,"(?:(?:[2-58]|6\\d)\\d\\d|700)\\d{5}|(?:8\\d{2,3}|900)\\d{3}",
,,,,,,[6,7,8,9],[5]],[,,"(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]|6\\d)\\d)\\d{4}",,,,"22345678",,,[8],[5,6,7]],[,,"6(?:[689][2-9]|7[2-6])\\d{6}",,,,"662123456",,,[9]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"900[1-9]\\d\\d",,,,"900123",,,[6]],[,,"808[1-9]\\d\\d",,,,"808123",,,[6]],[,,"700[2-9]\\d{4}",,,,"70021234",,,[8]],[,,,,,,,,,[-1]],"AL",355,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})",
"$1 $2 $3",["[2358][2-5]|4"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AM:[,[,,"(?:[1-489]\\d|55|60|77)\\d{6}",,,,,,,[8],[5,6]],[,,"(?:(?:1[0-2]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}",,,,"10123456",,,,[5,6]],[,,"(?:4[1349]|55|77|88|9[13-9])\\d{6}",,,,"77123456"],[,,"800\\d{5}",,,,"80012345"],[,,"90[016]\\d{5}",,,,"90012345"],[,,"80[1-4]\\d{5}",
,,,"80112345"],[,,,,,,,,,[-1]],[,,"60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}",,,,"60271234"],"AM",374,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["[23]"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["[4-7]|88|9[13-9]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]"],"0 $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AO:[,[,,"[29]\\d{8}",,,,,,,[9]],[,,"2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}",,,,"222123456"],
[,,"9[1-49]\\d{7}",,,,"923123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AO",244,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AR:[,[,,"(?:11|(?:[2368]|9\\d)\\d)\\d{8}",,,,,,,[10,11],[6,7,8]],[,,"(?:(?:11[2-7]|670)\\d\\d|2(?:2(?:0(?:2[4-6]|[45]\\d)|(?:1[2-6]|3[3-6])\\d|2(?:14|[3467][4-6]|[59][45])|4(?:[156][4-6]|[23]4|4[45])|5(?:2[45]|[45][4-6]|7[3-6])|6(?:[145]4|2[2-6]|[6-8][4-6])|7[1-4]4|8(?:1[3-6]|[356]4|4[2-7])|9(?:1[4-6]|[267]4))|3(?:0(?:2[2-6]|4\\d)|1(?:[47][4-6]|64)|2(?:[03][2-6]|4[3-6]|5[4-6]|6[45])|3[13-8]4|4(?:[24][45]|34|5[4-6]|6[3-6])|5(?:[25][4-6]|[346-8]4)|(?:64|7[45])\\d|9(?:2[3-6]|[3-5]4|6[4-6]))|4(?:7(?:3[45]|[48][4-6]|54|7[2-6])|94\\d)|6(?:(?:04|1[2-7]|[36][45])\\d|2(?:2[2-6]|[46]4|5[4-6])|4(?:[45]\\d|6[0-46-9]|[78]4)|5(?:[1568]4|7[2-7]))|80[45]\\d|9(?:0(?:1[3-6]|2[45]|34)|(?:1[4-6]|9[3-6])\\d|2(?:0[2-7]|[1457-9]4|[26][45]|3[3-6])|3(?:[1356]4|2[4-6]|4[45])|4(?:[08]4|2[2-6]|4\\d|5[02-69]|6[45])|5(?:[23]4|4[2-8])|6(?:[23]4|4[3-6]|6[2-7])|7(?:2[45]|[4-6]\\d)|8(?:24|3[2-6]|[45]\\d)))|3(?:3(?:2(?:7[45]|9[3-6])|64\\d|8[2578][4-6])|4(?:0[0-24-9][4-6]|(?:1[2-7]|2[4-6])\\d|3(?:4\\d|5[0-7]|6[1-69]|[78][4-6])|4(?:2[3-6]|[457][4-6]|6[2-6])|5(?:4[0-4679]|[56][024-6]|8[4-6])|6(?:[03-9][4-6]|2[2-6])|7(?:1[3-6]|2[4-6]|6[2-6])|8(?:[27][2-7]|3[4-6]|4\\d|9[2-6])|9(?:[136-8][4-6]|2[2-7]))|5(?:1[2-8]\\d|2(?:[124][4-6]|5[3-6])|3(?:[23][4-6]|[4-6]\\d|7[3-6])|4(?:1[2-6]|[2689][4-6]|[347][3-6])|6(?:[23][4-6]|4[2-6])|7(?:1[3-6]|[2-6][4-6])|8(?:[23][4-6]|[46]\\d|5[013-7]))|6(?:2[45]|44)\\d|7(?:[069][45]\\d|1(?:[15][46]|6[4-6]|8[3-6])|(?:2[15]|3[145]|4[13])[4-6]|5(?:[17][3-6]|[468][4-6]|5[2-7])|7(?:[2-5][4-6]|7[2-8])|8(?:1[46]|[26][4-6]))|8(?:(?:0[45]|1[2-6])\\d|2(?:1[46]|[5-7][4-6])|3(?:[278][4-6]|4\\d|5[124-6])|4(?:[16][46]|[3-5][4-6])|5(?:[34]\\d|5[0-46-9]|6[0-246-9]|[78][4-6])|6(?:[1-378][4-6]|5[2-8]|9[46])|7(?:[24-6]\\d|3[2-6]|7[4-6]|8[2-7])|8(?:[3-5]\\d|6[0-68]|7[4-6]|8[3-6])|9(?:[12][46]|4[4-6]))))\\d{5}",
,,,"1123456789",,,[10],[6,7,8]],[,,"(?:675\\d\\d|9(?:11[2-7]\\d\\d|2(?:2(?:0(?:2[4-6]|[45]\\d)|(?:1[2-6]|3[3-6])\\d|2(?:14|[3467][4-6]|[59][45])|4(?:[156][4-6]|[23]4|4[45])|5(?:2[45]|[45][4-6]|7[3-6])|6(?:[145]4|2[2-6]|[6-8][4-6])|7[1-4]4|8(?:1[3-6]|[356]4|4[2-7])|9(?:1[4-6]|[267]4))|3(?:0(?:2[2-6]|4\\d)|1(?:[47][4-6]|64)|2(?:[03][2-6]|4[3-6]|5[4-6]|6[45])|3[13-8]4|4(?:[24][45]|34|5[4-6]|6[3-6])|5(?:[25][4-6]|[346-8]4)|(?:64|7[45])\\d|9(?:2[3-6]|[3-5]4|6[4-6]))|4(?:7(?:3[45]|[48][4-6]|54|7[2-6])|94\\d)|6(?:(?:04|1[2-7]|[36][45])\\d|2(?:2[2-6]|[46]4|5[4-6])|4(?:[45]\\d|6[0-46-9]|[78]4)|5(?:[1568]4|7[2-7]))|80[45]\\d|9(?:0(?:1[3-6]|2[45]|34)|(?:1[4-6]|9[3-6])\\d|2(?:0[2-7]|[1457-9]4|[26][45]|3[3-6])|3(?:[1356]4|2[4-6]|4[45])|4(?:[08]4|2[2-6]|4\\d|5[02-69]|6[45])|5(?:[23]4|4[2-8])|6(?:[23]4|4[3-6]|6[2-7])|7(?:2[45]|[4-6]\\d)|8(?:24|3[2-6]|[45]\\d)))|3(?:3(?:2(?:7[45]|9[3-6])|64\\d|8[2578][4-6])|4(?:0[0-24-9][4-6]|(?:1[2-7]|2[4-6])\\d|3(?:4\\d|5[0-7]|6[1-69]|[78][4-6])|4(?:2[3-6]|[457][4-6]|6[2-6])|5(?:4[0-4679]|[56][024-6]|8[4-6])|6(?:[03-9][4-6]|2[2-6])|7(?:1[3-6]|2[4-6]|6[2-6])|8(?:[27][2-7]|3[4-6]|4\\d|9[2-6])|9(?:[136-8][4-6]|2[2-7]))|5(?:1[2-8]\\d|2(?:[124][4-6]|5[3-6])|3(?:[23][4-6]|[4-6]\\d|7[3-6])|4(?:1[2-6]|[2689][4-6]|[347][3-6])|6(?:[23][4-6]|4[2-6])|7(?:1[3-6]|[2-6][4-6])|8(?:[23][4-6]|[46]\\d|5[013-7]))|6(?:2[45]|44)\\d|7(?:[069][45]\\d|1(?:[15][46]|6[4-6]|8[3-6])|(?:2[15]|3[145]|4[13])[4-6]|5(?:[17][3-6]|[468][4-6]|5[2-7])|7(?:[2-5][4-6]|7[2-8])|8(?:1[46]|[26][4-6]))|8(?:(?:0[45]|1[2-6])\\d|2(?:1[46]|[5-7][4-6])|3(?:[278][4-6]|4\\d|5[124-6])|4(?:[16][46]|[3-5][4-6])|5(?:[34]\\d|5[0-46-9]|6[0-246-9]|[78][4-6])|6(?:[1-378][4-6]|5[2-8]|9[46])|7(?:[24-6]\\d|3[2-6]|7[4-6]|8[2-7])|8(?:[3-5]\\d|6[0-68]|7[4-6]|8[3-6])|9(?:[12][46]|4[4-6])))))\\d{5}",
,,,"91123456789",,,,[6,7,8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"60[04579]\\d{7}",,,,"6001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AR",54,"00","0",,,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
"9$1",,,[[,"(\\d{3})","$1",["[019]"]],[,"(\\d{2})(\\d{4})","$1-$2",["[2-7]|8[0-7]"]],[,"(\\d{3})(\\d{4})","$1-$2",["[2-7]|8[013-8]"]],[,"(\\d{4})(\\d{4})","$1-$2",["[2-7]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])","2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4[4-6])|8|9(?:[19]|[48][45]|7[4-6]))|3(?:36|4(?:[12]|[35][4-6]|84)|5(?:1|[38][4-6])|6|7[069]|8(?:[01]|3[45]|[58][3-6]|7[24-6]))",
"2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5[039])|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5[0-47]|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4[0-36-9]|5[013467]|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4[0-35-9]|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28])))","2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5(?:[09]|3[016-9]))|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5(?:[0-37]|4[347])|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4(?:[0-37-9]|6[1-9])|5(?:[0137]|4[4-8]|6[0-35-9])|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4(?:[0-37-9]|5[0289]|6[0-7])|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28])))"],
"0$1",,1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9(?:2[2-4689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))","9(?:2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4[4-6])|8|9(?:[19]|[48][45]|7[4-6]))|3(?:36|4(?:[12]|[35][4-6]|84)|5(?:1|[38][4-6])|6|7[069]|8(?:[01]|3[45]|[58][3-6]|7[24-6])))","9(?:2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5[039])|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5[0-47]|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4[0-36-9]|5[013467]|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4[0-35-9]|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28]))))",
"9(?:2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5(?:[09]|3[016-9]))|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5(?:[0-37]|4[347])|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4(?:[0-37-9]|6[1-9])|5(?:[0137]|4[4-8]|6[0-35-9])|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4(?:[0-37-9]|5[0289]|6[0-7])|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28]))))"],"0$1"],[,"(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9"],"0$1"]],[[,"(\\d{3})(\\d{3})(\\d{4})",
"$1-$2-$3",["[68]"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])","2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4[4-6])|8|9(?:[19]|[48][45]|7[4-6]))|3(?:36|4(?:[12]|[35][4-6]|84)|5(?:1|[38][4-6])|6|7[069]|8(?:[01]|3[45]|[58][3-6]|7[24-6]))","2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5[039])|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5[0-47]|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4[0-36-9]|5[013467]|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4[0-35-9]|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28])))",
"2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5(?:[09]|3[016-9]))|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5(?:[0-37]|4[347])|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4(?:[0-37-9]|6[1-9])|5(?:[0137]|4[4-8]|6[0-35-9])|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4(?:[0-37-9]|5[0289]|6[0-7])|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28])))"],"0$1",,1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})",
"$1 $2 $3-$4",["91"]],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3-$4",["9(?:2[2-4689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))","9(?:2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4[4-6])|8|9(?:[19]|[48][45]|7[4-6]))|3(?:36|4(?:[12]|[35][4-6]|84)|5(?:1|[38][4-6])|6|7[069]|8(?:[01]|3[45]|[58][3-6]|7[24-6])))","9(?:2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5[039])|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5[0-47]|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4[0-36-9]|5[013467]|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4[0-35-9]|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28]))))",
"9(?:2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5(?:[09]|3[016-9]))|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5(?:[0-37]|4[347])|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4(?:[0-37-9]|6[1-9])|5(?:[0137]|4[4-8]|6[0-35-9])|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4(?:[0-37-9]|5[0289]|6[0-7])|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28]))))"]],[,"(\\d)(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3-$4",["9"]]],[,,,,,,,,,[-1]],,,[,,"810\\d{7}",
,,,,,,[10]],[,,"810\\d{7}",,,,"8101234567",,,[10]],,,[,,,,,,,,,[-1]]],AS:[,[,,"(?:[58]\\d\\d|684|900)\\d{7}",,,,,,,[10],[7]],[,,"6846(?:22|33|44|55|77|88|9[19])\\d{4}",,,,"6846221234",,,,[7]],[,,"684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}",,,,"6847331234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"AS",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"684",
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AT:[,[,,"[1-35-9]\\d{8,12}|4(?:[0-24-9]\\d{4,11}|3(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7}))|[1-35-8]\\d{7}|[1-35-7]\\d{6}|[135-7]\\d{5}|[15]\\d{4}|1\\d{3}",,,,,,,[4,5,6,7,8,9,10,11,12,13],[3]],[,,"(?:1(?:11|[2-9]\\d{2,10})|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,9}|4(?:(?:2[1-8]|35|7[1368]|8[2457])\\d{3,9}|63\\d{2,9})|5(?:12\\d{2,9}|(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])\\d{3,9})|6(?:(?:13|2[1-47]|4[135-8]|5[468])\\d{3,9}|62\\d{2,9}))\\d|(?:316|732)\\d{3}",
,,,"1234567890",,,,[3]],[,,"6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",,,,"664123456",,,[7,8,9,10,11,12,13]],[,,"800\\d{6,10}",,,,"800123456",,,[9,10,11,12,13]],[,,"9(?:0[01]|3[019])\\d{6,10}",,,,"900123456",,,[9,10,11,12,13]],[,,"8(?:10|2[018])\\d{6,10}|828\\d{5}",,,,"810123456",,,[8,9,10,11,12,13]],[,,,,,,,,,[-1]],[,,"5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}",,,,"780123456",,,[5,6,7,8,9,10,11,12,13]],"AT",43,"00","0",,,"0",,,,[[,"(\\d{6})","$1",["11"]],[,"(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],
"0$1"],[,"(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],[,"(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],[,"(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],[[,"(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],[,"(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],
"0$1"],[,"(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],[,"(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AU:[,[,,"1\\d{4,9}|(?:[2-478]\\d\\d|550)\\d{6}",,,,,,,[5,6,7,8,9,10]],[,,"(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}",
,,,"212345678",,,[9],[8]],[,,"4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,,"1300123456",,,[6,8,10]],[,,,,,,,,,[-1]],[,,"(?:14(?:5\\d|71)|550\\d)\\d{5}",,,,"550123456",,,[9]],"AU",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"0",,"0011",,[[,"(\\d{3})(\\d{3})","$1 $2",["19"]],[,"(\\d{4})(\\d{3,4})",
"$1 $2",["19"]],[,"(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["13"]],[,"(\\d{3})(\\d{4})","$1 $2",["180","1802"]],[,"(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],[[,"(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})",
"$1 $2 $3",["[2378]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],[,,"16\\d{3,7}",,,,"1612345",,,[5,6,7,8,9]],1,,[,,"1[38]00\\d{6}|1(?:345[0-4]|802)\\d{3}|13\\d{4}",,,,,,,[6,7,8,10]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AW:[,[,,"(?:[25-79]\\d\\d|800)\\d{4}",,,,,,,[7]],[,,"5(?:2\\d|8[1-9])\\d{4}",,,,"5212345"],[,,"(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}",,,,"5601234"],[,
,"800\\d{4}",,,,"8001234"],[,,"900\\d{4}",,,,"9001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:28\\d|501)\\d{4}",,,,"5011234"],"AW",297,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AX:[,[,,"(?:(?:[1247]\\d|3[0-46-9]|[56]0)\\d\\d|800)\\d{4,6}|(?:[1-47]\\d|50)\\d{4,5}|2\\d{4}",,,,,,,[5,6,7,8,9,10]],[,,"18[1-8]\\d{3,6}",,,,"181234567",,,[6,7,8,9]],[,,"(?:4[0-8]|50)\\d{4,8}",,,,"412345678",,,[6,7,8,9,10]],[,,"800\\d{4,6}",
,,,"800123456",,,[7,8,9]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AX",358,"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","0",,,"0",,"00",,,,[,,,,,,,,,[-1]],,"18",[,,,,,,,,,[-1]],[,,"(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d",,,,"10112345"],,,[,,,,,,,,,[-1]]],AZ:[,[,,"(?:(?:(?:[12457]\\d|60|88)\\d|365)\\d{3}|900200)\\d{3}",,,,,,,[9],[7]],[,,"(?:(?:1[28]\\d|2(?:[045]2|1[24]|2[2-4]|33|6[23]))\\d\\d|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}",
,,,"123123456",,,,[7]],[,,"(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}",,,,"401234567"],[,,"88\\d{7}",,,,"881234567"],[,,"900200\\d{3}",,,,"900200123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AZ",994,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[12]|365","[12]|365","[12]|365(?:[0-46-9]|5[0-35-9])"],"(0$1)"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",
["[3-8]"],"0$1"]],[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[12]|365","[12]|365","[12]|365(?:[0-46-9]|5[0-35-9])"],"(0$1)"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[3-8]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BA:[,[,,"(?:[3589]\\d|49|6\\d\\d?|70)\\d{6}",,,,,,,[8,9],[6]],[,,"(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}",
,,,"30212345",,,[8],[6]],[,,"6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}",,,,"61123456"],[,,"8[08]\\d{6}",,,,"80123456",,,[8]],[,,"9[0246]\\d{6}",,,,"90123456",,,[8]],[,,"8[12]\\d{6}",,,,"82123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BA",387,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})","$1-$2",["[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],[[,
"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70(?:3[0146]|[56]0)\\d{4}",,,,"70341234",,,[8]],,,[,,,,,,,,,[-1]]],BB:[,[,,"(?:246|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}",,,,"2464123456",,,,[7]],[,,"246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}",
,,,"2462501234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"(?:246976|900[2-9]\\d\\d)\\d{4}",,,,"9002123456",,,,[7]],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"24631\\d{5}",,,,"2463101234",,,,[7]],"BB",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"246",[,,,,,,,,,[-1]],[,,"246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}",,,,"2464301234",,,,[7]],,,[,,,,,,,,,[-1]]],BD:[,[,,"[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}",
,,,,,,[6,7,8,9,10]],[,,"(?:(?:2(?:[45]\\d{3}|7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|[13][1-6]|2[0157-9]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[01367]|7[15]|8[0146-9]))|7(?:02|21\\d|[3-589]1|6[12]|72[24])\\d|8(?:(?:[01]|217|3[12])\\d|4[12]|[5-7](?:1\\d|2)))\\d|3(?:(?:0(?:2[348]\\d|3[2-6])|(?:1(?:2[5-7]|[5-7])|3(?:1|24)|[5-7]1)\\d)\\d|2(?:1\\d\\d|2(?:[35]\\d\\d|4))|4(?:1\\d\\d|2(?:[25]\\d\\d|[47]))|8(?:1\\d\\d|2(?:(?:2\\d|4)\\d|3)))|4(?:0(?:2(?:[09]\\d|7)|33\\d\\d)|(?:1\\d|4(?:2[2-46]|5[25])|8(?:23|54))\\d\\d|2(?:1\\d\\d|2(?:[25]|[67]\\d\\d))|3(?:1\\d\\d(?:\\d{2})?|(?:2[236-9]|32)\\d\\d)|525|6(?:(?:[18]|2[3-6]|62)\\d\\d|5(?:[38]|[5-7]\\d\\d))|9(?:(?:[18]|2[2-5])\\d\\d|53\\d\\d?))|5(?:(?:02[03489]|1|22[2457]|32[35-79]|42[46]|[58]26|724)\\d\\d|6(?:(?:[18]|53)\\d\\d|2))|6(?:(?:(?:[04]2[34]|32[3478]|52[47]|[78]2[2-5]|92[2-6])\\d|6(?:[18]\\d|6(?:2(?:2|[34]\\d)|5[245]\\d)))\\d|2(?:(?:2[2-5]|8)\\d\\d|5(?:[3-5]\\d\\d|7)))|9(?:[24]1\\d\\d|[35]1))\\d{3}|(?:3(?:0(?:2[02-9]\\d|3[56])|(?:22[1-5]|32[2-6]|422)\\d|529)|(?:4(?:22[2-8]|32[02-9]|(?:[48][18]|71)\\d|5(?:1\\d|23)|6(?:2[467]|5[3-57]))|5(?:[2-47-9]1\\d|5(?:1\\d|26))|6(?:0(?:1\\d|24)|[3-589]1\\d|665[35])|81|9(?:[024]2|1\\d|81))\\d|732)\\d{3}|(?:4[46]23|5(?:222|32[37]))\\d{3}",
,,,"27111234"],[,,"(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}",,,,"1812345678",,,[10]],[,,"80[03]\\d{7}",,,,"8001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}",,,,"9604123456",,,[10]],"BD",880,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4,6})","$1-$2",["31[5-7]|[459]1"],"0$1"],[,"(\\d{3})(\\d{3,7})","$1-$2",["3(?:[2-5]1|[67]|8[013-9])|4(?:[235]1|4[01346-9]|6[168]|7|[89][18])|5(?:[2-578]1|6[128]|9)|6(?:[0389]1|28|4[14]|5|6[01346-9])|7(?:[2-589]|61)|8(?:0[014-9]|[12]|[3-7]1)|9(?:[24]1|[358])"],
"0$1"],[,"(\\d{4})(\\d{3,6})","$1-$2",["[13-9]"],"0$1"],[,"(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BE:[,[,,"4\\d{8}|[1-9]\\d{7}",,,,,,,[8,9]],[,,"(?:(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|9[2-4])\\d|8(?:0[2-8]|[1-79]\\d))\\d{5}",,,,"12345678",,,[8]],[,,"4(?:5[56]|6[0135-8]|[79]\\d|8[3-9])\\d{6}",,,,"470123456",,,[9]],[,,"800[1-9]\\d{4}",,,,"80012345",,,[8]],[,,"(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}",
,,,"90012345",,,[8]],[,,"7879\\d{4}",,,,"78791234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BE",32,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|4[23]|9[2-4]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-7]|8(?:0[2-8]|[1-79])"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"78(?:0[57]|1[0458]|2[25]|3[5-8]|48|[56]0|7[078])\\d{4}",,,,
"78102345",,,[8]],,,[,,,,,,,,,[-1]]],BF:[,[,,"[25-7]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}",,,,"20491234"],[,,"(?:5[124-8]|[67]\\d)\\d{6}",,,,"70123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BF",226,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[25-7]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BG:[,[,,"[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
,,,,,,[6,7,8,9],[4,5]],[,,"(?:(?:[236]\\d|5[1-9]|8[1-6]|9[1-7])\\d|4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}|2\\d{5}",,,,"2123456",,,[6,7,8],[4,5]],[,,"(?:4(?:3[07-9]|8\\d)|(?:8[7-9]\\d|9(?:8\\d|9[69]))\\d)\\d{5}",,,,"48123456",,,[8,9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,"700\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],"BG",359,"00","0",,,"0",,,,[[,"(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",
["43[1-6]|70[1-9]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|70[1-9]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["7|80"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BH:[,[,,"[136-9]\\d{7}",
,,,,,,[8]],[,,"(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}",,,,"17001234"],[,,"(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}",,,,"36001234"],[,,"80\\d{6}",,,,"80123456"],[,,"(?:87|9[014578])\\d{6}",,,,"90123456"],[,,"84\\d{6}",,,,"84123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BH",973,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[13679]|8[047]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,
,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BI:[,[,,"(?:[267]\\d|31)\\d{6}",,,,,,,[8]],[,,"22\\d{6}",,,,"22201234"],[,,"(?:29|31|6[189]|7[125-9])\\d{6}",,,,"79561234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BI",257,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BJ:[,[,,"[2689]\\d{7}",,,,,,,[8]],[,,"2(?:02|1[037]|2[45]|3[68])\\d{5}",,,,"20211234"],[,,"(?:6\\d|9[03-9])\\d{6}",
,,,"90011234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"857[58]\\d{4}",,,,"85751234"],"BJ",229,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"81\\d{6}",,,,"81123456"],,,[,,,,,,,,,[-1]]],BL:[,[,,"(?:590|69\\d)\\d{6}",,,,,,,[9]],[,,"590(?:2[7-9]|5[12]|87)\\d{4}",,,,"590271234"],[,,"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,
,,,,,[-1]],"BL",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BM:[,[,,"(?:441|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}",,,,"4412345678",,,,[7]],[,,"441(?:[37]\\d|5[0-39])\\d{5}",,,,"4413701234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,
,,[-1]],"BM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"441",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BN:[,[,,"[2-578]\\d{6}",,,,,,,[7]],[,,"(?:2(?:[013-9]\\d|2[0-7])|[3-5]\\d\\d)\\d{4}",,,,"2345678"],[,,"(?:22[89]|[78]\\d\\d)\\d{4}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BN",673,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BO:[,[,,"(?:[2-467]\\d{3}|80017)\\d{4}",
,,,,,,[8,9],[7]],[,,"(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}",,,,"22123456",,,[8],[7]],[,,"[67]\\d{7}",,,,"71234567",,,[8]],[,,"80017\\d{4}",,,,"800171234",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BO",591,"00(?:1\\d)?","0",,,"0(1\\d)?",,,,[[,"(\\d)(\\d{7})","$1 $2",["[2-4]"],,"0$CC $1"],[,"(\\d{8})",
"$1",["[67]"],,"0$CC $1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"],,"0$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BQ:[,[,,"(?:[34]1|7\\d)\\d{5}",,,,,,,[7]],[,,"(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}",,,,"7151234"],[,,"(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}",,,,"3181234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BQ",599,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"[347]",[,,,,,,,,,
[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BR:[,[,,"(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",,,,,,,[8,9,10,11]],[,,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",,,,"1123456789",,,[10],[8]],[,,"(?:[189][1-9]|2[12478])(?:7|9\\d)\\d{7}|(?:3[1-578]|[46][1-9]|5[13-5]|7[13-579])(?:[6-9]|9\\d)\\d{7}",,,,"11961234567",,,[10,11],[8]],[,,"800\\d{6,7}",,,,"800123456",,,[9,10]],[,,"(?:300|[59]00\\d?)\\d{6}",,,,"300123456",,,[9,10]],[,,"(?:300\\d(?:\\d{2})?|4(?:0(?:0\\d|20)|370))\\d{4}",
,,,"40041234",,,[8,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BR",55,"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","0",,,"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2",,,[[,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","300|4(?:0(?:0|20)|370)"]],[,"(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"],[,"(\\d{3,5})","$1",["1[125689]"]],[,"(\\d{4})(\\d{4})","$1-$2",["[2-9](?:0[1-9]|[1-9])"]],[,"(\\d{5})(\\d{4})","$1-$2",["9(?:0[1-9]|[1-9])"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],
"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[1-9][1-9]9"],"($1)","0 $CC ($1)"]],[[,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","300|4(?:0(?:0|20)|370)"]],[,"(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[1-9][1-9]9"],"($1)","0 $CC ($1)"]],[,,,,,,,,,[-1]],,,[,,"(?:300\\d|40(?:0\\d|20))\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BS:[,[,,
"(?:242|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",,,,"2423456789",,,,[7]],[,,"242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}",,,,"2423591234",,,,[7]],[,,"(?:242300|8(?:00|33|44|55|66|77|88)[2-9]\\d\\d)\\d{4}",,,,"8002123456",,,,[7]],[,,"900[2-9]\\d{6}",
,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"BS",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"242",[,,,,,,,,,[-1]],[,,"242225[0-46-9]\\d{3}",,,,"2422250123"],,,[,,,,,,,,,[-1]]],BT:[,[,,"[17]\\d{7}|[2-8]\\d{6}",,,,,,,[7,8],[6]],[,,"(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}",,,,"2345678",,,[7],[6]],[,,"(?:1[67]|77)\\d{6}",,,,"17123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BT",
975,"00",,,,,,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[23568]|4[5-7]|7[246]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BW:[,[,,"(?:(?:[2-6]|7\\d)\\d|90)\\d{5}",,,,,,,[7,8]],[,,"(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}",,,,"2401234",,,[7]],[,,"7(?:[1-6]\\d{3}|7(?:[014-8]\\d\\d|200))\\d{3}",
,,,"71123456",,,[8]],[,,,,,,,,,[-1]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"79(?:1(?:[01]\\d|20)|2[0-2]\\d)\\d{3}",,,,"79101234",,,[8]],"BW",267,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-6]"]],[,"(\\d{2})(\\d{5})","$1 $2",["90"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BY:[,[,,"(?:(?:[12]|8[0-7]\\d)\\d|33|44|902)\\d{7}|8(?:[05-79]\\d|1[0-489])\\d{7}|8[0-79]\\d{5,7}|8\\d{5}",,,,,,,[6,7,
8,9,10,11],[5]],[,,"(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",,,,"152450911",,,[9],[5,6,7]],[,,"(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}",,,,"294911911",,,[9]],[,,"8(?:0[013]|20\\d)\\d{7}|800\\d{3,6}",,,,"8011234567"],[,,"(?:810|902)\\d{7}",,,,"9021234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"249\\d{6}",,,,"249123456",,,[9]],"BY",375,"810","8",,,"0|80?",,"8~10",
,[[,"(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],[,"(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])","1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"],"8 0$1"],[,"(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:[56]|7[179])|2[1-3]","1(?:[56]|7(?:1[3-9]|7|9[2-7]))|2[1-3]"],"8 0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],[,"(\\d{3})(\\d{3,4})(\\d{4})",
"$1 $2 $3",["[89]"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,"(?:8(?:0[013]|10|20\\d)|902)\\d{7}|800\\d{3,6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BZ:[,[,,"(?:0800\\d|[2-8])\\d{6}",,,,,,,[7,11]],[,,"(?:2(?:[02]\\d|36)|[3-58][02]\\d|7(?:[02]\\d|32))\\d{4}",,,,"2221234",,,[7]],[,,"6[0-35-7]\\d{5}",,,,"6221234",,,[7]],[,,"0800\\d{7}",,,,"08001234123",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BZ",501,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],[,"(\\d)(\\d{3})(\\d{4})(\\d{3})",
"$1-$2-$3-$4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CA:[,[,,"(?:[2-8]\\d|90)\\d{8}",,,,,,,[10],[7]],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",,,,"5062345678",,,,[7]],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
,,,"5062345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}",,,,"5002345678"],[,,"600[2-9]\\d{6}",,,,"6002012345"],"CA",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CC:[,[,,"1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}",,,,,,,[6,7,8,9,10]],[,,"8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",
,,,"891621234",,,[9],[8]],[,,"4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,,"1300123456",,,[6,8,10]],[,,,,,,,,,[-1]],[,,"(?:14(?:5\\d|71)|550\\d)\\d{5}",,,,"550123456",,,[9]],"CC",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"0|([59]\\d{7})$","8$1","0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,
,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CD:[,[,,"[189]\\d{8}|[1-68]\\d{6}",,,,,,,[7,9]],[,,"12\\d{7}|[1-6]\\d{6}",,,,"1234567"],[,,"(?:8(?:[0-2459]\\d\\d|8)|9[017-9]\\d\\d)\\d{5}",,,,"991234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CD",243,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],
"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CF:[,[,,"(?:[27]\\d{3}|8776)\\d{4}",,,,,,,[8]],[,,"2[12]\\d{6}",,,,"21612345"],[,,"7[0257]\\d{6}",,,,"70012345"],[,,,,,,,,,[-1]],[,,"8776\\d{4}",,,,"87761234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CF",236,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CG:[,[,,"(?:(?:0\\d|80)\\d|222)\\d{6}",,,,,,,[9]],[,,"222[1-589]\\d{5}",
,,,"222123456"],[,,"0[14-6]\\d{7}",,,,"061234567"],[,,,,,,,,,[-1]],[,,"80(?:0\\d\\d|11[0-4])\\d{4}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CG",242,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["801"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CH:[,[,,"8\\d{11}|[2-9]\\d{8}",,,,,,,[9,12]],[,,"(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",
,,,"212345678",,,[9]],[,,"7[35-9]\\d{7}",,,,"781234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"90[016]\\d{6}",,,,"900123456",,,[9]],[,,"84[0248]\\d{6}",,,,"840123456",,,[9]],[,,"878\\d{6}",,,,"878123456",,,[9]],[,,,,,,,,,[-1]],"CH",41,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]|[89]1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|9"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],,[,,"74[0248]\\d{6}",,,,"740123456",
,,[9]],,,[,,,,,,,,,[-1]],[,,"5[18]\\d{7}",,,,"581234567",,,[9]],,,[,,"860\\d{9}",,,,"860123456789",,,[12]]],CI:[,[,,"[02-8]\\d{7}",,,,,,,[8]],[,,"(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}",,,,"21234567"],[,,"(?:[07][1-9]|[45]\\d|6[014-9]|8[4-9])\\d{6}",,,,"01234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CI",225,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[02-8]"]]],,[,,,,,,,,,[-1]],,,[,
,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CK:[,[,,"[2-8]\\d{4}",,,,,,,[5]],[,,"(?:2\\d|3[13-7]|4[1-5])\\d{3}",,,,"21234"],[,,"[5-8]\\d{4}",,,,"71234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CK",682,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1 $2",["[2-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CL:[,[,,"(?:1230|[2-57-9]\\d|6\\d{1,3})\\d{7}",,,,,,,[9,10,11]],[,,"(?:2(?:1962|(?:2\\d\\d|32[0-46-8])\\d)|(?:(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[2-9])\\d|8(?:0[1-9]|[1-9]\\d))\\d\\d)\\d{4}",
,,,"221234567",,,[9]],[,,"(?:2(?:1962|(?:2\\d\\d|32[0-46-8])\\d)|(?:(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[2-9])\\d|8(?:0[1-9]|[1-9]\\d))\\d\\d)\\d{4}",,,,"221234567",,,[9]],[,,"(?:1230\\d|800)\\d{6}",,,,"800123456",,,[9,11]],[,,,,,,,,,[-1]],[,,"600\\d{7,8}",,,,"6001234567",,,[10,11]],[,,,,,,,,,[-1]],[,,"44\\d{7}",,,,"441234567",,,[9]],"CL",56,"(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0",,,,,,,1,[[,"(\\d{4})","$1",["1(?:[03-58]|[29]1)"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[23]"],
"($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],[,"(\\d{5})(\\d{4})","$1 $2",["2"],"($1)"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[68]00"]],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["600"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[23]"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{4})",
"$1 $2 $3",["3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],[,"(\\d{5})(\\d{4})","$1 $2",["2"],"($1)"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[68]00"]],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["600"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],[,,,,,,,,,[-1]],,,[,,"600\\d{7,8}",,,,,,,[10,11]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CM:[,[,,"(?:[26]\\d\\d|88)\\d{6}",,,
,,,,[8,9]],[,,"2(?:22|33|4[23])\\d{6}",,,,"222123456",,,[9]],[,,"6[5-9]\\d{7}",,,,"671234567",,,[9]],[,,"88\\d{6}",,,,"88012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CM",237,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CN:[,[,,"(?:(?:(?:1[03-68]|2\\d)\\d\\d|[3-79])\\d|8[0-57-9])\\d{7}|[1-579]\\d{10}|8[0-57-9]\\d{8,9}|[1-79]\\d{9}|[1-9]\\d{7}|[12]\\d{6}",
,,,,,,[7,8,9,10,11,12],[5,6]],[,,"21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})",
,,,"1012345678",,,,[5,6]],[,,"1(?:[38]\\d{3}|4[57]\\d{2}|5[0-35-9]\\d{2}|6[25-7]\\d{2}|7(?:[0-35-8]\\d{2}|40[0-5])|9[189]\\d{2})\\d{6}",,,,"13123456789",,,[11]],[,,"(?:10)?800\\d{7}",,,,"8001234567",,,[10,12]],[,,"16[08]\\d{5}",,,,"16812345",,,[8]],[,,"400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",
,,,"4001234567",,,[7,8,9,10,11],[5,6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CN",86,"(?:1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))?00","0",,,"0|(1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))",,"00",,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"]],[,"(\\d{5,6})","$1",["100|95"]],[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d\\d[19]","[3-9]\\d\\d(?:10|9[56])"],"0$1","$CC $1"],[,"(\\d{3,4})(\\d{4})",
"$1 $2",["[2-9]"]],[,"(\\d{2})(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],
"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"],"0$1","$CC $1",1],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["807","8078"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1(?:[3-57-9]|6[25-7])"],,"$CC $1"],[,"(\\d{5})(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"]],[,"(\\d{3})(\\d{7,8})","$1 $2",["950"]]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"]],[,"(\\d{2})(\\d{5,6})",
"$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d\\d[19]","[3-9]\\d\\d(?:10|9[56])"],"0$1","$CC $1"],[,"(\\d{2})(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],
"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"],"0$1","$CC $1",1],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["807","8078"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1(?:[3-57-9]|6[25-7])"],,"$CC $1"],[,"(\\d{5})(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"]],[,"(\\d{3})(\\d{7,8})","$1 $2",["950"]]],[,,,,,,,,,[-1]],,,[,,"(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}",
,,,,,,[10,11,12]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CO:[,[,,"(?:1\\d|3)\\d{9}|[124-8]\\d{7}",,,,,,,[8,10,11],[7]],[,,"[124-8][2-9]\\d{6}",,,,"12345678",,,[8],[7]],[,,"3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}",,,,"3211234567",,,[10]],[,,"1800\\d{7}",,,,"18001234567",,,[11]],[,,"19(?:0[01]|4[78])\\d{7}",,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CO",57,"00(?:4(?:[14]4|56)|[579])","0",,,"0([3579]|4(?:[14]4|56))?",,,,[[,"(\\d)(\\d{7})","$1 $2",["1(?:[2-79]|8[2-9])|[24-8]"],
"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1(?:80|9)","1(?:800|9)"],"0$1"]],[[,"(\\d)(\\d{7})","$1 $2",["1(?:[2-79]|8[2-9])|[24-8]"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(\\d)(\\d{3})(\\d{7})","$1 $2 $3",["1(?:80|9)","1(?:800|9)"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CR:[,[,,"(?:8\\d|90)\\d{8}|[24-8]\\d{7}",,,,,,,[8,10]],[,,"2(?:[024-7]\\d\\d|1(?:0[7-9]|[1-9]\\d))\\d{4}",,
,,"22123456",,,[8]],[,,"(?:(?:5(?:0[01]|7[0-3])|(?:7[0-3]|8[3-9])\\d)\\d\\d|6(?:[0-4]\\d{3}|500[01]))\\d{3}",,,,"83123456",,,[8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"90[059]\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:210[0-6]|4\\d{3}|5100)\\d{4}",,,,"40001234",,,[8]],"CR",506,"00",,,,"(19(?:0[0-2468]|1[09]|20|66|77|99))",,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[24-7]|8[3-9]"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,
,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CU:[,[,,"[2-57]\\d{7}|[2-47]\\d{6}|[34]\\d{5}",,,,,,,[6,7,8],[4,5]],[,,"(?:2[1-4]|7\\d)\\d{5,6}|(?:3[1-3]|4[1-35-8])\\d{6}|3[23]\\d{4,5}|4[12578]\\d{5}|4[78]\\d{4}",,,,"71234567",,,,[4,5]],[,,"5\\d{7}",,,,"51234567",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CU",53,"119","0",,,"0",,,,[[,"(\\d{2})(\\d{4,6})","$1 $2",["[2-4]"],"(0$1)"],[,"(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],[,"(\\d)(\\d{7})","$1 $2",["5"],
"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CV:[,[,,"[2-59]\\d{6}",,,,,,,[7]],[,,"2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}",,,,"2211234"],[,,"(?:[34][36]|5[1-389]|9\\d)\\d{5}",,,,"9911234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CV",238,"0",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-59]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CW:[,[,,"(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
,,,,,,[7,8]],[,,"9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}",,,,"94351234"],[,,"9(?:5(?:[12467]\\d|3[01])|6[5-9]\\d)\\d{4}",,,,"95181234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"60[0-2]\\d{4}",,,,"6001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CW",599,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[3467]"]],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],,[,,"955\\d{5}",,,,"95581234",,,[8]],1,"[69]",[,,,,,,,,,[-1]],[,,,,,,,,,
[-1]],,,[,,,,,,,,,[-1]]],CX:[,[,,"1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}",,,,,,,[6,7,8,9,10]],[,,"8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",,,,"891641234",,,[9],[8]],[,,"4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,,"1300123456",
,,[6,8,10]],[,,,,,,,,,[-1]],[,,"(?:14(?:5\\d|71)|550\\d)\\d{5}",,,,"550123456",,,[9]],"CX",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"0|([59]\\d{7})$","8$1","0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CY:[,[,,"(?:[279]\\d|[58]0)\\d{6}",,,,,,,[8]],[,,"2[2-6]\\d{6}",,,,"22345678"],[,,"9[4-79]\\d{6}",,,,"96123456"],[,,"800\\d{5}",,,,"80001234"],[,,"90[09]\\d{5}",,,,"90012345"],[,,"80[1-9]\\d{5}",,,,"80112345"],[,,"700\\d{5}",,,,"70012345"],[,,,
,,,,,,[-1]],"CY",357,"00",,,,,,,,[[,"(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:50|77)\\d{6}",,,,"77123456"],,,[,,,,,,,,,[-1]]],CZ:[,[,,"(?:[2-578]\\d|60|9\\d{1,4})\\d{7}",,,,,,,[9,10,11,12]],[,,"(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}",,,,"212345678",,,[9]],[,,"(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}",,,,"601123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:0[05689]|76)\\d{6}",,,,"900123456",,,[9]],[,,"8[134]\\d{7}",,,,"811234567",,,[9]],[,,"70[01]\\d{6}",
,,,"700123456",,,[9]],[,,"9[17]0\\d{6}",,,,"910123456",,,[9]],"CZ",420,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"9(?:5\\d|7[2-4])\\d{6}",,,,"972123456",,,[9]],,,[,,"9(?:3\\d{9}|6\\d{7,10})",,,,"93123456789"]],DE:[,[,,"(?:1|[235-9]\\d{11}|4(?:[0-8]\\d{2,10}|9(?:[05]\\d{7}|[46][1-8]\\d{2,6})))\\d{3}|[1-35-9]\\d{6,13}|49(?:(?:[0-25]\\d|3[1-689])\\d{4,8}|4[1-8]\\d{4}|6[0-8]\\d{3,4}|7[1-7]\\d{5,8})|497[0-7]\\d{4}|49(?:[0-2579]\\d|[34][1-9])\\d{3}|[1-9]\\d{5}|[13468]\\d{4}",
,,,,,,[4,5,6,7,8,9,10,11,12,13,14,15],[3]],[,,"(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-3589]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|[29]\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{4,12}|3(?:(?:[03569]\\d|4[0-79]|7[1-7]|8[1-8])\\d{4,12}|2\\d{9})|4(?:(?:[02-48]\\d|1[02-9]|5[0-6]|6[0-8]|7[0-79])\\d{4,12}|9(?:[0-37]\\d{4,9}|[4-6]\\d{4,10}))|(?:2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:0\\d?|[35-9][15]|4[015])|4(?:0\\d?|[2-9]1)|[57][1-9]1|[68](?:[1-8]1|9\\d?)|9(?:06|[1-9]1))\\d{3}",
,,,"30123456",,,[5,6,7,8,9,10,11,12,13,14,15],[3,4]],[,,"1(?:5[0-25-9]\\d{8}|(?:6[023]|7\\d)\\d{7,8})",,,,"15123456789",,,[10,11]],[,,"800\\d{7,12}",,,,"8001234567890",,,[10,11,12,13,14,15]],[,,"(?:137[7-9]|900(?:[135]|9\\d))\\d{6}",,,,"9001234567",,,[10,11]],[,,"1(?:3(?:7[1-6]\\d\\d|8)|80\\d{1,7})\\d{4}",,,,"18012345",,,[7,8,9,10,11,12,13,14]],[,,"700\\d{8}",,,,"70012345678",,,[11]],[,,,,,,,,,[-1]],"DE",49,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],[,"(\\d{3})(\\d{3,12})",
"$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|(?:4[2-9]|[57][1-9]|[68][1-8])1|9(?:06|[1-9]1)","2(?:0[1-389]|1(?:[14]|2[0-8])|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|(?:4[2-9]|[57][1-9]|[68][1-8])1|9(?:06|[1-9]1)"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],[,"(\\d{4})(\\d{3,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|7(?:0[2-8]|[1-9])|8(?:0[2-9]|[1-8])|9(?:0[7-9]|[1-9])","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[13468]|8[13568])|6(?:0[1356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|7(?:0[2-8]|[1-9])|8(?:0[2-9]|[1-8])|9(?:0[7-9]|[1-9])"],
"0$1"],[,"(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],[,"(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],[,"(\\d{5})(\\d{3,10})","$1 $2",["3"],"0$1"],[,"(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],[,"(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],[,"(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],[,"(\\d{5})(\\d{6})","$1 $2",["15[0568]"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(\\d{3})(\\d{8})","$1 $2",["18[2-579]","18[2-579]","18(?:[2-479]|5(?:0[1-9]|[1-9]))"],"0$1"],
[,"(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],[,"(\\d{5})(\\d{6})","$1 $2",["18"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15[013-68]"],"0$1"],[,"(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15"],"0$1"]],,[,,"16(?:4\\d{1,10}|[89]\\d{1,11})",,,,"16412345",,,[4,5,6,7,8,9,10,11,12,13,14]],,,[,,,,,,,,,[-1]],[,,"18(?:1\\d{5,11}|[2-9]\\d{8})",,,,"18500123456",,,[8,9,10,11,12,13,14]],,,[,,"1(?:5(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)|(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d?)\\d{7}",
,,,"177991234567",,,[12,13]]],DJ:[,[,,"(?:2\\d|77)\\d{6}",,,,,,,[8]],[,,"2(?:1[2-5]|7[45])\\d{5}",,,,"21360003"],[,,"77\\d{6}",,,,"77831001"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DJ",253,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DK:[,[,,"[2-9]\\d{7}",,,,,,,[8]],[,,"(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}",,,,"32123456"],[,,"(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}",
,,,"32123456"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DK",45,"00",,,,,,,1,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DM:[,[,,"(?:[58]\\d\\d|767|900)\\d{7}",,,,,,,[10],[7]],[,,"767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}",,,,"7674201234",,,,[7]],[,,"767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}",,,,"7672251234",,,,[7]],
[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"767",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DO:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}",
,,,"8092345678",,,,[7]],[,,"8[024]9[2-9]\\d{6}",,,,"8092345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DO",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"8[024]9",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DZ:[,[,,"(?:[1-4]|[5-79]\\d|80)\\d{7}",,,,,,,[8,9]],[,,"(?:(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d|9619)\\d{5}",,,,"12345678"],[,,"(?:(?:5[4-6]|7[7-9])\\d|6(?:[569]\\d|7[0-6]))\\d{6}",
,,,"551234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"80[3-689]1\\d{5}",,,,"808123456",,,[9]],[,,"80[12]1\\d{5}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,"98[23]\\d{6}",,,,"983123456",,,[9]],"DZ",213,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EC:[,
[,,"1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}",,,,,,,[8,9,10,11],[7]],[,,"[2-7][2-7]\\d{6}",,,,"22123456",,,[8],[7]],[,,"9(?:(?:39|[57][89]|[89]\\d)\\d|6(?:[0-27-9]\\d|30))\\d{5}",,,,"991234567",,,[9]],[,,"1800\\d{6,7}",,,,"18001234567",,,[10,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"[2-7]890\\d{4}",,,,"28901234",,,[8]],"EC",593,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-7]"]],[,"(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],
[,"(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],[[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-7]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EE:[,[,,"8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}",,,,,,,[7,8,10]],[,,"(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",,,,"3212345",,,[7]],[,,"(?:5\\d|8[1-4])\\d{6}|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}",
,,,"51234567",,,[7,8]],[,,"800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}",,,,"80012345"],[,,"(?:40\\d\\d|900)\\d{4}",,,,"9001234",,,[7,8]],[,,,,,,,,,[-1]],[,,"70[0-2]\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],"EE",372,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],[,"(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-4])","[45]|8(?:00[1-9]|[1-4])"]],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],
[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["80"]]],,[,,,,,,,,,[-1]],,,[,,"800[2-9]\\d{3}",,,,,,,[7]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EG:[,[,,"(?:[189]\\d?|[24-6])\\d{8}|[135]\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"1(?:3[23]\\d{6}|5\\d{6,7})|(?:(?:2[2-4]|3)\\d|4(?:0[2-5]|[578][23]|64)|6[24-689]3|8(?:2[2-57]|4[26]|6[237]|8[2-4])|9(?:2[27]|3[24]|52|6[2356]|7[2-4]))\\d{6}|5(?:(?:0[2-7]|5\\d)\\d{6}|7[23]\\d{5,6})",,,,"234567890",,,[8,9],[6,7]],[,,"1[0-25]\\d{8}",,,,"1001234567",,,[10]],[,,"800\\d{7}",,,,"8001234567",
,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"EG",20,"00","0",,,"0",,,,[[,"(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],[,"(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[189]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EH:[,[,,"[5-8]\\d{8}",,,,,,,[9]],[,,"528[89]\\d{5}",,,,"528812345"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}",
,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5924[01]\\d{4}",,,,"592401234"],"EH",212,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,"528[89]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ER:[,[,,"[178]\\d{6}",,,,,,,[7],[6]],[,,"(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}",,,,"8370362",,,,[6]],[,,"(?:17[1-3]|7\\d\\d)\\d{4}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ER",291,"00",
"0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ES:[,[,,"(?:51|[6-9]\\d)\\d{7}",,,,,,,[9]],[,,"(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])\\d{4}|9(?:(?:(?:[135]\\d|[28][0-8]|4[1-9])\\d\\d|7(?:[124-9]\\d\\d|3(?:[0-8]\\d|9[1-9])))\\d\\d|6(?:[0-8]\\d{4}|9(?:0(?:[0-57-9]\\d\\d|6(?:0[0-8]|1[1-9]|[2-9]\\d))|[1-9]\\d{3}))))\\d\\d",,,,"810123456"],[,,"(?:(?:6\\d|7[1-48])\\d{5}|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d",,,,"612345678"],
[,,"[89]00\\d{6}",,,,"800123456"],[,,"80[367]\\d{6}",,,,"803123456"],[,,"90[12]\\d{6}",,,,"901123456"],[,,"70\\d{7}",,,,"701234567"],[,,,,,,,,,[-1]],"ES",34,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[568]|7[0-48]|9(?:0[12]|[1-8])"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"51\\d{7}",,,,"511234567"],,,[,,,,,,,,,[-1]]],ET:[,[,,"(?:11|[2-59]\\d)\\d{7}",,,,,,,[9],[7]],[,,"(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",
,,,"111112345",,,,[7]],[,,"9\\d{8}",,,,"911234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ET",251,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-59]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FI:[,[,,"(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}|[1-35689]\\d{4}",,,,,,,[5,6,7,8,9,10]],[,,"(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}",,,,"131234567",,,[5,6,7,8,9]],[,,"(?:4[0-8]|50)\\d{4,8}",,,,"412345678",
,,[6,7,8,9,10]],[,,"800\\d{4,6}",,,,"800123456",,,[7,8,9]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FI",358,"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","0",,,"0",,"00",,[[,"(\\d{5})","$1",["7"],"0$1"],[,"(\\d{6})","$1",["11"]],[,"(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],[,"(\\d{2})(\\d{4,8})","$1 $2",["1(?:0[1-9]|[3-9])|2(?:0[1-9]|9)|[45]|7[135]"],"0$1"],[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:1|20)0|[36-8]"],"0$1"]],
[[,"(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],[,"(\\d{2})(\\d{4,8})","$1 $2",["1(?:0[1-9]|[3-9])|2(?:0[1-9]|9)|[45]|7[135]"],"0$1"],[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:1|20)0|[36-8]"],"0$1"]],[,,,,,,,,,[-1]],1,"1[03-79]|[2-9]",[,,"[13]00\\d{3,7}|20(?:0\\d{3,7}|(?:2[023]|9[89])\\d{1,6})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})"],[,,"(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d",,,,"10112345"],
,,[,,,,,,,,,[-1]]],FJ:[,[,,"(?:(?:0800\\d|[235-9])\\d|45)\\d{5}",,,,,,,[7,11]],[,,"(?:(?:3[0-5]|8[58])\\d|6(?:03|[25-7]\\d))\\d{4}",,,,"3212345",,,[7]],[,,"(?:[279]\\d|45|5[01568]|8[034679])\\d{5}",,,,"7012345",,,[7]],[,,"0800\\d{7}",,,,"08001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FJ",679,"0(?:0|52)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,
,[,,,,,,,,,[-1]]],FK:[,[,,"[2-7]\\d{4}",,,,,,,[5]],[,,"[2-47]\\d{4}",,,,"31234"],[,,"[56]\\d{4}",,,,"51234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FK",500,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FM:[,[,,"[39]\\d{6}",,,,,,,[7]],[,,"(?:3[2357]0[1-9]|9[2-6]\\d\\d)\\d{3}",,,,"3201234"],[,,"(?:3[2357]0[1-9]|9[2-7]\\d\\d)\\d{3}",,,,"3501234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
"FM",691,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[39]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FO:[,[,,"(?:[2-8]\\d|90)\\d{4}",,,,,,,[6]],[,,"(?:20|[34]\\d|8[19])\\d{4}",,,,"201234"],[,,"(?:[27][1-9]|5\\d)\\d{4}",,,,"211234"],[,,"80[257-9]\\d{3}",,,,"802123"],[,,"90(?:[13-5][15-7]|2[125-7]|99)\\d\\d",,,,"901123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:6[0-36]|88)\\d{4}",,,,"601234"],"FO",298,"00",,,,"(10(?:01|[12]0|88))",,,,[[,"(\\d{6})","$1",["[2-9]"],,"$CC $1"]],
,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FR:[,[,,"[1-9]\\d{8}",,,,,,,[9]],[,,"[1-5]\\d{8}",,,,"123456789"],[,,"(?:6\\d\\d|7(?:00|[3-9]\\d))\\d{6}",,,,"612345678"],[,,"80[0-5]\\d{6}",,,,"801234567"],[,,"8[129]\\d{7}",,,,"891123456"],[,,"884\\d{6}",,,,"884012345"],[,,,,,,,,,[-1]],[,,"9\\d{8}",,,,"912345678"],"FR",33,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})","$1 $2",["11"]],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["8"],"0 $1"]],[[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"80[6-9]\\d{6}",,,,"806123456"],,,[,,,,,,,,,[-1]]],GA:[,[,,"(?:0\\d|[2-7])\\d{6}",,,,,,,[7,8]],[,,"01\\d{6}",,,,"01441234",,,[8]],[,,"(?:0[2-7]|[2-7])\\d{6}",,,,"06031234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GA",241,"00",,,,,,,,[[,"(\\d)(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["[2-7]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GB:[,[,,"[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",,,,,,,[7,9,10],[4,5,6,8]],[,,"(?:1(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|2(?:0[024-9]|1[0-7]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d)\\d{6}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d",
,,,"1212345678",,,[9,10],[4,5,6,7,8]],[,,"7(?:(?:[1-3]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|8(?:[014-9]\\d|[23][0-8]))\\d|4(?:[0-46-9]\\d\\d|5(?:[0-689]\\d|7[0-57-9]))|7(?:0(?:0[01]|[1-9]\\d)|(?:[1-7]\\d|8[02-9]|9[0-689])\\d)|9(?:(?:[024-9]\\d|3[0-689])\\d|1(?:[02-9]\\d|1[028])))\\d{5}",,,,"7400123456",,,[10]],[,,"80[08]\\d{7}|800\\d{6}|8001111",,,,"8001234567"],[,,"(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",,,,"9012345678",,,[7,10]],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678",
,,[10]],[,,"56\\d{8}",,,,"5612345678",,,[10]],"GB",44,"00","0"," x",,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],[,"(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-79][02-9]|8)","1(?:[24][02-9]|3(?:[02-79]|8[0-46-9])|5(?:[04-9]|2[024-9]|3[014-689])|6(?:[02-8]|9[0-24578])|7(?:[02-57-9]|6[013-9])|8|9(?:[0235-9]|4[2-9]))","1(?:[24][02-9]|3(?:[02-79]|8(?:[0-4689]|7[0-24-9]))|5(?:[04-9]|2(?:[025-9]|4[013-9])|3(?:[014-68]|9[0-37-9]))|6(?:[02-8]|9(?:[0-2458]|7[0-25689]))|7(?:[02-57-9]|6(?:[013-79]|8[0-25689]))|8|9(?:[0235-9]|4(?:[2-57-9]|6[0-689])))"],
"0$1"],[,"(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|7|94)"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[024-9])","[25]|7(?:0|6(?:[04-9]|2[356]))"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"],[,"(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"]],,[,,"76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456",,,[10]],1,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,,,,[-1]]],GD:[,[,,"(?:473|[58]\\d\\d|900)\\d{7}",,,,,,,
[10],[7]],[,,"473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",,,,"4732691234",,,,[7]],[,,"473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}",,,,"4734031234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"GD",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"473",[,,,,,,,,,[-1]],[,
,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GE:[,[,,"(?:[3-57]\\d\\d|800)\\d{6}",,,,,,,[9],[6]],[,,"(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}",,,,"322123456",,,,[6]],[,,"(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}",,,,"555123456"],[,,"800\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"706\\d{6}",,,,"706123456"],"GE",995,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["5|79"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"706\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GF:[,[,,"[56]94\\d{6}",,,,,,,[9]],[,,"594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}",,,,"594101234"],[,,"694(?:[0-249]\\d|3[0-48])\\d{4}",,,,"694201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GF",594,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]"],"0$1"]],,[,,,,,,,
,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GG:[,[,,"(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",,,,,,,[7,9,10],[6]],[,,"1481[25-9]\\d{5}",,,,"1481256789",,,[10],[6]],[,,"7(?:(?:781|839)\\d|911[17])\\d{5}",,,,"7781123456",,,[10]],[,,"80[08]\\d{7}|800\\d{6}|8001111",,,,"8001234567"],[,,"(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",,,,"9012345678",,,[7,10]],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",,,[10]],"GG",44,"00","0",
,,"0|([25-9]\\d{5})$","1481$1",,,,,[,,"76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456",,,[10]],,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,,,,[-1]]],GH:[,[,,"(?:[235]\\d{3}|800)\\d{5}",,,,,,,[8,9],[7]],[,,"3(?:0(?:[237]\\d|80)|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}",,,,"302345678",,,[9],[7]],[,,"(?:2[0346-8]\\d|5(?:[0457]\\d|6[01]))\\d{6}",
,,,"231234567",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GH",233,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[237]|80"]],[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],[[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"800\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GI:[,[,,"(?:[25]\\d\\d|629)\\d{5}",
,,,,,,[8]],[,,"2(?:(?:00\\d|2(?:2[2457]|50))\\d|1(?:6[24-7]\\d|90[0-2]))\\d{3}",,,,"20012345"],[,,"(?:5[46-8]\\d|629)\\d{5}",,,,"57123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GI",350,"00",,,,,,,,[[,"(\\d{3})(\\d{5})","$1 $2",["2"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GL:[,[,,"(?:19|[2-689]\\d)\\d{4}",,,,,,,[6]],[,,"(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}",,,,"321000"],[,,"(?:[25][1-9]|4[2-9])\\d{4}",,,,"221234"],[,
,"80\\d{4}",,,,"801234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3[89]\\d{4}",,,,"381234"],"GL",299,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-689]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GM:[,[,,"[2-9]\\d{6}",,,,,,,[7]],[,,"(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}",,,,"5661234"],[,,"(?:[23679]\\d|5[01])\\d{5}",,,,"3012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GM",220,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GN:[,[,,"(?:30|6\\d\\d|722)\\d{6}",,,,,,,[8,9]],[,,"30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}",,,,"30241234",,,[8]],[,,"6[02356]\\d{7}",,,,"601123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"722\\d{6}",,,,"722123456",,,[9]],"GN",224,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",
["3"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GP:[,[,,"(?:590|69\\d)\\d{6}",,,,,,,[9]],[,,"590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}",,,,"590201234"],[,,"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GP",590,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",
["[56]"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GQ:[,[,,"(?:222|(?:3\\d|55|[89]0)\\d)\\d{6}",,,,,,,[9]],[,,"3(?:3(?:[0-24-9]\\d[46]|3\\d[7-9])|5\\d\\d[7-9])\\d{4}",,,,"333091234"],[,,"(?:222|55[015])\\d{6}",,,,"222123456"],[,,"80\\d[1-9]\\d{5}",,,,"800123456"],[,,"90\\d[1-9]\\d{5}",,,,"900123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GQ",240,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],[,"(\\d{3})(\\d{6})","$1 $2",["[89]"]]],,
[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GR:[,[,,"(?:[268]\\d|[79]0)\\d{8}",,,,,,,[10]],[,,"2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",,,,"2123456789"],
[,,"6(?:8[57-9]|9\\d)\\d{7}",,,,"6912345678"],[,,"800\\d{7}",,,,"8001234567"],[,,"90[19]\\d{7}",,,,"9091234567"],[,,"8(?:0[16]|12|25)\\d{7}",,,,"8011234567"],[,,"70\\d{8}",,,,"7012345678"],[,,,,,,,,,[-1]],"GR",30,"00",,,,,,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["2[3-8]1|[689]"]],[,"(\\d{4})(\\d{6})","$1 $2",["2"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GT:[,[,,"(?:1\\d{3}|[2-7])\\d{7}",,,,,,,[8,11]],[,,"[267][2-9]\\d{6}",
,,,"22456789",,,[8]],[,,"[3-5]\\d{7}",,,,"51234567",,,[8]],[,,"18[01]\\d{8}",,,,"18001112222",,,[11]],[,,"19\\d{9}",,,,"19001112222",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GT",502,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GU:[,[,,"(?:[58]\\d\\d|671|900)\\d{7}",,,,,,,[10],[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",
,,,"6713001234",,,,[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",,,,"6713001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"GU",1,"011","1",,,"1",,,1,,,[,,,,,,
,,,[-1]],,"671",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GW:[,[,,"[49]\\d{8}|4\\d{6}",,,,,,,[7,9]],[,,"443\\d{6}",,,,"443201234",,,[9]],[,,"9(?:5\\d|6[569]|77)\\d{6}",,,,"955012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"40\\d{5}",,,,"4012345",,,[7]],"GW",245,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["40"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GY:[,[,,"(?:(?:(?:[2-46]\\d|77)\\d|862)\\d|9008)\\d{3}",
,,,,,,[7]],[,,"(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}",,,,"2201234"],[,,"6\\d{6}",,,,"6091234"],[,,"(?:289|862)\\d{4}",,,,"2891234"],[,,"9008\\d{3}",,,,"9008123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GY",592,"001",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-46-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HK:[,[,,"8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",
,,,,,,[5,6,7,8,9,11]],[,,"(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[04]|9\\d))|58(?:0[1-8]|1[2-9]))\\d{4}",,,,"21234567",,,[8]],[,,"(?:46(?:0[0-6]|1[0-2]|4[0-57-9])|5(?:(?:[1-59][0-46-9]|6[0-4689])\\d|7(?:[0-2469]\\d|30))|6(?:(?:0[1-9]|[13-59]\\d|[68][0-57-9]|7[0-79])\\d|2(?:[0-57-9]\\d|6[01]))|707[1-5]|848[01]|9(?:(?:0[1-9]|1[02-9]|[358][0-8]|[467]\\d)\\d|2(?:[0-8]\\d|9[03-9])))\\d{4}",,,,"51234567",,,[8]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,
,"900(?:[0-24-9]\\d{7}|3\\d{1,4})",,,,"90012345678",,,[5,6,7,8,11]],[,,,,,,,,,[-1]],[,,"8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}",,,,"81123456",,,[8]],[,,,,,,,,,[-1]],"HK",852,"00(?:30|5[09]|[126-9]?)",,,,,,"00",,[[,"(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],,[,,"7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}",
,,,"71123456",,,[8]],,,[,,,,,,,,,[-1]],[,,"30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}",,,,"30161234",,,[8]],,,[,,,,,,,,,[-1]]],HN:[,[,,"[237-9]\\d{7}",,,,,,,[8]],[,,"2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|64|7[0135689]|8[01346-9]|9[0-2])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:08|16|4[03-5]|5\\d|6[4-6]|74|80)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}",,,,"22123456"],[,,"[37-9]\\d{7}",,,,"91234567"],[,,,,,,,,,[-1]],[,,,,
,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"HN",504,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HR:[,[,,"(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",,,,,,,[6,7,8,9]],[,,"1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",,,,"12345678",,,[8,9],[6,7]],[,,"9(?:(?:01|[12589]\\d)\\d|7(?:[0679]\\d|51))\\d{5}|98\\d{6}",,,,"921234567",,,[8,9]],[,,"80[01]\\d{4,6}",,,,"800123456",,,[7,8,9]],
[,,"6[01459]\\d{6}|6[01]\\d{4,5}",,,,"611234",,,[6,7,8]],[,,,,,,,,,[-1]],[,,"7[45]\\d{6}",,,,"74123456",,,[8]],[,,,,,,,,,[-1]],"HR",385,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],[,"(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})",
"$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:62\\d?|72)\\d{6}",,,,"62123456",,,[8,9]],,,[,,,,,,,,,[-1]]],HT:[,[,,"[2-489]\\d{7}",,,,,,,[8]],[,,"2(?:2\\d|5[1-5]|81|9[149])\\d{5}",,,,"22453300"],[,,"[34]\\d{7}",,,,"34101234"],[,,"8\\d{7}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}",,,,"98901234"],"HT",509,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-489]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
,,[,,,,,,,,,[-1]]],HU:[,[,,"[2357]\\d{8}|[1-9]\\d{7}",,,,,,,[8,9],[6,7]],[,,"(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}",,,,"12345678",,,[8],[6,7]],[,,"(?:[257]0|3[01])\\d{7}",,,,"201234567",,,[9]],[,,"[48]0\\d{6}",,,,"80123456",,,[8]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"21\\d{7}",,,,"211234567",,,[9]],"HU",36,"00","06",,,"06",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],
"($1)"]],,[,,,,,,,,,[-1]],,,[,,"[48]0\\d{6}",,,,,,,[8]],[,,"38\\d{7}",,,,"381234567",,,[9]],,,[,,,,,,,,,[-1]]],ID:[,[,,"(?:[1-36]|8\\d{5})\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}",,,,,,,[7,8,9,10,11,12],[5,6]],[,,"2(?:[124]\\d{7,8}|(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])\\d{5,8})|(?:3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}|6(?:1(?:[0-8]\\d{4,7}|9\\d{4,8})|(?:[25]\\d|3[1-69]|4[1-6])\\d{5,8})|2(?:1(?:14|500)|2\\d{3})\\d{3}",
,,,"218350123",,,[7,8,9,10,11],[5,6]],[,,"8[1-35-9]\\d{7,10}",,,,"812345678",,,[9,10,11,12]],[,,"(?:177\\d|800)\\d{5,7}",,,,"8001234567",,,[8,9,10,11]],[,,"809\\d{7}",,,,"8091234567",,,[10]],[,,"804\\d{7}",,,,"8041234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ID",62,"0(?:0[17-9]|10(?:00|1[67]))","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],[,"(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],[,"(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],[,"(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],
"(0$1)"],[,"(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],[,"(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"8071\\d{6}",,,,,,,[10]],[,,"(?:1500|8071\\d{3})\\d{3}",,,,"8071123456",,,[7,10]],,,[,,,,,,,,,[-1]]],IE:[,[,,"[148]\\d{9}|[124-9]\\d{8}|[124-69]\\d{7}|[24-69]\\d{6}",,,,,,,[7,8,9,10],[5,6]],
[,,"(?:1\\d{2,3}|2(?:[13]\\d\\d|[24-9])|4(?:0[24]|(?:(?:[1-469]|8[0-46-9])\\d|5)\\d|7)|5(?:0[45]|(?:1|[23679]\\d)\\d|8)|6(?:[237-9]|[4-6]\\d\\d)|7[14]\\d\\d|9(?:[04]\\d\\d|[35-9]))\\d{5}|[269]1\\d{6}",,,,"2212345",,,,[5,6]],[,,"8(?:22|[35-9]\\d)\\d{6}",,,,"850123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"15(?:1[2-8]|[2-8]0|9[089])\\d{6}",,,,"1520123456",,,[10]],[,,"18[59]0\\d{6}",,,,"1850123456",,,[10]],[,,"700\\d{6}",,,,"700123456",,,[9]],[,,"76\\d{7}",,,,"761234567",,,[9]],"IE",353,
"00","0",,,"0",,,,[[,"(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],[,"(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["76|8[235-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],[,"(\\d{4})(\\d{3})(\\d{3})",
"$1 $2 $3",["1"]],[,"(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"18[59]0\\d{6}",,,,,,,[10]],[,,"818\\d{6}",,,,"818123456",,,[9]],,,[,,"8[35-9]5\\d{7}",,,,"8551234567",,,[10]]],IL:[,[,,"1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",,,,,,,[7,8,9,10,11,12]],[,,"(?:153\\d\\d?|[2-489])\\d{7}",,,,"21234567",,,[8,11,12],[7]],[,,"5(?:(?:[0-489][2-9]|6\\d)\\d|5(?:01|2[2-5]|3[23]|4[45]|5[05689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}",,,,"502345678",,,[9]],[,,"1(?:255|80[019]\\d{3})\\d{3}",
,,,"1800123456",,,[7,10]],[,,"1(?:2(?:00\\d\\d|12)|9(?:0[01]|19)\\d\\d)\\d{4}",,,,"1919123456",,,[8,10]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,,,,,,,,[-1]],[,,"7(?:(?:18|2[23]|3[237]|47|6[58]|7\\d|9[2357-9])\\d|8(?:2\\d|33|55|77|81))\\d{5}",,,,"771234567",,,[9]],"IL",972,"0(?:0|1[2-9])","0",,,"0",,,,[[,"(\\d{4})(\\d{3})","$1-$2",["125"]],[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],[,"(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],
[,"(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],[,"(\\d{4})(\\d{6})","$1-$2",["159"]],[,"(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],[,"(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["1"]]],,[,,,,,,,,,[-1]],,,[,,"1700\\d{6}",,,,,,,[10]],[,,"1599\\d{6}",,,,"1599123456",,,[10]],,,[,,"151\\d{8,9}",,,,"15112340000",,,[11,12]]],IM:[,[,,"(?:1624|(?:[3578]\\d|90)\\d\\d)\\d{6}",,,,,,,[10],[6]],[,,"1624[5-8]\\d{5}",,,,"1624756789",,,,[6]],[,,"7(?:4576|[59]24\\d|624[0-4689])\\d{5}",,,,"7924123456"],
[,,"808162\\d{4}",,,,"8081624567"],[,,"(?:8(?:4(?:40[49]06|5624\\d)|7(?:0624|2299)\\d)|90[0167]624\\d)\\d{3}",,,,"9016247890"],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678"],[,,"56\\d{8}",,,,"5612345678"],"IM",44,"00","0",,,"0|([5-8]\\d{5})$","1624$1",,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:3(?:(?:08162|3\\d{4}|7(?:0624|2299))\\d|4(?:40[49]06|5624\\d))|55\\d{5})\\d{3}",,,,"5512345678"],,,[,,,,,,,,,[-1]]],IN:[,[,,"(?:00800|1\\d{0,5}|[2-9]\\d\\d)\\d{7}",,,,,,,[8,9,10,11,12,13],[6,7]],[,,"(?:1(?:1[2-7]\\d\\d|2(?:[0-249][2-7]\\d|[35-8]\\d[2-7])|3(?:[0-25][2-7]\\d|[346-9]\\d[2-7])|4(?:[145][2-7]\\d|[236-9]\\d[2-7])|[59](?:[0235-9]\\d[2-7]|[14][2-7]\\d)|6(?:[014][2-7]\\d|[235-9]\\d[2-7])|7(?:(?:0[24]|[1257][2-7])\\d|[34689]\\d[2-7])|8(?:[01346][2-7]\\d|[257-9]\\d[2-7]))|2(?:[02][2-7]\\d\\d|1(?:[134689]\\d[2-7]|[257][2-7]\\d)|3(?:[013][2-7]\\d|[24-8]\\d[2-7])|4(?:[01][2-7]\\d|[2-8]\\d[2-7])|5(?:[0137][2-7]\\d|[25689]\\d[2-7])|6(?:[0158][2-7]\\d|[2-4679]\\d[2-7])|7(?:[13-79]\\d[2-7]|8[2-7]\\d)|8(?:(?:0[13468]|[1568][2-7])\\d|[2-479]\\d[2-7])|9(?:(?:0\\d|[14][2-7])\\d|[235-9]\\d[2-7]))|3(?:(?:01|1[79])\\d[2-7]|2(?:[1-5]\\d[2-7]|6[2-7]\\d)|3[2-7]\\d\\d|4(?:[13][2-7]\\d|2(?:[0189][2-7]|[2-7]\\d)|[5-8]\\d[2-7])|5(?:[125689]\\d[2-7]|[34][2-7]\\d)|6(?:[01489][2-7]\\d|[235-7]\\d[2-7])|7(?:[02-46][2-7]\\d|[157-9]\\d[2-7])|8(?:(?:0\\d|[159][2-7])\\d|[2-46-8]\\d[2-7]))|4(?:[04][2-7]\\d\\d|1(?:[14578]\\d[2-7]|[36][2-7]\\d)|2(?:(?:0[24]|[1-47][2-7])\\d|[5689]\\d[2-7])|3(?:[15][2-7]\\d|[2-467]\\d[2-7])|5(?:[12][2-7]\\d|[4-7]\\d[2-7])|6(?:[0-26-9][2-7]\\d|[35]\\d[2-7])|7(?:(?:[014-9][2-7]|2[2-8])\\d|3\\d[2-7])|8(?:[013-57][2-7]\\d|[2689]\\d[2-7])|9(?:[014-7][2-7]\\d|[2389]\\d[2-7]))|5(?:1(?:[025][2-7]\\d|[146-9]\\d[2-7])|2(?:[14-8]\\d[2-7]|2[2-7]\\d)|3(?:[1346]\\d[2-7]|[25][2-7]\\d)|4(?:[14-69]\\d[2-7]|[28][2-7]\\d)|5(?:(?:1[2-7]|2[1-7])\\d|[46]\\d[2-7])|6(?:[146-9]\\d[2-7]|[25][2-7]\\d)|7(?:1[2-7]\\d|[2-4]\\d[2-7])|8(?:1[2-7]\\d|[2-8]\\d[2-7])|9(?:[15][2-7]\\d|[246]\\d[2-7]))|6(?:1(?:[1358]\\d[2-7]|2[2-7]\\d)|2(?:1[2-7]\\d|[2457]\\d[2-7])|3(?:1[2-7]\\d|[2-4]\\d[2-7])|4(?:1[2-7]\\d|[235-7]\\d[2-7])|5(?:[17][2-7]\\d|[2-689]\\d[2-7])|6(?:[13][2-7]\\d|[24578]\\d[2-7])|7(?:1[2-7]\\d|[235689]\\d[2-7]|4(?:[0189][2-7]|[2-7]\\d))|8(?:0[2-7]\\d|[1-6]\\d[2-7]))|7(?:1(?:[013-9]\\d[2-7]|2[2-7]\\d)|2(?:[0235-9]\\d[2-7]|[14][2-7]\\d)|3(?:[134][2-7]\\d|[2679]\\d[2-7])|4(?:[1-35689]\\d[2-7]|[47][2-7]\\d)|5(?:[15][2-7]\\d|[2-46-9]\\d[2-7])|[67](?:[02-9]\\d[2-7]|1[2-7]\\d)|8(?:(?:[013-7]\\d|2[0-6])[2-7]|8(?:[0189][2-7]|[2-7]\\d))|9(?:[0189]\\d[2-7]|[2-7]\\d\\d))|8(?:0[2-7]\\d\\d|1(?:[1357-9]\\d[2-7]|6[2-7]\\d)|2(?:[014][2-7]\\d|[235-8]\\d[2-7])|3(?:[03-57-9]\\d[2-7]|[126][2-7]\\d)|(?:4[0-24-9]|5\\d)\\d[2-7]|6(?:[136][2-7]\\d|[2457-9]\\d[2-7])|7(?:[078][2-7]\\d|[1-6]\\d[2-7])|8(?:[1256]\\d[2-7]|[34][2-7]\\d)|9(?:1[2-7]\\d|[2-4]\\d[2-7])))\\d{5}",
,,,"7410410123",,,[10],[6,7,8]],[,,"(?:6(?:(?:0(?:0[0-3569]|26|33)|2(?:[06]\\d|3[02589]|8[0-479]|9[0-79])|9(?:0[019]|13))\\d|1279|3(?:(?:0[0-79]|6[0-4679]|7[0-24-9]|[89]\\d)\\d|5(?:0[0-6]|[1-9]\\d)))|7(?:(?:0\\d\\d|19[0-5])\\d|2(?:(?:[0235-79]\\d|[14][017-9])\\d|8(?:[0-59]\\d|[6-8][089]))|3(?:(?:[05-8]\\d|3[017-9])\\d|1(?:[089]\\d|11|7[02-8])|2(?:[0-49][089]|[5-8]\\d)|4(?:[07-9]\\d|11)|9(?:[016-9]\\d|[2-5][089]))|4(?:0\\d\\d|1(?:[015-9]\\d|[2-4][089])|[29](?:[0-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|[47](?:[089]\\d|11|7[02-8])|[56]\\d[089]|8(?:[0-24-7][089]|[389]\\d))|5(?:(?:[0346-8]\\d|5[017-9])\\d|1(?:[07-9]\\d|11)|2(?:[04-9]\\d|[1-3][089])|9(?:[0-6][089]|[7-9]\\d))|6(?:0(?:[0-47]\\d|[5689][089])|(?:1[0-257-9]|[6-9]\\d)\\d|2(?:[0-4]\\d|[5-9][089])|3(?:[02-8][089]|[19]\\d)|4\\d[089]|5(?:[0-367][089]|[4589]\\d))|7(?:0(?:0[02-9]|[13-7][089]|[289]\\d)|[1-9]\\d\\d)|8(?:[0-79]\\d\\d|8(?:[089]\\d|11|7[02-9]))|9(?:[089]\\d\\d|313|7(?:[02-8]\\d|9[07-9])))|8(?:0(?:(?:[01589]\\d|6[67])\\d|7(?:[02-8]\\d|9[04-9]))|1(?:[0-57-9]\\d\\d|6(?:[089]\\d|7[02-8]))|2(?:[014](?:[089]\\d|7[02-8])|[235-9]\\d\\d)|3(?:[03-57-9]\\d\\d|[126](?:[089]\\d|7[02-8]))|[45]\\d{3}|6(?:[02457-9]\\d\\d|[136](?:[089]\\d|7[02-8]))|7(?:(?:0[07-9]|[1-69]\\d)\\d|[78](?:[089]\\d|7[02-8]))|8(?:[0-25-9]\\d\\d|3(?:[089]\\d|7[02-8])|4(?:[0489]\\d|7[02-8]))|9(?:[02-9]\\d\\d|1(?:[0289]\\d|7[02-8])))|9\\d{4})\\d{5}",
,,,"8123456789",,,[10]],[,,"(?:00800\\d|1(?:600|80[03]\\d{3}))\\d{6}|1800\\d{4,8}",,,,"1800123456"],[,,"186[12]\\d{9}",,,,"1861123456789",,,[13]],[,,"1860\\d{7}",,,,"18603451234",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IN",91,"00","0",,,"0",,,,[[,"(\\d{8})","$1",["5[0236-8]"],,,1],[,"(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],,,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],
"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)","1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12[2-7]|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1[2-7]|[34][2-6])|4[47][2-7]|61[346]|88[0-8])|8(?:(?:16|2[014]|3[126]|6[136])[2-7]|7(?:0[2-6]|[78][2-7])|8(?:3[2-7]|4[235-7])|91[3-7])",
"1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1(?:[2-6]|71)|[34][2-6])|4[47](?:[2-6]|7[19])|61[346]|88(?:[01][2-7]|[2-7]|82))|8(?:(?:16|2[014]|3[126]|6[136])(?:[2-6]|7[19])|7(?:0[2-6]|[78](?:[2-6]|7[19]))|8(?:3(?:[2-6]|7[19])|4(?:[2356]|7[19]))|91(?:[3-6]|7[19]))"],
"0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|(?:28[6-8]|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[2-7]|3(?:179|(?:2[0-49]|9[2-57])[2-7]))|807(?:1|9[1-3])"],
"0$1",,1],[,"(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["14"],,,1],[,"(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],,,1],[,"(\\d{2})(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3 $4",["0"],"0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["1"],,,1]],[[,"(\\d{8})","$1",["5[0236-8]"],,,1],[,"(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],,,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])",
"11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)",
"1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12[2-7]|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1[2-7]|[34][2-6])|4[47][2-7]|61[346]|88[0-8])|8(?:(?:16|2[014]|3[126]|6[136])[2-7]|7(?:0[2-6]|[78][2-7])|8(?:3[2-7]|4[235-7])|91[3-7])",
"1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1(?:[2-6]|71)|[34][2-6])|4[47](?:[2-6]|7[19])|61[346]|88(?:[01][2-7]|[2-7]|82))|8(?:(?:16|2[014]|3[126]|6[136])(?:[2-6]|7[19])|7(?:0[2-6]|[78](?:[2-6]|7[19]))|8(?:3(?:[2-6]|7[19])|4(?:[2356]|7[19]))|91(?:[3-6]|7[19]))"],
"0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|(?:28[6-8]|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[2-7]|3(?:179|(?:2[0-49]|9[2-57])[2-7]))|807(?:1|9[1-3])"],
"0$1",,1],[,"(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["14"],,,1],[,"(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],,,1],[,"(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["1"],,,1]],[,,,,,,,,,[-1]],,,[,,"(?:00800\\d|1(?:600|8(?:0[03]\\d\\d|6(?:0|[12]\\d\\d))\\d))\\d{6}|1800\\d{4,8}"],[,,"140\\d{7}",,,,"1409305260",,,[10]],,,[,,,,,,,,,[-1]]],IO:[,[,,"3\\d{6}",,,,,,,[7]],[,,"37\\d{5}",,,,"3709100"],[,,"38\\d{5}",,,,"3801234"],[,
,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IO",246,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IQ:[,[,,"(?:1|[2-6]\\d?|7\\d\\d)\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}",,,,"12345678",,,[8,9],[6,7]],[,,"7[3-9]\\d{8}",,,,"7912345678",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IQ",964,"00","0",,
,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IR:[,[,,"[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",,,,,,,[4,5,6,7,10],[8]],[,,"(?:(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])\\d{4}|94(?:(?:000|(?:11|2\\d)\\d|30[01])\\d|4(?:111|40\\d)))\\d{4}|(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[16]|[289]\\d?)\\d{3}",
,,,"2123456789",,,[6,7,10],[4,5,8]],[,,"9(?:(?:0(?:[1-35]\\d|44)|(?:[13]\\d|2[0-2])\\d)\\d|9(?:(?:[01]\\d|44)\\d|510|8(?:1[01]|88)|9(?:0[013]|1[0134]|21|77|9[6-9])))\\d{5}",,,,"9123456789",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"993\\d{7}",,,,"9932123456",,,[10]],"IR",98,"00","0",,,"0",,,,[[,"(\\d{4,5})","$1",["96"],"0$1"],[,"(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})",
"$1 $2 $3",["9"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"9(?:4(?:11[1-7]|440)\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))",,,,,,,[4,5,10]],[,,"96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])",,,,"9601",,,[4,5]],,,[,,,,,,,,,[-1]]],IS:[,[,,"(?:38\\d|[4-9])\\d{6}",,,,,,,[7,9]],[,,"(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}",
,,,"4101234",,,[7]],[,,"(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d|9[0-3])|8(?:2[0-59]|[3469]\\d|5[1-9]|8[28]))\\d{4}",,,,"6111234"],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"90\\d{5}",,,,"9011234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"49\\d{5}",,,,"4921234",,,[7]],"IS",354,"00|1(?:0(?:01|[12]0)|100)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
[,,"809\\d{4}",,,,"8091234",,,[7]],,,[,,"(?:689|8(?:7[0189]|80)|95[48])\\d{4}",,,,"6891234",,,[7]]],IT:[,[,,"0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?",,,,,,,[6,7,8,9,10,11]],[,,"0(?:(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d|6(?:[0-57-9]\\d\\d|6(?:[0-8]\\d|9[0-79])))\\d{1,6}",
,,,"0212345678"],[,,"33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}",,,,"3123456789",,,[9,10,11]],[,,"80(?:0\\d{3}|3)\\d{3}",,,,"800123456",,,[6,9]],[,,"(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{3}|[17])\\d{3}",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"IT",39,"00",,,,,,,,[[,"(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],[,"(\\d{3})(\\d{3,6})",
"$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],[,"(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],[,"(\\d{4})(\\d{4})","$1 $2",["894"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[67]|99)|[38]"]],[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3"]],[,"(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],[,"(\\d{4})(\\d{3})(\\d{4})",
"$1 $2 $3",["0"]]],,[,,,,,,,,,[-1]],1,,[,,"848\\d{6}",,,,,,,[9]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],JE:[,[,,"(?:1534|(?:[3578]\\d|90)\\d\\d)\\d{6}",,,,,,,[10],[6]],[,,"1534[0-24-8]\\d{5}",,,,"1534456789",,,,[6]],[,,"7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}",,,,"7797712345"],[,,"80(?:07(?:35|81)|8901)\\d{4}",,,,"8007354567"],[,,"(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}",,,,"9018105678"],[,,,,,,,,,[-1]],[,,"701511\\d{4}",,,,"7015115678"],
[,,"56\\d{8}",,,,"5612345678"],"JE",44,"00","0",,,"0|([0-24-8]\\d{5})$","1534$1",,,,,[,,"76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456"],,,[,,,,,,,,,[-1]],[,,"(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",,,,"5512345678"],,,[,,,,,,,,,[-1]]],JM:[,[,,"(?:[58]\\d\\d|658|900)\\d{7}",,,,,,,[10],[7]],[,,"(?:658[2-9]\\d\\d|876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}",
,,,"8765230123",,,,[7]],[,,"876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}",,,,"8762101234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"JM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"658|876",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],JO:[,[,,"(?:(?:(?:[268]|7\\d)\\d|32|53)\\d|900)\\d{5}",
,,,,,,[8,9]],[,,"(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[05]0|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:[029]0|7[08]))\\d{4}",,,,"62001234",,,[8]],[,,"7(?:55[0-49]|(?:7[025-9]|[89][0-25-9])\\d)\\d{5}",
,,,"790123456",,,[9]],[,,"80\\d{6}",,,,"80012345",,,[8]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,"85\\d{6}",,,,"85012345",,,[8]],[,,"70\\d{7}",,,,"700123456",,,[9]],[,,,,,,,,,[-1]],"JO",962,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7[457-9]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["7"],"0$1"]],,[,,"74(?:66|77)\\d{5}",,,,"746612345",,,[9]],,,[,,,,,,,,,[-1]],[,,"8(?:10|8\\d)\\d{5}",
,,,"88101234",,,[8]],,,[,,,,,,,,,[-1]]],JP:[,[,,"00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",,,,,,,[8,9,10,11,12,13,14,15,16,17]],[,,"(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}",,,,"312345678",,,[9]],[,,"[7-9]0[1-9]\\d{7}",,,,"9012345678",,,[10]],[,,"(?:00(?:(?:37|66)\\d{4,11}|777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)|(?:120|800\\d)\\d{4})\\d\\d",
,,,"120123456"],[,,"990\\d{6}",,,,"990123456",,,[9]],[,,,,,,,,,[-1]],[,,"60\\d{7}",,,,"601234567",,,[9]],[,,"50[1-9]\\d{7}",,,,"5012345678",,,[10]],"JP",81,"010","0",,,"0",,,,[[,"(\\d{4})(\\d{4})","$1-$2",["007","0077","00777","00777[01]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))",
"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:[2-46]|5[2-8]|7[2-689]|8[2-7]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])",
"1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))",
"1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
"1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],
"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})",
"$1-$2-$3",["2(?:[34]7|[56]9|74|9[14-79])|82|993"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["2[2-9]|4|7[235-9]|9[49]"],"0$1"],[,"(\\d{4})(\\d{2})(\\d{3,4})","$1-$2-$3",["007"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{4})(\\d{2})(\\d{4})","$1-$2-$3",["008"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]|80"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1-$2-$3",["0"]],[,"(\\d{4})(\\d{4})(\\d{4,5})","$1-$2-$3",
["0"]],[,"(\\d{4})(\\d{5})(\\d{5,6})","$1-$2-$3",["0"]],[,"(\\d{4})(\\d{6})(\\d{6,7})","$1-$2-$3",["0"]]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"],
"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:[2-46]|5[2-8]|7[2-689]|8[2-7]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])","1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))",
"1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
"1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],
"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})",
"$1-$2-$3",["2(?:[34]7|[56]9|74|9[14-79])|82|993"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["2[2-9]|4|7[235-9]|9[49]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]|80"],"0$1"]],[,,"20\\d{8}",,,,"2012345678",,,[10]],,,[,,"00(?:(?:37|66)\\d{4,11}|777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d"],[,,"570\\d{6}",,,,"570123456",,,[9]],,,[,,,,,,,,,[-1]]],KE:[,[,
,"(?:(?:2|80)0\\d?|[4-7]\\d\\d|900)\\d{6}|[4-6]\\d{6,7}",,,,,,,[7,8,9,10]],[,,"20\\d{6,7}|(?:4[0-6]|5\\d|6[0-24-9])\\d{7}|(?:4[0245]|6[014-9])\\d{6}|5[1-79]\\d{5,6}|(?:4[245]|6[01457-9])\\d{5}",,,,"202012345",,,[7,8,9]],[,,"7\\d{8}",,,,"712123456",,,[9]],[,,"800[24-8]\\d{5,6}",,,,"800223456",,,[9,10]],[,,"900[02-9]\\d{5}",,,,"900223456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KE",254,"000","0",,,"0",,,,[[,"(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",
["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KG:[,[,,"(?:[235-7]\\d|99)\\d{7}|800\\d{6,7}",,,,,,,[9,10],[5,6]],[,,"(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}",,,,"312123456",,,[9],[5,6]],[,,"(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|99[69])\\d{6}",
,,,"700123456",,,[9]],[,,"800\\d{6,7}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KG",996,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[25-79]|31[25]"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["3"],"0$1"],[,"(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KH:[,[,,"1\\d{9}|[1-9]\\d{7,8}",,,,,,,[8,9,10],[6,7]],[,,"(?:2(?:3(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)|[4-6](?:4[56]|[56]\\d)\\d)|(?:3[2-6]|4[2-4]|[5-7][2-5])(?:4[56]|[56]\\d)\\d)\\d{4}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])[236-9]\\d{5}",
,,,"23756789",,,[8,9],[6,7]],[,,"(?:(?:(?:1[28]|9[67])\\d|8(?:[013-79]|8\\d))\\d|(?:2[3-6]|4[2-4]|[56][2-5])48|3(?:[18]\\d\\d|[2-6]48)|7(?:(?:[07-9]|[16]\\d)\\d|[2-5]48))\\d{5}|(?:1\\d|6[016-9]|9[0-57-9])\\d{6}",,,,"91234567",,,[8,9]],[,,"1800(?:1\\d|2[019])\\d{4}",,,,"1800123456",,,[10]],[,,"1900(?:1\\d|2[09])\\d{4}",,,,"1900123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KH",855,"00[14-9]","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})",
"$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KI:[,[,,"(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",,,,,,,[5,8]],[,,"(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}",,,,"31234"],[,,"(?:6(?:200[01]|30[01]\\d)|7(?:200[01]|3(?:0[0-5]\\d|140)))\\d{3}",,,,"72001234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"30(?:0[01]\\d\\d|12(?:11|20))\\d\\d",
,,,"30010000",,,[8]],"KI",686,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KM:[,[,,"[3478]\\d{6}",,,,,,,[7]],[,,"7[4-7]\\d{5}",,,,"7712345"],[,,"[34]\\d{6}",,,,"3212345"],[,,,,,,,,,[-1]],[,,"8\\d{6}",,,,"8001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KM",269,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KN:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],
[,,"869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}",,,,"8692361234",,,,[7]],[,,"869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}",,,,"8697652917",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"KN",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"869",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KP:[,[,,"(?:(?:19\\d|2)\\d|85)\\d{6}",,,,,,,[8,10],[6,7]],[,
,"(?:2\\d|85)\\d{6}",,,,"21234567",,,[8],[6,7]],[,,"19[1-3]\\d{7}",,,,"1921234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KP",850,"00|99","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"2(?:[0-24-9]\\d\\d|3(?:[0-79]\\d|8[02-9]))\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KR:[,[,,"(?:00[1-9]\\d{2,4}|[12]|5\\d{3})\\d{7}|(?:(?:00|[13-6])\\d|70)\\d{8}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}",
,,,,,,[5,6,8,9,10,11,12,13,14],[3,4,7]],[,,"(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}",,,,"22123456",,,[5,6,8,9,10],[3,4,7]],[,,"1[0-26-9]\\d{7,8}",,,,"1000000000",,,[9,10]],[,,"(?:00(?:3(?:08|68\\d)|798\\d{1,3})|80\\d)\\d{6}",,,,"801234567",,,[9,11,12,13,14]],[,,"60[2-9]\\d{6}",,,,"602345678",,,[9]],[,,,,,,,,,[-1]],[,,"50\\d{8,9}",,,,"5012345678",,,[10,11]],[,,"70\\d{8}",,,,"7012345678",,,[10]],"KR",82,"00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","0",
,,"0(8(?:[1-46-8]|5\\d\\d))?",,,,[[,"(\\d{5})","$1",["1"],"0$1"],[,"(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1(?:5[246-9]|6[046-8]|8[03579])","1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"]],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})",
"$1-$2-$3",["[57]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1","0$CC-$1"],[,"(\\d{5})(\\d{3})(\\d{3})","$1 $2 $3",["003","0030"]],[,"(\\d{5})(\\d{3,4})(\\d{4})","$1 $2 $3",["0"]],[,"(\\d{5})(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["0"]]],[[,"(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1(?:5[246-9]|6[046-8]|8[03579])","1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"]],[,"(\\d)(\\d{3,4})(\\d{4})",
"$1-$2-$3",["2"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1","0$CC-$1"]],[,,"15\\d{7,8}",,,,"1523456789",,,[9,10]],,,[,,"00(?:3(?:08|68\\d)|798\\d{1,3})\\d{6}",,,,,,,[11,12,13,14]],[,,"1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\\d{4}",,,,"15441234",
,,[8]],,,[,,,,,,,,,[-1]]],KW:[,[,,"(?:18|[2569]\\d\\d)\\d{5}",,,,,,,[7,8]],[,,"2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}",,,,"22345678",,,[8]],[,,"(?:5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25]))|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|222|7(?:0[013-9]|[67]\\d)|9(?:[069]\\d|3[039]))|9(?:(?:0[09]|22|4[01479]|55|6[0679]|8[057-9]|9\\d)\\d|11[01]|7(?:02|[1-9]\\d)))\\d{4}",,,,"50012345",,,[8]],[,,"18\\d{5}",,,,"1801234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],"KW",965,"00",,,,,,,,[[,"(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],[,"(\\d{3})(\\d{5})","$1 $2",["[25]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KY:[,[,,"(?:345|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}",,,,"3452221234",,,,[7]],[,,"345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}",,,,"3453231234",
,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"(?:345976|900[2-9]\\d\\d)\\d{4}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"KY",1,"011","1",,,"1",,,,,,[,,"345849\\d{4}",,,,"3458491234"],,"345",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KZ:[,[,,"(?:33622|(?:7\\d|80)\\d{3})\\d{5}",,,,,,,[10]],[,,"(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}",
,,,"7123456789"],[,,"7(?:0[0-2578]|47|6[02-4]|7[15-8]|85)\\d{7}",,,,"7710009998"],[,,"800\\d{7}",,,,"8001234567"],[,,"809\\d{7}",,,,"8091234567"],[,,,,,,,,,[-1]],[,,"808\\d{7}",,,,"8081234567"],[,,"751\\d{7}",,,,"7511234567"],"KZ",7,"810","8",,,"8",,"8~10",,,,[,,,,,,,,,[-1]],,"33|7",[,,"751\\d{7}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LA:[,[,,"(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}",,,,,,,[8,9,10],[6]],[,,"(?:2[13]|[35-7][14]|41|8[1468])\\d{6}",,,,"21212862",,,[8],[6]],[,,"20(?:[29]\\d|5[24-689]|7[6-8])\\d{6}",
,,,"2023123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LA",856,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["3"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"30\\d{7}",,,,"301234567",,,[9]],,,[,,,,,,,,,[-1]]],LB:[,[,,"[7-9]\\d{7}|[13-9]\\d{6}",,,,,,,[7,8]],[,,"(?:(?:[14-69]\\d|8[02-9])\\d|7(?:[2-57]\\d|62|8[0-7]|9[04-9]))\\d{4}",
,,,"1123456",,,[7]],[,,"(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3]))\\d{5}",,,,"71123456"],[,,,,,,,,,[-1]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,"80\\d{6}",,,,"80123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LB",961,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LC:[,[,,"(?:[58]\\d\\d|758|900)\\d{7}",
,,,,,,[10],[7]],[,,"758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}",,,,"7584305678",,,,[7]],[,,"758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}",,,,"7582845678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"LC",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"758",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
LI:[,[,,"(?:(?:[2378]|6\\d\\d)\\d|90)\\d{5}",,,,,,,[7,9]],[,,"(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}",,,,"2345678",,,[7]],[,,"(?:6(?:5(?:09|1\\d|20)|6(?:0[0-6]|10|2[06-9]|39))\\d|7(?:[37-9]\\d|42|56))\\d{4}",,,,"660234567"],[,,"80(?:02[28]|9\\d\\d)\\d\\d",,,,"8002222",,,[7]],[,,"90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d",,,,"9002222",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LI",423,"00","0",,,"0|(10(?:01|20|66))",,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",
["[237-9]"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[56]"],,"$CC $1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"870(?:28|87)\\d\\d",,,,"8702812",,,[7]],,,[,,"697(?:42|56|[78]\\d)\\d{4}",,,,"697861234",,,[9]]],LK:[,[,,"(?:[1-7]\\d|[89]1)\\d{7}",,,,,,,[9],[7]],[,,"(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}",,,,"112345678",,,,[7]],[,,"7[0-25-8]\\d{7}",,,,"712345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LK",94,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"1973\\d{5}",,,,"197312345"],,,[,,,,,,,,,[-1]]],LR:[,[,,"(?:2|33|5\\d|77|88)\\d{7}|[45]\\d{6}",,,,,,,[7,8,9]],[,,"(?:2\\d{3}|33333)\\d{4}",,,,"21234567",,,[8,9]],[,,"(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|5\\d{6}",,,,"770123456",,,[7,9]],[,,,,,,,,,[-1]],[,,"332(?:02|[34]\\d)\\d{4}",,,,
"332021234",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LR",231,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[45]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3578]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LS:[,[,,"(?:[256]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"2\\d{7}",,,,"22123456"],[,,"[56]\\d{7}",,,,"50123456"],[,,"800[256]\\d{4}",,,,"80021234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LS",266,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2568]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LT:[,[,,"(?:[3469]\\d|52|[78]0)\\d{6}",,,,,,,[8]],[,,"(?:3[1478]|4[124-6]|52)\\d{6}",,,,"31234567"],[,,"6\\d{7}",,,,"61234567"],[,,"800\\d{5}",,,,"80012345"],[,,"9(?:0[0239]|10)\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,"700\\d{5}",,,,"70012345"],[,,,,,,,,,[-1]],"LT",370,"00","8",,,"[08]",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",
["52[0-79]"],"(8-$1)",,1],[,"(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",,1],[,"(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",,1],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70[67]\\d{5}",,,,"70712345"],,,[,,,,,,,,,[-1]]],LU:[,[,,"[2457-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5(?:[013-9]\\d{1,8}|2\\d{1,3}))|6\\d{8}",,,,,,,[4,5,6,7,8,9,10,11]],[,,"(?:(?:2[2-9]|[457]\\d)\\d|3(?:[0-46-9]\\d|5[013-9])|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8}",
,,,"27123456"],[,,"6(?:[269][18]|5[158]|7[189]|81)\\d{6}",,,,"628123456",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90[015]\\d{5}",,,,"90012345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,,,,,,,,[-1]],[,,"20(?:1\\d{5}|[2-689]\\d{1,7})",,,,"20201234",,,[4,5,6,7,8,9,10]],"LU",352,"00",,,,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",,,,[[,"(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],
,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",
["2[2-9]|[3-57-9]"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LV:[,[,,"(?:[268]\\d|90)\\d{6}",,,,,,,[8]],[,,"6\\d{7}",,,,"63123456"],[,,"2\\d{7}",,,,"21234567"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,"81\\d{6}",,,,"81123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LV",371,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LY:[,[,,"(?:[2569]\\d|71)\\d{7}",
,,,,,,[9],[7]],[,,"(?:2[13-5]|5[1347]|6[1-479]|71)\\d{7}",,,,"212345678",,,,[7]],[,,"9[1-6]\\d{7}",,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LY",218,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{7})","$1-$2",["[25-79]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MA:[,[,,"[5-8]\\d{8}",,,,,,,[9]],[,,"5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}",,,
,"520123456"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}",,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5924[01]\\d{4}",,,,"592401234"],"MA",212,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{6})","$1-$2",["5(?:2[015-7]|3[0-4])|[67]"],"0$1"],[,"(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|892","5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|9)|892"],"0$1"],[,"(\\d{5})(\\d{4})","$1-$2",["5[23]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["5"],"0$1"],[,"(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MC:[,[,,"(?:(?:[349]|6\\d)\\d\\d|870)\\d{5}",,,,,,,[8,9]],[,,"(?:870|9[2-47-9]\\d)\\d{5}",,,,"99123456",,,[8]],[,,"(?:(?:3|6\\d)\\d\\d|4(?:4\\d|5[1-9]))\\d{5}",,,,"612345678"],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MC",377,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["8"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["[39]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[39]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"870\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MD:[,[,,"(?:[235-7]\\d|[89]0)\\d{6}",,,,,,,[8]],[,,"(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}",
,,,"22212345"],[,,"(?:562|6\\d\\d|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}",,,,"62112345"],[,,"800\\d{5}",,,,"80012345"],[,,"90[056]\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,,,,,,,,[-1]],[,,"3[08]\\d{6}",,,,"30123456"],"MD",373,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"803\\d{5}",,,,"80312345"],,,[,,,,,,,,,[-1]]],ME:[,
[,,"(?:20|[3-79]\\d|80\\d?)\\d{6}",,,,,,,[8,9],[6]],[,,"(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:[01][2467]|2[2-467]))\\d{5}",,,,"30234567",,,[8],[6]],[,,"6(?:00|3[024]|6[0-25]|[7-9]\\d)\\d{5}",,,,"67622901",,,[8]],[,,"80(?:[0-2578]|9\\d)\\d{5}",,,,"80080002"],[,,"9(?:4[1568]|5[178])\\d{5}",,,,"94515151",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"78[1-49]\\d{5}",,,,"78108780",,,[8]],"ME",382,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],,[,,,,,
,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"77[1-9]\\d{5}",,,,"77273012",,,[8]],,,[,,,,,,,,,[-1]]],MF:[,[,,"(?:590|69\\d)\\d{6}",,,,,,,[9]],[,,"590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}",,,,"590271234"],[,,"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MF",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MG:[,[,,"[23]\\d{8}",,,,,,,[9],[7]],[,,"20(?:(?:2\\d|4[47]|5[3467]|6[279]|8[268]|9[245])\\d|7(?:2[29]|[35]\\d))\\d{4}",
,,,"202123456",,,,[7]],[,,"3[2-49]\\d{7}",,,,"321234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"22\\d{7}",,,,"221234567"],"MG",261,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MH:[,[,,"(?:(?:[256]\\d|45)\\d|329)\\d{4}",,,,,,,[7]],[,,"(?:247|528|625)\\d{4}",,,,"2471234"],[,,"(?:(?:23|54)5|329|45[56])\\d{4}",,,,"2351234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,
,,,,,[-1]],[,,,,,,,,,[-1]],[,,"635\\d{4}",,,,"6351234"],"MH",692,"011","1",,,"1",,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MK:[,[,,"[2-578]\\d{7}",,,,,,,[8],[6,7]],[,,"(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}",,,,"22012345",,,,[6,7]],[,,"7(?:(?:[0-25-8]\\d|3[2-4]|9[23])\\d|421)\\d{4}",,,,"72345678"],[,,"800\\d{5}",,,,"80012345"],[,,"5[02-9]\\d{6}",
,,,"50012345"],[,,"8(?:0[1-9]|[1-9]\\d)\\d{5}",,,,"80123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MK",389,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ML:[,[,,"(?:[246-9]\\d|50)\\d{6}",,,,,,,[8]],[,,"(?:2(?:0(?:2\\d|7[0-8])|1(?:2[67]|[4-689]\\d))|4(?:0[0-4]|4[1-39])\\d)\\d{4}",,,,"20212345"],
[,,"(?:2(?:079|17\\d)|(?:50|[679]\\d|8[239])\\d\\d)\\d{4}",,,,"65012345"],[,,"80\\d{6}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ML",223,"00",,,,,,,,[[,"(\\d{4})","$1",["67[057-9]|74[045]","67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]],[,,,,,,,,,[-1]],,,[,,"80\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MM:[,[,,"(?:1|[24-7]\\d)\\d{5,7}|8\\d{6,9}|9(?:[0-46-9]\\d{6,8}|5\\d{6})|2\\d{5}",
,,,,,,[6,7,8,9,10],[5]],[,,"(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|6[25]|7[01])|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|62|7[01])|51\\d\\d)|4(?:2(?:2\\d\\d|480)|3(?:20\\d|470|56)|420\\d|5470)|5(?:2(?:2\\d\\d?|470)|4(?:2(?:1|86)|470)|522\\d|7(?:20\\d|480)|[89](?:20\\d|470))|6(?:0(?:[23]|88\\d)|(?:124|42[04]|[56]2\\d)\\d|3(?:20\\d|470)|7(?:(?:3\\d|8[01459])\\d|4(?:39|[67]0)))|7(?:0470|1(?:20\\d?|470)|4(?:25\\d|470)|5(?:202|470|96\\d))|8(?:[13](?:2\\d\\d|470)|[25]2\\d\\d))\\d{4}|(?:(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4]))\\d|25\\d{2,3}|8(?:[135]2\\d\\d|2(?:2\\d\\d|320)))\\d{3}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:1[2-689]|2[2-8]|3[24]|4[24-7]|5[245]|6[23]))\\d{4}",
,,,"1234567",,,[6,7,8,9],[5]],[,,"(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6[89]|89)\\d|7(?:3|5[0-2]|[6-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6]|9(?:[089]|[5-7]\\d\\d))\\d)\\d{4}|9[69]1\\d{6}|9[68]\\d{6}",,,,"92123456",,,[7,8,9,10]],[,,"80080(?:[01][1-9]|2\\d)\\d{3}",,,,"8008001234",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:1(?:333|468)|2468)\\d{4}",,,,"13331234",,,[8]],"MM",95,"00","0",,,"0",,,,[[,"(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],
[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],[,"(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],[,"(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",
["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MN:[,[,,"[12]\\d{8,9}|[1257-9]\\d{7}",,,,,,,[8,9,10],[4,5,6]],[,,"(?:[12](?:1|2[1-37]|(?:3[2-8]|4[2-68]|5[1-4689])\\d?)|5[0568])\\d{6}|[12]2[1-3]\\d{5}",,,,"50123456",,,,[4,5,6]],[,,"(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}",,,,"88123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"7[05-8]\\d{6}",,,,"75123456",,,[8]],"MN",976,"001","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",
["[12]1"],"0$1"],[,"(\\d{4})(\\d{4})","$1 $2",["[57-9]"]],[,"(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],[,"(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],[,"(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MO:[,[,,"(?:28|[68]\\d)\\d{6}",,,,,,,[8]],[,,"(?:28[2-57-9]|8(?:11|[2-57-9]\\d))\\d{5}",,,,"28212345"],[,,"6(?:[2356]\\d\\d|8(?:[02][5-9]|[1478]\\d|[356][0-4]))\\d{4}",
,,,"66123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MO",853,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[268]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MP:[,[,,"(?:[58]\\d\\d|(?:67|90)0)\\d{7}",,,,,,,[10],[7]],[,,"670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,,"6702345678",,,,[7]],[,,"670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",
,,,"6702345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"MP",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"670",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MQ:[,[,,"(?:596|69\\d)\\d{6}",,,,,,,[9]],[,,"596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}",,,,"596301234"],[,,"69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}",
,,,"696201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MQ",596,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MR:[,[,,"(?:[2-4]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"(?:25[08]|35\\d|45[1-7])\\d{5}",,,,"35123456"],[,,"[2-4][0-46-9]\\d{6}",,,,"22123456"],[,,"800\\d{5}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MR",222,
"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MS:[,[,,"(?:(?:[58]\\d\\d|900)\\d\\d|66449)\\d{5}",,,,,,,[10],[7]],[,,"664491\\d{4}",,,,"6644912345",,,,[7]],[,,"66449[2-6]\\d{4}",,,,"6644923456",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"MS",1,"011",
"1",,,"1",,,,,,[,,,,,,,,,[-1]],,"664",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MT:[,[,,"(?:(?:[2579]\\d\\d|800)\\d|3550)\\d{4}",,,,,,,[8]],[,,"2(?:0(?:[169]\\d|3[1-4])|[1-357]\\d\\d)\\d{4}",,,,"21001234"],[,,"(?:7(?:210|[79]\\d\\d)|9(?:2(?:1[01]|31)|69[67]|8(?:1[1-3]|89|97)|9\\d\\d))\\d{4}",,,,"96961234"],[,,"800[3467]\\d{4}",,,,"80071234"],[,,"5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}",,,,"50037123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3550\\d{4}",,,,"35501234"],"MT",
356,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]],,[,,"7117\\d{4}",,,,"71171234"],,,[,,,,,,,,,[-1]],[,,"501\\d{5}",,,,"50112345"],,,[,,,,,,,,,[-1]]],MU:[,[,,"(?:[2-468]|5\\d)\\d{6}",,,,,,,[7,8]],[,,"(?:2(?:[03478]\\d|1[0-7]|6[0-79])|4(?:[013568]\\d|2[4-7])|54(?:4\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}",,,,"54480123"],[,,"5(?:(?:2[589]|7\\d|9[0-8])\\d|4(?:2[1-389]|[489]\\d|7[1-9])|8(?:[0-689]\\d|7[15-8]))\\d{4}",,,,"52512345",,,[8]],[,,"80[0-2]\\d{4}",,,,"8001234",,,[7]],[,,"30\\d{5}",,,,
"3012345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3(?:20|9\\d)\\d{4}",,,,"3201234",,,[7]],"MU",230,"0(?:0|[24-7]0|3[03])",,,,,,"020",,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-46]|8(?:0[0-2]|14|3[129])"]],[,"(\\d{4})(\\d{4})","$1 $2",["5"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MV:[,[,,"(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",,,,,,,[7,10]],[,,"(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}",,,,"6701234",,,[7]],[,,"(?:46[46]|(?:7[2-9]|9[14-9])\\d)\\d{4}",
,,,"7712345",,,[7]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MV",960,"0(?:0|19)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1-$2",["[367]|4(?:00|[56])|9[14-9]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"4[05]0\\d{4}",,,,"4001234",,,[7]],,,[,,,,,,,,,[-1]]],MW:[,[,,"1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}",,,,,,,[7,9]],[,,"(?:1[2-9]|21\\d\\d)\\d{5}",,,,"1234567"],[,,"(?:111|(?:77|88|99)\\d)\\d{6}",
,,,"991234567",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"31\\d{7}",,,,"310123456",,,[9]],"MW",265,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[17-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MX:[,[,,"(?:1\\d|[2-9])\\d{9}",,,,,,,[10,11],[7,8]],
[,,"(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",,,,"2221234567",,,[10],[7,8]],[,,"1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",
,,,"12221234567",,,[11]],[,,"8(?:00|88)\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,"300\\d{7}",,,,"3001234567",,,[10]],[,,"500\\d{7}",,,,"5001234567",,,[10]],[,,,,,,,,,[-1]],"MX",52,"0[09]","01",,,"0[12]|04[45]([2-9]\\d{9})$","1$1","00",,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],"01 $1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],"01 $1",,1],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],"044 $1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})",
"$2 $3 $4",["1"],"044 $1"]],[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],"01 $1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],"01 $1",,1],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3 $4",["1(?:33|5[56]|81)"]],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MY:[,[,,"(?:1\\d\\d?|3\\d|[4-9])\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}",
,,,"323856789",,,[8,9],[6,7]],[,,"1(?:(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d))|(?:[23679][2-9]|59\\d)\\d)\\d|4(?:[235-9]\\d\\d|400)|8(?:(?:1[23]|[236]\\d|5[7-9]|7[016-9]|9[0-8])\\d|4(?:[06]\\d|7[0-4])|8(?:[01]\\d|[27][0-4])))\\d{4}",,,,"123456789",,,[9,10]],[,,"1[378]00\\d{6}",,,,"1300123456",,,[10]],[,,"1600\\d{6}",,,,"1600123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}",,,,"1546012345",,,[10]],
"MY",60,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[0249]|[367][2-9]|8[1-9])|8"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["11"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MZ:[,[,,"(?:2|8\\d)\\d{7}",,,,,,,[8,9]],[,,"2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}",
,,,"21123456",,,[8]],[,,"8[2-7]\\d{7}",,,,"821234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MZ",258,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-7]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NA:[,[,,"[68]\\d{7,8}",,,,,,,[8,9]],[,,"6(?:1(?:[02-4]\\d\\d|17)|2(?:17|54\\d|69|70)|3(?:17|2[0237]\\d|34|6[289]|7[01]|81)|4(?:17|(?:27|41|5[25])\\d|69|7[01])|5(?:17|2[236-8]\\d|69|7[01])|6(?:17|26\\d|38|42|69|7[01])|7(?:17|(?:2[2-4]|30)\\d|6[89]|7[01]))\\d{4}|6(?:1(?:2[2-7]|3[01378]|4[0-4]|69|7[014])|25[0-46-8]|32\\d|4(?:2[0-27]|4[016]|5[0-357])|52[02-9]|62[56]|7(?:2[2-69]|3[013]))\\d{4}",
,,,"61221234"],[,,"(?:60|8[1245])\\d{7}",,,,"811234567",,,[9]],[,,"80\\d{7}",,,,"800123456",,,[9]],[,,"8701\\d{5}",,,,"870123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8(?:3\\d\\d|86)\\d{5}",,,,"88612345"],"NA",264,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8[0-5]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,
,,,,[-1]],,,[,,,,,,,,,[-1]]],NC:[,[,,"[2-57-9]\\d{5}",,,,,,,[6]],[,,"(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}",,,,"201234"],[,,"(?:5[0-4]|[79]\\d|8[0-79])\\d{4}",,,,"751234"],[,,,,,,,,,[-1]],[,,"36\\d{4}",,,,"366711"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NC",687,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-47-9]|5[0-4]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NE:[,[,,"[0289]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:20|3[1-7]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",
,,,"20201234"],[,,"(?:8[04589]|9\\d)\\d{6}",,,,"93123456"],[,,"08\\d{6}",,,,"08123456"],[,,"09\\d{6}",,,,"09123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NE",227,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["09|2[01]|[89]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NF:[,[,,"[13]\\d{5}",,,,,,,[6],[5]],[,,"(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}",,,,"106609",,,,[5]],[,,"3[58]\\d{4}",,,,"381234",
,,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NF",672,"00",,,,,,,,[[,"(\\d{2})(\\d{4})","$1 $2",["1"]],[,"(\\d)(\\d{5})","$1 $2",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NG:[,[,,"[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}",,,,,,,[7,8,10,11,12,13,14],[5,6]],[,,"(?:(?:[1-356]\\d|4[02-8]|7[0-79]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[0-3578])\\d{5}",,,,"18040123",,,[7,8],[5,
6]],[,,"(?:70(?:[1-689]\\d|7[0-3])|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[235-9]\\d)\\d{6}",,,,"8021234567",,,[10]],[,,"800\\d{7,11}",,,,"80017591759",,,[10,11,12,13,14]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NG",234,"009","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",
["[7-9]"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],[,"(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"700\\d{7,11}",,,,"7001234567",,,[10,11,12,13,14]],,,[,,,,,,,,,[-1]]],NI:[,[,,"(?:1800|[25-8]\\d{3})\\d{4}",,,,,,,[8]],[,,"2\\d{7}",,,,"21234567"],[,,"(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}",,,,"81234567"],[,,"1800\\d{4}",,,,"18001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,
,,,,,[-1]],[,,,,,,,,,[-1]],"NI",505,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NL:[,[,,"(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8])|[89]\\d{0,3})\\d{6}|1\\d{4,5}",,,,,,,[5,6,7,8,9,10]],[,,"(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}",
,,,"101234567",,,[9]],[,,"6[1-58]\\d{7}",,,,"612345678",,,[9]],[,,"800\\d{4,7}",,,,"8001234",,,[7,8,9,10]],[,,"90[069]\\d{4,7}",,,,"9061234",,,[7,8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:85|91)\\d{7}",,,,"851234567",,,[9]],"NL",31,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3,4})","$1 $2",["14"]],[,"(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|[7-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-5]"],"0$1"],[,"(\\d)(\\d{8})",
"$1 $2",["6[1-58]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["6"],"0$1"]],[[,"(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|[7-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-5]"],"0$1"],[,"(\\d)(\\d{8})","$1 $2",["6[1-58]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["6"],"0$1"]],[,,"66\\d{7}",,,,"662345678",,,[9]],,,[,,"140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])",
,,,,,,[5,6]],[,,"140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])|8[478]\\d{7}",,,,"14020",,,[5,6,9]],,,[,,,,,,,,,[-1]]],NO:[,[,,"(?:0|[2-9]\\d{3})\\d{4}",,,,,,,[5,8]],[,,"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",,,,"21234567",,,[8]],[,,"(?:4[015-8]|5[89]|9\\d)\\d{6}",,,,"40612345",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",
,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"NO",47,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[489]"]]],,[,,,,,,,,,[-1]],1,"[02-689]|7[0-8]",[,,,,,,,,,[-1]],[,,"(?:0\\d|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,,"01234"],,,[,,"81[23]\\d{5}",,,,"81212345",,,[8]]],NP:[,[,,"9\\d{9}|[1-9]\\d{7}",,,,,,,[8,10],[6,7]],[,,"(?:1[0-6]\\d|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-79])[2-6])\\d{5}",
,,,"14567890",,,[8],[6,7]],[,,"9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}",,,,"9841234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NP",977,"00","0",,,"0",,,,[[,"(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],[,"(\\d{2})(\\d{6})","$1-$2",["[1-8]|9(?:[1-579]|6[2-6])"],"0$1"],[,"(\\d{3})(\\d{7})","$1-$2",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NR:[,[,,"(?:444|55\\d|888)\\d{4}",,,,,,,[7]],[,,"(?:444|888)\\d{4}",,,,"4441234"],[,
,"55[4-9]\\d{4}",,,,"5551234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NR",674,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[458]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NU:[,[,,"(?:[47]|888\\d)\\d{3}",,,,,,,[4,7]],[,,"[47]\\d{3}",,,,"7012",,,[4]],[,,"888[4-9]\\d{3}",,,,"8884012",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NU",683,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["8"]]],
,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NZ:[,[,,"[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}",,,,,,,[8,9,10],[7]],[,,"(?:24099|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{3})\\d{3}",,,,"32345678",,,[8],[7]],[,,"2(?:[0-28]\\d?|[79])\\d{7}|21\\d{6}",,,,"211234567"],[,,"508\\d{6,7}|80\\d{6,8}",,,,"800123456"],[,,"90\\d{6,7}",,,,"900123456",,,[8,9]],[,,,,,,,,,[-1]],[,,"70\\d{7}",,,,"701234567",,,[9]],[,,,,,,,,,[-1]],"NZ",64,"0(?:0|161)","0",,,"0",,"00",,[[,"(\\d)(\\d{3})(\\d{4})",
"$1-$2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80|9"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[59]|80"],"0$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["2[028]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["[278]"],"0$1"]],,[,,"[28]6\\d{6,7}",,,,"26123456",,,[8,9]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],OM:[,[,,"(?:[279]\\d{3}|500|8007\\d?)\\d{4}",,,,,,,[7,8,9]],[,,"2[2-6]\\d{6}",,,,"23123456",,,[8]],[,,"(?:7[129]\\d|9(?:0[1-9]|[1-9]\\d))\\d{5}",
,,,"92123456",,,[8]],[,,"(?:500|8007\\d?)\\d{4}",,,,"80071234"],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"OM",968,"00",,,,,,,,[[,"(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],[,"(\\d{2})(\\d{6})","$1 $2",["2"]],[,"(\\d{4})(\\d{4})","$1 $2",["[79]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PA:[,[,,"(?:[1-57-9]|6\\d)\\d{6}",,,,,,,[7,8]],[,,"(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|[68][58]|7[0167]|9[39])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-35]|33|4[0-579]|55|6[068]|7[06-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[05]|7[0-24-9]|8[7-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}",
,,,"2001234",,,[7]],[,,"(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-6])\\d|8(?:1[01]|7[23]))\\d{4}",,,,"61234567"],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}",,,,"8601234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PA",507,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],[,"(\\d{4})(\\d{4})","$1-$2",["6"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PE:[,[,,"(?:[14-8]|9\\d)\\d{7}",,,,,,,[8,9],[6,7]],[,,"(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}",
,,,"11234567",,,[8],[6,7]],[,,"9\\d{8}",,,,"912345678",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"805\\d{5}",,,,"80512345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,"80[24]\\d{5}",,,,"80212345",,,[8]],[,,,,,,,,,[-1]],"PE",51,"19(?:1[124]|77|90)00","0"," Anexo ",,"0",,,,[[,"(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["[4-7]|8[2-4]"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["8"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PF:[,[,,"[48]\\d{7}|4\\d{5}",,,,,,,[6,8]],[,,"4(?:[09][4-689]\\d|4)\\d{4}",,,,"40412345"],[,,"8[79]\\d{6}",,,,"87123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PF",689,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[48]"]]],,[,,,,,,,,,[-1]],,,[,,"44\\d{4}",,,,,,,[6]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PG:[,[,,"(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
,,,,,,[7,8]],[,,"(?:(?:3[0-2]|4[257]|5[34]|9[78])\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9])\\d{4}",,,,"3123456"],[,,"(?:7(?:[0-689]\\d|75)|81\\d)\\d{5}",,,,"70123456",,,[8]],[,,"180\\d{4}",,,,"1801234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"2(?:0[0-47]|7[568])\\d{4}",,,,"2751234",,,[7]],"PG",675,"00|140[1-3]",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],[,"(\\d{4})(\\d{4})","$1 $2",["[78]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
PH:[,[,,"(?:1800\\d{2,4}|2|[89]\\d{4})\\d{5}|[3-8]\\d{8}|[28]\\d{7}",,,,,,,[6,8,9,10,11,12,13],[4,5,7]],[,,"(?:2\\d(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|8[2-8]\\d{7}",,,,"21234567",,,[6,8,9,10],[4,5,7]],[,,"(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[235-9]|5[056]|6[5-7]|7[3-79]|89|9[4-9]))\\d{7}",,,,"9051234567",,,[10]],[,,"1800\\d{7,9}",,,,"180012345678",,,[11,12,13]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PH",63,"00",
"0",,,"0",,,,[[,"(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],[,"(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-68]|4[2-9]|[5-7]|8[2-8]","3(?:[23568]|4(?:[0-57-9]|6[02-8]))|4(?:2(?:[0-689]|7[0-8])|[3-8]|9(?:[0-246-9]|3[1-9]|5[0-57-9]))|[5-7]|8(?:[2-7]|8(?:[0-24-9]|3[0-35-9]))"],
"(0$1)"],[,"(\\d{5})(\\d{4})","$1 $2",["[34]|88"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PK:[,[,,"(?:122|[24-8]\\d{4,5}|9(?:[013-9]\\d{2,4}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d))\\d{6}|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",,,,,,,[8,9,10,11,12],[5,6,7]],[,,"2(?:(?:1[2-9]\\d|[25][2-9])\\d{6}|(?:3[2358]|4[2-4]|9[2-8])[2-9]\\d{5,6})|4(?:(?:[0146-9][2-9]|2[2-9]\\d)\\d{6}|5[3479][2-9]\\d{5,6})|5(?:(?:[1-35-7][2-9]|8[126]\\d)\\d{6}|4[2-467][2-9]\\d{5,6})|6(?:0[468][2-9]\\d{5,6}|[1-8][2-9]\\d{6})|7(?:[14][2-9]\\d{6}|2[236][2-9]\\d{5,6})|8(?:[16][2-9]\\d{6}|(?:2[2-689]|3[23578]|4[3478]|5[2356])[2-9]\\d{5,6})|9(?:1[2-9]\\d{6}|(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])[2-9]\\d{5,6})",
,,,"2123456789",,,[9,10],[5,6,7,8]],[,,"3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}",,,,"3012345678",,,[10]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],[,,"122\\d{6}",,,,"122044444",,,[9]],[,,,,,,,,,[-1]],"PK",92,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["[89]0"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["1"]],[,"(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],[,"(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])",
"(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356]))[2-9]|9(?:2(?:2[2-9]|[3-8])|(?:3[27-9]|4[2-6]|6[3569])[2-9]|9(?:[25-7][2-9]|8))"],"(0$1)"],[,"(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
[,,"(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",,,,"21111825888",,,[11,12]],,,[,,,,,,,,,[-1]]],PL:[,[,,"[1-9]\\d{6}(?:\\d{2})?|6\\d{5}(?:\\d{2})?",,,,,,,[6,7,8,9]],[,,"(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19\\d{3}",
,,,"123456789",,,[7,9]],[,,"(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}",,,,"512345678",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"70[01346-8]\\d{6}",,,,"701234567",,,[9]],[,,"801\\d{6}",,,,"801234567",,,[9]],[,,,,,,,,,[-1]],[,,"39\\d{7}",,,,"391234567",,,[9]],"PL",48,"00",,,,,,,,[[,"(\\d{5})","$1",["19"]],[,"(\\d{3})(\\d{3})","$1 $2",["11|64"]],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|2|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3-8]"]]],,[,,"64\\d{4,7}",,,,"641234567"],,,[,,,,,,,,,[-1]],[,,"804\\d{6}",,,,"804123456",,,[9]],,,[,,,,,,,,,[-1]]],PM:[,[,,"[45]\\d{5}",,,,,,,[6]],[,,"(?:4[1-3]|50)\\d{4}",,,,"430123"],[,,"(?:4[02-4]|5[05])\\d{4}",,,,"551234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,
,,[-1]],[,,,,,,,,,[-1]],"PM",508,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PR:[,[,,"(?:[589]\\d\\d|787)\\d{7}",,,,,,,[10],[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],
[,,,,,,,,,[-1]],"PR",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"787|939",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PS:[,[,,"(?:(?:1\\d|5)\\d\\d|[2489]2)\\d{6}",,,,,,,[8,9,10],[7]],[,,"(?:22[2-47-9]|42[45]|82[01458]|92[369])\\d{5}",,,,"22234567",,,[8],[7]],[,,"5[69]\\d{7}",,,,"599123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,,,,,,,,[-1]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PS",970,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],
"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PT:[,[,,"(?:[26-9]\\d|30)\\d{7}",,,,,,,[9]],[,,"2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}",,,,"212345678"],[,,"9(?:[1-36]\\d\\d|480)\\d{5}",,,,"912345678"],[,,"80[02]\\d{6}",,,,"800123456"],[,,"(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}",,,,"760123456"],[,,"80(?:8\\d|9[1579])\\d{5}",
,,,"808123456"],[,,"884[0-4689]\\d{5}",,,,"884123456"],[,,"30\\d{7}",,,,"301234567"],"PT",351,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[236-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70(?:7\\d|8[17])\\d{5}",,,,"707123456"],,,[,,"600\\d{6}",,,,"600110000"]],PW:[,[,,"(?:[25-8]\\d\\d|345|488|900)\\d{4}",,,,,,,[7]],[,,"(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}",,,,"2771234"],[,,"(?:6[2-4689]0|77\\d|88[0-4])\\d{4}",
,,,"6201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PW",680,"01[12]",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PY:[,[,,"(?:[2-46-9]\\d|5[0-8])\\d{7}|[2-9]\\d{5,7}",,,,,,,[6,7,8,9],[5]],[,,"(?:2(?:1\\d|2[4-68]|7[15]|9[1-5])|5(?:[1-4]\\d|5[02-4])|6(?:1\\d|3[1-3]|44|7[1-46-8]))\\d{5,6}|3(?:(?:18|3[167]|4[2357]|51)\\d{5,6}|[289]\\d{5,7})|4(?:[1246-8]\\d{5,7}|(?:3[12]|5[13]|9[1-47])\\d{5,6})|7(?:[1-3]\\d{5,7}|(?:4[0-4]|6[1-578]|75|8[0-8])\\d{5,6})|8(?:[1-36]\\d{5,7}|58\\d{5,6})|[26]1\\d{5}",
,,,"212345678",,,[7,8,9],[5,6]],[,,"9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}",,,,"961456789",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8700[0-4]\\d{4}",,,,"870012345",,,[9]],"PY",595,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],[,"(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],[,"(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],
"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-7]|85"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["9"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"[2-9]0\\d{4,7}",,,,"201234567"],,,[,,,,,,,,,[-1]]],QA:[,[,,"(?:(?:2|[3-7]\\d)\\d\\d|800)\\d{4}",,,,,,,[7,8]],[,,"4[04]\\d{6}",,,,"44123456",,,[8]],[,,"[35-7]\\d{7}",,,,"33123456",,,[8]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"QA",974,"00",,,,,
,,,[[,"(\\d{3})(\\d{4})","$1 $2",["2[126]|8"]],[,"(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]],,[,,"2(?:[12]\\d|61)\\d{4}",,,,"2123456",,,[7]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RE:[,[,,"(?:26|[68]\\d)\\d{7}",,,,,,,[9]],[,,"262\\d{6}",,,,"262161234"],[,,"69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-38]|9[0-479]))\\d{4}",,,,"692123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89[1-37-9]\\d{6}",,,,"891123456"],[,,"8(?:1[019]|2[0156]|84|90)\\d{6}",,,,"810123456"],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RE",262,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[268]"],"0$1"]],,[,,,,,,,,,[-1]],1,"262|69|8",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RO:[,[,,"(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}",,,,,,,[6,9]],[,,"[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d",,,,"211234567"],[,,"7(?:(?:[02-7]\\d|8[03-8]|99)\\d|1(?:[01]\\d|20))\\d{5}",,,,"712034567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"90[036]\\d{6}",,,,"900123456",,
,[9]],[,,"801\\d{6}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RO",40,"00","0"," int ",,"0",,,,[[,"(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],[,"(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[237-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"37\\d{7}",,,,"372123456",,,[9]],,,[,,,,,,,,,[-1]]],RS:[,[,,"[127]\\d{6,11}|3(?:[0-79]\\d{5,10}|8(?:[02-9]\\d{4,9}|1\\d{4,5}))|6\\d{7,9}|800\\d{3,9}|90\\d{4,8}|7\\d{5}",
,,,,,,[6,7,8,9,10,11,12],[4,5]],[,,"(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:0[2-9]|[2-9]\\d)))\\d{3,8}",,,,"10234567",,,[7,8,9,10,11,12],[4,5,6]],[,,"6(?:[0-689]|7\\d)\\d{6,7}",,,,"601234567",,,[8,9,10]],[,,"800\\d{3,9}",,,,"80012345"],[,,"(?:78\\d|90[0169])\\d{3,7}",,,,"90012345",,,[6,7,8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RS",381,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],[,"(\\d{2})(\\d{5,10})",
"$1 $2",["[1-36]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7[06]\\d{4,10}",,,,"700123456"],,,[,,,,,,,,,[-1]]],RU:[,[,,"[347-9]\\d{9}",,,,,,,[10],[7]],[,,"(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",,,,"3011234567",,,,[7]],[,,"9\\d{9}",,,,"9123456789"],[,,"80[04]\\d{7}",,,,"8001234567"],[,,"80[39]\\d{7}",,,,"8091234567"],[,,,,,,,,,[-1]],[,,"808\\d{7}",,,,"8081234567"],[,
,,,,,,,,[-1]],"RU",7,"810","8",,,"8",,"8~10",,[[,"(\\d{3})(\\d{2})(\\d{2})","$1-$2-$3"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"],"8 ($1)",,1]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"],"8 ($1)",,1]],[,,,,,,,,,[-1]],1,"3[04-689]|[489]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RW:[,[,,"(?:06|[27]\\d\\d|[89]00)\\d{6}",,,,,,,[8,9]],[,
,"(?:06|2[258]\\d)\\d{6}",,,,"250123456"],[,,"7[238]\\d{7}",,,,"720123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"900\\d{6}",,,,"900123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RW",250,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SA:[,[,,"(?:(?:[15]|8\\d)\\d|92)\\d{7}",
,,,,,,[9,10],[7]],[,,"1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",,,,"112345678",,,[9],[7]],[,,"5(?:[013-689]\\d|7[0-36-8])\\d{6}",,,,"512345678",,,[9]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"925\\d{6}",,,,"925012345",,,[9]],[,,"920\\d{6}",,,,"920012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SA",966,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["9"]],[,"(\\d{3})(\\d{3})(\\d{3,4})",
"$1 $2 $3",["81"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"811\\d{7}",,,,"8110123456",,,[10]],,,[,,,,,,,,,[-1]]],SB:[,[,,"(?:[1-6]|[7-9]\\d\\d)\\d{4}",,,,,,,[5,7]],[,,"(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}",,,,"40123",,,[5]],[,,"(?:48|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d)\\d{3}",,,,"7421234"],[,,"1[38]\\d{3}",,,,"18123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,
,"5[12]\\d{3}",,,,"51123",,,[5]],"SB",677,"0[01]",,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:1[2-9]|2[013-9]|3[0-2]|[46]|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SC:[,[,,"(?:(?:(?:[24]\\d|64)\\d|971)\\d|8000)\\d{3}",,,,,,,[7]],[,,"4[2-46]\\d{5}",,,,"4217123"],[,,"2[5-8]\\d{5}",,,,"2510123"],[,,"8000\\d{3}",,,,"8000000"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:64\\d|971)\\d{4}",,,,"6412345"],"SC",248,"0(?:[02]|10?)",
,,,,,"00",,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SD:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"1(?:5[3-7]|8[35-7])\\d{6}",,,,"153123456"],[,,"(?:1[0-2]|9[0-3569])\\d{7}",,,,"911231234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SD",249,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SE:[,[,,
"(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",,,,,,,[6,7,8,9,10,12]],[,,"1(?:0[1-8]\\d{6}|(?:[13689]\\d|2[0-35]|4[0-4]|5[0-25-9]|7[13-6])\\d{5,6})|(?:2(?:[136]\\d|2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|[1356]\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01]))\\d{5,6}|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})|(?:[12][136]|3[356])\\d{5}",
,,,"8123456",,,[7,8,9]],[,,"7[02369]\\d{7}",,,,"701234567",,,[9]],[,,"20\\d{4,7}",,,,"20123456",,,[6,7,8,9]],[,,"649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",,,,"9001234567",,,[7,8,9,10]],[,,"77[0-7]\\d{6}",,,,"771234567",,,[9]],[,,"75[1-8]\\d{6}",,,,"751234567",,,[9]],[,,,,,,,,,[-1]],"SE",46,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1"],[,"(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44)"],"0$1"],
[,"(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1"],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1"],[,"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1"],[,"(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:0|39|44)"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
"$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["7"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1"]],[[,"(\\d{2})(\\d{2,3})(\\d{2})","$1 $2 $3",["20"]],[,"(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]],[,"(\\d{3})(\\d{4})","$1 $2",["9(?:00|39|44)"]],[,"(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["8"]],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1 $2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],[,"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]],[,"(\\d{3})(\\d{2,3})(\\d{3})","$1 $2 $3",["9(?:0|39|44)"]],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["8"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],
[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["9"]],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]]],[,,"74[02-9]\\d{6}",,,,"740123456",,,[9]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"(?:25[245]|67[3-68])\\d{9}",,,,"254123456789",,,[12]]],SG:[,[,,"(?:1\\d{3}|[369]|7000|8(?:\\d{2})?)\\d{7}",,,,,,,[8,10,11]],[,,"6[1-9]\\d{6}",,,,"61234567",,,[8]],[,,"(?:8[1-8]|9[0-8])\\d{6}",,,,"81234567",,,[8]],[,,"(?:18|8)00\\d{7}",
,,,"18001234567",,,[10,11]],[,,"1900\\d{7}",,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3[12]\\d{6}",,,,"31234567",,,[8]],"SG",65,"0[0-3]\\d",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[369]|8[1-8]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1[89]"]],[,"(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["70"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7000\\d{7}",,,,"70001234567",,,[11]],,,[,,,,,,,,,[-1]]],SH:[,[,,"(?:[256]\\d|8)\\d{3}",,,,,,,[4,5]],[,
,"2(?:[0-57-9]\\d|6[4-9])\\d\\d",,,,"22158"],[,,"[56]\\d{4}",,,,"51234",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"262\\d\\d",,,,"26212",,,[5]],"SH",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],1,"[256]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SI:[,[,,"[1-8]\\d{7}|90\\d{4,6}|8\\d{4,6}",,,,,,,[5,6,7,8]],[,,"(?:[1-357][2-8]|4[24-8])\\d{6}",,,,"12345678",,,[8],[7]],[,,"(?:(?:[37][01]|4[0139]|51)\\d\\d|6(?:[48]\\d\\d|5(?:1\\d|55|[67]0)|9(?:10|[69]\\d)))\\d{4}",,,,"31234567",
,,[8]],[,,"80\\d{4,6}",,,,"80123456",,,[6,7,8]],[,,"89[1-3]\\d{2,5}|90\\d{4,6}",,,,"90123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:59\\d\\d|8(?:1(?:[67]\\d|8[01389])|2(?:0\\d|2[0378]|8[0-2489])|3[389]\\d))\\d{4}",,,,"59012345",,,[8]],"SI",386,"00|10(?:22|66|88|99)","0",,,"0",,"00",,[[,"(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[12]|[357][2-8]|4[24-8]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[3467]|51"],"0$1"],[,"(\\d{3})(\\d{5})",
"$1 $2",["[58]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SJ:[,[,,"(?:0|(?:[4589]\\d|79)\\d\\d)\\d{4}",,,,,,,[5,8]],[,,"79\\d{6}",,,,"79123456",,,[8]],[,,"(?:4[015-8]|5[89]|9\\d)\\d{6}",,,,"41234567",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"SJ",47,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"79",[,,,
,,,,,,[-1]],[,,"(?:0\\d|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,,"01234"],,,[,,"81[23]\\d{5}",,,,"81212345",,,[8]]],SK:[,[,,"[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",,,,,,,[6,7,9]],[,,"(?:2(?:16|[2-9]\\d{3})|[3-5][1-8]\\d{3})\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d",,,,"221234567"],[,,"9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|[45]\\d)\\d)\\d{5}",,,,"912123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:00|[78]\\d)\\d{6}",,,,"900123456",,,[9]],[,,"8[5-9]\\d{7}",,,,"850123456",,,
[9]],[,,,,,,,,,[-1]],[,,"6(?:02|5[0-4]|9[0-6])\\d{6}",,,,"690123456",,,[9]],"SK",421,"00","0",,,"0",,,,[[,"(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],[,"(\\d{4})(\\d{3})","$1 $2",["909","9090"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"]],[[,"(\\d)(\\d{2})(\\d{3,4})",
"$1 $2 $3",["21"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"]],[,,"9090\\d{3}",,,,"9090123",,,[7]],,,[,,"(?:(?:602|8(?:00|[5-9]\\d))\\d{3}|9(?:0(?:0\\d{3}|90)|[78]\\d{4}))\\d{3}",,,,,,,[7,9]],[,,"96\\d{7}",,,,"961234567",,,[9]],,,[,,,,,,,,,[-1]]],SL:[,[,,"(?:[2-578]\\d|66|99)\\d{6}",
,,,,,,[8],[6]],[,,"[235]2[2-4][2-9]\\d{4}",,,,"22221234",,,,[6]],[,,"(?:2[15]|3[013-5]|4[04]|5[05]|66|7[5-9]|8[08]|99)\\d{6}",,,,"25123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SL",232,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",["[2-9]"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SM:[,[,,"(?:0549|[5-7]\\d)\\d{6}",,,,,,,[8,10],[6]],[,,"0549(?:8[0157-9]|9\\d)\\d{4}",,,,"0549886377",,,[10],[6]],[,,"6[16]\\d{6}",,,
,"66661212",,,[8]],[,,,,,,,,,[-1]],[,,"7[178]\\d{6}",,,,"71123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[158]\\d{6}",,,,"58001110",,,[8]],"SM",378,"00",,,,"([89]\\d{5})$","0549$1",,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(\\d{4})(\\d{6})","$1 $2",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SN:[,[,,"(?:[378]\\d{4}|93330)\\d{4}",,,,,,,[9]],[,,"3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}",,,,"301012345"],[,,"7(?:[06-8]\\d|21|90)\\d{6}",
,,,"701234567"],[,,"800\\d{6}",,,,"800123456"],[,,"88[4689]\\d{6}",,,,"884123456"],[,,"81[02468]\\d{6}",,,,"810123456"],[,,,,,,,,,[-1]],[,,"(?:3(?:392|9[01]\\d)\\d|93330)\\d{4}",,,,"933301234"],"SN",221,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SO:[,[,,"[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}",,,,,,,[6,7,8,9]],[,,"(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}|(?:[134]\\d|8[125])\\d{4}",
,,,"4012345",,,[6,7]],[,,"(?:(?:15|(?:3[59]|4[89]|6[1-9]|79|8[08])\\d|9(?:0[67]|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:6\\d|7[1-9])\\d{6}",,,,"71123456",,,[7,8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SO",252,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4})","$1 $2",["8[125]"]],[,"(\\d{6})","$1",["[134]"]],[,"(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],[,"(\\d)(\\d{7})","$1 $2",["24|[67]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[348]|64|79[0-8]|90"]],
[,"(\\d{2})(\\d{5,7})","$1 $2",["[12679]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SR:[,[,,"(?:[2-5]|68|[78]\\d)\\d{5}",,,,,,,[6,7]],[,,"(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}",,,,"211234"],[,,"(?:7[124-7]|8[125-9])\\d{5}",,,,"7412345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"56\\d{4}",,,,"561234",,,[6]],"SR",597,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1-$2",["[2-4]|5[2-58]"]],[,"(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["5"]],[,"(\\d{3})(\\d{4})",
"$1-$2",["[6-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SS:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"18\\d{7}",,,,"181234567"],[,,"(?:12|9[1257])\\d{7}",,,,"977123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SS",211,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ST:[,[,,"(?:22|9\\d)\\d{5}",,,,,,,[7]],[,,"22\\d{5}",,,,"2221234"],[,,"9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d\\d)\\d{3}",
,,,"9812345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ST",239,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[29]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SV:[,[,,"[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",,,,,,,[7,8,11]],[,,"2[1-6]\\d{6}",,,,"21234567",,,[8]],[,,"[67]\\d{7}",,,,"70123456",,,[8]],[,,"800\\d{4}(?:\\d{4})?",,,,"8001234",,,[7,11]],[,,"900\\d{4}(?:\\d{4})?",,,,"9001234",,,[7,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,
,,,[-1]],"SV",503,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[89]"]],[,"(\\d{4})(\\d{4})","$1 $2",["[267]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SX:[,[,,"(?:(?:[58]\\d\\d|900)\\d|7215)\\d{6}",,,,,,,[10],[7]],[,,"7215(?:4[2-8]|8[239]|9[056])\\d{4}",,,,"7215425678",,,,[7]],[,,"7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}",,,,"7215205678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",
,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"SX",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"721",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SY:[,[,,"[1-39]\\d{8}|[1-5]\\d{7}",,,,,,,[8,9],[6,7]],[,,"(?:1[14]\\d|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}|1[1-356]\\d{6}",,,,"112345678",,,,[6,7]],[,,"9(?:22|[3-589]\\d|6[024-9])\\d{6}",,,,"944567890",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],"SY",963,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SZ:[,[,,"(?:0800|(?:[237]\\d|900)\\d\\d)\\d{4}",,,,,,,[8,9]],[,,"[23][2-5]\\d{6}",,,,"22171234",,,[8]],[,,"7[6-9]\\d{6}",,,,"76123456",,,[8]],[,,"0800\\d{4}",,,,"08001234",,,[8]],[,,"900\\d{6}",,,,"900012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"70\\d{6}",,,,"70012345",
,,[8]],"SZ",268,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[0237]"]],[,"(\\d{5})(\\d{4})","$1 $2",["9"]]],,[,,,,,,,,,[-1]],,,[,,"0800\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TA:[,[,,"8\\d{3}",,,,,,,[4]],[,,"8\\d{3}",,,,"8999"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TA",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"8",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TC:[,[,,"(?:[58]\\d\\d|649|900)\\d{7}",,,,,,,[10],[7]],[,,"649(?:712|9(?:4\\d|50))\\d{4}",
,,,"6497121234",,,,[7]],[,,"649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}",,,,"6492311234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"64971[01]\\d{4}",,,,"6497101234",,,,[7]],"TC",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"649",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TD:[,[,,"(?:22|[69]\\d|77)\\d{6}",,,,,,,[8]],[,,"22(?:[37-9]0|5[0-5]|6[89])\\d{4}",
,,,"22501234"],[,,"(?:6[023568]|77|9\\d)\\d{6}",,,,"63012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TD",235,"00|16",,,,,,"00",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TG:[,[,,"[279]\\d{7}",,,,,,,[8]],[,,"2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}",,,,"22212345"],[,,"(?:7[09]|9[0-36-9])\\d{6}",,,,"90112345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,
,,,,[-1]],[,,,,,,,,,[-1]],"TG",228,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TH:[,[,,"(?:1\\d\\d?|[2-57]|[689]\\d)\\d{7}",,,,,,,[8,9,10]],[,,"(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}",,,,"21234567",,,[8]],[,,"(?:14|6[1-6]|[89]\\d)\\d{7}",,,,"812345678",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"1900\\d{6}",,,,"1900123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"6[08]\\d{7}",,,,"601234567",
,,[9]],"TH",66,"00[1-9]","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["14|[3-9]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TJ:[,[,,"(?:[3-59]\\d|77|88)\\d{7}",,,,,,,[9],[3,5,6,7]],[,,"(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",,,,"372123456",,,,[3,5,6,7]],[,,"(?:41[18]|(?:5[05]|77|88|9[0-35-9])\\d)\\d{6}",,,,"917123456"],[,,,,,,,
,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TJ",992,"810","8",,,"8",,"8~10",,[[,"(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3(?:[1245]|3[12])","3(?:[1245]|3(?:1[0-689]|2))"],,,1],[,"(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["33"],,,1],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["4[148]|[578]|9(?:[0235-9]|1[0-69])"],,,1],[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[349]"],,,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TK:[,[,,"[2-47]\\d{3,6}",,,,,,,[4,5,6,7]],
[,,"(?:2[2-4]|[34]\\d)\\d{2,5}",,,,"3101"],[,,"7[2-4]\\d{2,5}",,,,"7290"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TK",690,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TL:[,[,,"(?:[2-4]\\d|7\\d\\d?|[89]0)\\d{5}",,,,,,,[7,8]],[,,"(?:2[1-5]|3[1-9]|4[1-4])\\d{5}",,,,"2112345",,,[7]],[,,"7[3-8]\\d{6}",,,,"77212345",,,[8]],[,,"80\\d{5}",,,,"8012345",,,[7]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,"70\\d{5}",,,,"7012345",
,,[7]],[,,,,,,,,,[-1]],"TL",670,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],[,"(\\d{4})(\\d{4})","$1 $2",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TM:[,[,,"[1-6]\\d{7}",,,,,,,[8]],[,,"(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}",,,,"12345678"],[,,"6[1-9]\\d{6}",,,,"66123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TM",993,"810","8",,,"8",
,"8~10",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],[,"(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TN:[,[,,"[2-57-9]\\d{7}",,,,,,,[8]],[,,"(?:(?:3[0-2]|7\\d)\\d{3}|81200)\\d{3}",,,,"30010123"],[,,"(?:(?:[259]\\d|4[0-6])\\d\\d|3(?:001|1(?:[1-35]\\d|40)|240|(?:6[0-4]|91)\\d))\\d{4}",,,,"20123456"],[,,"8010\\d{4}",,,,"80101234"],[,,"88\\d{6}",
,,,"88123456"],[,,"8[12]10\\d{4}",,,,"81101234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TN",216,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TO:[,[,,"(?:(?:080|[56])0|[2-4]\\d|[78]\\d(?:\\d{2})?)\\d{3}",,,,,,,[5,7]],[,,"(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}",,,,"20123",,,[5]],[,,"(?:7[578]|8[46-9])\\d{5}",,,,"7715123",,,[7]],[,,"0800\\d{3}",,,,"0800222",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,
,,[-1]],[,,,,,,,,,[-1]],"TO",676,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1-$2",["[2-6]|7[014]|8[05]"]],[,"(\\d{3})(\\d{4})","$1 $2",["7[578]|8"]],[,"(\\d{4})(\\d{3})","$1 $2",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TR:[,[,,"(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}",,,,,,,[7,10]],[,,"(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",,,,"2123456789",,,[10]],[,,"5(?:(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d\\d|6161)\\d{5}",
,,,"5012345678",,,[10]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"(?:8[89]8|900)\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,"592(?:21[12]|461)\\d{4}",,,,"5922121234",,,[10]],[,,,,,,,,,[-1]],"TR",90,"00","0",,,"0",,,,[[,"(\\d{3})(\\d)(\\d{3})","$1 $2 $3",["444"],,,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-4]"],"(0$1)",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|[89]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5"],"0$1",,1]],[[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["[2-4]"],"(0$1)",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|[89]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5"],"0$1",,1]],[,,"512\\d{7}",,,,"5123456789",,,[10]],,,[,,"444\\d{4}",,,,,,,[7]],[,,"(?:444|850\\d{3})\\d{4}",,,,"4441444"],,,[,,,,,,,,,[-1]]],TT:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"868(?:2(?:01|1[89]|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}",,,,"8682211234",,,,[7]],[,,"868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}",
,,,"8682911234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"TT",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"868",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"868619\\d{4}",,,,"8686191234",,,,[7]]],TV:[,[,,"(?:2|7\\d\\d|90)\\d{4}",,,,,,,[5,6,7]],[,,"2[02-9]\\d{3}",,,,"20123",,,[5]],[,,"(?:7[01]\\d|90)\\d{4}",,,,"901234",,,[6,7]],[,,,,,,,,,[-1]],[,,,,,,,,,
[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TV",688,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TW:[,[,,"(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}",,,,,,,[7,8,9,10]],[,,"(?:(?:2[2-8]\\d|3[2-9]|4(?:[239]\\d|[78])|5[2-8]|6[235-79]|7[1-9])\\d\\d|8(?:2(?:3\\d|66)|[7-9]\\d\\d))\\d{4}|24\\d{6}",,,,"221234567",,,[8,9]],[,,"9[0-8]\\d{7}",,,,"912345678",,,[9]],[,,"80[0-79]\\d{6}",,,,"800123456",,,[9]],[,,"20(?:[013-9]\\d\\d|2)\\d{4}",,,,"203123456",,,[7,9]],
[,,,,,,,,,[-1]],[,,"99\\d{7}",,,,"990123456",,,[9]],[,,"70\\d{8}",,,,"7012345678",,,[10]],"TW",886,"0(?:0[25-79]|19)","0","#",,"0",,,,[[,"(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],[,"(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[25][2-8]|[346]|7[1-9]|8[27-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[258]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"50[0-46-9]\\d{6}",,,,"500123456",
,,[9]],,,[,,,,,,,,,[-1]]],TZ:[,[,,"(?:[26-8]\\d|41|90)\\d{7}",,,,,,,[9]],[,,"2[2-8]\\d{7}",,,,"222345678"],[,,"(?:6[2-9]|7[13-9])\\d{7}",,,,"621234567"],[,,"80[08]\\d{6}",,,,"800123456"],[,,"90\\d{7}",,,,"900123456"],[,,"8(?:40|6[01])\\d{6}",,,,"840123456"],[,,,,,,,,,[-1]],[,,"41\\d{7}",,,,"412345678"],"TZ",255,"00[056]","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"]],
,[,,,,,,,,,[-1]],,,[,,"(?:8(?:[04]0|6[01])|90\\d)\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UA:[,[,,"[3-9]\\d{8}",,,,,,,[9],[5,6,7]],[,,"(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",,,,"311234567",,,,[5,6,7]],[,,"(?:39|50|6[36-8]|7[1-3]|9[1-9])\\d{7}",,,,"391234567"],[,,"800\\d{6}",,,,"800123456"],[,,"900[2-49]\\d{5}",,,,"900212345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"89[1-579]\\d{6}",,,,"891234567"],"UA",380,"00","0",,,"0",,"0~0",,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|[89]0",
"3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|[89]0"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UG:[,[,,"(?:(?:[29]0|[347]\\d)\\d|800)\\d{6}",
,,,,,,[9],[5,6,7]],[,,"(?:20(?:(?:(?:[0147]\\d|5[0-4]|8[0-2])\\d|2(?:40|[5-9]\\d)|3(?:0[0-4]|[2367]\\d))\\d|6(?:00[0-2]|30[0-4]|[5-9]\\d\\d))|[34]\\d{5})\\d{3}",,,,"312345678",,,,[5,6,7]],[,,"7(?:(?:[0157-9]\\d|30|4[0-4])\\d|2(?:[03]\\d|60))\\d{5}",,,,"712345678"],[,,"800[1-3]\\d{5}",,,,"800123456"],[,,"90[1-3]\\d{6}",,,,"901123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UG",256,"00[057]","0",,,"0",,,,[[,"(\\d{2})(\\d{7})","$1 $2",["3|4(?:[0-5]|6[0-36-9])"],"0$1"],[,"(\\d{4})(\\d{5})",
"$1 $2",["202","2024"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["[247-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],US:[,[,,"[2-9]\\d{9}",,,,,,,[10],[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
,,,"2015550123",,,,[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
,,,"2015550123",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"US",1,"011","1",,,"1",,,1,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-9]"]],[,"(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],,,1]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[2-9]"]]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,"710[2-9]\\d{6}",,,,"7102123456"],,,[,,,,,,,,,[-1]]],UY:[,[,,"(?:[249]\\d\\d|80)\\d{5}|9\\d{6}",
,,,,,,[7,8]],[,,"(?:2\\d|4[2-7])\\d{6}",,,,"21231234",,,[8],[7]],[,,"9[1-9]\\d{6}",,,,"94231234",,,[8]],[,,"80[05]\\d{4}",,,,"8001234",,,[7]],[,,"90[0-8]\\d{4}",,,,"9001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UY",598,"0(?:0|1[3-9]\\d)","0"," int. ",,"0",,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["8|90"],"0$1"],[,"(\\d{4})(\\d{4})","$1 $2",["[24]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UZ:[,[,,"[679]\\d{8}",
,,,,,,[9]],[,,"(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|1[12]\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}",,,,"669050123"],[,,"(?:6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))|9[0-57-9]\\d{3})\\d{4}",
,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UZ",998,"810","8",,,"8",,"8~10",,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[679]"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VA:[,[,,"0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?",,,,,,,[6,7,8,9,10,11]],[,,"06698\\d{1,6}",,,,"0669812345"],[,,"33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}",,,,"3123456789",,,[9,10,11]],[,,"80(?:0\\d{3}|3)\\d{3}",
,,,"800123456",,,[6,9]],[,,"(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{3}|[17])\\d{3}",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"VA",39,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"06698",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VC:[,[,,"(?:[58]\\d\\d|784|900)\\d{7}",,,,,,,[10],[7]],[,,"784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}",
,,,"7842661234",,,,[7]],[,,"784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}",,,,"7844301234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VC",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"784",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VE:[,[,,"(?:(?:[24]\\d|50)\\d|[89]00)\\d{7}",,,,,,,[10],[7]],[,,"(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|50[01])\\d{7}",
,,,"2121234567",,,,[7]],[,,"4(?:1[24-8]|2[46])\\d{7}",,,,"4121234567"],[,,"800\\d{7}",,,,"8001234567"],[,,"900\\d{7}",,,,"9001234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"VE",58,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{7})","$1-$2",["[24589]"],"0$1","$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VG:[,[,,"(?:284|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"284(?:(?:229|774|8(?:52|6[459]))\\d|4(?:22\\d|9(?:[45]\\d|6[0-5])))\\d{3}",,,,"2842291234",,,,[7]],[,,"284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|54[0-57])\\d|4(?:(?:4[0-6]|68)\\d|9(?:6[6-9]|9\\d)))\\d{3}",
,,,"2843001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VG",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"284",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VI:[,[,,"(?:(?:34|90)0|[58]\\d\\d)\\d{7}",,,,,,,[10],[7]],[,,"340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}",
,,,"3406421234",,,,[7]],[,,"340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}",,,,"3406421234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VI",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"340",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VN:[,[,,"[12]\\d{9}|[135-9]\\d{8}|(?:[16]\\d?|[78])\\d{6}",
,,,,,,[7,8,9,10]],[,,"2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-7]|9[0-4679])\\d{7}",,,,"2101234567",,,[10]],[,,"(?:(?:3\\d|7[06-9])\\d|5(?:2[238]|[689]\\d)|8(?:[1-58]\\d|6[5-9]|9[689])|9(?:[0-8]\\d|9[013-9]))\\d{6}",,,,"912345678",,,[9]],[,,"1800\\d{4,6}",,,,"1800123456",,,[8,9,10]],[,,"1900\\d{4,6}",,,,"1900123456",,,[8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"672\\d{6}",,,,"672012345",,,[9]],"VN",84,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",,1],
[,"(\\d{3})(\\d{4})","$1 $2",["[17]99"],"0$1",,1],[,"(\\d{3})(\\d{4,5})","$1 $2",["69"],"0$1",,1],[,"(\\d{4})(\\d{4,6})","$1 $2",["1"],,,1],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",,1],[,"(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",,1]],[[,"(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",,1],[,"(\\d{4})(\\d{4,6})","$1 $2",["1"],,,1],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["[69]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",,1],[,"(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",,1]],[,,,,,,,,,[-1]],,,[,,"(?:[17]99|69\\d\\d?)\\d{4}",,,,,,,[7,8]],[,,"(?:[17]99|69\\d\\d?|80\\d)\\d{4}",,,,"1992000",,,[7,8]],,,[,,,,,,,,,[-1]]],VU:[,[,,"(?:(?:[23]|(?:[57]\\d|90)\\d)\\d|[48]8)\\d{3}",,,,,,,[5,7]],[,,"(?:(?:2[02-9]|88)\\d|3(?:[4-7]\\d|8[0-8])|48[4-9])\\d\\d",,,,"22123",,,[5]],
[,,"(?:5(?:[0-689]\\d|7[2-5])|7[013-7]\\d)\\d{4}",,,,"5912345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"90[1-9]\\d{4}",,,,"9010123",,,[7]],"VU",678,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[579]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:3[03]|900\\d)\\d{3}",,,,"30123"],,,[,,,,,,,,,[-1]]],WF:[,[,,"(?:[45]0|68|72|8\\d)\\d{4}",,,,,,,[6]],[,,"(?:50|68|72)\\d{4}",,,,"501234"],[,,"(?:50|68|72|8[23])\\d{4}",,,,"501234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WF",681,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[4-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"[48]0\\d{4}",,,,"401234"]],WS:[,[,,"(?:[2-6]|8\\d(?:\\d{4})?)\\d{4}|[78]\\d{6}",,,,,,,[5,6,7,10]],[,,"(?:[2-5]\\d|6[1-9])\\d{3}",,,,"22123",,,[5]],[,,"(?:7[25-7]|8(?:[3-7]|9\\d{3}))\\d{5}",,,,"7212345",,,[7,10]],[,,"800\\d{3}",,,,"800123",,,[6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WS",685,"0",,,,,,,,[[,"(\\d{5})",
"$1",["[2-6]"]],[,"(\\d{3})(\\d{3,7})","$1 $2",["8"]],[,"(\\d{2})(\\d{5})","$1 $2",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],XK:[,[,,"(?:[23]\\d{2,3}|4\\d\\d|[89]00)\\d{5}",,,,,,,[8,9]],[,,"(?:2[89]|39)0\\d{6}|[23][89]\\d{6}",,,,"28012345"],[,,"4[3-79]\\d{6}",,,,"43201234",,,[8]],[,,"800\\d{5}",,,,"80001234",,,[8]],[,,"900\\d{5}",,,,"90001234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"XK",383,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",
["[2-4]"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YE:[,[,,"(?:1|7\\d)\\d{7}|[1-7]\\d{6}",,,,,,,[7,8,9],[6]],[,,"17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}",,,,"1234567",,,[7,8],[6]],[,,"7[0137]\\d{7}",,,,"712345678",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"YE",967,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3,4})",
"$1 $2 $3",["[1-6]|7[24-68]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YT:[,[,,"(?:(?:26|63)9|80\\d)\\d{6}",,,,,,,[9]],[,,"269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}",,,,"269601234"],[,,"639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}",,,,"639012345"],[,,"80\\d{7}",,,,"801234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"YT",262,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,"269|63",[,,,,,,
,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ZA:[,[,,"[1-9]\\d{8}|8\\d{4,7}",,,,,,,[5,6,7,8,9]],[,,"(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",,,,"101234567",,,[9]],[,,"(?:6\\d|7[0-46-9]|8[1-5])\\d{7}|8[1-4]\\d{3,6}",,,,"711234567"],[,,"80\\d{7}",,,,"801234567",,,[9]],[,,"(?:86[2-9]|9[0-2]\\d)\\d{6}",,,,"862345678",,,[9]],[,,"860\\d{6}",,,,"860123456",,,[9]],[,,,,,,,,,[-1]],[,,"87\\d{7}",,,,"871234567",,,[9]],"ZA",27,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})",
"$1 $2 $3",["8[1-4]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"861\\d{6}",,,,"861123456",,,[9]],,,[,,,,,,,,,[-1]]],ZM:[,[,,"(?:(?:21|76|9\\d)\\d|800)\\d{6}",,,,,,,[9],[6]],[,,"21[1-8]\\d{6}",,,,"211234567",,,,[6]],[,,"(?:76|9[5-8])\\d{7}",,,,"955123456"],[,,"800\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ZM",260,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})",
"$1 $2"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ZW:[,[,,"2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",,,,,,,[5,6,7,8,9,10],[3,4]],[,,"(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|(?:4\\d\\d|9[2-9])\\d\\d?|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}",
,,,"1312345",,,,[3,4]],[,,"(?:7(?:1\\d|3[2-9]|7[1-9]|8[2-5])|8644)\\d{6}",,,,"712345678",,,[9,10]],[,,"80(?:[01]\\d|20|8[0-8])\\d{3}",,,,"8001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"86(?:1[12]|30|55|77|8[368])\\d{6}",,,,"8686123456",,,[10]],"ZW",263,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],[,"(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|[78])|5[15][78]|6(?:[29]8|37|[68][78]|75)"],"0$1"],[,"(\\d{3})(\\d{4})",
"$1 $2",["80"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["2(?:[05-79]2|4)|(?:39|5[45]|6[15-8])2|8[13-59]","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],[,"(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["[16]|2(?:[0-256]|9[0-79])|3(?:[09][0-79]|1[0-689]|[24-6]|3[0-69])|5[0-35-9]"],
"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29|[35]"],"0$1"],[,"(\\d{4})(\\d{3,5})","$1 $2",["[25]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],800:[,[,,"\\d{8}",,,,,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{8}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",800,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],808:[,[,,"\\d{8}",,,,,,,[8]],[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{8}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",808,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],870:[,[,,"[35-7]\\d{8}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,"(?:[356]\\d|7[6-8])\\d{7}",,,,"301234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",870,,,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],,[,,,,,,,,,[-1]],,,[,,,
,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],878:[,[,,"10\\d{10}",,,,,,,[12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"10\\d{10}",,,,"101234567890"],"001",878,,,,,,,,1,[[,"(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],881:[,[,,"[67]\\d{8}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,"[67]\\d{8}",,,,"612345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,
,,[-1]],"001",881,,,,,,,,,[[,"(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[67]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],882:[,[,,"[13]\\d{6}(?:\\d{2,5})?|1\\d{7}",,,,,,,[7,8,9,10,11,12]],[,,,,,,,,,[-1]],[,,"3(?:(?:(?:2|7\\d{3})\\d|37)\\d\\d|4(?:2|7\\d{3}))\\d{4}",,,,"3421234",,,[7,9,10,12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])|6\\d{1,6})|3(?:45|9\\d{3})\\d{3})\\d{4}",
,,,"390123456789"],"001",882,,,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["16|342"]],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["34[57]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],[,"(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[13]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"348[57]\\d{7}",,,,"34851234567",,,[11]]],883:[,[,,"51\\d{7}(?:\\d{3})?",
,,,,,,[9,12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"51[013]0\\d{8}|5100\\d{5}",,,,"510012345"],"001",883,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["510"]],[,"(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["5"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],888:[,[,,"\\d{11}",,,,,,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,
,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",888,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"\\d{11}",,,,"12345678901"],,,[,,,,,,,,,[-1]]],979:[,[,,"\\d{9}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{9}",,,,"123456789"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",979,,,,,,,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]]};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function M(){this.a={}}M.c=void 0;M.a=function(){return M.c?M.c:M.c=new M};
var xa={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},ya={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",
Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},N=/^[+\uff0b]+/,za=/([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,Aa=/[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,Ba=/[\\\/] *x/,Ca=/[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,Da=/(?:.*?[A-Za-z]){3}.*/,Ea=/(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$/i,
Fa=/^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$/i,
Ga=/(\$\d)/;function Ha(a){var b=a.search(Aa);0<=b?(a=a.substring(b),a=a.replace(Ca,""),b=a.search(Ba),0<=b&&(a=a.substring(0,b))):a="";return a}function Ia(a){return 2>a.length?!1:O(Fa,a)}function Ja(a){return O(Da,a)?P(a,ya):P(a,xa)}function Ka(a){var b=Ja(a.toString());a.c="";a.a(b)}function La(a){return null!=a&&(1!=A(a,9)||-1!=w(a,9)[0])}function P(a,b){for(var c=new F,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}
function Q(a){return null!=a&&isNaN(a)&&a.toUpperCase()in wa}
function Ma(a,b,c){if(0==t(b,2)&&null!=b.a[5]){var d=y(b,5);if(0<d.length)return d}d=y(b,1);var e=R(b);if(0==c)return Na(d,0,e,"");if(!(d in K))return e;a=S(a,d,T(d));b=null!=b.a[3]&&0!=t(b,3).length?3==c?";ext="+t(b,3):null!=a.a[13]?t(a,13)+y(b,3):" ext. "+y(b,3):"";a:{a=0==w(a,20).length||2==c?w(a,19):w(a,20);for(var f,g=a.length,h=0;h<g;++h){f=a[h];var l=A(f,3);if(0==l||0==e.search(t(f,3,l-1)))if(l=new RegExp(t(f,1)),O(l,e)){a=f;break a}}a=null}null!=a&&(g=a,a=y(g,2),f=new RegExp(t(g,1)),y(g,5),
g=y(g,4),e=2==c&&null!=g&&0<g.length?e.replace(f,a.replace(Ga,g)):e.replace(f,a),3==c&&(e=e.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/,""),e=e.replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/g,"-")));return Na(d,c,e,b)}function S(a,b,c){return"001"==c?U(a,""+b):U(a,c)}
function R(a){if(null==a.a[2])return"";var b=""+t(a,2);return null!=a.a[4]&&t(a,4)&&0<y(a,8)?Array(y(a,8)+1).join("0")+b:b}function Na(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}
function V(a,b){switch(b){case 4:return t(a,5);case 3:return t(a,4);case 1:return t(a,3);case 0:case 2:return t(a,2);case 5:return t(a,6);case 6:return t(a,8);case 7:return t(a,7);case 8:return t(a,21);case 9:return t(a,25);case 10:return t(a,28);default:return t(a,1)}}function W(a,b){return X(a,t(b,1))?X(a,t(b,5))?4:X(a,t(b,4))?3:X(a,t(b,6))?5:X(a,t(b,8))?6:X(a,t(b,7))?7:X(a,t(b,21))?8:X(a,t(b,25))?9:X(a,t(b,28))?10:X(a,t(b,2))?t(b,18)||X(a,t(b,3))?2:0:!t(b,18)&&X(a,t(b,3))?1:-1:-1}
function U(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.a[b];if(null==c){c=wa[b];if(null==c)return null;c=(new E).a(I.f(),c);a.a[b]=c}return c}function X(a,b){var c=a.length;return 0<A(b,9)&&-1==p(w(b,9),c)?!1:O(y(b,2),a)}
function Oa(a,b){if(null==b)return null;var c=y(b,1);c=K[c];if(null==c)a=null;else if(1==c.length)a=c[0];else a:{b=R(b);for(var d,e=c.length,f=0;f<e;f++){d=c[f];var g=U(a,d);if(null!=g.a[23]){if(0==b.search(t(g,23))){a=d;break a}}else if(-1!=W(b,g)){a=d;break a}}a=null}return a}function T(a){a=K[a];return null==a?"ZZ":a[0]}
function Y(a,b,c,d){var e=V(c,d),f=0==A(e,9)?w(t(c,1),9):w(e,9);e=w(e,10);if(2==d)if(La(V(c,0)))a=V(c,1),La(a)&&(f=f.concat(0==A(a,9)?w(t(c,1),9):w(a,9)),q(f),0==e.length?e=w(a,10):(e=e.concat(w(a,10)),q(e)));else return Y(a,b,c,1);if(-1==f[0])return 5;b=b.length;if(-1<p(e,b))return 4;c=f[0];return c==b?0:c>b?2:f[f.length-1]<b?3:-1<p(f,b,1)?0:5}function Pa(a,b){var c=R(b);b=y(b,1);if(!(b in K))return 1;b=S(a,b,T(b));return Y(a,c,b,-1)}
function Qa(a,b,c,d,e,f){if(0==b.length)return 0;b=new F(b);var g;null!=c&&(g=t(c,11));null==g&&(g="NonMatch");var h=b.toString();if(0==h.length)g=20;else if(N.test(h))h=h.replace(N,""),b.c="",b.a(Ja(h)),g=1;else{h=new RegExp(g);Ka(b);g=b.toString();if(0==g.search(h)){h=g.match(h)[0].length;var l=g.substring(h).match(za);l&&null!=l[1]&&0<l[1].length&&"0"==P(l[1],xa)?g=!1:(b.c="",b.a(g.substring(h)),g=!0)}else g=!1;g=g?5:20}e&&u(f,6,g);if(20!=g){if(2>=b.c.length)throw Error("Phone number too short after IDD");
a:{a=b.toString();if(0!=a.length&&"0"!=a.charAt(0))for(e=a.length,b=1;3>=b&&b<=e;++b)if(c=parseInt(a.substring(0,b),10),c in K){d.a(a.substring(b));d=c;break a}d=0}if(0!=d)return u(f,1,d),d;throw Error("Invalid country calling code");}if(null!=c&&(g=y(c,10),h=""+g,l=b.toString(),0==l.lastIndexOf(h,0)&&(h=new F(l.substring(h.length)),l=t(c,1),l=new RegExp(y(l,2)),Ra(h,c,null),h=h.toString(),!O(l,b.toString())&&O(l,h)||3==Y(a,b.toString(),c,-1))))return d.a(h),e&&u(f,6,10),u(f,1,g),g;u(f,1,0);return 0}
function Ra(a,b,c){var d=a.toString(),e=d.length,f=t(b,15);if(0!=e&&null!=f&&0!=f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){f=new RegExp(y(t(b,1),2));var h=O(f,d),l=e.length-1;b=t(b,16);if(null==b||0==b.length||null==e[l]||0==e[l].length){if(!h||O(f,d.substring(e[0].length)))null!=c&&0<l&&null!=e[l]&&c.a(e[1]),a.set(d.substring(e[0].length))}else if(d=d.replace(g,b),!h||O(f,d))null!=c&&0<l&&c.a(e[1]),a.set(d)}}}
function Z(a,b,c){if(!Q(c)&&0<b.length&&"+"!=b.charAt(0))throw Error("Invalid country calling code");return Sa(a,b,c,!0)}
function Sa(a,b,c,d){if(null==b)throw Error("The string supplied did not seem to be a phone number");if(250<b.length)throw Error("The string supplied is too long to be a phone number");var e=new F,f=b.indexOf(";phone-context=");if(0<=f){var g=f+15;if("+"==b.charAt(g)){var h=b.indexOf(";",g);0<h?e.a(b.substring(g,h)):e.a(b.substring(g))}g=b.indexOf("tel:");e.a(b.substring(0<=g?g+4:0,f))}else e.a(Ha(b));f=e.toString();g=f.indexOf(";isub=");0<g&&(e.c="",e.a(f.substring(0,g)));if(!Ia(e.toString()))throw Error("The string supplied did not seem to be a phone number");
f=e.toString();if(!(Q(c)||null!=f&&0<f.length&&N.test(f)))throw Error("Invalid country calling code");f=new J;d&&u(f,5,b);a:{b=e.toString();g=b.search(Ea);if(0<=g&&Ia(b.substring(0,g))){h=b.match(Ea);for(var l=h.length,z=1;z<l;++z)if(null!=h[z]&&0<h[z].length){e.c="";e.a(b.substring(0,g));b=h[z];break a}}b=""}0<b.length&&u(f,3,b);g=U(a,c);b=new F;h=0;l=e.toString();try{h=Qa(a,l,g,b,d,f)}catch(L){if("Invalid country calling code"==L.message&&N.test(l)){if(l=l.replace(N,""),h=Qa(a,l,g,b,d,f),0==h)throw L;
}else throw L;}0!=h?(e=T(h),e!=c&&(g=S(a,h,e))):(Ka(e),b.a(e.toString()),null!=c?(h=y(g,10),u(f,1,h)):d&&(delete f.a[6],f.c&&delete f.c[6]));if(2>b.c.length)throw Error("The string supplied is too short to be a phone number");null!=g&&(c=new F,e=new F(b.toString()),Ra(e,g,c),a=Y(a,e.toString(),g,-1),2!=a&&4!=a&&5!=a&&(b=e,d&&0<c.toString().length&&u(f,7,c.toString())));d=b.toString();a=d.length;if(2>a)throw Error("The string supplied is too short to be a phone number");if(17<a)throw Error("The string supplied is too long to be a phone number");
if(1<d.length&&"0"==d.charAt(0)){u(f,4,!0);for(a=1;a<d.length-1&&"0"==d.charAt(a);)a++;1!=a&&u(f,8,a)}u(f,2,parseInt(d,10));return f}function O(a,b){return(a="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a))&&a[0].length==b.length?!0:!1};m("intlTelInputUtils",{});m("intlTelInputUtils.formatNumber",function(a,b,c){try{var d=M.a(),e=Z(d,a,b),f=Pa(d,e);return 0==f||4==f?Ma(d,e,"undefined"==typeof c?0:c):a}catch(g){return a}});m("intlTelInputUtils.getExampleNumber",function(a,b,c){try{var d=M.a();a:{if(Q(a)){var e=V(U(d,a),c);try{if(null!=e.a[6]){var f=t(e,6);var g=Sa(d,f,a,!1);break a}}catch(h){}}g=null}return Ma(d,g,b?2:1)}catch(h){return""}});m("intlTelInputUtils.getExtension",function(a,b){try{return t(Z(M.a(),a,b),3)}catch(c){return""}});
m("intlTelInputUtils.getNumberType",function(a,b){try{var c=M.a();var d=Z(c,a,b),e=Oa(c,d),f=S(c,y(d,1),e);if(null==f)var g=-1;else{var h=R(d);g=W(h,f)}return g}catch(l){return-99}});
m("intlTelInputUtils.getValidationError",function(a,b){try{var c=M.a(),d=Z(c,a,b);return Pa(c,d)}catch(e){return"Invalid country calling code"==e.message?1:"The string supplied did not seem to be a phone number"==e.message?4:"Phone number too short after IDD"==e.message||"The string supplied is too short to be a phone number"==e?2:"The string supplied is too long to be a phone number"==e.message?3:-99}});
m("intlTelInputUtils.isValidNumber",function(a,b){try{var c=M.a(),d=Z(c,a,b);var e=Oa(c,d),f=y(d,1),g=S(c,f,e),h;if(!(h=null==g)){var l;if(l="001"!=e){var z=U(c,e);if(null==z)throw Error("Invalid region code: "+e);var L=y(z,10);l=f!=L}h=l}if(h)var va=!1;else{var Ta=R(d);va=-1!=W(Ta,g)}return va}catch(Ua){return!1}});m("intlTelInputUtils.numberFormat",{E164:0,INTERNATIONAL:1,NATIONAL:2,RFC3966:3});
m("intlTelInputUtils.numberType",{FIXED_LINE:0,MOBILE:1,FIXED_LINE_OR_MOBILE:2,TOLL_FREE:3,PREMIUM_RATE:4,SHARED_COST:5,VOIP:6,PERSONAL_NUMBER:7,PAGER:8,UAN:9,VOICEMAIL:10,UNKNOWN:-1});m("intlTelInputUtils.validationError",{IS_POSSIBLE:0,INVALID_COUNTRY_CODE:1,TOO_SHORT:2,TOO_LONG:3,NOT_A_NUMBER:4});})();


/***/ }),

/***/ "./node_modules/mark.js/dist/mark.js":
/*!*******************************************!*\
  !*** ./node_modules/mark.js/dist/mark.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var DOMIterator = function () {
  function DOMIterator(ctx) {
    var iframes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var iframesTimeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;
    classCallCheck(this, DOMIterator);

    this.ctx = ctx;
    this.iframes = iframes;
    this.exclude = exclude;
    this.iframesTimeout = iframesTimeout;
  }

  createClass(DOMIterator, [{
    key: 'getContexts',
    value: function getContexts() {
      var ctx = void 0,
          filteredCtx = [];
      if (typeof this.ctx === 'undefined' || !this.ctx) {
        ctx = [];
      } else if (NodeList.prototype.isPrototypeOf(this.ctx)) {
        ctx = Array.prototype.slice.call(this.ctx);
      } else if (Array.isArray(this.ctx)) {
        ctx = this.ctx;
      } else if (typeof this.ctx === 'string') {
        ctx = Array.prototype.slice.call(document.querySelectorAll(this.ctx));
      } else {
        ctx = [this.ctx];
      }
      ctx.forEach(function (ctx) {
        var isDescendant = filteredCtx.filter(function (contexts) {
          return contexts.contains(ctx);
        }).length > 0;
        if (filteredCtx.indexOf(ctx) === -1 && !isDescendant) {
          filteredCtx.push(ctx);
        }
      });
      return filteredCtx;
    }
  }, {
    key: 'getIframeContents',
    value: function getIframeContents(ifr, successFn) {
      var errorFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      var doc = void 0;
      try {
        var ifrWin = ifr.contentWindow;
        doc = ifrWin.document;
        if (!ifrWin || !doc) {
          throw new Error('iframe inaccessible');
        }
      } catch (e) {
        errorFn();
      }
      if (doc) {
        successFn(doc);
      }
    }
  }, {
    key: 'isIframeBlank',
    value: function isIframeBlank(ifr) {
      var bl = 'about:blank',
          src = ifr.getAttribute('src').trim(),
          href = ifr.contentWindow.location.href;
      return href === bl && src !== bl && src;
    }
  }, {
    key: 'observeIframeLoad',
    value: function observeIframeLoad(ifr, successFn, errorFn) {
      var _this = this;

      var called = false,
          tout = null;
      var listener = function listener() {
        if (called) {
          return;
        }
        called = true;
        clearTimeout(tout);
        try {
          if (!_this.isIframeBlank(ifr)) {
            ifr.removeEventListener('load', listener);
            _this.getIframeContents(ifr, successFn, errorFn);
          }
        } catch (e) {
          errorFn();
        }
      };
      ifr.addEventListener('load', listener);
      tout = setTimeout(listener, this.iframesTimeout);
    }
  }, {
    key: 'onIframeReady',
    value: function onIframeReady(ifr, successFn, errorFn) {
      try {
        if (ifr.contentWindow.document.readyState === 'complete') {
          if (this.isIframeBlank(ifr)) {
            this.observeIframeLoad(ifr, successFn, errorFn);
          } else {
            this.getIframeContents(ifr, successFn, errorFn);
          }
        } else {
          this.observeIframeLoad(ifr, successFn, errorFn);
        }
      } catch (e) {
        errorFn();
      }
    }
  }, {
    key: 'waitForIframes',
    value: function waitForIframes(ctx, done) {
      var _this2 = this;

      var eachCalled = 0;
      this.forEachIframe(ctx, function () {
        return true;
      }, function (ifr) {
        eachCalled++;
        _this2.waitForIframes(ifr.querySelector('html'), function () {
          if (! --eachCalled) {
            done();
          }
        });
      }, function (handled) {
        if (!handled) {
          done();
        }
      });
    }
  }, {
    key: 'forEachIframe',
    value: function forEachIframe(ctx, filter, each) {
      var _this3 = this;

      var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      var ifr = ctx.querySelectorAll('iframe'),
          open = ifr.length,
          handled = 0;
      ifr = Array.prototype.slice.call(ifr);
      var checkEnd = function checkEnd() {
        if (--open <= 0) {
          end(handled);
        }
      };
      if (!open) {
        checkEnd();
      }
      ifr.forEach(function (ifr) {
        if (DOMIterator.matches(ifr, _this3.exclude)) {
          checkEnd();
        } else {
          _this3.onIframeReady(ifr, function (con) {
            if (filter(ifr)) {
              handled++;
              each(con);
            }
            checkEnd();
          }, checkEnd);
        }
      });
    }
  }, {
    key: 'createIterator',
    value: function createIterator(ctx, whatToShow, filter) {
      return document.createNodeIterator(ctx, whatToShow, filter, false);
    }
  }, {
    key: 'createInstanceOnIframe',
    value: function createInstanceOnIframe(contents) {
      return new DOMIterator(contents.querySelector('html'), this.iframes);
    }
  }, {
    key: 'compareNodeIframe',
    value: function compareNodeIframe(node, prevNode, ifr) {
      var compCurr = node.compareDocumentPosition(ifr),
          prev = Node.DOCUMENT_POSITION_PRECEDING;
      if (compCurr & prev) {
        if (prevNode !== null) {
          var compPrev = prevNode.compareDocumentPosition(ifr),
              after = Node.DOCUMENT_POSITION_FOLLOWING;
          if (compPrev & after) {
            return true;
          }
        } else {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'getIteratorNode',
    value: function getIteratorNode(itr) {
      var prevNode = itr.previousNode();
      var node = void 0;
      if (prevNode === null) {
        node = itr.nextNode();
      } else {
        node = itr.nextNode() && itr.nextNode();
      }
      return {
        prevNode: prevNode,
        node: node
      };
    }
  }, {
    key: 'checkIframeFilter',
    value: function checkIframeFilter(node, prevNode, currIfr, ifr) {
      var key = false,
          handled = false;
      ifr.forEach(function (ifrDict, i) {
        if (ifrDict.val === currIfr) {
          key = i;
          handled = ifrDict.handled;
        }
      });
      if (this.compareNodeIframe(node, prevNode, currIfr)) {
        if (key === false && !handled) {
          ifr.push({
            val: currIfr,
            handled: true
          });
        } else if (key !== false && !handled) {
          ifr[key].handled = true;
        }
        return true;
      }
      if (key === false) {
        ifr.push({
          val: currIfr,
          handled: false
        });
      }
      return false;
    }
  }, {
    key: 'handleOpenIframes',
    value: function handleOpenIframes(ifr, whatToShow, eCb, fCb) {
      var _this4 = this;

      ifr.forEach(function (ifrDict) {
        if (!ifrDict.handled) {
          _this4.getIframeContents(ifrDict.val, function (con) {
            _this4.createInstanceOnIframe(con).forEachNode(whatToShow, eCb, fCb);
          });
        }
      });
    }
  }, {
    key: 'iterateThroughNodes',
    value: function iterateThroughNodes(whatToShow, ctx, eachCb, filterCb, doneCb) {
      var _this5 = this;

      var itr = this.createIterator(ctx, whatToShow, filterCb);
      var ifr = [],
          elements = [],
          node = void 0,
          prevNode = void 0,
          retrieveNodes = function retrieveNodes() {
        var _getIteratorNode = _this5.getIteratorNode(itr);

        prevNode = _getIteratorNode.prevNode;
        node = _getIteratorNode.node;

        return node;
      };
      while (retrieveNodes()) {
        if (this.iframes) {
          this.forEachIframe(ctx, function (currIfr) {
            return _this5.checkIframeFilter(node, prevNode, currIfr, ifr);
          }, function (con) {
            _this5.createInstanceOnIframe(con).forEachNode(whatToShow, function (ifrNode) {
              return elements.push(ifrNode);
            }, filterCb);
          });
        }
        elements.push(node);
      }
      elements.forEach(function (node) {
        eachCb(node);
      });
      if (this.iframes) {
        this.handleOpenIframes(ifr, whatToShow, eachCb, filterCb);
      }
      doneCb();
    }
  }, {
    key: 'forEachNode',
    value: function forEachNode(whatToShow, each, filter) {
      var _this6 = this;

      var done = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      var contexts = this.getContexts();
      var open = contexts.length;
      if (!open) {
        done();
      }
      contexts.forEach(function (ctx) {
        var ready = function ready() {
          _this6.iterateThroughNodes(whatToShow, ctx, each, filter, function () {
            if (--open <= 0) {
              done();
            }
          });
        };
        if (_this6.iframes) {
          _this6.waitForIframes(ctx, ready);
        } else {
          ready();
        }
      });
    }
  }], [{
    key: 'matches',
    value: function matches(element, selector) {
      var selectors = typeof selector === 'string' ? [selector] : selector,
          fn = element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.webkitMatchesSelector;
      if (fn) {
        var match = false;
        selectors.every(function (sel) {
          if (fn.call(element, sel)) {
            match = true;
            return false;
          }
          return true;
        });
        return match;
      } else {
        return false;
      }
    }
  }]);
  return DOMIterator;
}();

var Mark$1 = function () {
  function Mark(ctx) {
    classCallCheck(this, Mark);

    this.ctx = ctx;
    this.ie = false;
    var ua = window.navigator.userAgent;
    if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) {
      this.ie = true;
    }
  }

  createClass(Mark, [{
    key: 'log',
    value: function log(msg) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'debug';

      var log = this.opt.log;
      if (!this.opt.debug) {
        return;
      }
      if ((typeof log === 'undefined' ? 'undefined' : _typeof(log)) === 'object' && typeof log[level] === 'function') {
        log[level]('mark.js: ' + msg);
      }
    }
  }, {
    key: 'escapeStr',
    value: function escapeStr(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
  }, {
    key: 'createRegExp',
    value: function createRegExp(str) {
      if (this.opt.wildcards !== 'disabled') {
        str = this.setupWildcardsRegExp(str);
      }
      str = this.escapeStr(str);
      if (Object.keys(this.opt.synonyms).length) {
        str = this.createSynonymsRegExp(str);
      }
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.setupIgnoreJoinersRegExp(str);
      }
      if (this.opt.diacritics) {
        str = this.createDiacriticsRegExp(str);
      }
      str = this.createMergedBlanksRegExp(str);
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.createJoinersRegExp(str);
      }
      if (this.opt.wildcards !== 'disabled') {
        str = this.createWildcardsRegExp(str);
      }
      str = this.createAccuracyRegExp(str);
      return str;
    }
  }, {
    key: 'createSynonymsRegExp',
    value: function createSynonymsRegExp(str) {
      var syn = this.opt.synonyms,
          sens = this.opt.caseSensitive ? '' : 'i',
          joinerPlaceholder = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? '\0' : '';
      for (var index in syn) {
        if (syn.hasOwnProperty(index)) {
          var value = syn[index],
              k1 = this.opt.wildcards !== 'disabled' ? this.setupWildcardsRegExp(index) : this.escapeStr(index),
              k2 = this.opt.wildcards !== 'disabled' ? this.setupWildcardsRegExp(value) : this.escapeStr(value);
          if (k1 !== '' && k2 !== '') {
            str = str.replace(new RegExp('(' + this.escapeStr(k1) + '|' + this.escapeStr(k2) + ')', 'gm' + sens), joinerPlaceholder + ('(' + this.processSynomyms(k1) + '|') + (this.processSynomyms(k2) + ')') + joinerPlaceholder);
          }
        }
      }
      return str;
    }
  }, {
    key: 'processSynomyms',
    value: function processSynomyms(str) {
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.setupIgnoreJoinersRegExp(str);
      }
      return str;
    }
  }, {
    key: 'setupWildcardsRegExp',
    value: function setupWildcardsRegExp(str) {
      str = str.replace(/(?:\\)*\?/g, function (val) {
        return val.charAt(0) === '\\' ? '?' : '\x01';
      });
      return str.replace(/(?:\\)*\*/g, function (val) {
        return val.charAt(0) === '\\' ? '*' : '\x02';
      });
    }
  }, {
    key: 'createWildcardsRegExp',
    value: function createWildcardsRegExp(str) {
      var spaces = this.opt.wildcards === 'withSpaces';
      return str.replace(/\u0001/g, spaces ? '[\\S\\s]?' : '\\S?').replace(/\u0002/g, spaces ? '[\\S\\s]*?' : '\\S*');
    }
  }, {
    key: 'setupIgnoreJoinersRegExp',
    value: function setupIgnoreJoinersRegExp(str) {
      return str.replace(/[^(|)\\]/g, function (val, indx, original) {
        var nextChar = original.charAt(indx + 1);
        if (/[(|)\\]/.test(nextChar) || nextChar === '') {
          return val;
        } else {
          return val + '\0';
        }
      });
    }
  }, {
    key: 'createJoinersRegExp',
    value: function createJoinersRegExp(str) {
      var joiner = [];
      var ignorePunctuation = this.opt.ignorePunctuation;
      if (Array.isArray(ignorePunctuation) && ignorePunctuation.length) {
        joiner.push(this.escapeStr(ignorePunctuation.join('')));
      }
      if (this.opt.ignoreJoiners) {
        joiner.push('\\u00ad\\u200b\\u200c\\u200d');
      }
      return joiner.length ? str.split(/\u0000+/).join('[' + joiner.join('') + ']*') : str;
    }
  }, {
    key: 'createDiacriticsRegExp',
    value: function createDiacriticsRegExp(str) {
      var sens = this.opt.caseSensitive ? '' : 'i',
          dct = this.opt.caseSensitive ? ['aàáảãạăằắẳẵặâầấẩẫậäåāą', 'AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ', 'cçćč', 'CÇĆČ', 'dđď', 'DĐĎ', 'eèéẻẽẹêềếểễệëěēę', 'EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ', 'iìíỉĩịîïī', 'IÌÍỈĨỊÎÏĪ', 'lł', 'LŁ', 'nñňń', 'NÑŇŃ', 'oòóỏõọôồốổỗộơởỡớờợöøō', 'OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ', 'rř', 'RŘ', 'sšśșş', 'SŠŚȘŞ', 'tťțţ', 'TŤȚŢ', 'uùúủũụưừứửữựûüůū', 'UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ', 'yýỳỷỹỵÿ', 'YÝỲỶỸỴŸ', 'zžżź', 'ZŽŻŹ'] : ['aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ', 'cçćčCÇĆČ', 'dđďDĐĎ', 'eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ', 'iìíỉĩịîïīIÌÍỈĨỊÎÏĪ', 'lłLŁ', 'nñňńNÑŇŃ', 'oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ', 'rřRŘ', 'sšśșşSŠŚȘŞ', 'tťțţTŤȚŢ', 'uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ', 'yýỳỷỹỵÿYÝỲỶỸỴŸ', 'zžżźZŽŻŹ'];
      var handled = [];
      str.split('').forEach(function (ch) {
        dct.every(function (dct) {
          if (dct.indexOf(ch) !== -1) {
            if (handled.indexOf(dct) > -1) {
              return false;
            }
            str = str.replace(new RegExp('[' + dct + ']', 'gm' + sens), '[' + dct + ']');
            handled.push(dct);
          }
          return true;
        });
      });
      return str;
    }
  }, {
    key: 'createMergedBlanksRegExp',
    value: function createMergedBlanksRegExp(str) {
      return str.replace(/[\s]+/gmi, '[\\s]+');
    }
  }, {
    key: 'createAccuracyRegExp',
    value: function createAccuracyRegExp(str) {
      var _this = this;

      var chars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~¡¿';
      var acc = this.opt.accuracy,
          val = typeof acc === 'string' ? acc : acc.value,
          ls = typeof acc === 'string' ? [] : acc.limiters,
          lsJoin = '';
      ls.forEach(function (limiter) {
        lsJoin += '|' + _this.escapeStr(limiter);
      });
      switch (val) {
        case 'partially':
        default:
          return '()(' + str + ')';
        case 'complementary':
          lsJoin = '\\s' + (lsJoin ? lsJoin : this.escapeStr(chars));
          return '()([^' + lsJoin + ']*' + str + '[^' + lsJoin + ']*)';
        case 'exactly':
          return '(^|\\s' + lsJoin + ')(' + str + ')(?=$|\\s' + lsJoin + ')';
      }
    }
  }, {
    key: 'getSeparatedKeywords',
    value: function getSeparatedKeywords(sv) {
      var _this2 = this;

      var stack = [];
      sv.forEach(function (kw) {
        if (!_this2.opt.separateWordSearch) {
          if (kw.trim() && stack.indexOf(kw) === -1) {
            stack.push(kw);
          }
        } else {
          kw.split(' ').forEach(function (kwSplitted) {
            if (kwSplitted.trim() && stack.indexOf(kwSplitted) === -1) {
              stack.push(kwSplitted);
            }
          });
        }
      });
      return {
        'keywords': stack.sort(function (a, b) {
          return b.length - a.length;
        }),
        'length': stack.length
      };
    }
  }, {
    key: 'isNumeric',
    value: function isNumeric(value) {
      return Number(parseFloat(value)) == value;
    }
  }, {
    key: 'checkRanges',
    value: function checkRanges(array) {
      var _this3 = this;

      if (!Array.isArray(array) || Object.prototype.toString.call(array[0]) !== '[object Object]') {
        this.log('markRanges() will only accept an array of objects');
        this.opt.noMatch(array);
        return [];
      }
      var stack = [];
      var last = 0;
      array.sort(function (a, b) {
        return a.start - b.start;
      }).forEach(function (item) {
        var _callNoMatchOnInvalid = _this3.callNoMatchOnInvalidRanges(item, last),
            start = _callNoMatchOnInvalid.start,
            end = _callNoMatchOnInvalid.end,
            valid = _callNoMatchOnInvalid.valid;

        if (valid) {
          item.start = start;
          item.length = end - start;
          stack.push(item);
          last = end;
        }
      });
      return stack;
    }
  }, {
    key: 'callNoMatchOnInvalidRanges',
    value: function callNoMatchOnInvalidRanges(range, last) {
      var start = void 0,
          end = void 0,
          valid = false;
      if (range && typeof range.start !== 'undefined') {
        start = parseInt(range.start, 10);
        end = start + parseInt(range.length, 10);
        if (this.isNumeric(range.start) && this.isNumeric(range.length) && end - last > 0 && end - start > 0) {
          valid = true;
        } else {
          this.log('Ignoring invalid or overlapping range: ' + ('' + JSON.stringify(range)));
          this.opt.noMatch(range);
        }
      } else {
        this.log('Ignoring invalid range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      }
      return {
        start: start,
        end: end,
        valid: valid
      };
    }
  }, {
    key: 'checkWhitespaceRanges',
    value: function checkWhitespaceRanges(range, originalLength, string) {
      var end = void 0,
          valid = true,
          max = string.length,
          offset = originalLength - max,
          start = parseInt(range.start, 10) - offset;
      start = start > max ? max : start;
      end = start + parseInt(range.length, 10);
      if (end > max) {
        end = max;
        this.log('End range automatically set to the max value of ' + max);
      }
      if (start < 0 || end - start < 0 || start > max || end > max) {
        valid = false;
        this.log('Invalid range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      } else if (string.substring(start, end).replace(/\s+/g, '') === '') {
        valid = false;
        this.log('Skipping whitespace only range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      }
      return {
        start: start,
        end: end,
        valid: valid
      };
    }
  }, {
    key: 'getTextNodes',
    value: function getTextNodes(cb) {
      var _this4 = this;

      var val = '',
          nodes = [];
      this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function (node) {
        nodes.push({
          start: val.length,
          end: (val += node.textContent).length,
          node: node
        });
      }, function (node) {
        if (_this4.matchesExclude(node.parentNode)) {
          return NodeFilter.FILTER_REJECT;
        } else {
          return NodeFilter.FILTER_ACCEPT;
        }
      }, function () {
        cb({
          value: val,
          nodes: nodes
        });
      });
    }
  }, {
    key: 'matchesExclude',
    value: function matchesExclude(el) {
      return DOMIterator.matches(el, this.opt.exclude.concat(['script', 'style', 'title', 'head', 'html']));
    }
  }, {
    key: 'wrapRangeInTextNode',
    value: function wrapRangeInTextNode(node, start, end) {
      var hEl = !this.opt.element ? 'mark' : this.opt.element,
          startNode = node.splitText(start),
          ret = startNode.splitText(end - start);
      var repl = document.createElement(hEl);
      repl.setAttribute('data-markjs', 'true');
      if (this.opt.className) {
        repl.setAttribute('class', this.opt.className);
      }
      repl.textContent = startNode.textContent;
      startNode.parentNode.replaceChild(repl, startNode);
      return ret;
    }
  }, {
    key: 'wrapRangeInMappedTextNode',
    value: function wrapRangeInMappedTextNode(dict, start, end, filterCb, eachCb) {
      var _this5 = this;

      dict.nodes.every(function (n, i) {
        var sibl = dict.nodes[i + 1];
        if (typeof sibl === 'undefined' || sibl.start > start) {
          if (!filterCb(n.node)) {
            return false;
          }
          var s = start - n.start,
              e = (end > n.end ? n.end : end) - n.start,
              startStr = dict.value.substr(0, n.start),
              endStr = dict.value.substr(e + n.start);
          n.node = _this5.wrapRangeInTextNode(n.node, s, e);
          dict.value = startStr + endStr;
          dict.nodes.forEach(function (k, j) {
            if (j >= i) {
              if (dict.nodes[j].start > 0 && j !== i) {
                dict.nodes[j].start -= e;
              }
              dict.nodes[j].end -= e;
            }
          });
          end -= e;
          eachCb(n.node.previousSibling, n.start);
          if (end > n.end) {
            start = n.end;
          } else {
            return false;
          }
        }
        return true;
      });
    }
  }, {
    key: 'wrapMatches',
    value: function wrapMatches(regex, ignoreGroups, filterCb, eachCb, endCb) {
      var _this6 = this;

      var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
      this.getTextNodes(function (dict) {
        dict.nodes.forEach(function (node) {
          node = node.node;
          var match = void 0;
          while ((match = regex.exec(node.textContent)) !== null && match[matchIdx] !== '') {
            if (!filterCb(match[matchIdx], node)) {
              continue;
            }
            var pos = match.index;
            if (matchIdx !== 0) {
              for (var i = 1; i < matchIdx; i++) {
                pos += match[i].length;
              }
            }
            node = _this6.wrapRangeInTextNode(node, pos, pos + match[matchIdx].length);
            eachCb(node.previousSibling);
            regex.lastIndex = 0;
          }
        });
        endCb();
      });
    }
  }, {
    key: 'wrapMatchesAcrossElements',
    value: function wrapMatchesAcrossElements(regex, ignoreGroups, filterCb, eachCb, endCb) {
      var _this7 = this;

      var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
      this.getTextNodes(function (dict) {
        var match = void 0;
        while ((match = regex.exec(dict.value)) !== null && match[matchIdx] !== '') {
          var start = match.index;
          if (matchIdx !== 0) {
            for (var i = 1; i < matchIdx; i++) {
              start += match[i].length;
            }
          }
          var end = start + match[matchIdx].length;
          _this7.wrapRangeInMappedTextNode(dict, start, end, function (node) {
            return filterCb(match[matchIdx], node);
          }, function (node, lastIndex) {
            regex.lastIndex = lastIndex;
            eachCb(node);
          });
        }
        endCb();
      });
    }
  }, {
    key: 'wrapRangeFromIndex',
    value: function wrapRangeFromIndex(ranges, filterCb, eachCb, endCb) {
      var _this8 = this;

      this.getTextNodes(function (dict) {
        var originalLength = dict.value.length;
        ranges.forEach(function (range, counter) {
          var _checkWhitespaceRange = _this8.checkWhitespaceRanges(range, originalLength, dict.value),
              start = _checkWhitespaceRange.start,
              end = _checkWhitespaceRange.end,
              valid = _checkWhitespaceRange.valid;

          if (valid) {
            _this8.wrapRangeInMappedTextNode(dict, start, end, function (node) {
              return filterCb(node, range, dict.value.substring(start, end), counter);
            }, function (node) {
              eachCb(node, range);
            });
          }
        });
        endCb();
      });
    }
  }, {
    key: 'unwrapMatches',
    value: function unwrapMatches(node) {
      var parent = node.parentNode;
      var docFrag = document.createDocumentFragment();
      while (node.firstChild) {
        docFrag.appendChild(node.removeChild(node.firstChild));
      }
      parent.replaceChild(docFrag, node);
      if (!this.ie) {
        parent.normalize();
      } else {
        this.normalizeTextNode(parent);
      }
    }
  }, {
    key: 'normalizeTextNode',
    value: function normalizeTextNode(node) {
      if (!node) {
        return;
      }
      if (node.nodeType === 3) {
        while (node.nextSibling && node.nextSibling.nodeType === 3) {
          node.nodeValue += node.nextSibling.nodeValue;
          node.parentNode.removeChild(node.nextSibling);
        }
      } else {
        this.normalizeTextNode(node.firstChild);
      }
      this.normalizeTextNode(node.nextSibling);
    }
  }, {
    key: 'markRegExp',
    value: function markRegExp(regexp, opt) {
      var _this9 = this;

      this.opt = opt;
      this.log('Searching with expression "' + regexp + '"');
      var totalMatches = 0,
          fn = 'wrapMatches';
      var eachCb = function eachCb(element) {
        totalMatches++;
        _this9.opt.each(element);
      };
      if (this.opt.acrossElements) {
        fn = 'wrapMatchesAcrossElements';
      }
      this[fn](regexp, this.opt.ignoreGroups, function (match, node) {
        return _this9.opt.filter(node, match, totalMatches);
      }, eachCb, function () {
        if (totalMatches === 0) {
          _this9.opt.noMatch(regexp);
        }
        _this9.opt.done(totalMatches);
      });
    }
  }, {
    key: 'mark',
    value: function mark(sv, opt) {
      var _this10 = this;

      this.opt = opt;
      var totalMatches = 0,
          fn = 'wrapMatches';

      var _getSeparatedKeywords = this.getSeparatedKeywords(typeof sv === 'string' ? [sv] : sv),
          kwArr = _getSeparatedKeywords.keywords,
          kwArrLen = _getSeparatedKeywords.length,
          sens = this.opt.caseSensitive ? '' : 'i',
          handler = function handler(kw) {
        var regex = new RegExp(_this10.createRegExp(kw), 'gm' + sens),
            matches = 0;
        _this10.log('Searching with expression "' + regex + '"');
        _this10[fn](regex, 1, function (term, node) {
          return _this10.opt.filter(node, kw, totalMatches, matches);
        }, function (element) {
          matches++;
          totalMatches++;
          _this10.opt.each(element);
        }, function () {
          if (matches === 0) {
            _this10.opt.noMatch(kw);
          }
          if (kwArr[kwArrLen - 1] === kw) {
            _this10.opt.done(totalMatches);
          } else {
            handler(kwArr[kwArr.indexOf(kw) + 1]);
          }
        });
      };

      if (this.opt.acrossElements) {
        fn = 'wrapMatchesAcrossElements';
      }
      if (kwArrLen === 0) {
        this.opt.done(totalMatches);
      } else {
        handler(kwArr[0]);
      }
    }
  }, {
    key: 'markRanges',
    value: function markRanges(rawRanges, opt) {
      var _this11 = this;

      this.opt = opt;
      var totalMatches = 0,
          ranges = this.checkRanges(rawRanges);
      if (ranges && ranges.length) {
        this.log('Starting to mark with the following ranges: ' + JSON.stringify(ranges));
        this.wrapRangeFromIndex(ranges, function (node, range, match, counter) {
          return _this11.opt.filter(node, range, match, counter);
        }, function (element, range) {
          totalMatches++;
          _this11.opt.each(element, range);
        }, function () {
          _this11.opt.done(totalMatches);
        });
      } else {
        this.opt.done(totalMatches);
      }
    }
  }, {
    key: 'unmark',
    value: function unmark(opt) {
      var _this12 = this;

      this.opt = opt;
      var sel = this.opt.element ? this.opt.element : '*';
      sel += '[data-markjs]';
      if (this.opt.className) {
        sel += '.' + this.opt.className;
      }
      this.log('Removal selector "' + sel + '"');
      this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function (node) {
        _this12.unwrapMatches(node);
      }, function (node) {
        var matchesSel = DOMIterator.matches(node, sel),
            matchesExclude = _this12.matchesExclude(node);
        if (!matchesSel || matchesExclude) {
          return NodeFilter.FILTER_REJECT;
        } else {
          return NodeFilter.FILTER_ACCEPT;
        }
      }, this.opt.done);
    }
  }, {
    key: 'opt',
    set: function set$$1(val) {
      this._opt = _extends({}, {
        'element': '',
        'className': '',
        'exclude': [],
        'iframes': false,
        'iframesTimeout': 5000,
        'separateWordSearch': true,
        'diacritics': true,
        'synonyms': {},
        'accuracy': 'partially',
        'acrossElements': false,
        'caseSensitive': false,
        'ignoreJoiners': false,
        'ignoreGroups': 0,
        'ignorePunctuation': [],
        'wildcards': 'disabled',
        'each': function each() {},
        'noMatch': function noMatch() {},
        'filter': function filter() {
          return true;
        },
        'done': function done() {},
        'debug': false,
        'log': window.console
      }, val);
    },
    get: function get$$1() {
      return this._opt;
    }
  }, {
    key: 'iterator',
    get: function get$$1() {
      return new DOMIterator(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout);
    }
  }]);
  return Mark;
}();

function Mark(ctx) {
  var _this = this;

  var instance = new Mark$1(ctx);
  this.mark = function (sv, opt) {
    instance.mark(sv, opt);
    return _this;
  };
  this.markRegExp = function (sv, opt) {
    instance.markRegExp(sv, opt);
    return _this;
  };
  this.markRanges = function (sv, opt) {
    instance.markRanges(sv, opt);
    return _this;
  };
  this.unmark = function (opt) {
    instance.unmark(opt);
    return _this;
  };
  return this;
}

return Mark;

})));


/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function(){var t=this;(function(){(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener}(),visit:function(t,r){return e.controller.visit(t,r)},clearCache:function(){return e.controller.clearCache()},setProgressBarDelay:function(t){return e.controller.setProgressBarDelay(t)}}}).call(this)}).call(t);var e=t.Turbolinks;(function(){(function(){var t,r,n,o=[].slice;e.copyObject=function(t){var e,r,n;r={};for(e in t)n=t[e],r[e]=n;return r},e.closest=function(e,r){return t.call(e,r)},t=function(){var t,e;return t=document.documentElement,null!=(e=t.closest)?e:function(t){var e;for(e=this;e;){if(e.nodeType===Node.ELEMENT_NODE&&r.call(e,t))return e;e=e.parentNode}}}(),e.defer=function(t){return setTimeout(t,1)},e.throttle=function(t){var e;return e=null,function(){var r;return r=1<=arguments.length?o.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(n){return function(){return e=null,t.apply(n,r)}}(this))}},e.dispatch=function(t,e){var r,o,i,s,a,u;return a=null!=e?e:{},u=a.target,r=a.cancelable,o=a.data,i=document.createEvent("Events"),i.initEvent(t,!0,r===!0),i.data=null!=o?o:{},i.cancelable&&!n&&(s=i.preventDefault,i.preventDefault=function(){return this.defaultPrevented||Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),s.call(this)}),(null!=u?u:document).dispatchEvent(i),i},n=function(){var t;return t=document.createEvent("Events"),t.initEvent("test",!0,!0),t.preventDefault(),t.defaultPrevented}(),e.match=function(t,e){return r.call(t,e)},r=function(){var t,e,r,n;return t=document.documentElement,null!=(e=null!=(r=null!=(n=t.matchesSelector)?n:t.webkitMatchesSelector)?r:t.msMatchesSelector)?e:t.mozMatchesSelector}(),e.uuid=function(){var t,e,r;for(r="",t=e=1;36>=e;t=++e)r+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return r}}).call(this),function(){e.Location=function(){function t(t){var e,r;null==t&&(t=""),r=document.createElement("a"),r.href=t.toString(),this.absoluteURL=r.href,e=r.hash.length,2>e?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=r.hash.slice(1))}var e,r,n,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=r(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},r=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return n(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},n=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.HttpRequest=function(){function r(r,n,o){this.delegate=r,this.requestCanceled=t(this.requestCanceled,this),this.requestTimedOut=t(this.requestTimedOut,this),this.requestFailed=t(this.requestFailed,this),this.requestLoaded=t(this.requestLoaded,this),this.requestProgressed=t(this.requestProgressed,this),this.url=e.Location.wrap(n).requestURL,this.referrer=e.Location.wrap(o).absoluteURL,this.createXHR()}return r.NETWORK_FAILURE=0,r.TIMEOUT_FAILURE=-1,r.timeout=60,r.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},r.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},r.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},r.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},r.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},r.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},r.prototype.requestCanceled=function(){return this.endRequest()},r.prototype.notifyApplicationBeforeRequestStart=function(){return e.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},r.prototype.notifyApplicationAfterRequestEnd=function(){return e.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},r.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},r.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},r.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},r.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ProgressBar=function(){function e(){this.trickle=t(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var r;return r=300,e.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+r+"ms ease-out, opacity "+r/2+"ms "+r/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",e.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},e.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},e.prototype.setValue=function(t){return this.value=t,this.refresh()},e.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},e.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},e.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*r)},e.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},e.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,r)},e.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},e.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},e.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},e.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},e.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.BrowserAdapter=function(){function r(r){this.controller=r,this.showProgressBar=t(this.showProgressBar,this),this.progressBar=new e.ProgressBar}var n,o,i;return i=e.HttpRequest,n=i.NETWORK_FAILURE,o=i.TIMEOUT_FAILURE,r.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},r.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},r.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},r.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},r.prototype.visitRequestCompleted=function(t){return t.loadResponse()},r.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case n:case o:return this.reload();default:return t.loadResponse()}},r.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},r.prototype.visitCompleted=function(t){return t.followRedirect()},r.prototype.pageInvalidated=function(){return this.reload()},r.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,this.controller.progressBarDelay)},r.prototype.showProgressBar=function(){return this.progressBar.show()},r.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},r.prototype.reload=function(){return window.location.reload()},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.History=function(){function r(e){this.delegate=e,this.onPageLoad=t(this.onPageLoad,this),this.onPopState=t(this.onPopState,this)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},r.prototype.push=function(t,r){return t=e.Location.wrap(t),this.update("push",t,r)},r.prototype.replace=function(t,r){return t=e.Location.wrap(t),this.update("replace",t,r)},r.prototype.onPopState=function(t){var r,n,o,i;return this.shouldHandlePopState()&&(i=null!=(n=t.state)?n.turbolinks:void 0)?(r=e.Location.wrap(window.location),o=i.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(r,o)):void 0},r.prototype.onPageLoad=function(t){return e.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},r.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},r.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},r.prototype.update=function(t,e,r){var n;return n={turbolinks:{restorationIdentifier:r}},history[t+"State"](n,null,e)},r}()}.call(this),function(){e.HeadDetails=function(){function t(t){var e,r,n,s,a,u;for(this.elements={},n=0,a=t.length;a>n;n++)u=t[n],u.nodeType===Node.ELEMENT_NODE&&(s=u.outerHTML,r=null!=(e=this.elements)[s]?e[s]:e[s]={type:i(u),tracked:o(u),elements:[]},r.elements.push(u))}var e,r,n,o,i;return t.fromHeadElement=function(t){var e;return new this(null!=(e=null!=t?t.childNodes:void 0)?e:[])},t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var r,n;r=this.elements,n=[];for(t in r)e=r[t].tracked,e&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var r,n,o,i,s,a;o=this.elements,s=[];for(n in o)i=o[n],a=i.type,r=i.elements,a!==t||e.hasElementWithKey(n)||s.push(r[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,r,n,o,i,s;r=[],n=this.elements;for(e in n)o=n[e],s=o.type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&r.push.apply(r,t.slice(1)):r.push.apply(r,t);return r},t.prototype.getMetaValue=function(t){var e;return null!=(e=this.findMetaElementByName(t))?e.getAttribute("content"):void 0},t.prototype.findMetaElementByName=function(t){var r,n,o,i;r=void 0,i=this.elements;for(o in i)n=i[o].elements,e(n[0],t)&&(r=n[0]);return r},i=function(t){return r(t)?"script":n(t)?"stylesheet":void 0},o=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},r=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},n=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},e=function(t,e){var r;return r=t.tagName.toLowerCase(),"meta"===r&&t.getAttribute("name")===e},t}()}.call(this),function(){e.Snapshot=function(){function t(t,e){this.headDetails=t,this.bodyElement=e}return t.wrap=function(t){return t instanceof this?t:"string"==typeof t?this.fromHTMLString(t):this.fromHTMLElement(t)},t.fromHTMLString=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromHTMLElement(e)},t.fromHTMLElement=function(t){var r,n,o,i;return o=t.querySelector("head"),r=null!=(i=t.querySelector("body"))?i:document.createElement("body"),n=e.HeadDetails.fromHeadElement(o),new this(n,r)},t.prototype.clone=function(){return new this.constructor(this.headDetails,this.bodyElement.cloneNode(!0))},t.prototype.getRootLocation=function(){var t,r;return r=null!=(t=this.getSetting("root"))?t:"/",new e.Location(r)},t.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},t.prototype.getElementForAnchor=function(t){try{return this.bodyElement.querySelector("[id='"+t+"'], a[name='"+t+"']")}catch(e){}},t.prototype.getPermanentElements=function(){return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")},t.prototype.getPermanentElementById=function(t){return this.bodyElement.querySelector("#"+t+"[data-turbolinks-permanent]")},t.prototype.getPermanentElementsPresentInSnapshot=function(t){var e,r,n,o,i;for(o=this.getPermanentElements(),i=[],r=0,n=o.length;n>r;r++)e=o[r],t.getPermanentElementById(e.id)&&i.push(e);return i},t.prototype.findFirstAutofocusableElement=function(){return this.bodyElement.querySelector("[autofocus]")},t.prototype.hasAnchor=function(t){return null!=this.getElementForAnchor(t)},t.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},t.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},t.prototype.isVisitable=function(){return"reload"!==this.getSetting("visit-control")},t.prototype.getSetting=function(t){return this.headDetails.getMetaValue("turbolinks-"+t)},t}()}.call(this),function(){var t=[].slice;e.Renderer=function(){function e(){}var r;return e.render=function(){var e,r,n,o;return n=arguments[0],r=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],o=function(t,e,r){r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return Object(o)===o?o:n}(this,e,function(){}),o.delegate=n,o.render(r),o},e.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},e.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},e.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,e.async=!1,r(e,t),e)},r=function(t,e){var r,n,o,i,s,a,u;for(i=e.attributes,a=[],r=0,n=i.length;n>r;r++)s=i[r],o=s.name,u=s.value,a.push(t.setAttribute(o,u));return a},e}()}.call(this),function(){var t,r,n=function(t,e){function r(){this.constructor=t}for(var n in e)o.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;e.SnapshotRenderer=function(e){function o(t,e,r){this.currentSnapshot=t,this.newSnapshot=e,this.isPreview=r,this.currentHeadDetails=this.currentSnapshot.headDetails,this.newHeadDetails=this.newSnapshot.headDetails,this.currentBody=this.currentSnapshot.bodyElement,this.newBody=this.newSnapshot.bodyElement}return n(o,e),o.prototype.render=function(t){return this.shouldRender()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.isPreview||e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},o.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},o.prototype.replaceBody=function(){var t;return t=this.relocateCurrentBodyPermanentElements(),this.activateNewBodyScriptElements(),this.assignNewBody(),this.replacePlaceholderElementsWithClonedPermanentElements(t)},o.prototype.shouldRender=function(){return this.newSnapshot.isVisitable()&&this.trackedElementsAreIdentical()},o.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},o.prototype.copyNewHeadStylesheetElements=function(){var t,e,r,n,o;for(n=this.getNewHeadStylesheetElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.copyNewHeadScriptElements=function(){var t,e,r,n,o;for(n=this.getNewHeadScriptElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},o.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getCurrentHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.removeChild(t));return o},o.prototype.copyNewHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getNewHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.relocateCurrentBodyPermanentElements=function(){var e,n,o,i,s,a,u;for(a=this.getCurrentBodyPermanentElements(),u=[],e=0,n=a.length;n>e;e++)i=a[e],s=t(i),o=this.newSnapshot.getPermanentElementById(i.id),r(i,s.element),r(o,i),u.push(s);return u},o.prototype.replacePlaceholderElementsWithClonedPermanentElements=function(t){var e,n,o,i,s,a,u;for(u=[],o=0,i=t.length;i>o;o++)a=t[o],n=a.element,s=a.permanentElement,e=s.cloneNode(!0),u.push(r(n,e));return u},o.prototype.activateNewBodyScriptElements=function(){var t,e,n,o,i,s;for(i=this.getNewBodyScriptElements(),s=[],e=0,o=i.length;o>e;e++)n=i[e],t=this.createScriptElement(n),s.push(r(n,t));return s},o.prototype.assignNewBody=function(){return document.body=this.newBody},o.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.newSnapshot.findFirstAutofocusableElement())?t.focus():void 0},o.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},o.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},o.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},o.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},o.prototype.getCurrentBodyPermanentElements=function(){return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)},o.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},o}(e.Renderer),t=function(t){var e;return e=document.createElement("meta"),e.setAttribute("name","turbolinks-permanent-placeholder"),e.setAttribute("content",t.id),{element:e,permanentElement:t}},r=function(t,e){var r;return(r=t.parentNode)?r.replaceChild(e,t):void 0}}.call(this),function(){var t=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;e.ErrorRenderer=function(e){function r(t){var e;e=document.createElement("html"),e.innerHTML=t,this.newHead=e.querySelector("head"),this.newBody=e.querySelector("body")}return t(r,e),r.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceHeadAndBody(),e.activateBodyScriptElements(),t()}}(this))},r.prototype.replaceHeadAndBody=function(){var t,e;return e=document.head,t=document.body,e.parentNode.replaceChild(this.newHead,e),t.parentNode.replaceChild(this.newBody,t)},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},r}(e.Renderer)}.call(this),function(){e.View=function(){function t(t){this.delegate=t,this.htmlElement=document.documentElement}return t.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},t.prototype.getElementForAnchor=function(t){return this.getSnapshot().getElementForAnchor(t)},t.prototype.getSnapshot=function(){return e.Snapshot.fromHTMLElement(this.htmlElement)},t.prototype.render=function(t,e){var r,n,o;return o=t.snapshot,r=t.error,n=t.isPreview,this.markAsPreview(n),null!=o?this.renderSnapshot(o,n,e):this.renderError(r,e)},t.prototype.markAsPreview=function(t){return t?this.htmlElement.setAttribute("data-turbolinks-preview",""):this.htmlElement.removeAttribute("data-turbolinks-preview")},t.prototype.renderSnapshot=function(t,r,n){return e.SnapshotRenderer.render(this.delegate,n,this.getSnapshot(),e.Snapshot.wrap(t),r)},t.prototype.renderError=function(t,r){return e.ErrorRenderer.render(this.delegate,r,t)},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ScrollManager=function(){function r(r){this.delegate=r,this.onScroll=t(this.onScroll,this),this.onScroll=e.throttle(this.onScroll)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},r.prototype.scrollToElement=function(t){return t.scrollIntoView()},r.prototype.scrollToPosition=function(t){var e,r;return e=t.x,r=t.y,window.scrollTo(e,r)},r.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},r.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},r}()}.call(this),function(){e.SnapshotCache=function(){function t(t){this.size=t,this.keys=[],this.snapshots={}}var r;return t.prototype.has=function(t){var e;return e=r(t),e in this.snapshots},t.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},t.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},t.prototype.read=function(t){var e;return e=r(t),this.snapshots[e]},t.prototype.write=function(t,e){var n;return n=r(t),this.snapshots[n]=e},t.prototype.touch=function(t){var e,n;return n=r(t),e=this.keys.indexOf(n),e>-1&&this.keys.splice(e,1),this.keys.unshift(n),this.trim()},t.prototype.trim=function(){var t,e,r,n,o;for(n=this.keys.splice(this.size),o=[],t=0,r=n.length;r>t;t++)e=n[t],o.push(delete this.snapshots[e]);return o},r=function(t){return e.Location.wrap(t).toCacheKey()},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Visit=function(){function r(r,n,o){this.controller=r,this.action=o,this.performScroll=t(this.performScroll,this),this.identifier=e.uuid(),this.location=e.Location.wrap(n),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var n;return r.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},r.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},r.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},r.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},r.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=n(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},r.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new e.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},r.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},r.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},r.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var r;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(r=this.adapter).visitRendered&&r.visitRendered(this),t?void 0:this.complete()})):void 0},r.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},r.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},r.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},r.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},r.prototype.requestCompletedWithResponse=function(t,r){return this.response=t,null!=r&&(this.redirectedToLocation=e.Location.wrap(r)),this.adapter.visitRequestCompleted(this)},r.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},r.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},r.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},r.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},r.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},r.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},r.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},r.prototype.getTimingMetrics=function(){return e.copyObject(this.timingMetrics)},n=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},r.prototype.shouldIssueRequest=function(){return"restore"===this.action?!this.hasCachedSnapshot():!0},r.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},r.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},r.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Controller=function(){function r(){this.clickBubbled=t(this.clickBubbled,this),this.clickCaptured=t(this.clickCaptured,this),this.pageLoaded=t(this.pageLoaded,this),this.history=new e.History(this),this.view=new e.View(this),this.scrollManager=new e.ScrollManager(this),this.restorationData={},this.clearCache(),this.setProgressBarDelay(500)}return r.prototype.start=function(){return e.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},r.prototype.disable=function(){return this.enabled=!1},r.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},r.prototype.clearCache=function(){return this.cache=new e.SnapshotCache(10)},r.prototype.visit=function(t,r){var n,o;return null==r&&(r={}),t=e.Location.wrap(t),this.applicationAllowsVisitingLocation(t)?this.locationIsVisitable(t)?(n=null!=(o=r.action)?o:"advance",this.adapter.visitProposedToLocationWithAction(t,n)):window.location=t:void 0},r.prototype.startVisitToLocationWithAction=function(t,r,n){var o;return e.supported?(o=this.getRestorationDataForIdentifier(n),this.startVisit(t,r,{restorationData:o})):window.location=t},r.prototype.setProgressBarDelay=function(t){return this.progressBarDelay=t},r.prototype.startHistory=function(){return this.location=e.Location.wrap(window.location),this.restorationIdentifier=e.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.stopHistory=function(){return this.history.stop()},r.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.push(this.location,this.restorationIdentifier)},r.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.historyPoppedToLocationWithRestorationIdentifier=function(t,r){var n;return this.restorationIdentifier=r,this.enabled?(n=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(t,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:n,historyChanged:!0}),this.location=e.Location.wrap(t)):this.adapter.pageInvalidated()},r.prototype.getCachedSnapshotForLocation=function(t){var e;return null!=(e=this.cache.get(t))?e.clone():void 0},r.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable();
},r.prototype.cacheSnapshot=function(){var t,r;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),r=this.view.getSnapshot(),t=this.lastRenderedLocation,e.defer(function(e){return function(){return e.cache.put(t,r.clone())}}(this))):void 0},r.prototype.scrollToAnchor=function(t){var e;return(e=this.view.getElementForAnchor(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},r.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},r.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},r.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},r.prototype.render=function(t,e){return this.view.render(t,e)},r.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},r.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},r.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},r.prototype.pageLoaded=function(){return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},r.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},r.prototype.clickBubbled=function(t){var e,r,n;return this.enabled&&this.clickEventIsSignificant(t)&&(r=this.getVisitableLinkForNode(t.target))&&(n=this.getVisitableLocationForLink(r))&&this.applicationAllowsFollowingLinkToLocation(r,n)?(t.preventDefault(),e=this.getActionForLink(r),this.visit(n,{action:e})):void 0},r.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var r;return r=this.notifyApplicationAfterClickingLinkToLocation(t,e),!r.defaultPrevented},r.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},r.prototype.notifyApplicationAfterClickingLinkToLocation=function(t,r){return e.dispatch("turbolinks:click",{target:t,data:{url:r.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationBeforeVisitingLocation=function(t){return e.dispatch("turbolinks:before-visit",{data:{url:t.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationAfterVisitingLocation=function(t){return e.dispatch("turbolinks:visit",{data:{url:t.absoluteURL}})},r.prototype.notifyApplicationBeforeCachingSnapshot=function(){return e.dispatch("turbolinks:before-cache")},r.prototype.notifyApplicationBeforeRender=function(t){return e.dispatch("turbolinks:before-render",{data:{newBody:t}})},r.prototype.notifyApplicationAfterRender=function(){return e.dispatch("turbolinks:render")},r.prototype.notifyApplicationAfterPageLoad=function(t){return null==t&&(t={}),e.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:t}})},r.prototype.startVisit=function(t,e,r){var n;return null!=(n=this.currentVisit)&&n.cancel(),this.currentVisit=this.createVisit(t,e,r),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},r.prototype.createVisit=function(t,r,n){var o,i,s,a,u;return i=null!=n?n:{},a=i.restorationIdentifier,s=i.restorationData,o=i.historyChanged,u=new e.Visit(this,t,r),u.restorationIdentifier=null!=a?a:e.uuid(),u.restorationData=e.copyObject(s),u.historyChanged=o,u.referrer=this.location,u},r.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},r.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},r.prototype.getVisitableLinkForNode=function(t){return this.nodeIsVisitable(t)?e.closest(t,"a[href]:not([target]):not([download])"):void 0},r.prototype.getVisitableLocationForLink=function(t){var r;return r=new e.Location(t.getAttribute("href")),this.locationIsVisitable(r)?r:void 0},r.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},r.prototype.nodeIsVisitable=function(t){var r;return(r=e.closest(t,"[data-turbolinks]"))?"false"!==r.getAttribute("data-turbolinks"):!0},r.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},r.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},r.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},r}()}.call(this),function(){!function(){var t,e;if((t=e=document.currentScript)&&!e.hasAttribute("data-turbolinks-suppress-warning"))for(;t=t.parentNode;)if(t===document.body)return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",e.outerHTML)}()}.call(this),function(){var t,r,n;e.start=function(){return r()?(null==e.controller&&(e.controller=t()),e.controller.start()):void 0},r=function(){return null==window.Turbolinks&&(window.Turbolinks=e),n()},t=function(){var t;return t=new e.Controller,t.adapter=new e.BrowserAdapter(t),t},n=function(){return window.Turbolinks===e},n()&&e.start()}.call(this)}).call(this), true&&module.exports?module.exports=e: true&&!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}).call(this);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var expose_loader_$_expose_loader_jQuery_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! expose-loader?$!expose-loader?jQuery!jquery */ "./node_modules/expose-loader/index.js?$!./node_modules/expose-loader/index.js?jQuery!./node_modules/jquery/dist/jquery.js-exposed");
/* harmony import */ var expose_loader_$_expose_loader_jQuery_jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(expose_loader_$_expose_loader_jQuery_jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_mousewheel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-mousewheel */ "./node_modules/jquery-mousewheel/jquery.mousewheel.js");
/* harmony import */ var jquery_mousewheel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_mousewheel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-slimscroll */ "./node_modules/jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-sass */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js");
/* harmony import */ var bootstrap_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_notify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-notify */ "./node_modules/bootstrap-notify/bootstrap-notify.js");
/* harmony import */ var bootstrap_notify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_notify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mark.js */ "./node_modules/mark.js/dist/mark.js");
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mark_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var timepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! timepicker */ "./node_modules/timepicker/jquery.timepicker.min.js");
/* harmony import */ var timepicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(timepicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datepair_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datepair.js */ "./node_modules/datepair.js/dist/datepair.js");
/* harmony import */ var datepair_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datepair_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-colorpicker */ "./node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js");
/* harmony import */ var bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var fontawesome_iconpicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fontawesome-iconpicker */ "./node_modules/fontawesome-iconpicker/dist/js/fontawesome-iconpicker.js");
/* harmony import */ var fontawesome_iconpicker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fontawesome_iconpicker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vendor_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vendor/intl-tel-input */ "./resources/js/vendor/intl-tel-input.js");
/* harmony import */ var _vendor_intl_tel_input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_vendor_intl_tel_input__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_daterangepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap-daterangepicker */ "./node_modules/bootstrap-daterangepicker/daterangepicker.js");
/* harmony import */ var bootstrap_daterangepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap_daterangepicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var intl_tel_input_build_js_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! intl-tel-input/build/js/utils */ "./node_modules/intl-tel-input/build/js/utils.js");
/* harmony import */ var intl_tel_input_build_js_utils__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input_build_js_utils__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var datepair_js_src_jquery_datepair__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! datepair.js/src/jquery.datepair */ "./node_modules/datepair.js/src/jquery.datepair.js");
/* harmony import */ var datepair_js_src_jquery_datepair__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(datepair_js_src_jquery_datepair__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _vendor_bootstrap_popover_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vendor/bootstrap-popover-picker */ "./resources/js/vendor/bootstrap-popover-picker.js");
/* harmony import */ var _vendor_bootstrap_popover_picker__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_popover_picker__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _vendor_pace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vendor/pace */ "./resources/js/vendor/pace.js");
/* harmony import */ var _vendor_pace__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_vendor_pace__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _vendor_slugify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vendor/slugify */ "./resources/js/vendor/slugify.js");
/* harmony import */ var _vendor_slugify__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_vendor_slugify__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var hashids__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! hashids */ "./node_modules/hashids/dist/hashids.min.js");
/* harmony import */ var hashids__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(hashids__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _vendor_jquery_validation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vendor/jquery.validation */ "./resources/js/vendor/jquery.validation.js");
/* harmony import */ var _vendor_jquery_validation__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_validation__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var expose_loader_moment_moment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! expose-loader?moment!moment */ "./node_modules/expose-loader/index.js?moment!./node_modules/moment/moment.js-exposed");
/* harmony import */ var expose_loader_moment_moment__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(expose_loader_moment_moment__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var expose_loader_implicitForms_vendor_jquery_implicitforms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! expose-loader?implicitForms!./vendor/jquery.implicitforms */ "./node_modules/expose-loader/index.js?implicitForms!./resources/js/vendor/jquery.implicitforms.js-exposed");
/* harmony import */ var expose_loader_implicitForms_vendor_jquery_implicitforms__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(expose_loader_implicitForms_vendor_jquery_implicitforms__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var admin_lte__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! admin-lte */ "./node_modules/admin-lte/dist/js/adminlte.min.js");
/* harmony import */ var admin_lte__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(admin_lte__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_24__);
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
// Bind variables to window object
 // import 'expose-loader?routes!../../public/js/routes';
// Mouse interaction


 // Bootstrap


 // Pickers










 // Misc








 // Translations
// import Lang from './vendor/lang';
// import messages from '../../public/js/messages';
// window.Lang = new Lang({ messages });

window.hashids = new hashids__WEBPACK_IMPORTED_MODULE_18___default.a(Object({"NODE_ENV":"development"}).MIX_HASHIDS_KEY, Object({"NODE_ENV":"development"}).MIX_HASHIDS_LENGTH, Object({"NODE_ENV":"development"}).MIX_HASHIDS_ALPHABET); // Theme



turbolinks__WEBPACK_IMPORTED_MODULE_24___default.a.start(); // Persist page scroll position

turbolinks__WEBPACK_IMPORTED_MODULE_24___default.a.scroll = {};
document.addEventListener('click', function (event) {
  if (event.target.getAttribute('data-turbolinks-scroll') !== 'false') return;
  turbolinks__WEBPACK_IMPORTED_MODULE_24___default.a.scroll.top = document.documentElement.scrollTop;
});
dropzone__WEBPACK_IMPORTED_MODULE_19___default.a.autoDiscover = false;

window.highlight_errored_accordion = function () {
  // Highlight errored accordion
  if ($('.panel-collapse:has(.has-error)').length && $('.panel-collapse:has(.has-error)').first().siblings().find("a[data-parent='#accordion']").length && $('.panel-collapse:has(.has-error)').first().siblings().find("a[data-parent='#accordion']").hasClass('collapsed')) {
    $('.panel-collapse:has(.has-error)').first().siblings().find("a[data-parent*='accordion']").trigger('click'); // @TODO: focus first errored field
  }

  if ($('.panel-collapse:has(.has-error)').first().find('.panel-collapse:has(.has-error)').length && $('.panel-collapse:has(.has-error)').first().find('.panel-collapse:has(.has-error)').first().siblings().find("a[data-parent*='accordion']").hasClass('collapsed')) {
    $('.panel-collapse:has(.has-error)').first().find('.panel-collapse:has(.has-error)').first().siblings().find("a[data-parent*='accordion']").trigger('click'); // @TODO: focus first errored field
  }
};

window.highlight_required = function () {
  $('input, select, textarea').each(function (index, element) {
    if ($(element).prop('required') && !$(element).closest('.form-group').find('label:first').find('.required-asterisk').length) {
      $(element).closest('.form-group').find('label:first').append(' <span class="text-red required-asterisk">*</span>');
    }
  });
};

window.addEventListener('turbolinks:load', function () {
  // Fake window onload trigger (dirty temp solution!)
  $(window).trigger('load'); // This is a workaround to handle the SPA nature of turbolinks

  window.BookableRangeReady = true;
  $(document).trigger('bookablerange.ready'); // Persist page scroll position

  if (turbolinks__WEBPACK_IMPORTED_MODULE_24___default.a.scroll.top) {
    document.documentElement.scrollTop = turbolinks__WEBPACK_IMPORTED_MODULE_24___default.a.scroll.top;
    turbolinks__WEBPACK_IMPORTED_MODULE_24___default.a.scroll = {};
  } // Initialize dropzone(s)
  // $('.dropzone').dropzone({
  //     parallelUploads: 1,
  //     init: function() {
  //         this.on('queuecomplete', function(file) {
  //             window.location = routes.route(
  //                 window.Accessarea + '.' + window.location.pathname.split('/')[2] + '.index'
  //             );
  //         });
  //         this.on('addedfile', function(file) {
  //             this.options.acceptedFiles = $(this.element).attr('data-dz-accepted-files');
  //         });
  //         this.on('error', function(file, response) {
  //             $(file.previewElement)
  //                 .find('.dz-error-message')
  //                 .text(response.errors ? response.errors.file[0] : response);
  //         });
  //     },
  // });
  // Phone field
  // $('input[type="tel"]').intlTelInput({
  //     isValidNumber: true,
  //     hiddenInput: 'phone',
  //     initialCountry: 'auto',
  //     formatOnDisplay: false,
  //     autoPlaceholder: 'aggressive',
  //     preferredCountries: [],
  //     geoIpLookup: function(callback) {
  //         $.ajax({
  //             method: 'POST',
  //             data: {
  //                 _token: window.Laravel.csrfToken,
  //             },
  //             url: routes.route('frontarea.country'),
  //             success: function(response) {
  //                 callback(response);
  //             },
  //         });
  //     },
  // });


  $('input[type="tel"]').blur(function (event) {
    var phone = $(event.target);
    var formGroup = phone.closest('.form-group');
    var helpBlock = formGroup.find('.help-block');

    if ($.trim(phone.val())) {
      if (phone.intlTelInput('isValidNumber')) {
        formGroup.removeClass('has-error');
        helpBlock.addClass('hide');
      } else {
        formGroup.addClass('has-error');
        helpBlock.removeClass('hide');
      }
    }
  }); // Color Picker

  $('.color-picker').colorpicker(); // Icon Picker

  $('.icon-picker').iconpicker(); // Style Picker

  $('.style-picker').picker({
    templates: {
      pickerItem: '<div class="picker-item"><i class="hidden"></i></div>'
    },
    selectedCustomClass: 'fa fa-check',
    items: ['bg-red', 'bg-yellow', 'bg-aqua', 'bg-blue', 'bg-light-blue', 'bg-green', 'bg-navy', 'bg-teal', 'bg-olive', 'bg-lime', 'bg-orange', 'bg-fuchsia', 'bg-purple', 'bg-maroon', 'bg-black']
  }); // Linkable tabs

  var popState = false;
  var tabUrl = document.location.toString(); // Match tab URL on first load

  if (tabUrl.match('#') && tabUrl.match(/\-tab/gi)) {
    $('.nav-tabs a[href="#' + tabUrl.split('#')[1] + '"]').tab('show');
  } // Match tab URL on back/forward


  window.onpopstate = function (e) {
    popState = true;
    tabUrl = document.location.toString();

    if (tabUrl.match('#') && tabUrl.match(/\-tab/gi)) {
      $('.nav-tabs a[href="#' + tabUrl.split('#')[1] + '"]').tab('show');
    }
  }; // Save history on tab show


  $('.nav-tabs a').on('shown.bs.tab', function (e) {
    if (window.history.pushState && !popState) {
      history.pushState(null, null, e.target.hash);
    }

    popState = false;
  }); // Slugify

  $('[data-slugify]').on('input', function (e) {
    if ($($(this).data('slugify')).val().length === 0) {
      $(this).on('keyup', function () {
        var input = $(this).data('slugify');
        var delimiter = $(this).data('slugify-delimiter');
        var slug = $(this).val().slugify(delimiter);
        $(input).val(slug);
      });
    }
  }); // Bind Select2 menus

  $('.select2').select2({
    placeholder: 'Select Option'
  }); // Configure datepicker

  $('.datepicker').attr('readonly', true).daterangepicker(); // Configure timepicker

  $('.timepicker').timepicker(); // Handle file uploads inputs

  $('.file-name').on('click', function () {
    $(this).parents('.input-group').find(':file').trigger('click');
  });
  $(':file').on('change', function () {
    var input = $(this);
    var numFiles = input.get(0).files ? input.get(0).files.length : 1;
    var label = numFiles > 1 ? numFiles + ' files selected' : input.val().replace(/\\/g, '/').replace(/.*\//, '');
    $(this).parents('.input-group').find(':text').val(label);
  }); // Handle dynamic form fields
  // @TODO: refactor and use JS templates

  $(document).on('click', '.btn-add', function (e) {
    e.preventDefault(); // Initialize required variables

    var controlForm = $('#attributes-tab');
    var currentEntry = $(this).parents('.entry:first');
    var newEntry = $(currentEntry.clone()).appendTo(controlForm); // Remove error message & style

    newEntry.removeClass('has-error').find('.help-block').remove();
    newEntry.find('input').val(''); // Replace add/remove buttons

    controlForm.find('.entry:not(:last) .btn-add').removeClass('btn-add').addClass('btn-remove').removeClass('btn-success').addClass('btn-danger').html('<span class="glyphicon glyphicon-minus"></span>');
  }).on('click', '.btn-remove', function (e) {
    e.preventDefault();
    $(this).parents('.entry:first').remove();
  });
  $('.modal.overlay').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal

    var modalBody = button.data('modal-body');
    var modalTitle = button.data('modal-title');
    var modalAction = button.data('modal-action');
    var modalButton = button.data('modal-button');
    var modal = $(this);
    modal.find('.modal-body').html(modalBody);
    modal.find('.modal-title').html(modalTitle);
    modal.find('.modal-button').replaceWith(modalButton);
    modal.find('a[data-form]').attr('href', modalAction); // Initialize implicit forms

    implicitForms.initialize();
  }); // Build countries select menu

  function formatCountry(country_code) {
    if (!country_code.id) {
      return country_code.text;
    }

    var $country = $('<span style="padding-right: 10px">' + country_code.emoji + '</span>' + '<span>' + country_code.text + '</span>');
    return $country;
  }

  $("select[name='country_code']").select2({
    placeholder: 'Select a country',
    templateSelection: formatCountry,
    templateResult: formatCountry,
    data: window.countries ? window.countries : []
  }).val(window.selectedCountry ? window.selectedCountry : '').trigger('change'); // Highlight errored wizard step

  if ($('.wizard-step:has(.has-error)').length && $('.wizard-step:has(.has-error)').first().find("a[data-parent='#accordion']").length && $('.wizard-step:has(.has-error)').first().find("a[data-parent='#accordion']").hasClass('collapsed')) {
    $('.wizard-step:has(.has-error)').first().find("a[data-parent='#accordion']").trigger('click'); // @TODO: focus first errored field
  }

  highlight_required(); // Autogenerate passwords

  $(':password.autogenerate').val(Math.random().toString(36));
});
document.addEventListener('turbolinks:before-cache', function () {
  $('.select2').select2().each(function (i, item) {
    $(item).select2('destroy');
  }); // $('.dataTableBuilder').each(function(i, item){
  //     $(item).DataTable().destroy();
  // });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/vendor/bootstrap-popover-picker.js":
/*!*********************************************************!*\
  !*** ./resources/js/vendor/bootstrap-popover-picker.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap Popover Picker
 * https://itsjavi.com/bootstrap-popover-picker/
 *
 * Originally written by (c) 2016 Javi Aguilar
 * Licensed under the MIT License
 * https://github.com/itsjavi/bootstrap-popover-picker/blob/master/LICENSE
 *
 */
(function (factory) {
  "use strict";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var _helpers = {
    isEmpty: function isEmpty(val) {
      return val === false || val === '' || val === null || val === undefined;
    },
    isEmptyObject: function isEmptyObject(val) {
      return this.isEmpty(val) === true || Object.keys(val).length === 0 && val.constructor === Object;
    },
    isElement: function isElement(selector) {
      return $(selector).length > 0;
    },
    isString: function isString(val) {
      return typeof val === 'string' || val instanceof String;
    },
    isArray: function isArray(val) {
      return $.isArray(val);
    },
    inArray: function inArray(val, arr) {
      return $.inArray(val, arr) !== -1;
    },
    throwError: function throwError(text) {
      throw "Bootstrap Popover Picker Exception: " + text;
    }
  };

  var Picker = function Picker(element, options) {
    this._id = Picker._idCounter++;
    this.element = $(element).addClass('picker-element');

    this._trigger('pickerCreate');

    this.options = $.extend({}, Picker.defaultOptions, this.element.data(), options);
    this.options.templates = $.extend({}, Picker.defaultOptions.templates, this.options.templates);
    this.options.originalPlacement = this.options.placement; // Picker container element

    this.container = _helpers.isElement(this.options.container) ? $(this.options.container) : false;

    if (this.container === false) {
      this.container = this.element.is('input') ? this.element.parent() : this.element;
    }

    if (this.container.addClass('picker-container').is('.dropdown-menu')) {
      this.options.placement = 'inline';
    } // Is the element an input? Should we search inside for any input?


    this.input = this.element.is('input') ? this.element.addClass('picker-input') : false;

    if (this.input === false) {
      this.input = this.container.find(this.options.input);
    } // Plugin as component ?


    this.component = this.container.find(this.options.component).addClass('picker-component');

    if (this.component.length === 0) {
      this.component = false;
    } // Create popover and picker HTML


    this._createPopover();

    this._createPicker();

    if (this.getAcceptButton().length === 0) {
      // disable this because we don't have accept buttons
      this.options.mustAccept = false;
    } // Avoid CSS issues with input-group-addon(s)


    if (this.container.is('.input-group')) {
      this.container.parent().append(this.popover);
    } else {
      this.container.append(this.popover);
    } // Bind events


    this._bindElementEvents();

    this._bindWindowEvents(); // Refresh everything


    this.update(this.options.selected);

    if (this.isInline()) {
      this.show();
    }

    this._trigger('pickerCreated');
  }; // Instance identifier counter


  Picker._idCounter = 0; // Default options

  Picker.defaultOptions = {
    title: false,
    // Popover title (optional) only if specified in the template
    selected: false,
    // use this value as the current item and ignore the original
    defaultValue: false,
    // use this value as the current item if input or element item is empty
    placement: 'bottom',
    // WIP (has some issues with auto and CSS). auto, top, bottom, left, right
    collision: 'none',
    // If true, the popover will be repositioned to another position when collapses with the window borders
    animation: true,
    //hide picker automatically when a value is picked. it is ignored if mustAccept is not false and the accept button is visible
    hideOnSelect: false,
    showFooter: false,
    searchInFooter: false,
    // If true, the search will be added to the footer instead of the title
    mustAccept: false,
    // only applicable when there's an picker-btn-accept button in the popover footer
    selectedCustomClass: 'bg-primary',
    // Appends this class when to the selected item
    // List of valid items
    items: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
    itemProperty: null,
    // Defines which property will be accessed to show the value, in case of the items be an array of objects.
    input: 'input',
    // children input selector
    component: '.input-group-addon',
    // children component jQuery selector or object, relative to the parent element
    container: false,
    // WIP.  Appends the popover to a specific element. If true, appends to the jQuery element.
    updateComponentOnChange: true,
    // If false, it will not update the content in the component
    pickerItemClass: "picker-item",
    // Defines the selector class of the picker item
    itemValueSelector: "i",
    // Defines the selector of the element that contains the value of an item
    // Plugin templates:
    templates: {
      popover: '<div class="picker-popover popover"><div class="arrow"></div>' + '<div class="popover-title"></div><div class="popover-content"></div></div>',
      footer: '<div class="popover-footer"></div>',
      buttons: '<button class="picker-btn picker-btn-cancel btn btn-default btn-sm">Cancel</button>' + ' <button class="picker-btn picker-btn-accept btn btn-primary btn-sm">Accept</button>',
      search: '<input type="search" class="form-control picker-search" placeholder="Type to filter" />',
      picker: '<div class="picker"><div class="picker-items"></div></div>',
      pickerItem: '<div class="picker-item"><i></i></div>'
    }
  };

  Picker.batch = function (selector, method) {
    var args = Array.prototype.slice.call(arguments, 2);
    return $(selector).each(function () {
      var $inst = $(this).data('picker');

      if (!!$inst) {
        $inst[method].apply($inst, args);
      }
    });
  };

  Picker.prototype = {
    constructor: Picker,
    options: {},
    _id: 0,
    // instance identifier for bind/unbind events
    _trigger: function _trigger(name, opts) {
      //triggers an event bound to the element
      opts = opts || {};
      this.element.trigger($.extend({
        type: name,
        pickerInstance: this
      }, opts)); //console.log(name + ' triggered for instance #' + this._id);
    },
    _createPopover: function _createPopover() {
      this.popover = $(this.options.templates.popover); // title (header)

      var _title = this.popover.find('.popover-title');

      if (!!this.options.title) {
        _title.append($('<div class="popover-title-text">' + this.options.title + '</div>'));
      }

      if (!this.options.searchInFooter && !_helpers.isEmpty(this.options.templates.buttons)) {
        _title.append(this.options.templates.search);
      } else if (!this.options.title) {
        _title.remove();
      } // footer


      if (this.options.showFooter && !_helpers.isEmpty(this.options.templates.footer)) {
        var _footer = $(this.options.templates.footer);

        if (!_helpers.isEmpty(this.options.templates.search) && this.options.searchInFooter) {
          _footer.append($(this.options.templates.search));
        }

        if (!_helpers.isEmpty(this.options.templates.buttons)) {
          _footer.append($(this.options.templates.buttons));
        }

        this.popover.append(_footer);
      }

      if (this.options.animation === true) {
        this.popover.addClass('fade');
      }

      return this.popover;
    },
    _createPicker: function _createPicker() {
      var _self = this;

      this.picker = $(this.options.templates.picker);

      var itemClickFn = function itemClickFn(e) {
        var $this = $(this);

        if ($this.is('i')) {
          $this = $this.parent();
        }

        _self._trigger('pickerSelect', {
          pickerItem: $this,
          pickerValue: _self.pickerValue
        });

        if (_self.options.mustAccept === false) {
          _self.update($this.data('pickerValue'));

          _self._trigger('pickerSelected', {
            pickerItem: this,
            pickerValue: _self.pickerValue
          });
        } else {
          _self.update($this.data('pickerValue'), true);
        }

        if (_self.options.hideOnSelect && _self.options.mustAccept === false) {
          // only hide when the accept button is not present
          _self.hide();
        }
      };

      for (var i in this.options.items) {
        var itemElement = $(this.options.templates.pickerItem);
        var actualItem = this.options.items[i];
        var valueToShow = this.options.itemProperty ? actualItem[this.options.itemProperty] : actualItem;
        itemElement.find(this.options.itemValueSelector).html(valueToShow);
        itemElement.data('pickerValue', this.options.items[i]) // Rinvex: Custom modification
        .addClass(this.options.items[i]).on('click.picker', itemClickFn);
        this.picker.find('.picker-items').append(itemElement);
      }

      this.popover.find('.popover-content').append(this.picker);
      return this.picker;
    },
    _isEventInsidePicker: function _isEventInsidePicker(e) {
      var _t = $(e.target);

      if ((!_t.hasClass('picker-element') || _t.hasClass('picker-element') && !_t.is(this.element)) && _t.parents('.picker-popover').length === 0) {
        return false;
      }

      return true;
    },
    _bindElementEvents: function _bindElementEvents() {
      var _self = this;

      this.getSearchInput().on('keyup', function () {
        _self.filter($(this).val().toLowerCase());
      });
      this.getAcceptButton().on('click.picker', function () {
        var _picked = _self.picker.find('.picker-selected').get(0);

        _self.update(_self.pickerValue);

        _self._trigger('pickerSelected', {
          pickerItem: _picked,
          pickerValue: _self.pickerValue
        });

        if (!_self.isInline()) {
          _self.hide();
        }
      });
      this.getCancelButton().on('click.picker', function () {
        if (!_self.isInline()) {
          _self.hide();
        }
      });
      this.element.on('focus.picker', function (e) {
        _self.show();

        e.stopPropagation();
      });

      if (this.hasComponent()) {
        this.component.on('click.picker', function () {
          _self.toggle();
        });
      }

      if (this.hasInput()) {
        // Bind input keyup event
        this.input.on('keyup.picker', function (e) {
          if (!_helpers.inArray(e.keyCode, [38, 40, 37, 39, 16, 17, 18, 9, 8, 91, 93, 20, 46, 186, 190, 46, 78, 188, 44, 86])) {
            _self.update();
          } else {
            _self._updateFormGroupStatus(_self.getValid(this.value) !== false);
          } //_self.hide();

        });
      }
    },
    _bindWindowEvents: function _bindWindowEvents() {
      var $doc = $(window.document);

      var _self = this; // Add a namespace to the document events so they can be identified
      // later for every instance separately


      var _eventNs = '.picker.inst' + this._id;

      $(window).on('resize.picker' + _eventNs + ' orientationchange.picker' + _eventNs, function (e) {
        // reposition popover
        if (_self.popover.hasClass('in')) {
          _self.updatePlacement();
        }
      });

      if (!_self.isInline()) {
        $doc.on('mouseup' + _eventNs, function (e) {
          if (!_self._isEventInsidePicker(e) && !_self.isInline()) {
            _self.hide();
          }

          e.stopPropagation();
          e.preventDefault();
          return false;
        });
      }

      return false;
    },
    _unbindElementEvents: function _unbindElementEvents() {
      this.popover.off('.picker');
      this.element.off('.picker');

      if (this.hasInput()) {
        this.input.off('.picker');
      }

      if (this.hasComponent()) {
        this.component.off('.picker');
      }

      if (this.hasContainer()) {
        this.container.off('.picker');
      }
    },
    _unbindWindowEvents: function _unbindWindowEvents() {
      // destroy window and window.document bound events
      $(window).off('.picker.inst' + this._id);
      $(window.document).off('.picker.inst' + this._id);
    },
    updatePlacement: function updatePlacement(placement, collision) {
      placement = placement || this.options.placement;
      this.options.placement = placement; // set new placement

      collision = collision || this.options.collision;
      collision = collision === true ? 'flip' : collision;
      var _pos = {
        // at: Defines which position (or side) on container element to align the
        // popover element against: "horizontal vertical" alignment.
        at: "right bottom",
        // my: Defines which position (or side) on the popover being positioned to align
        // with the container element: "horizontal vertical" alignment
        my: "right top",
        // of: Which element to position against.
        of: this.hasInput() ? this.input : this.container,
        // collision: When the positioned element overflows the window (or within element)
        // in some direction, move it to an alternative position.
        collision: collision === true ? 'flip' : collision,
        // within: Element to position within, affecting collision detection.
        within: window
      }; // remove previous classes

      this.popover.removeClass('inline topLeftCorner topLeft top topRight topRightCorner ' + 'rightTop right rightBottom bottomRight bottomRightCorner ' + 'bottom bottomLeft bottomLeftCorner leftBottom left leftTop');

      if (_typeof(placement) === 'object') {
        // custom position ?
        return this.popover.pos($.extend({}, _pos, placement));
      }

      switch (placement) {
        case 'inline':
          {
            _pos = false;
          }
          break;

        case 'topLeftCorner':
          {
            _pos.my = 'right bottom';
            _pos.at = 'left top';
          }
          break;

        case 'topLeft':
          {
            _pos.my = 'left bottom';
            _pos.at = 'left top';
          }
          break;

        case 'top':
          {
            _pos.my = 'center bottom';
            _pos.at = 'center top';
          }
          break;

        case 'topRight':
          {
            _pos.my = 'right bottom';
            _pos.at = 'right top';
          }
          break;

        case 'topRightCorner':
          {
            _pos.my = 'left bottom';
            _pos.at = 'right top';
          }
          break;

        case 'rightTop':
          {
            _pos.my = 'left bottom';
            _pos.at = 'right center';
          }
          break;

        case 'right':
          {
            _pos.my = 'left center';
            _pos.at = 'right center';
          }
          break;

        case 'rightBottom':
          {
            _pos.my = 'left top';
            _pos.at = 'right center';
          }
          break;

        case 'bottomRightCorner':
          {
            _pos.my = 'left top';
            _pos.at = 'right bottom';
          }
          break;

        case 'bottomRight':
          {
            _pos.my = 'right top';
            _pos.at = 'right bottom';
          }
          break;

        case 'bottom':
          {
            _pos.my = 'center top';
            _pos.at = 'center bottom';
          }
          break;

        case 'bottomLeft':
          {
            _pos.my = 'left top';
            _pos.at = 'left bottom';
          }
          break;

        case 'bottomLeftCorner':
          {
            _pos.my = 'right top';
            _pos.at = 'left bottom';
          }
          break;

        case 'leftBottom':
          {
            _pos.my = 'right top';
            _pos.at = 'left center';
          }
          break;

        case 'left':
          {
            _pos.my = 'right center';
            _pos.at = 'left center';
          }
          break;

        case 'leftTop':
          {
            _pos.my = 'right bottom';
            _pos.at = 'left center';
          }
          break;

        default:
          {
            return false;
          }
          break;
      }

      this.popover.css({
        'display': this.options.placement === 'inline' ? '' : 'block'
      });

      if (_pos !== false) {
        this.popover.pos(_pos).css('maxWidth', $(window).width() - this.container.offset().left - 5);
      } else {
        //reset position
        this.popover.css({
          'top': 'auto',
          'right': 'auto',
          'bottom': 'auto',
          'left': 'auto',
          'maxWidth': 'none'
        });
      }

      this.popover.addClass(this.options.placement);
      return true;
    },
    _updateComponents: function _updateComponents() {
      // Update selected item
      this.picker.find('.' + this.options.pickerItemClass + '.picker-selected').removeClass('picker-selected ' + this.options.selectedCustomClass);
      var valueSelected = this.options.itemProperty ? this.pickerValue[this.options.itemProperty] : this.pickerValue;

      if (!_helpers.isEmpty(valueSelected)) {
        this.picker.find('.' + this.options.pickerItemClass + ' ' + this.options.itemValueSelector).filter(function () {
          return $(this).html() == valueSelected;
        }).parent().addClass('picker-selected ' + this.options.selectedCustomClass);
      } // Update component item


      if (this.hasComponent() && this.options.updateComponentOnChange) {
        var icn = this.component.find(this.options.itemValueSelector);

        if (icn.length > 0) {
          icn.html(this.getValue());
        } else {
          this.component.html(this.getValueHtml());
        }
      }
    },
    _updateFormGroupStatus: function _updateFormGroupStatus(isValid) {
      if (this.hasInput()) {
        if (isValid !== false) {
          // Remove form-group error class if any
          this.input.parents('.form-group:first').removeClass('has-error');
        } else {
          this.input.parents('.form-group:first').addClass('has-error');
        }

        return true;
      }

      return false;
    },
    getValid: function getValid(val) {
      // here we must validate the value (you may change this validation
      // to suit your needs
      if (this.options.itemProperty && _helpers.isEmptyObject(val) || !this.options.itemProperty && !_helpers.isString(val)) {
        val = '';
      }

      if (_helpers.inArray(val, this.options.items) || val === '') {
        return val;
      }

      return false;
    },

    /**
     * Sets the internal item value and updates everything, excepting the input or element.
     * For doing so, call setSourceValue() or update() instead
     */
    setValue: function setValue(val) {
      // sanitize first
      var _val = this.getValid(val);

      if (_val !== false) {
        this.pickerValue = _val;

        this._trigger('pickerSetValue', {
          pickerValue: _val
        });

        return this.pickerValue;
      } else {
        this._trigger('pickerInvalid', {
          pickerValue: val
        });

        return false;
      }
    },

    /**
     * Returns the formatted item value
     * @returns string
     */
    getValue: function getValue(val) {
      // here you may parse your format when you build your plugin
      var valueInPicker = this.options.itemProperty ? this.pickerValue[this.options.itemProperty] : this.pickerValue;
      return val ? val : valueInPicker;
    },
    getValueHtml: function getValueHtml() {
      return '<i>' + this.getValue() + '</i>';
    },

    /**
     * Calls setValue and if it's a valid item value, sets the input or element value
     */
    setSourceValue: function setSourceValue(val) {
      val = this.setValue(val);

      if (val !== false && val !== '') {
        if (this.hasInput()) {
          this.input.val(this.getValue());
        } else {
          this.element.data('pickerValue', this.getValue());
        }

        this._trigger('pickerSetSourceValue', {
          pickerValue: val
        });
      }

      return val;
    },

    /**
     * Returns the input or element item value, without formatting, or defaultValue
     * if it's empty string, undefined, false or null
     * @param {type} defaultValue
     * @returns string|mixed
     */
    getSourceValue: function getSourceValue(defaultValue) {
      // returns the input or element value, as string
      defaultValue = defaultValue || this.options.defaultValue;
      var val = defaultValue;

      if (this.hasInput()) {
        val = this.input.val();
      } else {
        val = this.element.data('pickerValue');
        val = this.options.itemProperty ? val[this.options.itemProperty] : val;
      }

      if (val === undefined || val === '' || val === null || val === false) {
        // if not defined or empty, return default
        val = defaultValue;
      }

      return val;
    },
    hasInput: function hasInput() {
      return this.input !== false;
    },
    hasComponent: function hasComponent() {
      return this.component !== false;
    },
    hasContainer: function hasContainer() {
      return this.container !== false;
    },
    getAcceptButton: function getAcceptButton() {
      return this.popover.find('.picker-btn-accept');
    },
    getCancelButton: function getCancelButton() {
      return this.popover.find('.picker-btn-cancel');
    },
    getSearchInput: function getSearchInput() {
      return this.popover.find('.picker-search');
    },
    filter: function filter(filterText) {
      if (_helpers.isEmpty(filterText)) {
        this.picker.find('.' + this.options.pickerItemClass).show();
        return $(false);
      } else {
        var found = [];
        this.picker.find('.' + this.options.pickerItemClass).each(function () {
          var $this = $(this);
          var text = $this.text().toLowerCase();
          var regex = false;

          try {
            regex = new RegExp(filterText, 'g');
          } catch (e) {
            regex = false;
          }

          if (regex !== false && text.match(regex)) {
            found.push($this);
            $this.show();
          } else {
            $this.hide();
          }
        });
        return found;
      }
    },
    show: function show() {
      if (this.popover.hasClass('in')) {
        return false;
      } // hide other non-inline pickers


      $.picker.batch($('.picker-popover.in:not(.inline)').not(this.popover), 'hide');

      this._trigger('pickerShow');

      this.updatePlacement();
      this.popover.addClass('in');
      setTimeout($.proxy(function () {
        this.popover.css('display', this.isInline() ? '' : 'block');

        this._trigger('pickerShown');
      }, this), this.options.animation ? 300 : 1); // animation duration
    },
    hide: function hide() {
      if (!this.popover.hasClass('in')) {
        return false;
      }

      this._trigger('pickerHide');

      this.popover.removeClass('in');
      setTimeout($.proxy(function () {
        this.popover.css('display', 'none');
        this.getSearchInput().val('');
        this.filter(''); // clear filter

        this._trigger('pickerHidden');
      }, this), this.options.animation ? 300 : 1);
    },
    toggle: function toggle() {
      if (this.popover.is(":visible")) {
        this.hide();
      } else {
        this.show(true);
      }
    },
    update: function update(val, updateOnlyInternal) {
      val = val ? val : this.getSourceValue(this.pickerValue); // reads the input or element value again and tries to update the plugin
      // fallback to the current selected item value

      this._trigger('pickerUpdate');

      if (updateOnlyInternal === true) {
        val = this.setValue(val);
      } else {
        val = this.setSourceValue(val);

        this._updateFormGroupStatus(val !== false);
      }

      if (val !== false) {
        this._updateComponents();
      }

      this._trigger('pickerUpdated');

      return val;
    },
    destroy: function destroy() {
      this._trigger('pickerDestroy'); // unbinds events and resets everything to the initial state,
      // including component mode


      this.element.removeData('picker').removeData('pickerValue').removeClass('picker-element');

      this._unbindElementEvents();

      this._unbindWindowEvents();

      $(this.popover).remove();

      this._trigger('pickerDestroyed');
    },
    disable: function disable() {
      if (this.hasInput()) {
        this.input.prop('disabled', true);
        return true;
      }

      return false;
    },
    enable: function enable() {
      if (this.hasInput()) {
        this.input.prop('disabled', false);
        return true;
      }

      return false;
    },
    isDisabled: function isDisabled() {
      if (this.hasInput()) {
        return this.input.prop('disabled') === true;
      }

      return false;
    },
    isInline: function isInline() {
      return this.options.placement === 'inline' || this.popover.hasClass('inline');
    }
  };
  $.picker = Picker; // jQuery plugin

  $.fn.picker = function (options) {
    return this.each(function () {
      var $this = $(this);

      if (!$this.data('picker')) {
        // create plugin instance (only if not exists) and expose the entire instance API
        $this.data('picker', new Picker(this, _typeof(options) === 'object' ? options : {}));
      }
    });
  };
});

/***/ }),

/***/ "./resources/js/vendor/intl-tel-input.js":
/*!***********************************************!*\
  !*** ./resources/js/vendor/intl-tel-input.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Exposing intl-tel-input as a component
 */
module.exports = __webpack_require__(/*! intl-tel-input/build/js/intlTelInput-jquery */ "./node_modules/intl-tel-input/build/js/intlTelInput-jquery.js");

/***/ }),

/***/ "./resources/js/vendor/jquery.validation.js":
/*!**************************************************!*\
  !*** ./resources/js/vendor/jquery.validation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.extend($.fn, {
    // http://jqueryvalidation.org/validate/
    validate: function validate(options) {
      // if nothing is selected, return nothing; can't chain anyway
      if (!this.length) {
        if (options && options.debug && window.console) {
          console.warn("Nothing selected, can't validate, returning nothing.");
        }

        return;
      } // check if a validator for this form was already created


      var validator = $.data(this[0], "validator");

      if (validator) {
        return validator;
      } // Add novalidate tag if HTML5.


      this.attr("novalidate", "novalidate");
      validator = new $.validator(options, this[0]);
      $.data(this[0], "validator", validator);

      if (validator.settings.onsubmit) {
        this.on("click.validate", ":submit", function (event) {
          if (validator.settings.submitHandler) {
            validator.submitButton = event.target;
          } // allow suppressing validation by adding a cancel class to the submit button


          if ($(this).hasClass("cancel")) {
            validator.cancelSubmit = true;
          } // allow suppressing validation by adding the html5 formnovalidate attribute to the submit button


          if ($(this).attr("formnovalidate") !== undefined) {
            validator.cancelSubmit = true;
          }
        }); // validate the form on submit

        this.on("submit.validate", function (event) {
          if (validator.settings.debug) {
            // prevent form submit to be able to see console output
            event.preventDefault();
          }

          function handle() {
            var hidden, result;

            if (validator.settings.submitHandler) {
              if (validator.submitButton) {
                // insert a hidden input as a replacement for the missing submit button
                hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
              }

              result = validator.settings.submitHandler.call(validator, validator.currentForm, event);

              if (validator.submitButton) {
                // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                hidden.remove();
              }

              if (result !== undefined) {
                return result;
              }

              return false;
            }

            return true;
          } // prevent submit for invalid forms or custom submit handlers


          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }

          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }

            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }

      return validator;
    },
    // http://jqueryvalidation.org/valid/
    valid: function valid() {
      var valid, validator, errorList;

      if ($(this[0]).is("form")) {
        valid = this.validate().form();
      } else {
        errorList = [];
        valid = true;
        validator = $(this[0].form).validate();
        this.each(function () {
          valid = validator.element(this) && valid;
          errorList = errorList.concat(validator.errorList);
        });
        validator.errorList = errorList;
      }

      return valid;
    },
    // http://jqueryvalidation.org/rules/
    rules: function rules(command, argument) {
      var element = this[0],
          settings,
          staticRules,
          existingRules,
          data,
          param,
          filtered;

      if (command) {
        settings = $.data(element.form, "validator").settings;
        staticRules = settings.rules;
        existingRules = $.validator.staticRules(element);

        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument)); // remove messages from rules, but allow them to be set separately

            delete existingRules.messages;
            staticRules[element.name] = existingRules;

            if (argument.messages) {
              settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
            }

            break;

          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }

            filtered = {};
            $.each(argument.split(/\s/), function (index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];

              if (method === "required") {
                $(element).removeAttr("aria-required");
              }
            });
            return filtered;
        }
      }

      data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element); // make sure required is at front

      if (data.required) {
        param = data.required;
        delete data.required;
        data = $.extend({
          required: param
        }, data);
        $(element).attr("aria-required", "true");
      } // make sure remote is at back


      if (data.remote) {
        param = data.remote;
        delete data.remote;
        data = $.extend(data, {
          remote: param
        });
      }

      return data;
    }
  }); // Custom selectors

  $.extend($.expr[":"], {
    // http://jqueryvalidation.org/blank-selector/
    blank: function blank(a) {
      return !$.trim("" + $(a).val());
    },
    // http://jqueryvalidation.org/filled-selector/
    filled: function filled(a) {
      return !!$.trim("" + $(a).val());
    },
    // http://jqueryvalidation.org/unchecked-selector/
    unchecked: function unchecked(a) {
      return !$(a).prop("checked");
    }
  }); // constructor for validator

  $.validator = function (options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  }; // http://jqueryvalidation.org/jQuery.validator.format/


  $.validator.format = function (source, params) {
    if (arguments.length === 1) {
      return function () {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    }

    if (arguments.length > 2 && params.constructor !== Array) {
      params = $.makeArray(arguments).slice(1);
    }

    if (params.constructor !== Array) {
      params = [params];
    }

    $.each(params, function (i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
        return n;
      });
    });
    return source;
  };

  $.extend($.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: false,
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function onfocusin(element) {
        this.lastActive = element; // Hide error label and remove error class on focus if enabled

        if (this.settings.focusCleanup) {
          if (this.settings.unhighlight) {
            this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
          }

          this.hideThese(this.errorsFor(element));
        }
      },
      onfocusout: function onfocusout(element) {
        if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
          this.element(element);
        }
      },
      onkeyup: function onkeyup(element, event) {
        // Avoid revalidate the field when pressing one of the following keys
        // Shift       => 16
        // Ctrl        => 17
        // Alt         => 18
        // Caps lock   => 20
        // End         => 35
        // Home        => 36
        // Left arrow  => 37
        // Up arrow    => 38
        // Right arrow => 39
        // Down arrow  => 40
        // Insert      => 45
        // Num lock    => 144
        // AltGr key   => 225
        var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];

        if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
          return;
        } else if (element.name in this.submitted || element === this.lastElement) {
          this.element(element);
        }
      },
      onclick: function onclick(element) {
        // click on selects, radiobuttons and checkboxes
        if (element.name in this.submitted) {
          this.element(element); // or option elements, check parent select in that case
        } else if (element.parentNode.name in this.submitted) {
          this.element(element.parentNode);
        }
      },
      highlight: function highlight(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function unhighlight(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      }
    },
    // http://jqueryvalidation.org/jQuery.validator.setDefaults/
    setDefaults: function setDefaults(settings) {
      $.extend($.validator.defaults, settings);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date ( ISO ).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: $.validator.format("Please enter no more than {0} characters."),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format("Please enter a value less than or equal to {0}."),
      min: $.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: false,
    prototype: {
      init: function init() {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();
        var groups = this.groups = {},
            rules;
        $.each(this.settings.groups, function (key, value) {
          if (typeof value === "string") {
            value = value.split(/\s/);
          }

          $.each(value, function (index, name) {
            groups[name] = key;
          });
        });
        rules = this.settings.rules;
        $.each(rules, function (key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });

        function delegate(event) {
          var validator = $.data(this.form, "validator"),
              eventType = "on" + event.type.replace(/^validate/, ""),
              settings = validator.settings;

          if (settings[eventType] && !$(this).is(settings.ignore)) {
            settings[eventType].call(validator, this, event);
          }
        }

        $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox']", delegate) // Support: Chrome, oldIE
        // "select" is provided as event.target when clicking a option
        .on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

        if (this.settings.invalidHandler) {
          $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
        } // Add aria-required to any Static/Data/Class required fields before first validation
        // Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html


        $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
      },
      // http://jqueryvalidation.org/Validator.form/
      form: function form() {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);

        if (!this.valid()) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        }

        this.showErrors();
        return this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();

        for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
          this.check(elements[i]);
        }

        return this.valid();
      },
      // http://jqueryvalidation.org/Validator.element/
      element: function element(_element) {
        var cleanElement = this.clean(_element),
            checkElement = this.validationTargetFor(cleanElement),
            result = true;
        this.lastElement = checkElement;

        if (checkElement === undefined) {
          delete this.invalid[cleanElement.name];
        } else {
          this.prepareElement(checkElement);
          this.currentElements = $(checkElement);
          result = this.check(checkElement) !== false;

          if (result) {
            delete this.invalid[checkElement.name];
          } else {
            this.invalid[checkElement.name] = true;
          }
        } // Add aria-invalid status for screen readers


        $(_element).attr("aria-invalid", !result);

        if (!this.numberOfInvalids()) {
          // Hide error containers on last error
          this.toHide = this.toHide.add(this.containers);
        }

        this.showErrors();
        return result;
      },
      // http://jqueryvalidation.org/Validator.showErrors/
      showErrors: function showErrors(errors) {
        if (errors) {
          // add items to error list and map
          $.extend(this.errorMap, errors);
          this.errorList = [];

          for (var name in errors) {
            this.errorList.push({
              message: errors[name],
              element: this.findByName(name)[0]
            });
          } // remove items from success list


          this.successList = $.grep(this.successList, function (element) {
            return !(element.name in errors);
          });
        }

        if (this.settings.showErrors) {
          this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
          this.defaultShowErrors();
        }
      },
      // http://jqueryvalidation.org/Validator.resetForm/
      resetForm: function resetForm() {
        if ($.fn.resetForm) {
          $(this.currentForm).resetForm();
        }

        this.submitted = {};
        this.lastElement = null;
        this.prepareForm();
        this.hideErrors();
        var i,
            elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");

        if (this.settings.unhighlight) {
          for (i = 0; elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
          }
        } else {
          elements.removeClass(this.settings.errorClass);
        }
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(obj) {
        /* jshint unused: false */
        var count = 0,
            i;

        for (i in obj) {
          count++;
        }

        return count;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(errors) {
        errors.not(this.containers).text("");
        this.addWrapper(errors).hide();
      },
      valid: function valid() {
        return this.size() === 0;
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) {
          try {
            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus() // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
            .trigger("focusin");
          } catch (e) {// ignore IE throwing errors when focusing hidden elements
          }
        }
      },
      findLastActive: function findLastActive() {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function (n) {
          return n.element.name === lastActive.name;
        }).length === 1 && lastActive;
      },
      elements: function elements() {
        var validator = this,
            rulesCache = {}; // select all valid inputs inside the form (no submit or reset buttons)

        return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          if (!this.name && validator.settings.debug && window.console) {
            console.error("%o has no name assigned", this);
          } // select only the first element for each name, and only those with rules specified


          if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
            return false;
          }

          rulesCache[this.name] = true;
          return true;
        });
      },
      clean: function clean(selector) {
        return $(selector)[0];
      },
      errors: function errors() {
        var errorClass = this.settings.errorClass.split(" ").join(".");
        return $(this.settings.errorElement + "." + errorClass, this.errorContext);
      },
      reset: function reset() {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
        this.currentElements = $([]);
      },
      prepareForm: function prepareForm() {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },
      elementValue: function elementValue(element) {
        var val,
            $element = $(element),
            type = element.type;

        if (type === "radio" || type === "checkbox") {
          return this.findByName(element.name).filter(":checked").val();
        } else if (type === "number" && typeof element.validity !== "undefined") {
          return element.validity.badInput ? false : $element.val();
        }

        val = $element.val();

        if (typeof val === "string") {
          return val.replace(/\r/g, "");
        }

        return val;
      },
      check: function check(element) {
        element = this.validationTargetFor(this.clean(element));
        var rules = $(element).rules(),
            rulesCount = $.map(rules, function (n, i) {
          return i;
        }).length,
            dependencyMismatch = false,
            val = this.elementValue(element),
            result,
            method,
            rule;

        for (method in rules) {
          rule = {
            method: method,
            parameters: rules[method]
          };

          try {
            result = $.validator.methods[method].call(this, val, element, rule.parameters); // if a method indicates that the field is optional and therefore valid,
            // don't mark it as valid when there are no other rules

            if (result === "dependency-mismatch" && rulesCount === 1) {
              dependencyMismatch = true;
              continue;
            }

            dependencyMismatch = false;

            if (result === "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }

            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            if (this.settings.debug && window.console) {
              console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
            }

            if (e instanceof TypeError) {
              e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
            }

            throw e;
          }
        }

        if (dependencyMismatch) {
          return;
        }

        if (this.objectLength(rules)) {
          this.successList.push(element);
        }

        return true;
      },
      // return the custom message for the given element and validation method
      // specified in the element's HTML5 data attribute
      // return the generic message if present and no method specific message is present
      customDataMessage: function customDataMessage(element, method) {
        return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg");
      },
      // return the custom message for the given element name and validation method
      customMessage: function customMessage(name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor === String ? m : m[method]);
      },
      // return the first defined argument, allowing empty strings
      findDefined: function findDefined() {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) {
            return arguments[i];
          }
        }

        return undefined;
      },
      defaultMessage: function defaultMessage(element, method) {
        return this.findDefined(this.customMessage(element.name, method), this.customDataMessage(element, method), // title is never undefined, so handle empty string as undefined
        !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>");
      },
      formatAndAdd: function formatAndAdd(element, rule) {
        var message = this.defaultMessage(element, rule.method),
            theregex = /\$?\{(\d+)\}/g;

        if (typeof message === "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
        }

        this.errorList.push({
          message: message,
          element: element,
          method: rule.method
        });
        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },
      addWrapper: function addWrapper(toToggle) {
        if (this.settings.wrapper) {
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }

        return toToggle;
      },
      defaultShowErrors: function defaultShowErrors() {
        var i, elements, error;

        for (i = 0; this.errorList[i]; i++) {
          error = this.errorList[i];

          if (this.settings.highlight) {
            this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
          }

          this.showLabel(error.element, error.message);
        }

        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }

        if (this.settings.success) {
          for (i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }

        if (this.settings.unhighlight) {
          for (i = 0, elements = this.validElements(); elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
          }
        }

        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return $(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(element, message) {
        var place,
            group,
            errorID,
            error = this.errorsFor(element),
            elementID = this.idOrName(element),
            describedBy = $(element).attr("aria-describedby");

        if (error.length) {
          // refresh error/success class
          error.removeClass(this.settings.validClass).addClass(this.settings.errorClass); // replace message on existing label

          error.html(message);
        } else {
          // create error element
          error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || ""); // Maintain reference to the element to be placed into the DOM

          place = error;

          if (this.settings.wrapper) {
            // make sure the element is visible, even in IE
            // actually showing the wrapped element is handled elsewhere
            place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
          }

          if (this.labelContainer.length) {
            this.labelContainer.append(place);
          } else if (this.settings.errorPlacement) {
            this.settings.errorPlacement(place, $(element));
          } else {
            place.insertAfter(element);
          } // Link error back to the element


          if (error.is("label")) {
            // If the error is a label, then associate using 'for'
            error.attr("for", elementID);
          } else if (error.parents("label[for='" + elementID + "']").length === 0) {
            // If the element is not a child of an associated label, then it's necessary
            // to explicitly apply aria-describedby
            errorID = error.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"); // Respect existing non-error aria-describedby

            if (!describedBy) {
              describedBy = errorID;
            } else if (!describedBy.match(new RegExp("\\b" + errorID + "\\b"))) {
              // Add to end of list if not already present
              describedBy += " " + errorID;
            }

            $(element).attr("aria-describedby", describedBy); // If this element is grouped, then assign to all elements in the same group

            group = this.groups[element.name];

            if (group) {
              $.each(this.groups, function (name, testgroup) {
                if (testgroup === group) {
                  $("[name='" + name + "']", this.currentForm).attr("aria-describedby", error.attr("id"));
                }
              });
            }
          }
        }

        if (!message && this.settings.success) {
          error.text("");

          if (typeof this.settings.success === "string") {
            error.addClass(this.settings.success);
          } else {
            this.settings.success(error, element);
          }
        }

        this.toShow = this.toShow.add(error);
      },
      errorsFor: function errorsFor(element) {
        var name = this.idOrName(element),
            describer = $(element).attr("aria-describedby"),
            selector = "label[for='" + name + "'], label[for='" + name + "'] *"; // aria-describedby should directly reference the error element

        if (describer) {
          selector = selector + ", #" + describer.replace(/\s+/g, ", #");
        }

        return this.errors().filter(selector);
      },
      idOrName: function idOrName(element) {
        return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
      },
      validationTargetFor: function validationTargetFor(element) {
        // If radio/checkbox, validate first element in group instead
        if (this.checkable(element)) {
          element = this.findByName(element.name);
        } // Always apply ignore filter


        return $(element).not(this.settings.ignore)[0];
      },
      checkable: function checkable(element) {
        return /radio|checkbox/i.test(element.type);
      },
      findByName: function findByName(name) {
        return $(this.currentForm).find("[name='" + name + "']");
      },
      getLength: function getLength(value, element) {
        switch (element.nodeName.toLowerCase()) {
          case "select":
            return $("option:selected", element).length;

          case "input":
            if (this.checkable(element)) {
              return this.findByName(element.name).filter(":checked").length;
            }

        }

        return value.length;
      },
      depend: function depend(param, element) {
        return this.dependTypes[_typeof(param)] ? this.dependTypes[_typeof(param)](param, element) : true;
      },
      dependTypes: {
        "boolean": function boolean(param) {
          return param;
        },
        "string": function string(param, element) {
          return !!$(param, element.form).length;
        },
        "function": function _function(param, element) {
          return param(element);
        }
      },
      optional: function optional(element) {
        var val = this.elementValue(element);
        return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
      },
      startRequest: function startRequest(element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          this.pending[element.name] = true;
        }
      },
      stopRequest: function stopRequest(element, valid) {
        this.pendingRequest--; // sometimes synchronization fails, make sure pendingRequest is never < 0

        if (this.pendingRequest < 0) {
          this.pendingRequest = 0;
        }

        delete this.pending[element.name];

        if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
          $(this.currentForm).submit();
          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },
      previousValue: function previousValue(element) {
        return $.data(element, "previousValue") || $.data(element, "previousValue", {
          old: null,
          valid: true,
          message: this.defaultMessage(element, "remote")
        });
      },
      // cleans up all forms and elements, removes validator-specific events
      destroy: function destroy() {
        this.resetForm();
        $(this.currentForm).off(".validate").removeData("validator");
      }
    },
    classRuleSettings: {
      required: {
        required: true
      },
      email: {
        email: true
      },
      url: {
        url: true
      },
      date: {
        date: true
      },
      dateISO: {
        dateISO: true
      },
      number: {
        number: true
      },
      digits: {
        digits: true
      },
      creditcard: {
        creditcard: true
      }
    },
    addClassRules: function addClassRules(className, rules) {
      if (className.constructor === String) {
        this.classRuleSettings[className] = rules;
      } else {
        $.extend(this.classRuleSettings, className);
      }
    },
    classRules: function classRules(element) {
      var rules = {},
          classes = $(element).attr("class");

      if (classes) {
        $.each(classes.split(" "), function () {
          if (this in $.validator.classRuleSettings) {
            $.extend(rules, $.validator.classRuleSettings[this]);
          }
        });
      }

      return rules;
    },
    normalizeAttributeRule: function normalizeAttributeRule(rules, type, method, value) {
      // convert the value to a number for number inputs, and for text for backwards compability
      // allows type="date" and others to be compared as strings
      if (/min|max/.test(method) && (type === null || /number|range|text/.test(type))) {
        value = Number(value); // Support Opera Mini, which returns NaN for undefined minlength

        if (isNaN(value)) {
          value = undefined;
        }
      }

      if (value || value === 0) {
        rules[method] = value;
      } else if (type === method && type !== "range") {
        // exception: the jquery validate 'range' method
        // does not test for the html5 'range' type
        rules[method] = true;
      }
    },
    attributeRules: function attributeRules(element) {
      var rules = {},
          $element = $(element),
          type = element.getAttribute("type"),
          method,
          value;

      for (method in $.validator.methods) {
        // support for <input required> in both html5 and older browsers
        if (method === "required") {
          value = element.getAttribute(method); // Some browsers return an empty string for the required attribute
          // and non-HTML5 browsers might have required="" markup

          if (value === "") {
            value = true;
          } // force non-HTML5 browsers to return bool


          value = !!value;
        } else {
          value = $element.attr(method);
        }

        this.normalizeAttributeRule(rules, type, method, value);
      } // maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs


      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }

      return rules;
    },
    dataRules: function dataRules(element) {
      var rules = {},
          $element = $(element),
          type = element.getAttribute("type"),
          method,
          value;

      for (method in $.validator.methods) {
        value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
        this.normalizeAttributeRule(rules, type, method, value);
      }

      return rules;
    },
    staticRules: function staticRules(element) {
      var rules = {},
          validator = $.data(element.form, "validator");

      if (validator.settings.rules) {
        rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      }

      return rules;
    },
    normalizeRules: function normalizeRules(rules, element) {
      // handle dependency check
      $.each(rules, function (prop, val) {
        // ignore rule when param is explicitly false, eg. required:false
        if (val === false) {
          delete rules[prop];
          return;
        }

        if (val.param || val.depends) {
          var keepRule = true;

          switch (_typeof(val.depends)) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;

            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }

          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            delete rules[prop];
          }
        }
      }); // evaluate parameters

      $.each(rules, function (rule, parameter) {
        rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
      }); // clean number parameters

      $.each(["minlength", "maxlength"], function () {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(["rangelength", "range"], function () {
        var parts;

        if (rules[this]) {
          if ($.isArray(rules[this])) {
            rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
          } else if (typeof rules[this] === "string") {
            parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
            rules[this] = [Number(parts[0]), Number(parts[1])];
          }
        }
      });

      if ($.validator.autoCreateRanges) {
        // auto-create ranges
        if (rules.min != null && rules.max != null) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }

        if (rules.minlength != null && rules.maxlength != null) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }

      return rules;
    },
    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function normalizeRule(data) {
      if (typeof data === "string") {
        var transformed = {};
        $.each(data.split(/\s/), function () {
          transformed[this] = true;
        });
        data = transformed;
      }

      return data;
    },
    // http://jqueryvalidation.org/jQuery.validator.addMethod/
    addMethod: function addMethod(name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];

      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },
    methods: {
      // http://jqueryvalidation.org/required-method/
      required: function required(value, element, param) {
        // check if dependency is met
        if (!this.depend(param, element)) {
          return "dependency-mismatch";
        }

        if (element.nodeName.toLowerCase() === "select") {
          // could be an array for select-multiple or a string, both are fine this way
          var val = $(element).val();
          return val && val.length > 0;
        }

        if (this.checkable(element)) {
          return this.getLength(value, element) > 0;
        }

        return value.length > 0;
      },
      // http://jqueryvalidation.org/email-method/
      email: function email(value, element) {
        // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
        // Retrieved 2014-01-14
        // If you have a problem with this implementation, report a bug against the above spec
        // Or use custom methods to implement your own email validation
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      // http://jqueryvalidation.org/url-method/
      url: function url(value, element) {
        // Copyright (c) 2010-2013 Diego Perini, MIT licensed
        // https://gist.github.com/dperini/729294
        // see also https://mathiasbynens.be/demo/url-regex
        // modified to allow protocol-relative URLs
        return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
      },
      // http://jqueryvalidation.org/date-method/
      date: function date(value, element) {
        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
      },
      // http://jqueryvalidation.org/dateISO-method/
      dateISO: function dateISO(value, element) {
        return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
      },
      // http://jqueryvalidation.org/number-method/
      number: function number(value, element) {
        return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },
      // http://jqueryvalidation.org/digits-method/
      digits: function digits(value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },
      // http://jqueryvalidation.org/creditcard-method/
      // based on http://en.wikipedia.org/wiki/Luhn_algorithm
      creditcard: function creditcard(value, element) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        } // accept only spaces, digits and dashes


        if (/[^0-9 \-]+/.test(value)) {
          return false;
        }

        var nCheck = 0,
            nDigit = 0,
            bEven = false,
            n,
            cDigit;
        value = value.replace(/\D/g, ""); // Basing min and max length on
        // http://developer.ean.com/general_info/Valid_Credit_Card_Types

        if (value.length < 13 || value.length > 19) {
          return false;
        }

        for (n = value.length - 1; n >= 0; n--) {
          cDigit = value.charAt(n);
          nDigit = parseInt(cDigit, 10);

          if (bEven) {
            if ((nDigit *= 2) > 9) {
              nDigit -= 9;
            }
          }

          nCheck += nDigit;
          bEven = !bEven;
        }

        return nCheck % 10 === 0;
      },
      // http://jqueryvalidation.org/minlength-method/
      minlength: function minlength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param;
      },
      // http://jqueryvalidation.org/maxlength-method/
      maxlength: function maxlength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= param;
      },
      // http://jqueryvalidation.org/rangelength-method/
      rangelength: function rangelength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param[0] && length <= param[1];
      },
      // http://jqueryvalidation.org/min-method/
      min: function min(value, element, param) {
        return this.optional(element) || value >= param;
      },
      // http://jqueryvalidation.org/max-method/
      max: function max(value, element, param) {
        return this.optional(element) || value <= param;
      },
      // http://jqueryvalidation.org/range-method/
      range: function range(value, element, param) {
        return this.optional(element) || value >= param[0] && value <= param[1];
      },
      // http://jqueryvalidation.org/equalTo-method/
      equalTo: function equalTo(value, element, param) {
        // bind to the blur event of the target in order to revalidate whenever the target field is updated
        // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
        var target = $(param);

        if (this.settings.onfocusout) {
          target.off(".validate-equalTo").on("blur.validate-equalTo", function () {
            $(element).valid();
          });
        }

        return value === target.val();
      },
      // http://jqueryvalidation.org/remote-method/
      remote: function remote(value, element, param) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }

        var previous = this.previousValue(element),
            validator,
            data;

        if (!this.settings.messages[element.name]) {
          this.settings.messages[element.name] = {};
        }

        previous.originalMessage = this.settings.messages[element.name].remote;
        this.settings.messages[element.name].remote = previous.message;
        param = typeof param === "string" && {
          url: param
        } || param;

        if (previous.old === value) {
          return previous.valid;
        }

        previous.old = value;
        validator = this;
        this.startRequest(element);
        data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          mode: "abort",
          port: "validate" + element.name,
          dataType: "json",
          data: data,
          context: validator.currentForm,
          success: function success(response) {
            var valid = response === true || response === "true",
                errors,
                message,
                submitted;
            validator.settings.messages[element.name].remote = previous.originalMessage;

            if (valid) {
              submitted = validator.formSubmitted;
              validator.prepareElement(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              delete validator.invalid[element.name];
              validator.showErrors();
            } else {
              errors = {};
              message = response || validator.defaultMessage(element, "remote");
              errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
              validator.invalid[element.name] = true;
              validator.showErrors(errors);
            }

            previous.valid = valid;
            validator.stopRequest(element, valid);
          }
        }, param));
        return "pending";
      }
    }
  }); // ajax mode: abort
  // usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
  // if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

  var pendingRequests = {},
      ajax; // Use a prefilter if available (1.5+)

  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function (settings, _, xhr) {
      var port = settings.port;

      if (settings.mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }

        pendingRequests[port] = xhr;
      }
    });
  } else {
    // Proxy ajax
    ajax = $.ajax;

    $.ajax = function (settings) {
      var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
          port = ("port" in settings ? settings : $.ajaxSettings).port;

      if (mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }

        pendingRequests[port] = ajax.apply(this, arguments);
        return pendingRequests[port];
      }

      return ajax.apply(this, arguments);
    };
  }
});

function _strlen(string) {
  //  discuss at: http://phpjs.org/functions/strlen/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Sakimori
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //    input by: Kirk Strobeck
  // bugfixed by: Onno Marsman
  //  revised by: Brett Zamir (http://brett-zamir.me)
  //        note: May look like overkill, but in order to be truly faithful to handling all Unicode
  //        note: characters and to this function in PHP which does not count the number of bytes
  //        note: but counts the number of characters, something like this is really necessary.
  //   example 1: strlen('Kevin van Zonneveld');
  //   returns 1: 19
  //   example 2: ini_set('unicode.semantics', 'on');
  //   example 2: strlen('A\ud87e\udc04Z');
  //   returns 2: 3
  var str = string + '';
  var i = 0,
      chr = '',
      lgth = 0;

  if (!this.php_js || !this.php_js.ini || !this.php_js.ini['unicode.semantics'] || this.php_js.ini['unicode.semantics'].local_value.toLowerCase() !== 'on') {
    return string.length;
  }

  var getWholeChar = function getWholeChar(str, i) {
    var code = str.charCodeAt(i);
    var next = '',
        prev = '';

    if (0xD800 <= code && code <= 0xDBFF) {
      // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
      if (str.length <= i + 1) {
        throw 'High surrogate without following low surrogate';
      }

      next = str.charCodeAt(i + 1);

      if (0xDC00 > next || next > 0xDFFF) {
        throw 'High surrogate without following low surrogate';
      }

      return str.charAt(i) + str.charAt(i + 1);
    } else if (0xDC00 <= code && code <= 0xDFFF) {
      // Low surrogate
      if (i === 0) {
        throw 'Low surrogate without preceding high surrogate';
      }

      prev = str.charCodeAt(i - 1);

      if (0xD800 > prev || prev > 0xDBFF) {
        // (could change last hex to 0xDB7F to treat high private surrogates as single characters)
        throw 'Low surrogate without preceding high surrogate';
      } // We can pass over low surrogates now as the second component in a pair which we have already processed


      return false;
    }

    return str.charAt(i);
  };

  for (i = 0, lgth = 0; i < str.length; i++) {
    if ((chr = getWholeChar(str, i)) === false) {
      continue;
    } // Adapt this line at the top of any loop, passing in the whole string and the current iteration and returning a variable to represent the individual character; purpose is to treat the first part of a surrogate pair as the whole character and then ignore the second part


    lgth++;
  }

  return lgth;
}

function array_diff(arr1) {
  //  discuss at: http://phpjs.org/functions/array_diff/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Sanjoy Roy
  //  revised by: Brett Zamir (http://brett-zamir.me)
  //   example 1: array_diff(['Kevin', 'van', 'Zonneveld'], ['van', 'Zonneveld']);
  //   returns 1: {0:'Kevin'}
  var retArr = {},
      argl = arguments.length,
      k1 = '',
      i = 1,
      k = '',
      arr = {};

  arr1keys: for (k1 in arr1) {
    for (i = 1; i < argl; i++) {
      arr = arguments[i];

      for (k in arr) {
        if (arr[k] === arr1[k1]) {
          // If it reaches here, it was found in at least one array, so try next value
          continue arr1keys;
        }
      }

      retArr[k1] = arr1[k1];
    }
  }

  return retArr;
}

function _strtotime(text, now) {
  //  discuss at: http://phpjs.org/functions/strtotime/
  //     version: 1109.2016
  // original by: Caio Ariede (http://caioariede.com)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Caio Ariede (http://caioariede.com)
  // improved by: A. Matías Quezada (http://amatiasq.com)
  // improved by: preuter
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Mirko Faber
  //    input by: David
  // bugfixed by: Wagner B. Soares
  // bugfixed by: Artur Tchernychev
  // bugfixed by: Stephan Bösch-Plepelits (http://github.com/plepe)
  //        note: Examples all have a fixed timestamp to prevent tests to fail because of variable time(zones)
  //   example 1: strtotime('+1 day', 1129633200);
  //   returns 1: 1129719600
  //   example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200);
  //   returns 2: 1130425202
  //   example 3: strtotime('last month', 1129633200);
  //   returns 3: 1127041200
  //   example 4: strtotime('2009-05-04 08:30:00 GMT');
  //   returns 4: 1241425800
  //   example 5: strtotime('2009-05-04 08:30:00+00');
  //   returns 5: 1241425800
  //   example 6: strtotime('2009-05-04 08:30:00+02:00');
  //   returns 6: 1241418600
  //   example 7: strtotime('2009-05-04T08:30:00Z');
  //   returns 7: 1241425800
  var parsed,
      match,
      today,
      year,
      date,
      days,
      ranges,
      len,
      times,
      regex,
      i,
      fail = false;

  if (!text) {
    return fail;
  } // Unecessary spaces


  text = text.replace(/^\s+|\s+$/g, '').replace(/\s{2,}/g, ' ').replace(/[\t\r\n]/g, '').toLowerCase(); // in contrast to php, js Date.parse function interprets:
  // dates given as yyyy-mm-dd as in timezone: UTC,
  // dates with "." or "-" as MDY instead of DMY
  // dates with two-digit years differently
  // etc...etc...
  // ...therefore we manually parse lots of common date formats

  match = text.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/);

  if (match && match[2] === match[4]) {
    if (match[1] > 1901) {
      switch (match[2]) {
        case '-':
          {
            // YYYY-M-D
            if (match[3] > 12 || match[5] > 31) {
              return fail;
            }

            return new Date(match[1], parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
          }

        case '.':
          {
            // YYYY.M.D is not parsed by strtotime()
            return fail;
          }

        case '/':
          {
            // YYYY/M/D
            if (match[3] > 12 || match[5] > 31) {
              return fail;
            }

            return new Date(match[1], parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
          }
      }
    } else if (match[5] > 1901) {
      switch (match[2]) {
        case '-':
          {
            // D-M-YYYY
            if (match[3] > 12 || match[1] > 31) {
              return fail;
            }

            return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
          }

        case '.':
          {
            // D.M.YYYY
            if (match[3] > 12 || match[1] > 31) {
              return fail;
            }

            return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
          }

        case '/':
          {
            // M/D/YYYY
            if (match[1] > 12 || match[3] > 31) {
              return fail;
            }

            return new Date(match[5], parseInt(match[1], 10) - 1, match[3], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
          }
      }
    } else {
      switch (match[2]) {
        case '-':
          {
            // YY-M-D
            if (match[3] > 12 || match[5] > 31 || match[1] < 70 && match[1] > 38) {
              return fail;
            }

            year = match[1] >= 0 && match[1] <= 38 ? +match[1] + 2000 : match[1];
            return new Date(year, parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
          }

        case '.':
          {
            // D.M.YY or H.MM.SS
            if (match[5] >= 70) {
              // D.M.YY
              if (match[3] > 12 || match[1] > 31) {
                return fail;
              }

              return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
            }

            if (match[5] < 60 && !match[6]) {
              // H.MM.SS
              if (match[1] > 23 || match[3] > 59) {
                return fail;
              }

              today = new Date();
              return new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1] || 0, match[3] || 0, match[5] || 0, match[9] || 0) / 1000;
            } // invalid format, cannot be parsed


            return fail;
          }

        case '/':
          {
            // M/D/YY
            if (match[1] > 12 || match[3] > 31 || match[5] < 70 && match[5] > 38) {
              return fail;
            }

            year = match[5] >= 0 && match[5] <= 38 ? +match[5] + 2000 : match[5];
            return new Date(year, parseInt(match[1], 10) - 1, match[3], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
          }

        case ':':
          {
            // HH:MM:SS
            if (match[1] > 23 || match[3] > 59 || match[5] > 59) {
              return fail;
            }

            today = new Date();
            return new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1] || 0, match[3] || 0, match[5] || 0) / 1000;
          }
      }
    }
  } // other formats and "now" should be parsed by Date.parse()


  if (text === 'now') {
    return now === null || isNaN(now) ? new Date().getTime() / 1000 | 0 : now | 0;
  }

  if (!isNaN(parsed = Date.parse(text))) {
    return parsed / 1000 | 0;
  } // Browsers != Chrome have problems parsing ISO 8601 date strings, as they do
  // not accept lower case characters, space, or shortened time zones.
  // Therefore, fix these problems and try again.
  // Examples:
  //   2015-04-15 20:33:59+02
  //   2015-04-15 20:33:59z
  //   2015-04-15t20:33:59+02:00


  if (match = text.match(/^([0-9]{4}-[0-9]{2}-[0-9]{2})[ t]([0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?)([\+-][0-9]{2}(:[0-9]{2})?|z)/)) {
    // fix time zone information
    if (match[4] == 'z') {
      match[4] = 'Z';
    } else if (match[4].match(/^([\+-][0-9]{2})$/)) {
      match[4] = match[4] + ':00';
    }

    if (!isNaN(parsed = Date.parse(match[1] + 'T' + match[2] + match[4]))) {
      return parsed / 1000 | 0;
    }
  }

  date = now ? new Date(now * 1000) : new Date();
  days = {
    'sun': 0,
    'mon': 1,
    'tue': 2,
    'wed': 3,
    'thu': 4,
    'fri': 5,
    'sat': 6
  };
  ranges = {
    'yea': 'FullYear',
    'mon': 'Month',
    'day': 'Date',
    'hou': 'Hours',
    'min': 'Minutes',
    'sec': 'Seconds'
  };

  function lastNext(type, range, modifier) {
    var diff,
        day = days[range];

    if (typeof day !== 'undefined') {
      diff = day - date.getDay();

      if (diff === 0) {
        diff = 7 * modifier;
      } else if (diff > 0 && type === 'last') {
        diff -= 7;
      } else if (diff < 0 && type === 'next') {
        diff += 7;
      }

      date.setDate(date.getDate() + diff);
    }
  }

  function process(val) {
    var splt = val.split(' '),
        // Todo: Reconcile this with regex using \s, taking into account browser issues with split and regexes
    type = splt[0],
        range = splt[1].substring(0, 3),
        typeIsNumber = /\d+/.test(type),
        ago = splt[2] === 'ago',
        num = (type === 'last' ? -1 : 1) * (ago ? -1 : 1);

    if (typeIsNumber) {
      num *= parseInt(type, 10);
    }

    if (ranges.hasOwnProperty(range) && !splt[1].match(/^mon(day|\.)?$/i)) {
      return date['set' + ranges[range]](date['get' + ranges[range]]() + num);
    }

    if (range === 'wee') {
      return date.setDate(date.getDate() + num * 7);
    }

    if (type === 'next' || type === 'last') {
      lastNext(type, range, num);
    } else if (!typeIsNumber) {
      return false;
    }

    return true;
  }

  times = '(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec' + '|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?' + '|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)';
  regex = '([+-]?\\d+\\s' + times + '|' + '(last|next)\\s' + times + ')(\\sago)?';
  match = text.match(new RegExp(regex, 'gi'));

  if (!match) {
    return fail;
  }

  for (i = 0, len = match.length; i < len; i++) {
    if (!process(match[i])) {
      return fail;
    }
  } // ECMAScript 5 only
  // if (!match.every(process))
  //    return false;


  return date.getTime() / 1000;
}

function _is_numeric(mixed_var) {
  //  discuss at: http://phpjs.org/functions/is_numeric/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: David
  // improved by: taith
  // bugfixed by: Tim de Koning
  // bugfixed by: WebDevHobo (http://webdevhobo.blogspot.com/)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Denis Chenu (http://shnoulle.net)
  //   example 1: is_numeric(186.31);
  //   returns 1: true
  //   example 2: is_numeric('Kevin van Zonneveld');
  //   returns 2: false
  //   example 3: is_numeric(' +186.31e2');
  //   returns 3: true
  //   example 4: is_numeric('');
  //   returns 4: false
  //   example 5: is_numeric([]);
  //   returns 5: false
  //   example 6: is_numeric('1 ');
  //   returns 6: false
  var whitespace = " \n\r\t\f\x0B\xA0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u2028\u2029\u3000";
  return (typeof mixed_var === 'number' || typeof mixed_var === 'string' && whitespace.indexOf(mixed_var.slice(-1)) === -1) && mixed_var !== '' && !isNaN(mixed_var);
}
/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2015
 * @version 1.3.3
 *
 * Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
 * @see http://php.net/manual/en/function.date.php
 *
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */


var DateFormatter;

(function () {
  "use strict";

  var _compare, _lpad2, _extend2, defaultSettings, DAY, HOUR;

  DAY = 1000 * 60 * 60 * 24;
  HOUR = 3600;

  _compare = function _compare(str1, str2) {
    return typeof str1 === 'string' && typeof str2 === 'string' && str1.toLowerCase() === str2.toLowerCase();
  };

  _lpad2 = function _lpad(value, length, _char) {
    var chr = _char || '0',
        val = value.toString();
    return val.length < length ? _lpad2(chr + val, length) : val;
  };

  _extend2 = function _extend(out) {
    var i, obj;
    out = out || {};

    for (i = 1; i < arguments.length; i++) {
      obj = arguments[i];

      if (!obj) {
        continue;
      }

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (_typeof(obj[key]) === 'object') {
            _extend2(out[key], obj[key]);
          } else {
            out[key] = obj[key];
          }
        }
      }
    }

    return out;
  };

  defaultSettings = {
    dateSettings: {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      meridiem: ['AM', 'PM'],
      ordinal: function ordinal(number) {
        var n = number % 10,
            suffixes = {
          1: 'st',
          2: 'nd',
          3: 'rd'
        };
        return Math.floor(number % 100 / 10) === 1 || !suffixes[n] ? 'th' : suffixes[n];
      }
    },
    separators: /[ \-+\/\.T:@]/g,
    validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
    intParts: /[djwNzmnyYhHgGis]/g,
    tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    tzClip: /[^-+\dA-Z]/g
  };

  DateFormatter = function DateFormatter(options) {
    var self = this,
        config = _extend2(defaultSettings, options);

    self.dateSettings = config.dateSettings;
    self.separators = config.separators;
    self.validParts = config.validParts;
    self.intParts = config.intParts;
    self.tzParts = config.tzParts;
    self.tzClip = config.tzClip;
  };

  DateFormatter.prototype = {
    constructor: DateFormatter,
    parseDate: function parseDate(vDate, vFormat) {
      var self = this,
          vFormatParts,
          vDateParts,
          i,
          vDateFlag = false,
          vTimeFlag = false,
          vDatePart,
          iDatePart,
          vSettings = self.dateSettings,
          vMonth,
          vMeriIndex,
          vMeriOffset,
          len,
          mer,
          out = {
        date: null,
        year: null,
        month: null,
        day: null,
        hour: 0,
        min: 0,
        sec: 0
      };

      if (!vDate) {
        return undefined;
      }

      if (vDate instanceof Date) {
        return vDate;
      }

      if (typeof vDate === 'number') {
        return new Date(vDate);
      }

      if (vFormat === 'U') {
        i = parseInt(vDate);
        return i ? new Date(i * 1000) : vDate;
      }

      if (typeof vDate !== 'string') {
        return '';
      }

      vFormatParts = vFormat.match(self.validParts);

      if (!vFormatParts || vFormatParts.length === 0) {
        throw new Error("Invalid date format definition.");
      }

      vDateParts = vDate.replace(self.separators, '\0').split('\0');

      for (i = 0; i < vDateParts.length; i++) {
        vDatePart = vDateParts[i];
        iDatePart = parseInt(vDatePart);

        switch (vFormatParts[i]) {
          case 'y':
          case 'Y':
            len = vDatePart.length;

            if (len === 2) {
              out.year = parseInt((iDatePart < 70 ? '20' : '19') + vDatePart);
            } else if (len === 4) {
              out.year = iDatePart;
            }

            vDateFlag = true;
            break;

          case 'm':
          case 'n':
          case 'M':
          case 'F':
            if (isNaN(vDatePart)) {
              vMonth = vSettings.monthsShort.indexOf(vDatePart);

              if (vMonth > -1) {
                out.month = vMonth + 1;
              }

              vMonth = vSettings.months.indexOf(vDatePart);

              if (vMonth > -1) {
                out.month = vMonth + 1;
              }
            } else {
              if (iDatePart >= 1 && iDatePart <= 12) {
                out.month = iDatePart;
              }
            }

            vDateFlag = true;
            break;

          case 'd':
          case 'j':
            if (iDatePart >= 1 && iDatePart <= 31) {
              out.day = iDatePart;
            }

            vDateFlag = true;
            break;

          case 'g':
          case 'h':
            vMeriIndex = vFormatParts.indexOf('a') > -1 ? vFormatParts.indexOf('a') : vFormatParts.indexOf('A') > -1 ? vFormatParts.indexOf('A') : -1;
            mer = vDateParts[vMeriIndex];

            if (vMeriIndex > -1) {
              vMeriOffset = _compare(mer, vSettings.meridiem[0]) ? 0 : _compare(mer, vSettings.meridiem[1]) ? 12 : -1;

              if (iDatePart >= 1 && iDatePart <= 12 && vMeriOffset > -1) {
                out.hour = iDatePart + vMeriOffset - 1;
              } else if (iDatePart >= 0 && iDatePart <= 23) {
                out.hour = iDatePart;
              }
            } else if (iDatePart >= 0 && iDatePart <= 23) {
              out.hour = iDatePart;
            }

            vTimeFlag = true;
            break;

          case 'G':
          case 'H':
            if (iDatePart >= 0 && iDatePart <= 23) {
              out.hour = iDatePart;
            }

            vTimeFlag = true;
            break;

          case 'i':
            if (iDatePart >= 0 && iDatePart <= 59) {
              out.min = iDatePart;
            }

            vTimeFlag = true;
            break;

          case 's':
            if (iDatePart >= 0 && iDatePart <= 59) {
              out.sec = iDatePart;
            }

            vTimeFlag = true;
            break;
        }
      }

      if (vDateFlag === true && out.year && out.month && out.day) {
        out.date = new Date(out.year, out.month - 1, out.day, out.hour, out.min, out.sec, 0);
      } else {
        if (vTimeFlag !== true) {
          return false;
        }

        out.date = new Date(0, 0, 0, out.hour, out.min, out.sec, 0);
      }

      return out.date;
    },
    guessDate: function guessDate(vDateStr, vFormat) {
      if (typeof vDateStr !== 'string') {
        return vDateStr;
      }

      var self = this,
          vParts = vDateStr.replace(self.separators, '\0').split('\0'),
          vPattern = /^[djmn]/g,
          vFormatParts = vFormat.match(self.validParts),
          vDate = new Date(),
          vDigit = 0,
          vYear,
          i,
          iPart,
          iSec;

      if (!vPattern.test(vFormatParts[0])) {
        return vDateStr;
      }

      for (i = 0; i < vParts.length; i++) {
        vDigit = 2;
        iPart = vParts[i];
        iSec = parseInt(iPart.substr(0, 2));

        switch (i) {
          case 0:
            if (vFormatParts[0] === 'm' || vFormatParts[0] === 'n') {
              vDate.setMonth(iSec - 1);
            } else {
              vDate.setDate(iSec);
            }

            break;

          case 1:
            if (vFormatParts[0] === 'm' || vFormatParts[0] === 'n') {
              vDate.setDate(iSec);
            } else {
              vDate.setMonth(iSec - 1);
            }

            break;

          case 2:
            vYear = vDate.getFullYear();

            if (iPart.length < 4) {
              vDate.setFullYear(parseInt(vYear.toString().substr(0, 4 - iPart.length) + iPart));
              vDigit = iPart.length;
            } else {
              vDate.setFullYear = parseInt(iPart.substr(0, 4));
              vDigit = 4;
            }

            break;

          case 3:
            vDate.setHours(iSec);
            break;

          case 4:
            vDate.setMinutes(iSec);
            break;

          case 5:
            vDate.setSeconds(iSec);
            break;
        }

        if (iPart.substr(vDigit).length > 0) {
          vParts.splice(i + 1, 0, iPart.substr(vDigit));
        }
      }

      return vDate;
    },
    parseFormat: function parseFormat(vChar, vDate) {
      var self = this,
          vSettings = self.dateSettings,
          fmt,
          backspace = /\\?(.?)/gi,
          doFormat = function doFormat(t, s) {
        return fmt[t] ? fmt[t]() : s;
      };

      fmt = {
        /////////
        // DAY //
        /////////

        /**
         * Day of month with leading 0: `01..31`
         * @return {string}
         */
        d: function d() {
          return _lpad2(fmt.j(), 2);
        },

        /**
         * Shorthand day name: `Mon...Sun`
         * @return {string}
         */
        D: function D() {
          return vSettings.daysShort[fmt.w()];
        },

        /**
         * Day of month: `1..31`
         * @return {number}
         */
        j: function j() {
          return vDate.getDate();
        },

        /**
         * Full day name: `Monday...Sunday`
         * @return {number}
         */
        l: function l() {
          return vSettings.days[fmt.w()];
        },

        /**
         * ISO-8601 day of week: `1[Mon]..7[Sun]`
         * @return {number}
         */
        N: function N() {
          return fmt.w() || 7;
        },

        /**
         * Day of week: `0[Sun]..6[Sat]`
         * @return {number}
         */
        w: function w() {
          return vDate.getDay();
        },

        /**
         * Day of year: `0..365`
         * @return {number}
         */
        z: function z() {
          var a = new Date(fmt.Y(), fmt.n() - 1, fmt.j()),
              b = new Date(fmt.Y(), 0, 1);
          return Math.round((a - b) / DAY);
        },
        //////////
        // WEEK //
        //////////

        /**
         * ISO-8601 week number
         * @return {number}
         */
        W: function W() {
          var a = new Date(fmt.Y(), fmt.n() - 1, fmt.j() - fmt.N() + 3),
              b = new Date(a.getFullYear(), 0, 4);
          return _lpad2(1 + Math.round((a - b) / DAY / 7), 2);
        },
        ///////////
        // MONTH //
        ///////////

        /**
         * Full month name: `January...December`
         * @return {string}
         */
        F: function F() {
          return vSettings.months[vDate.getMonth()];
        },

        /**
         * Month w/leading 0: `01..12`
         * @return {string}
         */
        m: function m() {
          return _lpad2(fmt.n(), 2);
        },

        /**
         * Shorthand month name; `Jan...Dec`
         * @return {string}
         */
        M: function M() {
          return vSettings.monthsShort[vDate.getMonth()];
        },

        /**
         * Month: `1...12`
         * @return {number}
         */
        n: function n() {
          return vDate.getMonth() + 1;
        },

        /**
         * Days in month: `28...31`
         * @return {number}
         */
        t: function t() {
          return new Date(fmt.Y(), fmt.n(), 0).getDate();
        },
        //////////
        // YEAR //
        //////////

        /**
         * Is leap year? `0 or 1`
         * @return {number}
         */
        L: function L() {
          var Y = fmt.Y();
          return Y % 4 === 0 && Y % 100 !== 0 || Y % 400 === 0 ? 1 : 0;
        },

        /**
         * ISO-8601 year
         * @return {number}
         */
        o: function o() {
          var n = fmt.n(),
              W = fmt.W(),
              Y = fmt.Y();
          return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
        },

        /**
         * Full year: `e.g. 1980...2010`
         * @return {number}
         */
        Y: function Y() {
          return vDate.getFullYear();
        },

        /**
         * Last two digits of year: `00...99`
         * @return {string}
         */
        y: function y() {
          return fmt.Y().toString().slice(-2);
        },
        //////////
        // TIME //
        //////////

        /**
         * Meridian lower: `am or pm`
         * @return {string}
         */
        a: function a() {
          return fmt.A().toLowerCase();
        },

        /**
         * Meridian upper: `AM or PM`
         * @return {string}
         */
        A: function A() {
          var n = fmt.G() < 12 ? 0 : 1;
          return vSettings.meridiem[n];
        },

        /**
         * Swatch Internet time: `000..999`
         * @return {string}
         */
        B: function B() {
          var H = vDate.getUTCHours() * HOUR,
              i = vDate.getUTCMinutes() * 60,
              s = vDate.getUTCSeconds();
          return _lpad2(Math.floor((H + i + s + HOUR) / 86.4) % 1000, 3);
        },

        /**
         * 12-Hours: `1..12`
         * @return {number}
         */
        g: function g() {
          return fmt.G() % 12 || 12;
        },

        /**
         * 24-Hours: `0..23`
         * @return {number}
         */
        G: function G() {
          return vDate.getHours();
        },

        /**
         * 12-Hours with leading 0: `01..12`
         * @return {string}
         */
        h: function h() {
          return _lpad2(fmt.g(), 2);
        },

        /**
         * 24-Hours w/leading 0: `00..23`
         * @return {string}
         */
        H: function H() {
          return _lpad2(fmt.G(), 2);
        },

        /**
         * Minutes w/leading 0: `00..59`
         * @return {string}
         */
        i: function i() {
          return _lpad2(vDate.getMinutes(), 2);
        },

        /**
         * Seconds w/leading 0: `00..59`
         * @return {string}
         */
        s: function s() {
          return _lpad2(vDate.getSeconds(), 2);
        },

        /**
         * Microseconds: `000000-999000`
         * @return {string}
         */
        u: function u() {
          return _lpad2(vDate.getMilliseconds() * 1000, 6);
        },
        //////////////
        // TIMEZONE //
        //////////////

        /**
         * Timezone identifier: `e.g. Atlantic/Azores, ...`
         * @return {string}
         */
        e: function e() {
          var str = /\((.*)\)/.exec(String(vDate))[1];
          return str || 'Coordinated Universal Time';
        },

        /**
         * Timezone abbreviation: `e.g. EST, MDT, ...`
         * @return {string}
         */
        T: function T() {
          var str = (String(vDate).match(self.tzParts) || [""]).pop().replace(self.tzClip, "");
          return str || 'UTC';
        },

        /**
         * DST observed? `0 or 1`
         * @return {number}
         */
        I: function I() {
          var a = new Date(fmt.Y(), 0),
              c = Date.UTC(fmt.Y(), 0),
              b = new Date(fmt.Y(), 6),
              d = Date.UTC(fmt.Y(), 6);
          return a - c !== b - d ? 1 : 0;
        },

        /**
         * Difference to GMT in hour format: `e.g. +0200`
         * @return {string}
         */
        O: function O() {
          var tzo = vDate.getTimezoneOffset(),
              a = Math.abs(tzo);
          return (tzo > 0 ? '-' : '+') + _lpad2(Math.floor(a / 60) * 100 + a % 60, 4);
        },

        /**
         * Difference to GMT with colon: `e.g. +02:00`
         * @return {string}
         */
        P: function P() {
          var O = fmt.O();
          return O.substr(0, 3) + ':' + O.substr(3, 2);
        },

        /**
         * Timezone offset in seconds: `-43200...50400`
         * @return {number}
         */
        Z: function Z() {
          return -vDate.getTimezoneOffset() * 60;
        },
        ////////////////////
        // FULL DATE TIME //
        ////////////////////

        /**
         * ISO-8601 date
         * @return {string}
         */
        c: function c() {
          return 'Y-m-d\\TH:i:sP'.replace(backspace, doFormat);
        },

        /**
         * RFC 2822 date
         * @return {string}
         */
        r: function r() {
          return 'D, d M Y H:i:s O'.replace(backspace, doFormat);
        },

        /**
         * Seconds since UNIX epoch
         * @return {number}
         */
        U: function U() {
          return vDate.getTime() / 1000 || 0;
        }
      };
      return doFormat(vChar, vChar);
    },
    formatDate: function formatDate(vDate, vFormat) {
      var self = this,
          i,
          n,
          len,
          str,
          vChar,
          vDateStr = '';

      if (typeof vDate === 'string') {
        vDate = self.parseDate(vDate, vFormat);

        if (vDate === false) {
          return false;
        }
      }

      if (vDate instanceof Date) {
        len = vFormat.length;

        for (i = 0; i < len; i++) {
          vChar = vFormat.charAt(i);

          if (vChar === 'S') {
            continue;
          }

          str = self.parseFormat(vChar, vDate);

          if (i !== len - 1 && self.intParts.test(vChar) && vFormat.charAt(i + 1) === 'S') {
            n = parseInt(str);
            str += self.dateSettings.ordinal(n);
          }

          vDateStr += str;
        }

        return vDateStr;
      }

      return '';
    }
  };
})();
/*!
 * Laravel Javascript Validation
 *
 * https://github.com/proengsoft/laravel-jsvalidation
 *
 * Copyright (c) 2014 Proengsoft
 * Released under the MIT license
 */


var laravelValidation;
laravelValidation = {
  implicitRules: ['Required', 'Confirmed'],

  /**
   * Initialize laravel validations
   */
  init: function init() {
    // Disable class rules and attribute rules
    $.validator.classRuleSettings = {};

    $.validator.attributeRules = function () {
      this.rules = {};
    };

    $.validator.dataRules = this.arrayRules;
    $.validator.prototype.arrayRulesCache = {}; // Register validations methods

    this.setupValidations();
  },
  arrayRules: function arrayRules(element) {
    var rules = {},
        validator = $.data(element.form, "validator"),
        cache = validator.arrayRulesCache; // Is not an Array

    if (element.name.indexOf('[') === -1) {
      return rules;
    }

    if (!(element.name in cache)) {
      cache[element.name] = {};
    }

    $.each(validator.settings.rules, function (name, tmpRules) {
      if (name in cache[element.name]) {
        $.extend(rules, cache[element.name][name]);
      } else {
        cache[element.name][name] = {};
        var nameRegExp = laravelValidation.helpers.regexFromWildcard(name);

        if (element.name.match(nameRegExp)) {
          var newRules = $.validator.normalizeRule(tmpRules) || {};
          cache[element.name][name] = newRules;
          $.extend(rules, newRules);
        }
      }
    });
    return rules;
  },
  setupValidations: function setupValidations() {
    /**
     * Create JQueryValidation check to validate Laravel rules
     */
    $.validator.addMethod("laravelValidation", function (value, element, params) {
      var validator = this;
      var validated = true;
      var previous = this.previousValue(element); // put Implicit rules in front

      var rules = [];
      $.each(params, function (i, param) {
        if (param[3] || laravelValidation.implicitRules.indexOf(param[0]) !== -1) {
          rules.unshift(param);
        } else {
          rules.push(param);
        }
      });
      $.each(rules, function (i, param) {
        var implicit = param[3] || laravelValidation.implicitRules.indexOf(param[0]) !== -1;
        var rule = param[0];
        var message = param[2];

        if (!implicit && validator.optional(element)) {
          validated = "dependency-mismatch";
          return false;
        }

        if (laravelValidation.methods[rule] !== undefined) {
          validated = laravelValidation.methods[rule].call(validator, value, element, param[1], function (valid) {
            validator.settings.messages[element.name].laravelValidationRemote = previous.originalMessage;

            if (valid) {
              var submitted = validator.formSubmitted;
              validator.prepareElement(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              delete validator.invalid[element.name];
              validator.showErrors();
            } else {
              var errors = {};
              errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
              validator.invalid[element.name] = true;
              validator.showErrors(errors);
            }

            validator.showErrors(validator.errorMap);
            previous.valid = valid;
          });
        } else {
          validated = false;
        }

        if (validated !== true) {
          if (!validator.settings.messages[element.name]) {
            validator.settings.messages[element.name] = {};
          }

          validator.settings.messages[element.name].laravelValidation = message;
          return false;
        }
      });
      return validated;
    }, "");
    /**
     * Create JQueryValidation check to validate Remote Laravel rules
     */

    $.validator.addMethod("laravelValidationRemote", function (value, element, params) {
      var implicit = false,
          check = params[0][1],
          attribute = element.name,
          token = check[1],
          validateAll = check[2];
      $.each(params, function (i, parameters) {
        implicit = implicit || parameters[3];
      });

      if (!implicit && this.optional(element)) {
        return "dependency-mismatch";
      }

      var previous = this.previousValue(element),
          validator,
          data;

      if (!this.settings.messages[element.name]) {
        this.settings.messages[element.name] = {};
      }

      previous.originalMessage = this.settings.messages[element.name].laravelValidationRemote;
      this.settings.messages[element.name].laravelValidationRemote = previous.message;
      var param = typeof param === "string" && {
        url: param
      } || param;

      if (previous.old === value) {
        return previous.valid;
      }

      previous.old = value;
      validator = this;
      this.startRequest(element);
      data = $(validator.currentForm).serializeArray();
      data.push({
        'name': '_jsvalidation',
        'value': attribute
      });
      data.push({
        'name': '_jsvalidation_validate_all',
        'value': validateAll
      });
      var formMethod = $(validator.currentForm).attr('method');

      if ($(validator.currentForm).find('input[name="_method"]').length) {
        formMethod = $(validator.currentForm).find('input[name="_method"]').val();
      }

      $.ajax($.extend(true, {
        mode: "abort",
        port: "validate" + element.name,
        dataType: "json",
        data: data,
        context: validator.currentForm,
        url: $(validator.currentForm).attr('action'),
        type: formMethod,
        beforeSend: function beforeSend(xhr) {
          if ($(validator.currentForm).attr('method').toLowerCase() !== 'get' && token) {
            return xhr.setRequestHeader('X-XSRF-TOKEN', token);
          }
        }
      }, param)).always(function (response, textStatus) {
        var errors, message, submitted, valid;

        if (textStatus === 'error') {
          valid = false;
          response = laravelValidation.helpers.parseErrorResponse(response);
        } else if (textStatus === 'success') {
          valid = response === true || response === "true";
        } else {
          return;
        }

        validator.settings.messages[element.name].laravelValidationRemote = previous.originalMessage;

        if (valid) {
          submitted = validator.formSubmitted;
          validator.prepareElement(element);
          validator.formSubmitted = submitted;
          validator.successList.push(element);
          delete validator.invalid[element.name];
          validator.showErrors();
        } else {
          errors = {};
          message = response || validator.defaultMessage(element, "remote");
          errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message[0];
          validator.invalid[element.name] = true;
          validator.showErrors(errors);
        }

        validator.showErrors(validator.errorMap);
        previous.valid = valid;
        validator.stopRequest(element, valid);
      });
      return "pending";
    }, "");
  }
};
$(function () {
  laravelValidation.init();
});
/*!
 * Laravel Javascript Validation
 *
 * https://github.com/proengsoft/laravel-jsvalidation
 *
 * Helper functions used by validators
 *
 * Copyright (c) 2014 Proengsoft
 * Released under the MIT license
 */

$.extend(true, laravelValidation, {
  helpers: {
    /**
     * Numeric rules
     */
    numericRules: ['Integer', 'Numeric'],

    /**
     * Gets the file information from file input
     *
     * @param fieldObj
     * @param index
     * @returns {{file: *, extension: string, size: number}}
     */
    fileinfo: function fileinfo(fieldObj, index) {
      var FileName = fieldObj.value;
      index = typeof index !== 'undefined' ? index : 0;

      if (fieldObj.files !== null) {
        if (typeof fieldObj.files[index] !== 'undefined') {
          return {
            file: FileName,
            extension: FileName.substr(FileName.lastIndexOf('.') + 1),
            size: fieldObj.files[index].size / 1024,
            type: fieldObj.files[index].type
          };
        }
      }

      return false;
    },

    /**
     *
     * Gets the selectors for th specified field names
     *
     * @param names
     * @returns {string}
     */
    selector: function selector(names) {
      var selector = [];

      if (!$.isArray(names)) {
        names = [names];
      }

      for (var i = 0; i < names.length; i++) {
        selector.push("[name='" + names[i] + "']");
      }

      return selector.join();
    },

    /**
     * Check if element has numeric rules
     *
     * @param element
     * @returns {boolean}
     */
    hasNumericRules: function hasNumericRules(element) {
      return this.hasRules(element, this.numericRules);
    },

    /**
     * Check if element has passed ruls rules
     *
     * @param element
     * @param rules
     * @returns {boolean}
     */
    hasRules: function hasRules(element, rules) {
      var found = false;

      if (typeof rules === 'string') {
        rules = [rules];
      }

      var validator = $.data(element.form, "validator");
      var listRules = [];
      var cache = validator.arrayRulesCache;

      if (element.name in cache) {
        $.each(cache[element.name], function (index, arrayRule) {
          listRules.push(arrayRule);
        });
      }

      if (element.name in validator.settings.rules) {
        listRules.push(validator.settings.rules[element.name]);
      }

      $.each(listRules, function (index, objRules) {
        if ('laravelValidation' in objRules) {
          var _rules = objRules.laravelValidation;

          for (var i = 0; i < _rules.length; i++) {
            if ($.inArray(_rules[i][0], rules) !== -1) {
              found = true;
              return false;
            }
          }
        }
      });
      return found;
    },

    /**
     * Return the string length using PHP function
     * http://php.net/manual/en/function.strlen.php
     * http://phpjs.org/functions/strlen/
     *
     * @param string
     */
    strlen: function strlen(string) {
      return _strlen(string);
    },

    /**
     * Get the size of the object depending of his type
     *
     * @param obj
     * @param element
     * @param value
     * @returns int
     */
    getSize: function getSize(obj, element, value) {
      if (this.hasNumericRules(element) && this.is_numeric(value)) {
        return parseFloat(value);
      } else if ($.isArray(value)) {
        return parseFloat(value.length);
      } else if (element.type === 'file') {
        return parseFloat(Math.floor(this.fileinfo(element).size));
      }

      return parseFloat(this.strlen(value));
    },

    /**
     * Return specified rule from element
     *
     * @param rule
     * @param element
     * @returns object
     */
    getLaravelValidation: function getLaravelValidation(rule, element) {
      var found = undefined;
      $.each($.validator.staticRules(element), function (key, rules) {
        if (key === "laravelValidation") {
          $.each(rules, function (i, value) {
            if (value[0] === rule) {
              found = value;
            }
          });
        }
      });
      return found;
    },

    /**
     * Return he timestamp of value passed using format or default format in element*
     *
     * @param value
     * @param format
     * @returns {boolean|int}
     */
    parseTime: function parseTime(value, format) {
      var timeValue = false;
      var fmt = new DateFormatter();

      if ($.type(format) === 'object') {
        var dateRule = this.getLaravelValidation('DateFormat', format);

        if (dateRule !== undefined) {
          format = dateRule[1][0];
        } else {
          format = null;
        }
      }

      if (format == null) {
        timeValue = this.strtotime(value);
      } else {
        timeValue = fmt.parseDate(value, format);

        if (timeValue) {
          timeValue = Math.round(timeValue.getTime() / 1000);
        }
      }

      return timeValue;
    },

    /**
     * This method allows you to intelligently guess the date by closely matching the specific format.
     * @param value
     * @param format
     * @returns {Date}
     */
    gessDate: function gessDate(value, format) {
      var fmt = new DateFormatter();
      return fmt.guessDate(value, format);
    },

    /**
     * Returns Unix timestamp based on PHP function strototime
     * http://php.net/manual/es/function.strtotime.php
     * http://phpjs.org/functions/strtotime/
     *
     * @param text
     * @param now
     * @returns {*}
     */
    strtotime: function strtotime(text, now) {
      return _strtotime(text, now);
    },

    /**
     * Returns if value is numeric
     * http://php.net/manual/es/var.is_numeric.php
     * http://phpjs.org/functions/is_numeric/
     *
     * @param mixed_var
     * @returns {*}
     */
    is_numeric: function is_numeric(mixed_var) {
      return _is_numeric(mixed_var);
    },

    /**
     * Returns Array diff based on PHP function array_diff
     * http://php.net/manual/es/function.array_diff.php
     * http://phpjs.org/functions/array_diff/
     *
     * @param arr1
     * @param arr2
     * @returns {*}
     */
    arrayDiff: function arrayDiff(arr1, arr2) {
      return array_diff(arr1, arr2);
    },

    /**
     * Makes element dependant from other
     *
     * @param validator
     * @param element
     * @param name
     * @returns {*}
     */
    dependentElement: function dependentElement(validator, element, name) {
      var el = validator.findByName(name);

      if (el[0] !== undefined && validator.settings.onfocusout) {
        var event = 'blur';

        if (el[0].tagName === 'SELECT' || el[0].tagName === 'OPTION' || el[0].type === 'checkbox' || el[0].type === 'radio') {
          event = 'click';
        }

        var ruleName = '.validate-laravelValidation';
        el.off(ruleName).off(event + ruleName + '-' + element.name).on(event + ruleName + '-' + element.name, function () {
          $(element).valid();
        });
      }

      return el[0];
    },

    /**
     * Parses error Ajax response and gets the message
     *
     * @param response
     * @returns {string[]}
     */
    parseErrorResponse: function parseErrorResponse(response) {
      var newResponse = ['Whoops, looks like something went wrong.'];

      if ('responseText' in response) {
        var errorMsg = response.responseText.match(/<h1\s*>(.*)<\/h1\s*>/i);

        if ($.isArray(errorMsg)) {
          newResponse = [errorMsg[1]];
        }
      }

      return newResponse;
    },

    /**
     * Escape string to use as Regular Expression
     * @param str
     * @returns string
     */
    escapeRegExp: function escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    },

    /**
     * Generate RegExp from wildcard attributes
     * @param name
     * @returns {RegExp}
     */
    regexFromWildcard: function regexFromWildcard(name) {
      var nameParts = name.split("[*]");

      if (nameParts.length === 1) {
        nameParts.push('');
      }

      var regexpParts = nameParts.map(function (currentValue, index) {
        if (index % 2 === 0) {
          currentValue = currentValue + '[';
        } else {
          currentValue = ']' + currentValue;
        }

        return laravelValidation.helpers.escapeRegExp(currentValue);
      });
      return new RegExp('^' + regexpParts.join('.*') + '$');
    }
  }
});
/*!
 * Laravel Javascript Validation
 *
 * https://github.com/proengsoft/laravel-jsvalidation
 *
 * Timezone Helper functions used by validators
 *
 * Copyright (c) 2014 Proengsoft
 * Released under the MIT license
 */

$.extend(true, laravelValidation, {
  helpers: {
    /**
     * Check if the specified timezone is valid
     *
     * @param value
     * @returns {boolean}
     */
    isTimezone: function isTimezone(value) {
      var timezones = {
        "africa": ["abidjan", "accra", "addis_ababa", "algiers", "asmara", "bamako", "bangui", "banjul", "bissau", "blantyre", "brazzaville", "bujumbura", "cairo", "casablanca", "ceuta", "conakry", "dakar", "dar_es_salaam", "djibouti", "douala", "el_aaiun", "freetown", "gaborone", "harare", "johannesburg", "juba", "kampala", "khartoum", "kigali", "kinshasa", "lagos", "libreville", "lome", "luanda", "lubumbashi", "lusaka", "malabo", "maputo", "maseru", "mbabane", "mogadishu", "monrovia", "nairobi", "ndjamena", "niamey", "nouakchott", "ouagadougou", "porto-novo", "sao_tome", "tripoli", "tunis", "windhoek"],
        "america": ["adak", "anchorage", "anguilla", "antigua", "araguaina", "argentina\/buenos_aires", "argentina\/catamarca", "argentina\/cordoba", "argentina\/jujuy", "argentina\/la_rioja", "argentina\/mendoza", "argentina\/rio_gallegos", "argentina\/salta", "argentina\/san_juan", "argentina\/san_luis", "argentina\/tucuman", "argentina\/ushuaia", "aruba", "asuncion", "atikokan", "bahia", "bahia_banderas", "barbados", "belem", "belize", "blanc-sablon", "boa_vista", "bogota", "boise", "cambridge_bay", "campo_grande", "cancun", "caracas", "cayenne", "cayman", "chicago", "chihuahua", "costa_rica", "creston", "cuiaba", "curacao", "danmarkshavn", "dawson", "dawson_creek", "denver", "detroit", "dominica", "edmonton", "eirunepe", "el_salvador", "fortaleza", "glace_bay", "godthab", "goose_bay", "grand_turk", "grenada", "guadeloupe", "guatemala", "guayaquil", "guyana", "halifax", "havana", "hermosillo", "indiana\/indianapolis", "indiana\/knox", "indiana\/marengo", "indiana\/petersburg", "indiana\/tell_city", "indiana\/vevay", "indiana\/vincennes", "indiana\/winamac", "inuvik", "iqaluit", "jamaica", "juneau", "kentucky\/louisville", "kentucky\/monticello", "kralendijk", "la_paz", "lima", "los_angeles", "lower_princes", "maceio", "managua", "manaus", "marigot", "martinique", "matamoros", "mazatlan", "menominee", "merida", "metlakatla", "mexico_city", "miquelon", "moncton", "monterrey", "montevideo", "montreal", "montserrat", "nassau", "new_york", "nipigon", "nome", "noronha", "north_dakota\/beulah", "north_dakota\/center", "north_dakota\/new_salem", "ojinaga", "panama", "pangnirtung", "paramaribo", "phoenix", "port-au-prince", "port_of_spain", "porto_velho", "puerto_rico", "rainy_river", "rankin_inlet", "recife", "regina", "resolute", "rio_branco", "santa_isabel", "santarem", "santiago", "santo_domingo", "sao_paulo", "scoresbysund", "shiprock", "sitka", "st_barthelemy", "st_johns", "st_kitts", "st_lucia", "st_thomas", "st_vincent", "swift_current", "tegucigalpa", "thule", "thunder_bay", "tijuana", "toronto", "tortola", "vancouver", "whitehorse", "winnipeg", "yakutat", "yellowknife"],
        "antarctica": ["casey", "davis", "dumontdurville", "macquarie", "mawson", "mcmurdo", "palmer", "rothera", "south_pole", "syowa", "vostok"],
        "arctic": ["longyearbyen"],
        "asia": ["aden", "almaty", "amman", "anadyr", "aqtau", "aqtobe", "ashgabat", "baghdad", "bahrain", "baku", "bangkok", "beirut", "bishkek", "brunei", "choibalsan", "chongqing", "colombo", "damascus", "dhaka", "dili", "dubai", "dushanbe", "gaza", "harbin", "hebron", "ho_chi_minh", "hong_kong", "hovd", "irkutsk", "jakarta", "jayapura", "jerusalem", "kabul", "kamchatka", "karachi", "kashgar", "kathmandu", "khandyga", "kolkata", "krasnoyarsk", "kuala_lumpur", "kuching", "kuwait", "macau", "magadan", "makassar", "manila", "muscat", "nicosia", "novokuznetsk", "novosibirsk", "omsk", "oral", "phnom_penh", "pontianak", "pyongyang", "qatar", "qyzylorda", "rangoon", "riyadh", "sakhalin", "samarkand", "seoul", "shanghai", "singapore", "taipei", "tashkent", "tbilisi", "tehran", "thimphu", "tokyo", "ulaanbaatar", "urumqi", "ust-nera", "vientiane", "vladivostok", "yakutsk", "yekaterinburg", "yerevan"],
        "atlantic": ["azores", "bermuda", "canary", "cape_verde", "faroe", "madeira", "reykjavik", "south_georgia", "st_helena", "stanley"],
        "australia": ["adelaide", "brisbane", "broken_hill", "currie", "darwin", "eucla", "hobart", "lindeman", "lord_howe", "melbourne", "perth", "sydney"],
        "europe": ["amsterdam", "andorra", "athens", "belgrade", "berlin", "bratislava", "brussels", "bucharest", "budapest", "busingen", "chisinau", "copenhagen", "dublin", "gibraltar", "guernsey", "helsinki", "isle_of_man", "istanbul", "jersey", "kaliningrad", "kiev", "lisbon", "ljubljana", "london", "luxembourg", "madrid", "malta", "mariehamn", "minsk", "monaco", "moscow", "oslo", "paris", "podgorica", "prague", "riga", "rome", "samara", "san_marino", "sarajevo", "simferopol", "skopje", "sofia", "stockholm", "tallinn", "tirane", "uzhgorod", "vaduz", "vatican", "vienna", "vilnius", "volgograd", "warsaw", "zagreb", "zaporozhye", "zurich"],
        "indian": ["antananarivo", "chagos", "christmas", "cocos", "comoro", "kerguelen", "mahe", "maldives", "mauritius", "mayotte", "reunion"],
        "pacific": ["apia", "auckland", "chatham", "chuuk", "easter", "efate", "enderbury", "fakaofo", "fiji", "funafuti", "galapagos", "gambier", "guadalcanal", "guam", "honolulu", "johnston", "kiritimati", "kosrae", "kwajalein", "majuro", "marquesas", "midway", "nauru", "niue", "norfolk", "noumea", "pago_pago", "palau", "pitcairn", "pohnpei", "port_moresby", "rarotonga", "saipan", "tahiti", "tarawa", "tongatapu", "wake", "wallis"],
        "utc": [""]
      };
      var tzparts = value.split('/', 2);
      var continent = tzparts[0].toLowerCase();
      var city = '';

      if (tzparts[1]) {
        city = tzparts[1].toLowerCase();
      }

      return continent in timezones && (timezones[continent].length === 0 || timezones[continent].indexOf(city) !== -1);
    }
  }
});
/*!
 * Laravel Javascript Validation
 *
 * https://github.com/proengsoft/laravel-jsvalidation
 *
 * Metjods that implement Laravel Validations
 *
 * Copyright (c) 2014 Proengsoft
 * Released under the MIT license
 */

$.extend(true, laravelValidation, {
  methods: {
    helpers: laravelValidation.helpers,
    jsRemoteTimer: 0,

    /**
     * "Validate" optional attributes.
     * Always returns true, just lets us put sometimes in rules.*
     * @return {boolean}
     */
    Sometimes: function Sometimes() {
      return true;
    },

    /**
     * Bail This is the default behaivour os JSValidation.
     * Always returns true, just lets us put sometimes in rules.*
     * @return {boolean}
     */
    Bail: function Bail() {
      return true;
    },

    /**
     * "Indicate" validation should pass if value is null.
     * Always returns true, just lets us put "nullable" in rules.
     * @return {boolean}
     */
    Nullable: function Nullable() {
      return true;
    },

    /**
     * Validate the given attribute is filled if it is present.
     */
    Filled: function Filled(value, element) {
      return $.validator.methods.required.call(this, value, element, true);
    },

    /**
     *Validate that a required attribute exists.
     */
    Required: function Required(value, element) {
      return $.validator.methods.required.call(this, value, element);
    },

    /**
     * Validate that an attribute exists when any other attribute exists.
     * @return {boolean}
     */
    RequiredWith: function RequiredWith(value, element, params) {
      var validator = this,
          required = false;
      var currentObject = this;
      $.each(params, function (i, param) {
        var target = laravelValidation.helpers.dependentElement(currentObject, element, param);
        required = required || target !== undefined && $.validator.methods.required.call(validator, currentObject.elementValue(target), target, true);
      });

      if (required) {
        return $.validator.methods.required.call(this, value, element, true);
      }

      return true;
    },

    /**
     * Validate that an attribute exists when all other attribute exists.
     * @return {boolean}
     */
    RequiredWithAll: function RequiredWithAll(value, element, params) {
      var validator = this,
          required = true;
      var currentObject = this;
      $.each(params, function (i, param) {
        var target = laravelValidation.helpers.dependentElement(currentObject, element, param);
        required = required && target !== undefined && $.validator.methods.required.call(validator, currentObject.elementValue(target), target, true);
      });

      if (required) {
        return $.validator.methods.required.call(this, value, element, true);
      }

      return true;
    },

    /**
     * Validate that an attribute exists when any other attribute does not exists.
     * @return {boolean}
     */
    RequiredWithout: function RequiredWithout(value, element, params) {
      var validator = this,
          required = false;
      var currentObject = this;
      $.each(params, function (i, param) {
        var target = laravelValidation.helpers.dependentElement(currentObject, element, param);
        required = required || target === undefined || !$.validator.methods.required.call(validator, currentObject.elementValue(target), target, true);
      });

      if (required) {
        return $.validator.methods.required.call(this, value, element, true);
      }

      return true;
    },

    /**
     * Validate that an attribute exists when all other attribute does not exists.
     * @return {boolean}
     */
    RequiredWithoutAll: function RequiredWithoutAll(value, element, params) {
      var validator = this,
          required = true,
          currentObject = this;
      $.each(params, function (i, param) {
        var target = laravelValidation.helpers.dependentElement(currentObject, element, param);
        required = required && (target === undefined || !$.validator.methods.required.call(validator, currentObject.elementValue(target), target, true));
      });

      if (required) {
        return $.validator.methods.required.call(this, value, element, true);
      }

      return true;
    },

    /**
     * Validate that an attribute exists when another attribute has a given value.
     * @return {boolean}
     */
    RequiredIf: function RequiredIf(value, element, params) {
      var target = laravelValidation.helpers.dependentElement(this, element, params[0]);

      if (target !== undefined) {
        var val = String(this.elementValue(target));

        if (typeof val !== 'undefined') {
          var data = params.slice(1);

          if ($.inArray(val, data) !== -1) {
            return $.validator.methods.required.call(this, value, element, true);
          }
        }
      }

      return true;
    },

    /**
     * Validate that an attribute exists when another
     * attribute does not have a given value.
     * @return {boolean}
     */
    RequiredUnless: function RequiredUnless(value, element, params) {
      var target = laravelValidation.helpers.dependentElement(this, element, params[0]);

      if (target !== undefined) {
        var val = String(this.elementValue(target));

        if (typeof val !== 'undefined') {
          var data = params.slice(1);

          if ($.inArray(val, data) !== -1) {
            return true;
          }
        }
      }

      return $.validator.methods.required.call(this, value, element, true);
    },

    /**
     * Validate that an attribute has a matching confirmation.
     * @return {boolean}
     */
    Confirmed: function Confirmed(value, element, params) {
      return laravelValidation.methods.Same.call(this, value, element, params);
    },

    /**
     * Validate that two attributes match.
     * @return {boolean}
     */
    Same: function Same(value, element, params) {
      var target = laravelValidation.helpers.dependentElement(this, element, params[0]);

      if (target !== undefined) {
        return String(value) === String(this.elementValue(target));
      }

      return false;
    },

    /**
     * Validate that the values of an attribute is in another attribute.
     * @param value
     * @param element
     * @param params
     * @returns {boolean}
     * @constructor
     */
    InArray: function InArray(value, element, params) {
      if (typeof params[0] === 'undefined') {
        return false;
      }

      var elements = this.elements();
      var found = false;
      var nameRegExp = laravelValidation.helpers.regexFromWildcard(params[0]);

      for (var i = 0; i < elements.length; i++) {
        var targetName = elements[i].name;

        if (targetName.match(nameRegExp)) {
          var equals = laravelValidation.methods.Same.call(this, value, element, [targetName]);
          found = found || equals;
        }
      }

      return found;
    },

    /**
     * Validate an attribute is unique among other values.
     * @param value
     * @param element
     * @param params
     * @returns {boolean}
     */
    Distinct: function Distinct(value, element, params) {
      if (typeof params[0] === 'undefined') {
        return false;
      }

      var elements = this.elements();
      var found = false;
      var nameRegExp = laravelValidation.helpers.regexFromWildcard(params[0]);

      for (var i = 0; i < elements.length; i++) {
        var targetName = elements[i].name;

        if (targetName !== element.name && targetName.match(nameRegExp)) {
          var equals = laravelValidation.methods.Same.call(this, value, element, [targetName]);
          found = found || equals;
        }
      }

      return !found;
    },

    /**
     * Validate that an attribute is different from another attribute.
     * @return {boolean}
     */
    Different: function Different(value, element, params) {
      return !laravelValidation.methods.Same.call(this, value, element, params);
    },

    /**
     * Validate that an attribute was "accepted".
     * This validation rule implies the attribute is "required".
     * @return {boolean}
     */
    Accepted: function Accepted(value) {
      var regex = new RegExp("^(?:(yes|on|1|true))$", 'i');
      return regex.test(value);
    },

    /**
     * Validate that an attribute is an array.
     */
    Array: function Array(value) {
      return $.isArray(value);
    },

    /**
     * Validate that an attribute is a boolean.
     * @return {boolean}
     */
    Boolean: function Boolean(value) {
      var regex = new RegExp("^(?:(true|false|1|0))$", 'i');
      return regex.test(value);
    },

    /**
     * Validate that an attribute is an integer.
     * @return {boolean}
     */
    Integer: function Integer(value) {
      var regex = new RegExp("^(?:-?\\d+)$", 'i');
      return regex.test(value);
    },

    /**
     * Validate that an attribute is numeric.
     */
    Numeric: function Numeric(value, element) {
      return $.validator.methods.number.call(this, value, element, true);
    },

    /**
     * Validate that an attribute is a string.
     * @return {boolean}
     */
    String: function String(value) {
      return typeof value === 'string';
    },

    /**
     * The field under validation must be numeric and must have an exact length of value.
     */
    Digits: function Digits(value, element, params) {
      return $.validator.methods.number.call(this, value, element, true) && value.length === parseInt(params, 10);
    },

    /**
     * The field under validation must have a length between the given min and max.
     */
    DigitsBetween: function DigitsBetween(value, element, params) {
      return $.validator.methods.number.call(this, value, element, true) && value.length >= parseFloat(params[0]) && value.length <= parseFloat(params[1]);
    },

    /**
     * Validate the size of an attribute.
     * @return {boolean}
     */
    Size: function Size(value, element, params) {
      return laravelValidation.helpers.getSize(this, element, value) === parseFloat(params[0]);
    },

    /**
     * Validate the size of an attribute is between a set of values.
     * @return {boolean}
     */
    Between: function Between(value, element, params) {
      return laravelValidation.helpers.getSize(this, element, value) >= parseFloat(params[0]) && laravelValidation.helpers.getSize(this, element, value) <= parseFloat(params[1]);
    },

    /**
     * Validate the size of an attribute is greater than a minimum value.
     * @return {boolean}
     */
    Min: function Min(value, element, params) {
      return laravelValidation.helpers.getSize(this, element, value) >= parseFloat(params[0]);
    },

    /**
     * Validate the size of an attribute is less than a maximum value.
     * @return {boolean}
     */
    Max: function Max(value, element, params) {
      return laravelValidation.helpers.getSize(this, element, value) <= parseFloat(params[0]);
    },

    /**
     *  Validate an attribute is contained within a list of values.
     * @return {boolean}
     */
    In: function In(value, element, params) {
      if ($.isArray(value) && laravelValidation.helpers.hasRules(element, "Array")) {
        var diff = laravelValidation.helpers.arrayDiff(value, params);
        return Object.keys(diff).length === 0;
      }

      return params.indexOf(value.toString()) !== -1;
    },

    /**
     *  Validate an attribute is not contained within a list of values.
     * @return {boolean}
     */
    NotIn: function NotIn(value, element, params) {
      return params.indexOf(value.toString()) === -1;
    },

    /**
     *  Validate that an attribute is a valid IP.
     * @return {boolean}
     */
    Ip: function Ip(value) {
      return /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(value) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);
    },

    /**
     *  Validate that an attribute is a valid e-mail address.
     */
    Email: function Email(value, element) {
      return $.validator.methods.email.call(this, value, element, true);
    },

    /**
     * Validate that an attribute is a valid URL.
     */
    Url: function Url(value, element) {
      return $.validator.methods.url.call(this, value, element, true);
    },

    /**
     * The field under validation must be a successfully uploaded file.
     * @return {boolean}
     */
    File: function File(value, element) {
      if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        return true;
      }

      if ('files' in element) {
        return element.files.length > 0;
      }

      return false;
    },

    /**
     * Validate the MIME type of a file upload attribute is in a set of MIME types.
     * @return {boolean}
     */
    Mimes: function Mimes(value, element, params) {
      if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        return true;
      }

      var lowerParams = $.map(params, function (item) {
        return item.toLowerCase();
      });
      var fileinfo = laravelValidation.helpers.fileinfo(element);
      return fileinfo !== false && lowerParams.indexOf(fileinfo.extension.toLowerCase()) !== -1;
    },

    /**
     * The file under validation must match one of the given MIME types
     * @return {boolean}
     */
    Mimetypes: function Mimetypes(value, element, params) {
      if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        return true;
      }

      var lowerParams = $.map(params, function (item) {
        return item.toLowerCase();
      });
      var fileinfo = laravelValidation.helpers.fileinfo(element);

      if (fileinfo === false) {
        return false;
      }

      return lowerParams.indexOf(fileinfo.type.toLowerCase()) !== -1;
    },

    /**
     * Validate the MIME type of a file upload attribute is in a set of MIME types.
     */
    Image: function Image(value, element) {
      return laravelValidation.methods.Mimes.call(this, value, element, ['jpg', 'png', 'gif', 'bmp', 'svg']);
    },

    /**
     * Validate dimensions of Image
     * @return {boolean|string}
     */
    Dimensions: function Dimensions(value, element, params, callback) {
      if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        return true;
      }

      if (element.files === null || typeof element.files[0] === 'undefined') {
        return false;
      }

      var fr = new FileReader();

      fr.onload = function () {
        var img = new Image();

        img.onload = function () {
          var height = parseFloat(img.naturalHeight);
          var width = parseFloat(img.naturalWidth);
          var ratio = width / height;
          var notValid = params['width'] && parseFloat(params['width'] !== width) || params['min_width'] && parseFloat(params['min_width']) > width || params['max_width'] && parseFloat(params['max_width']) < width || params['height'] && parseFloat(params['height']) !== height || params['min_height'] && parseFloat(params['min_height']) > height || params['max_height'] && parseFloat(params['max_height']) < height || params['ratio'] && ratio !== parseFloat(eval(params['ratio']));
          callback(!notValid);
        };

        img.onerror = function () {
          callback(false);
        };

        img.src = fr.result;
      };

      fr.readAsDataURL(element.files[0]);
      return 'pending';
    },

    /**
     * Validate that an attribute contains only alphabetic characters.
     * @return {boolean}
     */
    Alpha: function Alpha(value) {
      if (typeof value !== 'string') {
        return false;
      }

      var regex = new RegExp("^(?:^[a-z\xE0-\xFC]+$)$", 'i');
      return regex.test(value);
    },

    /**
     * Validate that an attribute contains only alpha-numeric characters.
     * @return {boolean}
     */
    AlphaNum: function AlphaNum(value) {
      if (typeof value !== 'string') {
        return false;
      }

      var regex = new RegExp("^(?:^[a-z0-9\xE0-\xFC]+$)$", 'i');
      return regex.test(value);
    },

    /**
     * Validate that an attribute contains only alphabetic characters.
     * @return {boolean}
     */
    AlphaDash: function AlphaDash(value) {
      if (typeof value !== 'string') {
        return false;
      }

      var regex = new RegExp("^(?:^[a-z0-9\xE0-\xFC_-]+$)$", 'i');
      return regex.test(value);
    },

    /**
     * Validate that an attribute passes a regular expression check.
     * @return {boolean}
     */
    Regex: function Regex(value, element, params) {
      var invalidModifiers = ['x', 's', 'u', 'X', 'U', 'A']; // Converting php regular expression

      var phpReg = new RegExp('^(?:\/)(.*\\\/?[^\/]*|[^\/]*)(?:\/)([gmixXsuUAJ]*)?$');
      var matches = params[0].match(phpReg);

      if (matches === null) {
        return false;
      } // checking modifiers


      var php_modifiers = [];

      if (matches[2] !== undefined) {
        php_modifiers = matches[2].split('');

        for (var i = 0; i < php_modifiers.length < i; i++) {
          if (invalidModifiers.indexOf(php_modifiers[i]) !== -1) {
            return true;
          }
        }
      }

      var regex = new RegExp("^(?:" + matches[1] + ")$", php_modifiers.join());
      return regex.test(value);
    },

    /**
     * Validate that an attribute is a valid date.
     * @return {boolean}
     */
    Date: function Date(value) {
      return laravelValidation.helpers.strtotime(value) !== false;
    },

    /**
     * Validate that an attribute matches a date format.
     * @return {boolean}
     */
    DateFormat: function DateFormat(value, element, params) {
      return laravelValidation.helpers.parseTime(value, params[0]) !== false;
    },

    /**
     * Validate the date is before a given date.
     * @return {boolean}
     */
    Before: function Before(value, element, params) {
      var timeCompare = parseFloat(params);

      if (isNaN(timeCompare)) {
        var target = laravelValidation.helpers.dependentElement(this, element, params);

        if (target === undefined) {
          return false;
        }

        timeCompare = laravelValidation.helpers.parseTime(this.elementValue(target), target);
      }

      var timeValue = laravelValidation.helpers.parseTime(value, element);
      return timeValue !== false && timeValue < timeCompare;
    },

    /**
     * Validate the date is after a given date.
     * @return {boolean}
     */
    After: function After(value, element, params) {
      var timeCompare = parseFloat(params);

      if (isNaN(timeCompare)) {
        var target = laravelValidation.helpers.dependentElement(this, element, params);

        if (target === undefined) {
          return false;
        }

        timeCompare = laravelValidation.helpers.parseTime(this.elementValue(target), target);
      }

      var timeValue = laravelValidation.helpers.parseTime(value, element);
      return timeValue !== false && timeValue > timeCompare;
    },

    /**
     * Validate that an attribute is a valid date.
     */
    Timezone: function Timezone(value) {
      return laravelValidation.helpers.isTimezone(value);
    },

    /**
     * Validate the attribute is a valid JSON string.
     *
     * @param  value
     * @return bool
     */
    Json: function Json(value) {
      var result = true;

      try {
        JSON.parse(value);
      } catch (e) {
        result = false;
      }

      return result;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/vendor/pace.js":
/*!*************************************!*\
  !*** ./resources/js/vendor/pace.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var AjaxMonitor,
      Bar,
      DocumentMonitor,
      ElementMonitor,
      ElementTracker,
      EventLagMonitor,
      Evented,
      Events,
      NoTargetError,
      Pace,
      RequestIntercept,
      SOURCE_KEYS,
      Scaler,
      SocketRequestTracker,
      XHRRequestTracker,
      animation,
      avgAmplitude,
      bar,
      cancelAnimation,
      cancelAnimationFrame,
      defaultOptions,
      _extend,
      extendNative,
      getFromDOM,
      getIntercept,
      handlePushState,
      ignoreStack,
      init,
      now,
      options,
      requestAnimationFrame,
      result,
      runAnimation,
      scalers,
      shouldIgnoreURL,
      shouldTrack,
      source,
      sources,
      uniScaler,
      _WebSocket,
      _XDomainRequest,
      _XMLHttpRequest,
      _i,
      _intercept,
      _len,
      _pushState,
      _ref,
      _ref1,
      _replaceState,
      __slice = [].slice,
      __hasProp = {}.hasOwnProperty,
      __extends = function __extends(child, parent) {
    for (var key in parent) {
      if (__hasProp.call(parent, key)) child[key] = parent[key];
    }

    function ctor() {
      this.constructor = child;
    }

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      __indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }

    return -1;
  };

  defaultOptions = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: false,
    // Custom Rinvex Modification
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  };

  now = function now() {
    var _ref;

    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +new Date();
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function requestAnimationFrame(fn) {
      return setTimeout(fn, 50);
    };

    cancelAnimationFrame = function cancelAnimationFrame(id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function runAnimation(fn) {
    var last, _tick;

    last = now();

    _tick = function tick() {
      var diff;
      diff = now() - last;

      if (diff >= 33) {
        last = now();
        return fn(diff, function () {
          return requestAnimationFrame(_tick);
        });
      } else {
        return setTimeout(_tick, 33 - diff);
      }
    };

    return _tick();
  };

  result = function result() {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];

    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  _extend = function extend() {
    var key, out, source, sources, val, _i, _len;

    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];

    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];

      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];

          if (out[key] != null && _typeof(out[key]) === 'object' && val != null && _typeof(val) === 'object') {
            _extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }

    return out;
  };

  avgAmplitude = function avgAmplitude(arr) {
    var count, sum, v, _i, _len;

    sum = count = 0;

    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }

    return sum / count;
  };

  getFromDOM = function getFromDOM(key, json) {
    var data, e, el;

    if (key == null) {
      key = 'options';
    }

    if (json == null) {
      json = true;
    }

    el = document.querySelector("[data-pace-" + key + "]");

    if (!el) {
      return;
    }

    data = el.getAttribute("data-pace-" + key);

    if (!json) {
      return data;
    }

    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = function () {
    function Evented() {}

    Evented.prototype.on = function (event, handler, ctx, once) {
      var _base;

      if (once == null) {
        once = false;
      }

      if (this.bindings == null) {
        this.bindings = {};
      }

      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }

      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function (event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function (event, handler) {
      var i, _ref, _results;

      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }

      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];

        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }

        return _results;
      }
    };

    Evented.prototype.trigger = function () {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;

      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];

      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];

        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);

          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }

        return _results;
      }
    };

    return Evented;
  }();

  Pace = window.Pace || {};
  window.Pace = Pace;

  _extend(Pace, Evented.prototype);

  options = Pace.options = _extend({}, defaultOptions, window.paceOptions, getFromDOM());
  _ref = ['ajax', 'document', 'eventLag', 'elements'];

  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];

    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = function (_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;
  }(Error);

  Bar = function () {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function () {
      var targetElement;

      if (this.el == null) {
        targetElement = document.querySelector(options.target);

        if (!targetElement) {
          throw new NoTargetError();
        }

        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace(/pace-done/g, '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';

        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }

      return this.el;
    };

    Bar.prototype.finish = function () {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function (prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }

      return this.el = void 0;
    };

    Bar.prototype.render = function () {
      var el, key, progressStr, transform, _j, _len1, _ref2;

      if (document.querySelector(options.target) == null) {
        return false;
      }

      el = this.getElement();
      transform = "translate3d(" + this.progress + "%, 0, 0)";
      _ref2 = ['webkitTransform', 'msTransform', 'transform'];

      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        el.children[0].style[key] = transform;
      }

      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");

        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }

        el.children[0].setAttribute('data-progress', "" + progressStr);
      }

      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function () {
      return this.progress >= 100;
    };

    return Bar;
  }();

  Events = function () {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function (name, val) {
      var binding, _j, _len1, _ref2, _results;

      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];

        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];

          _results.push(binding.call(this, val));
        }

        return _results;
      }
    };

    Events.prototype.on = function (name, fn) {
      var _base;

      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }

      return this.bindings[name].push(fn);
    };

    return Events;
  }();

  _XMLHttpRequest = window.XMLHttpRequest;
  _XDomainRequest = window.XDomainRequest;
  _WebSocket = window.WebSocket;

  extendNative = function extendNative(to, from) {
    var e, key, _results;

    _results = [];

    for (key in from.prototype) {
      try {
        if (to[key] == null && typeof from[key] !== 'function') {
          if (typeof Object.defineProperty === 'function') {
            _results.push(Object.defineProperty(to, key, {
              get: function get() {
                return from.prototype[key];
              },
              configurable: true,
              enumerable: true
            }));
          } else {
            _results.push(to[key] = from.prototype[key]);
          }
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }

    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function () {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function () {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function shouldTrack(method) {
    var _ref2;

    if (method == null) {
      method = 'GET';
    }

    if (ignoreStack[0] === 'track') {
      return 'force';
    }

    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }

    return false;
  };

  RequestIntercept = function (_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
          _this = this;

      RequestIntercept.__super__.constructor.apply(this, arguments);

      monitorXHR = function monitorXHR(req) {
        var _open;

        _open = req.open;
        return req.open = function (type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }

          return _open.apply(req, arguments);
        };
      };

      window.XMLHttpRequest = function (flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };

      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (_error) {}

      if (_XDomainRequest != null) {
        window.XDomainRequest = function () {
          var req;
          req = new _XDomainRequest();
          monitorXHR(req);
          return req;
        };

        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (_error) {}
      }

      if (_WebSocket != null && options.ajax.trackWebSockets) {
        window.WebSocket = function (url, protocols) {
          var req;

          if (protocols != null) {
            req = new _WebSocket(url, protocols);
          } else {
            req = new _WebSocket(url);
          }

          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }

          return req;
        };

        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (_error) {}
      }
    }

    return RequestIntercept;
  }(Events);

  _intercept = null;

  getIntercept = function getIntercept() {
    if (_intercept == null) {
      _intercept = new RequestIntercept();
    }

    return _intercept;
  };

  shouldIgnoreURL = function shouldIgnoreURL(url) {
    var pattern, _j, _len1, _ref2;

    _ref2 = options.ajax.ignoreURLs;

    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      pattern = _ref2[_j];

      if (typeof pattern === 'string') {
        if (url.indexOf(pattern) !== -1) {
          return true;
        }
      } else {
        if (pattern.test(url)) {
          return true;
        }
      }
    }

    return false;
  };

  getIntercept().on('request', function (_arg) {
    var after, args, request, type, url;
    type = _arg.type, request = _arg.request, url = _arg.url;

    if (shouldIgnoreURL(url)) {
      return;
    }

    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;

      if (typeof after === 'boolean') {
        after = 0;
      }

      return setTimeout(function () {
        var stillActive, _j, _len1, _ref2, _ref3, _results;

        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = 0 < (_ref2 = request.readyState) && _ref2 < 4;
        }

        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];

          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];

            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }

          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = function () {
    function AjaxMonitor() {
      var _this = this;

      this.elements = [];
      getIntercept().on('request', function () {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function (_arg) {
      var request, tracker, type, url;
      type = _arg.type, request = _arg.request, url = _arg.url;

      if (shouldIgnoreURL(url)) {
        return;
      }

      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }

      return this.elements.push(tracker);
    };

    return AjaxMonitor;
  }();

  XHRRequestTracker = function () {
    function XHRRequestTracker(request) {
      var event,
          size,
          _j,
          _len1,
          _onreadystatechange,
          _ref2,
          _this = this;

      this.progress = 0;

      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function (evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        }, false);
        _ref2 = ['load', 'abort', 'timeout', 'error'];

        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function () {
            return _this.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;

        request.onreadystatechange = function () {
          var _ref3;

          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }

          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;
  }();

  SocketRequestTracker = function () {
    function SocketRequestTracker(request) {
      var event,
          _j,
          _len1,
          _ref2,
          _this = this;

      this.progress = 0;
      _ref2 = ['error', 'open'];

      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function () {
          return _this.progress = 100;
        }, false);
      }
    }

    return SocketRequestTracker;
  }();

  ElementMonitor = function () {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;

      if (options == null) {
        options = {};
      }

      this.elements = [];

      if (options.selectors == null) {
        options.selectors = [];
      }

      _ref2 = options.selectors;

      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;
  }();

  ElementTracker = function () {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function () {
      var _this = this;

      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout(function () {
          return _this.check();
        }, options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function () {
      return this.progress = 100;
    };

    return ElementTracker;
  }();

  DocumentMonitor = function () {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange,
          _ref2,
          _this = this;

      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;

      document.onreadystatechange = function () {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }

        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;
  }();

  EventLagMonitor = function () {
    function EventLagMonitor() {
      var avg,
          interval,
          last,
          points,
          samples,
          _this = this;

      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function () {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);

        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }

        avg = avgAmplitude(samples);

        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;
  }();

  Scaler = function () {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;

      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function (frameTime, val) {
      var scaling;

      if (val == null) {
        val = result(this.source, 'progress');
      }

      if (val >= 100) {
        this.done = true;
      }

      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }

        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }

      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }

      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;
  }();

  sources = null;
  scalers = null;
  bar = null;
  uniScaler = null;
  animation = null;
  cancelAnimation = null;
  Pace.running = false;

  handlePushState = function handlePushState() {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;

    window.history.pushState = function () {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;

    window.history.replaceState = function () {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };
  (init = function init() {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;

    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];

    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];

      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }

    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];

    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }

    Pace.bar = bar = new Bar();
    scalers = [];
    return uniScaler = new Scaler();
  })();

  Pace.stop = function () {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;

    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }

      animation = null;
    }

    return init();
  };

  Pace.restart = function () {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function () {
    var start;
    Pace.running = true;
    bar.render();
    start = now();
    cancelAnimation = false;
    return animation = runAnimation(function (frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;

      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;

      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];

        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;

          if (scaler.done) {
            continue;
          }

          count++;
          sum += scaler.tick(frameTime);
        }
      }

      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));

      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function () {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function (_options) {
    _extend(options, _options);

    Pace.running = true;

    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }

    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };

  if (( false ? undefined : _typeof(exports)) === 'object') {
    module.exports = Pace;
  } else {
    if (options.startOnPageLoad) {
      Pace.start();
    }
  }
}).call(this);

/***/ }),

/***/ "./resources/js/vendor/slugify.js":
/*!****************************************!*\
  !*** ./resources/js/vendor/slugify.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Converts a string to a "URL-safe" slug.
 * https://gist.github.com/Omranic/c53be563645974884ca8
 * Allows for some customization with two optional parameters:
 *
 * @param {string} Delimiter used. If not specified, defaults to a dash "-"
 * @param {array} Adds to the list of non-alphanumeric characters which
 *   will be converted to the delimiter. The default list includes:
 *   ['–', '—', '―', '~', '\\', '/', '|', '+', '\'', '‘', '’', ' ']
 */
if (!String.prototype.slugify) {
  String.prototype.slugify = function (delimiter, separators) {
    var _sanitizer;

    var i = separators && separators.length,
        slug = this,
        delimiter = delimiter || '-',
        regexEscape = new RegExp(/[[\/\\^$*+?.()|{}\]]/g),
        regexDelimiter = delimiter.replace(regexEscape, "\\$&"),
        prohibited = new RegExp("([^a-z0-9" + regexDelimiter + "])", "g"),
        consecutive = new RegExp("(" + regexDelimiter + "+)", "g"),
        trim = new RegExp("^" + regexDelimiter + "*(.*?)" + regexDelimiter + "*$"),
        sanitizer = (_sanitizer = {
      // common latin
      'á': 'a',
      'à': 'a',
      'â': 'a',
      'ä': 'a',
      'ã': 'a',
      'æ': 'ae',
      'ç': 'c',
      'é': 'e',
      'è': 'e',
      'ê': 'e',
      'ë': 'e',
      'ẽ': 'e',
      'í': 'i',
      'ì': 'i',
      'î': 'i',
      'ï': 'i',
      'ĩ': 'i',
      'ó': 'o',
      'ò': 'o',
      'ô': 'o',
      'ö': 'o',
      'õ': 'o',
      'œ': 'oe',
      'ß': 'ss',
      'ú': 'u',
      'ù': 'u',
      'û': 'u',
      'ü': 'u',
      'ũ': 'u',
      // other diacritics
      'ă': 'a',
      'ắ': 'a',
      'ằ': 'a',
      'ẵ': 'a',
      'ẳ': 'a',
      'ấ': 'a',
      'ầ': 'a',
      'ẫ': 'a',
      'ẩ': 'a',
      'ǎ': 'a',
      'å': 'a',
      'ǻ': 'a',
      'ǟ': 'a',
      'ȧ': 'a',
      'ǡ': 'a',
      'ą': 'a',
      'ā': 'a',
      'ả': 'a',
      'ȁ': 'a',
      'ȃ': 'a',
      'ạ': 'a',
      'ặ': 'a',
      'ậ': 'a',
      'ḁ': 'a',
      'ⱥ': 'a',
      'ᶏ': 'a',
      'ɐ': 'a',
      'ɑ': 'a',
      'ḃ': 'b',
      'ḅ': 'b',
      'ḇ': 'b',
      'ƀ': 'b',
      'ɓ': 'b',
      'ƃ': 'b',
      'ᵬ': 'b',
      'ᶀ': 'b',
      'þ': 'b',
      'ć': 'c',
      'ĉ': 'c',
      'č': 'c',
      'ċ': 'c',
      'ḉ': 'c',
      'ȼ': 'c',
      'ƈ': 'c',
      'ɕ': 'c',
      'ď': 'd',
      'ḋ': 'd',
      'ḑ': 'd',
      'ḍ': 'd',
      'ḓ': 'd',
      'ḏ': 'd',
      'đ': 'd',
      'ɖ': 'd',
      'ɗ': 'd',
      'ƌ': 'd',
      'ᵭ': 'd',
      'ᶁ': 'd',
      'ᶑ': 'd',
      'ȡ': 'd',
      '∂': 'd',
      'ĕ': 'e',
      'ế': 'e',
      'ề': 'e',
      'ễ': 'e',
      'ể': 'e',
      'ě': 'e',
      'ė': 'e',
      'ȩ': 'e',
      'ḝ': 'e',
      'ę': 'e',
      'ē': 'e',
      'ḗ': 'e',
      'ḕ': 'e',
      'ẻ': 'e',
      'ȅ': 'e',
      'ȇ': 'e',
      'ẹ': 'e',
      'ệ': 'e',
      'ḙ': 'e',
      'ḛ': 'e',
      'ɇ': 'e',
      'ᶒ': 'e',
      'ḟ': 'f',
      'ƒ': 'f',
      'ᵮ': 'f',
      'ᶂ': 'f',
      'ǵ': 'g',
      'ğ': 'g',
      'ĝ': 'g',
      'ǧ': 'g',
      'ġ': 'g',
      'ģ': 'g',
      'ḡ': 'g',
      'ǥ': 'g',
      'ɠ': 'g',
      'ᶃ': 'g',
      'ĥ': 'h',
      'ȟ': 'h',
      'ḧ': 'h',
      'ḣ': 'h',
      'ḩ': 'h',
      'ḥ': 'h',
      'ḫ': 'h',
      'ẖ': 'h',
      'ħ': 'h',
      'ⱨ': 'h',
      'ĭ': 'i',
      'ǐ': 'i',
      'ḯ': 'i',
      'į': 'i',
      'ī': 'i',
      'ỉ': 'i',
      'ȉ': 'i',
      'ȋ': 'i',
      'ị': 'i',
      'ḭ': 'i',
      'ɨ': 'i',
      'ᵻ': 'i',
      'ᶖ': 'i',
      'i': 'i',
      'ı': 'i',
      'ĵ': 'j',
      'ɉ': 'j',
      'ǰ': 'j',
      'ȷ': 'j',
      'ʝ': 'j',
      'ɟ': 'j',
      'ʄ': 'j',
      'ḱ': 'k',
      'ǩ': 'k',
      'ķ': 'k',
      'ḳ': 'k',
      'ḵ': 'k',
      'ƙ': 'k',
      'ⱪ': 'k',
      'ᶄ': 'k',
      'ĺ': 'l',
      'ľ': 'l',
      'ļ': 'l',
      'ḷ': 'l',
      'ḹ': 'l',
      'ḽ': 'l',
      'ḻ': 'l',
      'ł': 'l',
      'ŀ': 'l',
      'ƚ': 'l',
      'ⱡ': 'l',
      'ɫ': 'l',
      'ɬ': 'l',
      'ᶅ': 'l',
      'ɭ': 'l',
      'ȴ': 'l',
      'ḿ': 'm',
      'ṁ': 'm',
      'ṃ': 'm',
      'ᵯ': 'm',
      'ᶆ': 'm',
      'ɱ': 'm',
      'ń': 'n',
      'ǹ': 'n',
      'ň': 'n',
      'ñ': 'n',
      'ṅ': 'n',
      'ņ': 'n',
      'ṇ': 'n',
      'ṋ': 'n',
      'ṉ': 'n',
      'n̈': 'n',
      'ɲ': 'n',
      'ƞ': 'n',
      'ŋ': 'n',
      'ᵰ': 'n',
      'ᶇ': 'n',
      'ɳ': 'n',
      'ȵ': 'n',
      'ŏ': 'o',
      'ố': 'o',
      'ồ': 'o',
      'ỗ': 'o',
      'ổ': 'o',
      'ǒ': 'o',
      'ȫ': 'o',
      'ő': 'o',
      'ṍ': 'o',
      'ṏ': 'o',
      'ȭ': 'o',
      'ȯ': 'o',
      '͘o͘': 'o',
      'ȱ': 'o',
      'ø': 'o',
      'ǿ': 'o',
      'ǫ': 'o',
      'ǭ': 'o',
      'ō': 'o',
      'ṓ': 'o',
      'ṑ': 'o',
      'ỏ': 'o',
      'ȍ': 'o',
      'ȏ': 'o',
      'ơ': 'o',
      'ớ': 'o',
      'ờ': 'o',
      'ỡ': 'o',
      'ở': 'o',
      'ợ': 'o',
      'ọ': 'o',
      'ộ': 'o',
      'ɵ': 'o',
      'ɔ': 'o',
      'ṕ': 'p',
      'ṗ': 'p',
      'ᵽ': 'p',
      'ƥ': 'p',
      'p̃': 'p',
      'ᵱ': 'p',
      'ᶈ': 'p',
      'ɋ': 'q',
      'ƣ': 'q',
      'ʠ': 'q',
      'ŕ': 'r',
      'ř': 'r',
      'ṙ': 'r',
      'ŗ': 'r',
      'ȑ': 'r',
      'ȓ': 'r',
      'ṛ': 'r',
      'ṝ': 'r',
      'ṟ': 'r',
      'ɍ': 'r',
      'ɽ': 'r',
      'ᵲ': 'r',
      'ᶉ': 'r',
      'ɼ': 'r',
      'ɾ': 'r',
      'ᵳ': 'r',
      'ś': 's',
      'ṥ': 's',
      'ŝ': 's',
      'š': 's',
      'ṧ': 's',
      'ṡẛ': 's',
      'ş': 's',
      'ṣ': 's',
      'ṩ': 's',
      'ș': 's',
      's̩': 's',
      'ᵴ': 's',
      'ᶊ': 's',
      'ʂ': 's',
      'ȿ': 's',
      'г': 's',
      'ť': 't',
      'ṫ': 't',
      'ţ': 't',
      'ṭ': 't',
      'ț': 't',
      'ṱ': 't',
      'ṯ': 't',
      'ŧ': 't',
      'ⱦ': 't',
      'ƭ': 't',
      'ʈ': 't',
      '̈ẗ': 't',
      'ᵵ': 't',
      'ƫ': 't',
      'ȶ': 't',
      'ŭ': 'u',
      'ǔ': 'u',
      'ů': 'u',
      'ǘ': 'u',
      'ǜ': 'u',
      'ǚ': 'u',
      'ǖ': 'u',
      'ű': 'u',
      'ṹ': 'u',
      'ų': 'u',
      'ū': 'u',
      'ṻ': 'u',
      'ủ': 'u',
      'ȕ': 'u',
      'ȗ': 'u',
      'ư': 'u',
      'ứ': 'u',
      'ừ': 'u',
      'ữ': 'u',
      'ử': 'u',
      'ự': 'u',
      'ụ': 'u',
      'ṳ': 'u',
      'ṷ': 'u',
      'ṵ': 'u',
      'ʉ': 'u',
      'ᵾ': 'u',
      'ᶙ': 'u',
      'ṽ': 'v',
      'ṿ': 'v',
      'ʋ': 'v',
      'ᶌ': 'v',
      'ⱴ': 'v',
      'ẃ': 'w',
      'ẁ': 'w',
      'ŵ': 'w',
      'ẅ': 'w',
      'ẇ': 'w',
      'ẉ': 'w',
      'ẘ': 'w',
      'ẍ': 'x',
      'ẋ': 'x',
      'ᶍ': 'x',
      'ý': 'y',
      'ỳ': 'y',
      'ŷ': 'y',
      'ẙ': 'y',
      'ÿ': 'y',
      'ỹ': 'y',
      'ẏ': 'y',
      'ȳ': 'y',
      'ỷ': 'y',
      'ỵ': 'y',
      'ɏ': 'y',
      'ƴ': 'y',
      'ʏ': 'y',
      'ź': 'z',
      'ẑ': 'z',
      'ž': 'z',
      'ż': 'z',
      'ẓ': 'z',
      'ẕ': 'z',
      'ƶ': 'z',
      'ȥ': 'z',
      'ⱬ': 'z',
      'ᵶ': 'z',
      'ᶎ': 'z',
      'ʐ': 'z',
      'ʑ': 'z',
      'ɀ': 'z',
      // greek
      'α': 'a',
      'β': 'b',
      'γ': 'g',
      'ɣ': 'g',
      'δ': 'd',
      'ð': 'd',
      'ε': 'e',
      'ζ': 'z',
      'η': 'i',
      'θ': 'th',
      'ι': 'i',
      'κ': 'k',
      'λ': 'l',
      'μ': 'm',
      'µ': 'm',
      'ν': 'n',
      'ξ': 'x',
      'ο': 'o',
      'π': 'p',
      'ρ': 'r',
      'σ': 's',
      'ς': 's',
      'τ': 't',
      'υ': 'u',
      'φ': 'f',
      'χ': 'ch',
      'ψ': 'ps',
      'ω': 'o',
      // greek diacritics
      'ᾳ': 'a',
      'ά': 'a',
      'ὰ': 'a',
      'ᾴ': 'a',
      'ᾲ': 'a',
      'ᾶ': 'a',
      'ᾷ': 'a',
      'ἀ': 'a',
      'ᾀ': 'a',
      'ἄ': 'a',
      'ᾄ': 'a',
      'ἂ': 'a',
      'ᾂ': 'a',
      'ἆ': 'a',
      'ᾆ': 'a',
      'ἁ': 'a',
      'ᾁ': 'a',
      'ἅ': 'a',
      'ᾅ': 'a',
      'ἃ': 'a',
      'ᾃ': 'a',
      'ἇ': 'a',
      'ᾇ': 'a',
      'ᾱ': 'a',
      'ᾰ': 'a',
      'έ': 'e',
      'ὲ': 'e',
      'ἐ': 'e',
      'ἔ': 'e',
      'ἒ': 'e',
      'ἑ': 'e',
      'ἕ': 'e',
      'ἓ': 'e',
      'ῃ': 'i',
      'ή': 'i',
      'ὴ': 'i',
      'ῄ': 'i',
      'ῂ': 'i',
      'ῆ': 'i',
      'ῇ': 'i',
      'ἠ': 'i',
      'ᾐ': 'i',
      'ἤ': 'i',
      'ᾔ': 'i',
      'ἢ': 'i',
      'ᾒ': 'i',
      'ἦ': 'i',
      'ᾖ': 'i',
      'ἡ': 'i',
      'ᾑ': 'i',
      'ἥ': 'i',
      'ᾕ': 'i',
      'ἣ': 'i',
      'ᾓ': 'i',
      'ἧ': 'i',
      'ᾗ': 'i',
      'ί': 'i',
      'ὶ': 'i',
      'ῖ': 'i',
      'ἰ': 'i',
      'ἴ': 'i',
      'ἲ': 'i',
      'ἶ': 'i',
      'ἱ': 'i',
      'ἵ': 'i',
      'ἳ': 'i',
      'ἷ': 'i',
      'ϊ': 'i',
      'ΐ': 'i',
      'ῒ': 'i',
      'ῗ': 'i',
      'ῑ': 'i',
      'ῐ': 'i',
      'ό': 'o',
      'ὸ': 'o',
      'ὀ': 'o',
      'ὄ': 'o',
      'ὂ': 'o',
      'ὁ': 'o',
      'ὅ': 'o',
      'ὃ': 'o',
      'ύ': 'u',
      'ὺ': 'u',
      'ῦ': 'u',
      'ὐ': 'u',
      'ὔ': 'u',
      'ὒ': 'u',
      'ὖ': 'u',
      'ὑ': 'u',
      'ὕ': 'u',
      'ὓ': 'u',
      'ὗ': 'u',
      'ϋ': 'u',
      'ΰ': 'u',
      'ῢ': 'u',
      'ῧ': 'u',
      'ῡ': 'u',
      'ῠ': 'u',
      'ῳ': 'o',
      'ώ': 'o',
      'ῴ': 'o',
      'ὼ': 'o',
      'ῲ': 'o',
      'ῶ': 'o',
      'ῷ': 'o',
      'ὠ': 'o',
      'ᾠ': 'o',
      'ὤ': 'o',
      'ᾤ': 'o',
      'ὢ': 'o',
      'ᾢ': 'o',
      'ὦ': 'o',
      'ᾦ': 'o',
      'ὡ': 'o',
      'ᾡ': 'o',
      'ὥ': 'o',
      'ᾥ': 'o',
      'ὣ': 'o',
      'ᾣ': 'o',
      'ὧ': 'o',
      'ᾧ': 'o',
      'ῤ': 'r',
      'ῥ': 'r',
      // cyrillic (russian)
      'а': 'a',
      'б': 'b',
      'в': 'v'
    }, _defineProperty(_sanitizer, "\u0433", 'g'), _defineProperty(_sanitizer, 'д', 'd'), _defineProperty(_sanitizer, 'е', 'e'), _defineProperty(_sanitizer, 'ё', 'e'), _defineProperty(_sanitizer, 'ж', 'zh'), _defineProperty(_sanitizer, 'з', 'z'), _defineProperty(_sanitizer, 'и', 'i'), _defineProperty(_sanitizer, 'й', 'j'), _defineProperty(_sanitizer, 'к', 'k'), _defineProperty(_sanitizer, 'л', 'l'), _defineProperty(_sanitizer, 'м', 'm'), _defineProperty(_sanitizer, 'н', 'n'), _defineProperty(_sanitizer, 'о', 'o'), _defineProperty(_sanitizer, 'п', 'p'), _defineProperty(_sanitizer, 'р', 'r'), _defineProperty(_sanitizer, 'с', 's'), _defineProperty(_sanitizer, 'т', 't'), _defineProperty(_sanitizer, 'у', 'u'), _defineProperty(_sanitizer, 'ф', 'f'), _defineProperty(_sanitizer, 'х', 'h'), _defineProperty(_sanitizer, 'ц', 'ts'), _defineProperty(_sanitizer, 'ч', 'ch'), _defineProperty(_sanitizer, 'ш', 'sh'), _defineProperty(_sanitizer, 'щ', 'sh'), _defineProperty(_sanitizer, 'ъ', ''), _defineProperty(_sanitizer, 'ы', 'i'), _defineProperty(_sanitizer, 'ь', ''), _defineProperty(_sanitizer, 'э', 'e'), _defineProperty(_sanitizer, 'ю', 'yu'), _defineProperty(_sanitizer, 'я', 'ya'), _defineProperty(_sanitizer, 'і', 'j'), _defineProperty(_sanitizer, 'ѳ', 'f'), _defineProperty(_sanitizer, 'ѣ', 'e'), _defineProperty(_sanitizer, 'ѵ', 'i'), _defineProperty(_sanitizer, 'ѕ', 'z'), _defineProperty(_sanitizer, 'ѯ', 'ks'), _defineProperty(_sanitizer, 'ѱ', 'ps'), _defineProperty(_sanitizer, 'ѡ', 'o'), _defineProperty(_sanitizer, 'ѫ', 'yu'), _defineProperty(_sanitizer, 'ѧ', 'ya'), _defineProperty(_sanitizer, 'ѭ', 'yu'), _defineProperty(_sanitizer, 'ѩ', 'ya'), _defineProperty(_sanitizer, 'ا', 'a'), _defineProperty(_sanitizer, 'أ', 'a'), _defineProperty(_sanitizer, 'إ', 'a'), _defineProperty(_sanitizer, 'آ', 'a'), _defineProperty(_sanitizer, 'ب', 'b'), _defineProperty(_sanitizer, 'ت', 't'), _defineProperty(_sanitizer, 'ث', 'th'), _defineProperty(_sanitizer, 'ج', 'j'), _defineProperty(_sanitizer, 'ح', 'h'), _defineProperty(_sanitizer, 'خ', 'kh'), _defineProperty(_sanitizer, 'د', 'd'), _defineProperty(_sanitizer, 'ذ', 'dh'), _defineProperty(_sanitizer, 'ر', 'r'), _defineProperty(_sanitizer, 'ز', 'z'), _defineProperty(_sanitizer, 'س', 's'), _defineProperty(_sanitizer, 'ش', 'sh'), _defineProperty(_sanitizer, 'ص', 's'), _defineProperty(_sanitizer, 'ض', 'd'), _defineProperty(_sanitizer, 'ط', 't'), _defineProperty(_sanitizer, 'ظ', 'z'), _defineProperty(_sanitizer, 'ع', 'a'), _defineProperty(_sanitizer, 'غ', 'gh'), _defineProperty(_sanitizer, 'ف', 'f'), _defineProperty(_sanitizer, 'ق', 'q'), _defineProperty(_sanitizer, 'ك', 'k'), _defineProperty(_sanitizer, 'ل', 'l'), _defineProperty(_sanitizer, 'م', 'm'), _defineProperty(_sanitizer, 'ن', 'n'), _defineProperty(_sanitizer, 'ه', 'h'), _defineProperty(_sanitizer, 'و', 'w'), _defineProperty(_sanitizer, 'ى', 'y'), _defineProperty(_sanitizer, 'ي', 'y'), _defineProperty(_sanitizer, 'ة', 't'), _defineProperty(_sanitizer, '١', '1'), _defineProperty(_sanitizer, '٢', '2'), _defineProperty(_sanitizer, '٣', '3'), _defineProperty(_sanitizer, '٤', '4'), _defineProperty(_sanitizer, '٥', '5'), _defineProperty(_sanitizer, '٦', '6'), _defineProperty(_sanitizer, '٧', '7'), _defineProperty(_sanitizer, '٨', '8'), _defineProperty(_sanitizer, '٩', '9'), _defineProperty(_sanitizer, '٠', '0'), _defineProperty(_sanitizer, '₳', 'ARA'), _defineProperty(_sanitizer, '฿', 'THB'), _defineProperty(_sanitizer, '₵', 'GHS'), _defineProperty(_sanitizer, '¢', 'c'), _defineProperty(_sanitizer, '₡', 'CRC'), _defineProperty(_sanitizer, '₢', 'Cr'), _defineProperty(_sanitizer, '₠', 'XEU'), _defineProperty(_sanitizer, '$', 'USD'), _defineProperty(_sanitizer, '₫', 'VND'), _defineProperty(_sanitizer, '৳', 'BDT'), _defineProperty(_sanitizer, '₯', 'GRD'), _defineProperty(_sanitizer, '€', 'EUR'), _defineProperty(_sanitizer, '₣', 'FRF'), _defineProperty(_sanitizer, '₲', 'PYG'), _defineProperty(_sanitizer, '₴', 'HRN'), _defineProperty(_sanitizer, '₭', 'LAK'), _defineProperty(_sanitizer, '₦', 'NGN'), _defineProperty(_sanitizer, '₧', 'ESP'), _defineProperty(_sanitizer, '₱', 'PhP'), _defineProperty(_sanitizer, '£', 'GBP'), _defineProperty(_sanitizer, '₤', 'GBP'), _defineProperty(_sanitizer, '₨', 'Rs'), _defineProperty(_sanitizer, '₪', 'NS'), _defineProperty(_sanitizer, '₮', 'MNT'), _defineProperty(_sanitizer, '₩', 'WON'), _defineProperty(_sanitizer, '¥', 'YEN'), _defineProperty(_sanitizer, '៛', 'KHR'), _defineProperty(_sanitizer, '–', delimiter), _defineProperty(_sanitizer, '—', delimiter), _defineProperty(_sanitizer, '―', delimiter), _defineProperty(_sanitizer, '~', delimiter), _defineProperty(_sanitizer, '/', delimiter), _defineProperty(_sanitizer, '\\', delimiter), _defineProperty(_sanitizer, '|', delimiter), _defineProperty(_sanitizer, '+', delimiter), _defineProperty(_sanitizer, '‘', delimiter), _defineProperty(_sanitizer, '’', delimiter), _defineProperty(_sanitizer, '\'', delimiter), _defineProperty(_sanitizer, ' ', delimiter), _defineProperty(_sanitizer, '-', '-'), _defineProperty(_sanitizer, '_', '_'), _sanitizer); // add any user-defined separator elements

    if (separators) {
      for (i; i >= 0; --i) {
        sanitizer[separators[i]] = delimiter;
      }
    } // do all the replacements


    slug = slug.toLowerCase(); // if we don't do this, add the uppercase versions to the sanitizer plus inlcude A-Z in the prohibited filter

    slug = slug.replace(prohibited, function (match) {
      return sanitizer[match] || '';
    });
    slug = slug.replace(consecutive, delimiter);
    slug = slug.replace(trim, "$1");
    return slug;
  };
}

/***/ }),

/***/ 6:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phamthao/Desktop/code/cortex-1.0.4/resources/js/app.js */"./resources/js/app.js");


/***/ })

},[[6,"/js/manifest","/js/vendor"]]]);