class Modal {
  constructor(cover, openTrigger, closeTrigger, modalOpen) {
    this.DOM = {};
    // this.DOM.body = document.getElementsByTagName('body');
    this.DOM.container = document.querySelector("#global-container");
    this.DOM.cover = document.querySelector(cover);
    this.DOM.openTrigger = document.querySelector(openTrigger);
    this.DOM.closeTrigger = document.querySelector(closeTrigger);
    this.DOM.body = document.querySelector("body");
    this.modalOpen = modalOpen;
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    const isTouchCapable =
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);

    return isTouchCapable ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.container.classList.toggle(this.modalOpen);
    // 背景固定用
    this.DOM.body.classList.toggle(this.modalOpen);
  }

  _addEvent() {
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.openTrigger.addEventListener(
      this.eventType,
      this._toggle.bind(this)
    );
    this.DOM.closeTrigger.addEventListener(
      this.eventType,
      this._toggle.bind(this)
    );
  }
}
