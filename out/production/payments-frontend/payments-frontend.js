if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'payments-frontend'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'payments-frontend'.");
}
this['payments-frontend'] = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Pair = Kotlin.kotlin.Pair;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwUPAE = Kotlin.throwUPAE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toShort = Kotlin.toShort;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var API_URL;
  function main() {
    var paymentOptionListPresenter = new PaymentOptionListPresenter();
    var paymentOptionListPage = new PaymentOptionListPage(paymentOptionListPresenter);
    paymentOptionListPage.show();
  }
  function FormBuilder() {
  }
  function FormBuilder$build$lambda(closure$paymentOptionForm, this$FormBuilder, closure$codename) {
    return function (it) {
      var formData = this$FormBuilder.getFormData_0(closure$paymentOptionForm);
      this$FormBuilder.submitForm_0(closure$codename, formData);
      return Unit;
    };
  }
  function FormBuilder$build$lambda_0(this$FormBuilder) {
    return function (it) {
      this$FormBuilder.goBack_0();
      return Unit;
    };
  }
  FormBuilder.prototype.build_bmfuof$ = function (codename, paymentOptionForm) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var containerElement = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var titleElement = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLDivElement) ? tmp$_0 : throwCCE();
    var imageElement = Kotlin.isType(tmp$_1 = document.createElement('img'), HTMLImageElement) ? tmp$_1 : throwCCE();
    var viewDetailsBackButtonElement = Kotlin.isType(tmp$_2 = document.createElement('button'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    var viewFormSubmitButtonElement = Kotlin.isType(tmp$_3 = document.createElement('button'), HTMLButtonElement) ? tmp$_3 : throwCCE();
    titleElement.innerHTML = paymentOptionForm.name;
    imageElement.src = paymentOptionForm.logoUrl;
    viewFormSubmitButtonElement.innerHTML = 'SUBMIT';
    viewFormSubmitButtonElement.addEventListener('click', FormBuilder$build$lambda(paymentOptionForm, this, codename));
    viewDetailsBackButtonElement.innerHTML = 'BACK';
    viewDetailsBackButtonElement.addEventListener('click', FormBuilder$build$lambda_0(this));
    addClass(containerElement, ['form', 'form-shadow']);
    addClass(titleElement, ['text-title', 'float-left']);
    addClass(imageElement, ['cover-image']);
    addClass(viewFormSubmitButtonElement, ['submit', 'ripple', 'float-right']);
    addClass(viewDetailsBackButtonElement, ['back', 'ripple', 'float-right']);
    this.appendChild_0(containerElement, [titleElement, imageElement, viewDetailsBackButtonElement, viewFormSubmitButtonElement]);
    var schema = JSON.parse(paymentOptionForm.schema);
    var tmp$_4;
    for (tmp$_4 = 0; tmp$_4 !== schema.length; ++tmp$_4) {
      var element = schema[tmp$_4];
      var tmp$_5;
      var input = Kotlin.isType(tmp$_5 = document.createElement('input'), HTMLInputElement) ? tmp$_5 : throwCCE();
      input.placeholder = element;
      input.id = element;
      addClass(input, ['form-input']);
      containerElement.appendChild(input);
    }
    return containerElement;
  };
  FormBuilder.prototype.getFormData_0 = function (paymentOptionForm) {
    var schema = JSON.parse(paymentOptionForm.schema);
    var destination = ArrayList_init(schema.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== schema.length; ++tmp$) {
      var item = schema[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var input = Kotlin.isType(tmp$_1 = document.getElementById(item), HTMLInputElement) ? tmp$_1 : throwCCE();
      tmp$_0.call(destination, new Pair(item, input.value));
    }
    var raw = destination;
    var payload = HashMap_init();
    var tmp$_2;
    tmp$_2 = raw.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      payload.put_xwzc9p$(element.first, element.second);
    }
    return payload;
  };
  FormBuilder.prototype.submitForm_0 = function (codename, formData) {
    var paymentOptionFormPresenter = new PaymentOptionFormPresenter();
    paymentOptionFormPresenter.submitPaymentOptionForm_yemong$(codename, formData);
  };
  FormBuilder.prototype.goBack_0 = function () {
    var paymentOptionFormPresenter = new PaymentOptionFormPresenter();
    var paymentOptionFormPage = new PaymentOptionFormPage(paymentOptionFormPresenter);
    paymentOptionFormPage.hidePaymentOptionForm();
    var paymentOptionListPresenter = new PaymentOptionListPresenter();
    var paymentOptionListPage = new PaymentOptionListPage(paymentOptionListPresenter);
    paymentOptionListPage.show();
  };
  FormBuilder.prototype.appendChild_0 = function ($receiver, elements) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
      var element = elements[tmp$];
      $receiver.appendChild(element);
    }
  };
  FormBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormBuilder',
    interfaces: []
  };
  function PaymentOptionForm(name, codename, description, url, logoUrl, schema) {
    this.name = name;
    this.codename = codename;
    this.description = description;
    this.url = url;
    this.logoUrl = logoUrl;
    this.schema = schema;
  }
  PaymentOptionForm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaymentOptionForm',
    interfaces: []
  };
  PaymentOptionForm.prototype.component1 = function () {
    return this.name;
  };
  PaymentOptionForm.prototype.component2 = function () {
    return this.codename;
  };
  PaymentOptionForm.prototype.component3 = function () {
    return this.description;
  };
  PaymentOptionForm.prototype.component4 = function () {
    return this.url;
  };
  PaymentOptionForm.prototype.component5 = function () {
    return this.logoUrl;
  };
  PaymentOptionForm.prototype.component6 = function () {
    return this.schema;
  };
  PaymentOptionForm.prototype.copy_r3y0ew$ = function (name, codename, description, url, logoUrl, schema) {
    return new PaymentOptionForm(name === void 0 ? this.name : name, codename === void 0 ? this.codename : codename, description === void 0 ? this.description : description, url === void 0 ? this.url : url, logoUrl === void 0 ? this.logoUrl : logoUrl, schema === void 0 ? this.schema : schema);
  };
  PaymentOptionForm.prototype.toString = function () {
    return 'PaymentOptionForm(name=' + Kotlin.toString(this.name) + (', codename=' + Kotlin.toString(this.codename)) + (', description=' + Kotlin.toString(this.description)) + (', url=' + Kotlin.toString(this.url)) + (', logoUrl=' + Kotlin.toString(this.logoUrl)) + (', schema=' + Kotlin.toString(this.schema)) + ')';
  };
  PaymentOptionForm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.codename) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.logoUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.schema) | 0;
    return result;
  };
  PaymentOptionForm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.codename, other.codename) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.logoUrl, other.logoUrl) && Kotlin.equals(this.schema, other.schema)))));
  };
  function PaymentOptionFormContract() {
  }
  function PaymentOptionFormContract$View() {
  }
  PaymentOptionFormContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function PaymentOptionFormContract$Presenter() {
  }
  PaymentOptionFormContract$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  PaymentOptionFormContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PaymentOptionFormContract',
    interfaces: []
  };
  function PaymentOptionFormPage(presenter) {
    this.presenter_0 = presenter;
    var tmp$, tmp$_0;
    this.loader_0 = Kotlin.isType(tmp$ = document.getElementById('loader'), HTMLDivElement) ? tmp$ : throwCCE();
    this.content_0 = Kotlin.isType(tmp$_0 = document.getElementById('content'), HTMLDivElement) ? tmp$_0 : throwCCE();
  }
  PaymentOptionFormPage.prototype.showPaymentOptionForm_bmfuof$ = function (codename, paymentOptionForm) {
    var form = (new FormBuilder()).build_bmfuof$(codename, paymentOptionForm);
    this.content_0.appendChild(form);
  };
  PaymentOptionFormPage.prototype.hidePaymentOptionForm = function () {
    this.content_0.innerHTML = '';
  };
  PaymentOptionFormPage.prototype.showLoader = function () {
    this.loader_0.style.display = 'visible';
  };
  PaymentOptionFormPage.prototype.hideLoader = function () {
    this.loader_0.style.display = 'none';
  };
  PaymentOptionFormPage.prototype.show_61zpoe$ = function (codename) {
    this.presenter_0.attach_13q136$(this);
    this.presenter_0.loadPaymentOptionForm_61zpoe$(codename);
  };
  PaymentOptionFormPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaymentOptionFormPage',
    interfaces: [PaymentOptionFormContract$View]
  };
  function PaymentOptionFormPresenter() {
    this.view_83wr2o$_0 = this.view_83wr2o$_0;
  }
  Object.defineProperty(PaymentOptionFormPresenter.prototype, 'view_0', {
    get: function () {
      if (this.view_83wr2o$_0 == null)
        return throwUPAE('view');
      return this.view_83wr2o$_0;
    },
    set: function (view) {
      this.view_83wr2o$_0 = view;
    }
  });
  PaymentOptionFormPresenter.prototype.attach_13q136$ = function (view) {
    this.view_0 = view;
  };
  function PaymentOptionFormPresenter$loadPaymentOptionForm$lambda(this$PaymentOptionFormPresenter, closure$codename) {
    return function (response) {
      var paymentOptionForm = JSON.parse(response);
      this$PaymentOptionFormPresenter.view_0.hideLoader();
      this$PaymentOptionFormPresenter.view_0.showPaymentOptionForm_bmfuof$(closure$codename, paymentOptionForm);
      return Unit;
    };
  }
  PaymentOptionFormPresenter.prototype.loadPaymentOptionForm_61zpoe$ = function (codename) {
    this.view_0.showLoader();
    var URL = 'http://localhost:8080/payment_option/' + codename;
    this.getAsync_0(URL, PaymentOptionFormPresenter$loadPaymentOptionForm$lambda(this, codename));
  };
  function PaymentOptionFormPresenter$submitPaymentOptionForm$lambda(it) {
    println(it);
    return Unit;
  }
  PaymentOptionFormPresenter.prototype.submitPaymentOptionForm_yemong$ = function (codename, formData) {
    println(formData.toString());
    var URL = 'http://localhost:8080/payment_option/' + codename;
    this.postAsync_0(URL, formData, PaymentOptionFormPresenter$submitPaymentOptionForm$lambda);
  };
  function PaymentOptionFormPresenter$postAsync$lambda(closure$xmlHttp) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4) && closure$xmlHttp.status === toShort(200)) {
        println('YAY! Done!');
      }
       else {
        println('Something wrong');
      }
      return Unit;
    };
  }
  PaymentOptionFormPresenter.prototype.postAsync_0 = function (url, data, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST', url, true);
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.onreadystatechange = PaymentOptionFormPresenter$postAsync$lambda(xmlHttp);
    xmlHttp.send(data.toString());
  };
  function PaymentOptionFormPresenter$getAsync$lambda(closure$xmlHttp, closure$callback) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4) && closure$xmlHttp.status === toShort(200)) {
        closure$callback(closure$xmlHttp.responseText);
      }
      return Unit;
    };
  }
  PaymentOptionFormPresenter.prototype.getAsync_0 = function (url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.onload = PaymentOptionFormPresenter$getAsync$lambda(xmlHttp, callback);
    xmlHttp.send();
  };
  PaymentOptionFormPresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaymentOptionFormPresenter',
    interfaces: [PaymentOptionFormContract$Presenter]
  };
  function PaymentOption(name, codename, description, url, logoUrl) {
    this.name = name;
    this.codename = codename;
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
    return this.codename;
  };
  PaymentOption.prototype.component3 = function () {
    return this.description;
  };
  PaymentOption.prototype.component4 = function () {
    return this.url;
  };
  PaymentOption.prototype.component5 = function () {
    return this.logoUrl;
  };
  PaymentOption.prototype.copy_x0a6t6$ = function (name, codename, description, url, logoUrl) {
    return new PaymentOption(name === void 0 ? this.name : name, codename === void 0 ? this.codename : codename, description === void 0 ? this.description : description, url === void 0 ? this.url : url, logoUrl === void 0 ? this.logoUrl : logoUrl);
  };
  PaymentOption.prototype.toString = function () {
    return 'PaymentOption(name=' + Kotlin.toString(this.name) + (', codename=' + Kotlin.toString(this.codename)) + (', description=' + Kotlin.toString(this.description)) + (', url=' + Kotlin.toString(this.url)) + (', logoUrl=' + Kotlin.toString(this.logoUrl)) + ')';
  };
  PaymentOption.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.codename) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.logoUrl) | 0;
    return result;
  };
  PaymentOption.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.codename, other.codename) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.logoUrl, other.logoUrl)))));
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
      var tile = this.tileBuilder_0.build_yxfpx7$(element);
      this.content_0.appendChild(tile);
    }
  };
  PaymentOptionListPage.prototype.hidePaymentOptions = function () {
    this.content_0.innerHTML = '';
  };
  PaymentOptionListPage.prototype.showLoader = function () {
  };
  PaymentOptionListPage.prototype.hideLoader = function () {
    this.loader_0.style.display = 'none';
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var containerElement = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var titleElement = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLDivElement) ? tmp$_0 : throwCCE();
    var imageElement = Kotlin.isType(tmp$_1 = document.createElement('img'), HTMLImageElement) ? tmp$_1 : throwCCE();
    var descriptionElement = Kotlin.isType(tmp$_2 = document.createElement('div'), HTMLDivElement) ? tmp$_2 : throwCCE();
    var viewDetailsButtonElement = Kotlin.isType(tmp$_3 = document.createElement('button'), HTMLButtonElement) ? tmp$_3 : throwCCE();
    this.bind_0(paymentOption, titleElement, imageElement, descriptionElement, viewDetailsButtonElement);
    this.applyStyle_0(containerElement, titleElement, imageElement, descriptionElement, viewDetailsButtonElement);
    this.appendChild_0(containerElement, [titleElement, imageElement, descriptionElement, viewDetailsButtonElement]);
    return containerElement;
  };
  TileBuilder.prototype.applyStyle_0 = function (containerElement, titleElement, imageElement, descriptionElement, viewDetailsButtonElement) {
    addClass(containerElement, ['card', 'card-shadow']);
    addClass(titleElement, ['text-title', 'float-left']);
    addClass(imageElement, ['cover-image']);
    addClass(descriptionElement, ['text-description', 'float-left']);
    addClass(viewDetailsButtonElement, ['view-details', 'ripple', 'float-right']);
  };
  function TileBuilder$bind$lambda(closure$paymentOption) {
    return function (it) {
      var paymentOptionListPresenter = new PaymentOptionListPresenter();
      var paymentOptionListPage = new PaymentOptionListPage(paymentOptionListPresenter);
      paymentOptionListPage.hidePaymentOptions();
      var paymentOptionFormPresenter = new PaymentOptionFormPresenter();
      var paymentOptionFormPage = new PaymentOptionFormPage(paymentOptionFormPresenter);
      paymentOptionFormPage.show_61zpoe$(closure$paymentOption.codename);
      return Unit;
    };
  }
  TileBuilder.prototype.bind_0 = function (paymentOption, titleElement, imageElement, descriptionElement, viewDetailsButtonElement) {
    titleElement.innerHTML = paymentOption.name;
    imageElement.src = paymentOption.logoUrl;
    descriptionElement.innerHTML = paymentOption.description;
    viewDetailsButtonElement.innerHTML = 'view details';
    viewDetailsButtonElement.addEventListener('click', TileBuilder$bind$lambda(paymentOption));
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
  _.FormBuilder = FormBuilder;
  _.PaymentOptionForm = PaymentOptionForm;
  PaymentOptionFormContract.View = PaymentOptionFormContract$View;
  PaymentOptionFormContract.Presenter = PaymentOptionFormContract$Presenter;
  _.PaymentOptionFormContract = PaymentOptionFormContract;
  _.PaymentOptionFormPage = PaymentOptionFormPage;
  _.PaymentOptionFormPresenter = PaymentOptionFormPresenter;
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
