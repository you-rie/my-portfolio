class MobileMenuDrop {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.links = document.querySelectorAll(".mobile-menu__link");
    this.DOM.container = document.querySelector("#global-container");
    this.DOM.body = document.querySelector('body');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    const isTouchCapable = "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);

    return isTouchCapable ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
    // 背景固定用
    this.DOM.body.classList.toggle("menu-open");
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.links.forEach(link => link.addEventListener(this.eventType, this._toggle.bind(this)));
  }
}