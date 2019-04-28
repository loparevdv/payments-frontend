if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'payments-frontend'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'payments-frontend'.");
}
this['payments-frontend'] = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var throwUPAE = Kotlin.throwUPAE;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var Unit = Kotlin.kotlin.Unit;
  var toShort = Kotlin.toShort;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var API_URL;
  function main() {
    var paymentOptionListPresenter = new PaymentOptionListPresenter();
    var paymentOptionListPage = new PaymentOptionListPage(paymentOptionListPresenter);
    paymentOptionListPage.show();
  }
  function PaymentOption(name, description, url, logoUrl) {
    this.name = name;
    this.description = description;
    this.url = url;
    this.logoUrl = logoUrl;
  }
  PaymentOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaymentOption',
    interfaces: []
  };
  PaymentOption.prototype.component1 = function () {
    return this.name;
  };
  PaymentOption.prototype.component2 = function () {
    return this.description;
  };
  PaymentOption.prototype.component3 = function () {
    return this.url;
  };
  PaymentOption.prototype.component4 = function () {
    return this.logoUrl;
  };
  PaymentOption.prototype.copy_w74nik$ = function (name, description, url, logoUrl) {
    return new PaymentOption(name === void 0 ? this.name : name, description === void 0 ? this.description : description, url === void 0 ? this.url : url, logoUrl === void 0 ? this.logoUrl : logoUrl);
  };
  PaymentOption.prototype.toString = function () {
    return 'PaymentOption(name=' + Kotlin.toString(this.name) + (', description=' + Kotlin.toString(this.description)) + (', url=' + Kotlin.toString(this.url)) + (', logoUrl=' + Kotlin.toString(this.logoUrl)) + ')';
  };
  PaymentOption.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.logoUrl) | 0;
    return result;
  };
  PaymentOption.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.logoUrl, other.logoUrl)))));
  };
  function PaymentOptionListContract() {
  }
  function PaymentOptionListContract$View() {
  }
  PaymentOptionListContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function PaymentOptionListContract$Presenter() {
  }
  PaymentOptionListContract$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  PaymentOptionListContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PaymentOptionListContract',
    interfaces: []
  };
  function PaymentOptionListPage(presenter) {
    this.presenter_0 = presenter;
    var tmp$, tmp$_0;
    this.loader_0 = Kotlin.isType(tmp$ = document.getElementById('loader'), HTMLDivElement) ? tmp$ : throwCCE();
    this.content_0 = Kotlin.isType(tmp$_0 = document.getElementById('content'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.tileBuilder_0 = new TileBuilder();
  }
  PaymentOptionListPage.prototype.showPaymentOptions_5tz3oq$ = function (paymentOptions) {
    var tmp$;
    tmp$ = paymentOptions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      println(element);
      var tile = this.tileBuilder_0.build_yxfpx7$(element);
      println(tile);
      this.content_0.appendChild(tile);
    }
  };
  PaymentOptionListPage.prototype.showLoader = function () {
    println('showLoader');
  };
  PaymentOptionListPage.prototype.hideLoader = function () {
    this.loader_0.style.display = 'none';
    println('hideLoader');
  };
  PaymentOptionListPage.prototype.show = function () {
    this.presenter_0.attach_ae6pns$(this);
    this.presenter_0.loadPaymentOptions();
  };
  PaymentOptionListPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaymentOptionListPage',
    interfaces: [PaymentOptionListContract$View]
  };
  function PaymentOptionListPresenter() {
    this.view_dgy7m2$_0 = this.view_dgy7m2$_0;
  }
  Object.defineProperty(PaymentOptionListPresenter.prototype, 'view_0', {
    get: function () {
      if (this.view_dgy7m2$_0 == null)
        return throwUPAE('view');
      return this.view_dgy7m2$_0;
    },
    set: function (view) {
      this.view_dgy7m2$_0 = view;
    }
  });
  PaymentOptionListPresenter.prototype.attach_ae6pns$ = function (view) {
    this.view_0 = view;
  };
  function PaymentOptionListPresenter$loadPaymentOptions$lambda(this$PaymentOptionListPresenter) {
    return function (response) {
      var paymentOptions = JSON.parse(response);
      this$PaymentOptionListPresenter.view_0.hideLoader();
      println(toList(paymentOptions));
      this$PaymentOptionListPresenter.view_0.showPaymentOptions_5tz3oq$(toList(paymentOptions));
      return Unit;
    };
  }
  PaymentOptionListPresenter.prototype.loadPaymentOptions = function () {
    this.view_0.showLoader();
    this.getAsync_0(API_URL, PaymentOptionListPresenter$loadPaymentOptions$lambda(this));
  };
  function PaymentOptionListPresenter$getAsync$lambda(closure$xmlHttp, closure$callback) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4) && closure$xmlHttp.status === toShort(200)) {
        closure$callback(closure$xmlHttp.responseText);
      }
      return Unit;
    };
  }
  PaymentOptionListPresenter.prototype.getAsync_0 = function (url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.onload = PaymentOptionListPresenter$getAsync$lambda(xmlHttp, callback);
    xmlHttp.send();
  };
  PaymentOptionListPresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaymentOptionListPresenter',
    interfaces: [PaymentOptionListContract$Presenter]
  };
  function TileBuilder() {
  }
  TileBuilder.prototype.build_yxfpx7$ = function (paymentOption) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var containerElement = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var titleElement = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLDivElement) ? tmp$_0 : throwCCE();
    var imageElement = Kotlin.isType(tmp$_1 = document.createElement('img'), HTMLImageElement) ? tmp$_1 : throwCCE();
    var descriptionElement = Kotlin.isType(tmp$_2 = document.createElement('div'), HTMLDivElement) ? tmp$_2 : throwCCE();
    this.bind_0(paymentOption, titleElement, imageElement, descriptionElement);
    this.applyStyle_0(containerElement, titleElement, imageElement, descriptionElement);
    this.appendChild_0(containerElement, [titleElement, imageElement, descriptionElement]);
    return containerElement;
  };
  TileBuilder.prototype.applyStyle_0 = function (containerElement, titleElement, imageElement, descriptionElement) {
    addClass(containerElement, ['card', 'card-shadow']);
    addClass(titleElement, ['text-title', 'float-left']);
    addClass(imageElement, ['cover-image']);
    addClass(descriptionElement, ['text-description', 'float-left']);
  };
  TileBuilder.prototype.bind_0 = function (paymentOption, titleElement, imageElement, descriptionElement) {
    titleElement.innerHTML = paymentOption.name;
    imageElement.src = paymentOption.logoUrl;
    descriptionElement.innerHTML = paymentOption.description;
  };
  TileBuilder.prototype.appendChild_0 = function ($receiver, elements) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
      var element = elements[tmp$];
      $receiver.appendChild(element);
    }
  };
  TileBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TileBuilder',
    interfaces: []
  };
  Object.defineProperty(_, 'API_URL', {
    get: function () {
      return API_URL;
    }
  });
  _.main = main;
  _.PaymentOption = PaymentOption;
  PaymentOptionListContract.View = PaymentOptionListContract$View;
  PaymentOptionListContract.Presenter = PaymentOptionListContract$Presenter;
  _.PaymentOptionListContract = PaymentOptionListContract;
  _.PaymentOptionListPage = PaymentOptionListPage;
  _.PaymentOptionListPresenter = PaymentOptionListPresenter;
  _.TileBuilder = TileBuilder;
  API_URL = 'http://localhost:8080/payment_option';
  main();
  Kotlin.defineModule('payments-frontend', _);
  return _;
}(typeof this['payments-frontend'] === 'undefined' ? {} : this['payments-frontend'], kotlin);
