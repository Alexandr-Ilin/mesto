(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=n.openViewPlacePopup,a=n.openDeleteCardPopup,c=n.hanldeLikeButton;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateSelector=r,this._data=e,this._name=e.name,this._link=e.link,this._likes=e.likes,this._userId=o,this._ownerId=e.owner._id,this._cardId=e._id,this._handleCardClick=i,this._hanldeLikeButton=c,this._handleDeleteButton=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return this._cardElement=document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0),this._cardElement}},{key:"deletePlace",value:function(){this._element.remove()}},{key:"changeLike",value:function(e){this._likes=e.likes,this._numberLikesElement.textContent=this._likes.length,this._toogleHeart()}},{key:"pointLike",value:function(){var e=this;return this._likes.some((function(t){return e._userId===t._id}))}},{key:"_toogleHeart",value:function(){this._likeButton.classList.toggle("element__heart_active")}},{key:"_addListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._hanldeLikeButton()})),this._deleteButton.addEventListener("click",(function(t){e._handleDeleteButton(e._element)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__heart"),this._elementImage=this._element.querySelector(".element__image"),this._deleteButton=this._element.querySelector(".elements__item-delete"),this._numberLikesElement=this._element.querySelector(".element__like-number"),this._placeName=this._element.querySelector(".element__place"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._placeName.textContent=this._name,this._numberLikesElement.textContent=this._likes.length,this._userId!==this._ownerId&&this._deleteButton.remove(),this._likes.length>0&&this.pointLike()&&this._toogleHeart(),this._addListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e,t){this._container.prepend(this._renderer(e,t))}},{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n.addItem(n._renderer(e,t))}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n,r,o=this,i=t.name,a=t.character,c=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){var t=e.name,n=e.about,r=e.avatar;o._name.textContent=t,o._character.textContent=n,o._avatar.src=r},(n="setUserInfo")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._name=document.querySelector(i),this._character=document.querySelector(a),this._avatar=document.querySelector(c)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,character:this._character.textContent}}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=document.querySelector(n),this._settings=t}var t,n;return t=e,(n=[{key:"_hideError",value:function(e){e.classList.remove(this._settings.inputErrorClass);var t=this._form.querySelector(".form__error-message_type_".concat(e.name));t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"_showError",value:function(e,t){e.classList.add(this._inputErrorClass);var n=this._form.querySelector(".form__error-message_type_".concat(e.name));n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputItems.some((function(e){return!e.validity.valid}))}},{key:"_toogleButtonState",value:function(){this._hasInvalidInput()?(this._button.setAttribute("disabled",""),this._button.classList.add(this._settings.inactiveButtonClass)):(this._button.removeAttribute("disabled"),this._button.classList.remove(this._settings.inactiveButtonClass))}},{key:"_addInputListener",value:function(){var e=this;this._inputItems=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._button=this._form.querySelector(this._settings.submitButtonSelector),this._inputItems.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toogleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._addInputListener()}},{key:"validateOpenPopup",value:function(){var e=this;this._inputItems.forEach((function(t){e._hideError(t)})),this._toogleButtonState()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),l(this,"_handlerOverlayClick",(function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close"))&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handlerOverlayClick)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._viewPlaceName=t._popup.querySelector(".element-view__place"),t._viewImage=t._popup.querySelector(".element-view__image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._viewPlaceName.textContent=e,this._viewImage.alt=e,this._viewImage.src=t,h(m(a.prototype),"open",this).call(this)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),L(O(r=i.call(this,e)),"_getInputValues",(function(){var e={};return r._inputs.forEach((function(t){e[t.name]=t.value})),e})),L(O(r),"setEventListeners",(function(){P((n=O(r),S(a.prototype)),"setEventListeners",n).call(n),r._form.addEventListener("submit",(function(){return r._handleProfileFormSubmit(r._getInputValues())}))})),r._handleProfileFormSubmit=t,r._form=r._popup.querySelector(".form"),r._inputs=r._form.querySelectorAll(".form__item"),r._button=r._form.querySelector(".form__submit-button"),r._text=r._button.textContent,r}return t=a,(n=[{key:"renderLoading",value:function(e){this._button.textContent=e?"Cохранение...":this._text}},{key:"close",value:function(){P(S(a.prototype),"close",this).call(this),this._form.reset()}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._userUrl="".concat(this._baseUrl,"/users/me"),this._avaUrl="".concat(this._baseUrl,"/users/me/avatar"),this._cardsUrl="".concat(this._baseUrl,"/cards"),this._likesUrl="".concat(this._baseUrl,"/cards/likes"),this._headers=r}var t,n;return t=e,(n=[{key:"getUserData",value:function(){return fetch(this._userUrl,{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._cardsUrl,{headers:this._headers}).then(this._checkResponse)}},{key:"changeUserData",value:function(e){var t=e.user,n=e.character;return fetch(this._userUrl,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch(this._cardsUrl,{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._cardsUrl,"/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"likedCard",value:function(e){return fetch("".concat(this._likesUrl,"/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._likesUrl,"/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"chengeAvatar",value:function(e){return fetch(this._avaUrl,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function B(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e,t){var n,r,o,c,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u=function(){x((n=T(r),A(a.prototype)),"setEventListeners",n).call(n),r._form.addEventListener("submit",(function(e){e.preventDefault(),r._deletePlace(r._card)}))},(c="setEventListeners")in(o=T(r=i.call(this,e)))?Object.defineProperty(o,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[c]=u,r._form=r._popup.querySelector(".form"),r._deletePlace=t,r}return t=a,(n=[{key:"open",value:function(e){this._card=e,x(A(a.prototype),"open",this).call(this)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s),V=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__avatar-button"),F=document.querySelector(".form__item_type_name"),M=document.querySelector(".form__item_type_about"),z={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__item_error",errorClass:"form__error-message_visible"};function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=new i({name:".profile__name",character:".profile__about-self",avatar:".profile__avatar"}),K=new c(z,".form_type_edit-profile"),Q=new c(z,".form_type_edit-place"),W=new c(z,".form_type_chenge-avatar"),X=new j(".popup_type_edit-profile",(function(e){X.renderLoading(!0),re.changeUserData(e).then((function(e){G.setUserInfo(e),X.close()})).catch((function(e){console.log(e)})).finally((function(){X.renderLoading(!1)}))})),Y=new j(".popup_type_add-card",(function(e){Y.renderLoading(!0),re.addNewCard(e).then((function(e){ne.addItemPrepend(e,e.owner._id),Y.close()})).catch((function(e){console.log(e)})).finally((function(){Y.renderLoading(!1)}))})),Z=new j(".popup_type_chenge-avatar",(function(e){Z.renderLoading(!0),re.chengeAvatar(e).then((function(e){G.setUserInfo(e),Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.renderLoading(!1)}))})),ee=new v(".popup_type_view-image"),te=new N(".popup_type_delete-card",(function(e){re.deleteCard(e._cardId).then((function(){e.deletePlace(),te.close()})).catch((function(e){console.log(e)}))})),ne=new r((function(e,n){var r=new t(e,{openViewPlacePopup:function(e,t){ee.open(e,t)},openDeleteCardPopup:oe,hanldeLikeButton:function(){return function(e){e.pointLike()?re.deleteLike(e._cardId).then((function(t){e.changeLike(t)})).catch((function(e){console.log(e)})):re.likedCard(e._cardId).then((function(t){e.changeLike(t)})).catch((function(e){console.log(e)}))}(r)}},".elements__template",n);return r.generateCard()}),".elements"),re=new I({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"a251447a-ca8d-48d6-88cb-4cedc8f5baae","Content-Type":"application/json"}});function oe(e){console.log(e),te.open(e)}K.enableValidation(),Q.enableValidation(),W.enableValidation(),V.addEventListener("click",(function(){var e=G.getUserInfo();F.value=e.name,M.value=e.character,K.validateOpenPopup(),X.open()})),H.addEventListener("click",(function(){Q.validateOpenPopup(),Y.open()})),J.addEventListener("click",(function(){W.validateOpenPopup(),Z.open()})),te.setEventListeners(),Z.setEventListeners(),X.setEventListeners(),Y.setEventListeners(),ee.setEventListeners(),Promise.all([re.getUserData(),re.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];G.setUserInfo(o),ne.renderItems(i,o._id)})).catch((function(e){console.log(e)}))})();