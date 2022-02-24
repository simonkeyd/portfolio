"use strict";
(() => {
  // <stdin>
  var Termynal = class {
    constructor(container = "#termynal", options = {}) {
      this.container = typeof container === "string" ? document.querySelector(container) : container;
      this.pfx = `data-${options.prefix || "ty"}`;
      this.startDelay = options.startDelay || parseFloat(this.container.getAttribute(`${this.pfx}-startDelay`)) || 600;
      this.typeDelay = options.typeDelay || parseFloat(this.container.getAttribute(`${this.pfx}-typeDelay`)) || 90;
      this.lineDelay = options.lineDelay || parseFloat(this.container.getAttribute(`${this.pfx}-lineDelay`)) || 1500;
      this.progressLength = options.progressLength || parseFloat(this.container.getAttribute(`${this.pfx}-progressLength`)) || 40;
      this.progressChar = options.progressChar || this.container.getAttribute(`${this.pfx}-progressChar`) || "\u2588";
      this.progressPercent = options.progressPercent || parseFloat(this.container.getAttribute(`${this.pfx}-progressPercent`)) || 100;
      this.cursor = options.cursor || this.container.getAttribute(`${this.pfx}-cursor`) || "\u258B";
      this.lineData = this.lineDataToElements(options.lineData || []);
      if (!options.noInit)
        this.init();
    }
    init() {
      this.lines = [...this.container.querySelectorAll(`[${this.pfx}]`)].concat(this.lineData);
      const containerStyle = getComputedStyle(this.container);
      this.container.style.minHeight = containerStyle.height !== "0px" ? containerStyle.height : void 0;
      this.container.setAttribute("data-termynal", "");
      this.container.innerHTML = "";
      this.start();
    }
    async start() {
      await this._wait(this.startDelay);
      for (let line of this.lines) {
        const type = line.getAttribute(this.pfx);
        const delay = line.getAttribute(`${this.pfx}-delay`) || this.lineDelay;
        if (type == "input") {
          line.setAttribute(`${this.pfx}-cursor`, this.cursor);
          await this.type(line);
          await this._wait(delay);
        } else if (type == "progress") {
          await this.progress(line);
          await this._wait(delay);
        } else {
          this.container.appendChild(line);
          await this._wait(delay);
        }
        line.removeAttribute(`${this.pfx}-cursor`);
      }
    }
    async type(line) {
      const chars = [...line.textContent];
      const delay = line.getAttribute(`${this.pfx}-typeDelay`) || this.typeDelay;
      line.textContent = "";
      this.container.appendChild(line);
      for (let char of chars) {
        await this._wait(delay);
        line.textContent += char;
      }
    }
    async progress(line) {
      const progressLength = line.getAttribute(`${this.pfx}-progressLength`) || this.progressLength;
      const progressChar = line.getAttribute(`${this.pfx}-progressChar`) || this.progressChar;
      const chars = progressChar.repeat(progressLength);
      const progressPercent = line.getAttribute(`${this.pfx}-progressPercent`) || this.progressPercent;
      line.textContent = "";
      this.container.appendChild(line);
      for (let i = 1; i < chars.length + 1; i++) {
        await this._wait(this.typeDelay);
        const percent = Math.round(i / chars.length * 100);
        line.textContent = `${chars.slice(0, i)} ${percent}%`;
        if (percent > progressPercent) {
          break;
        }
      }
    }
    _wait(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    lineDataToElements(lineData) {
      return lineData.map((line) => {
        let div = document.createElement("div");
        div.innerHTML = `<span ${this._attributes(line)}>${line.value || ""}</span>`;
        return div.firstElementChild;
      });
    }
    _attributes(line) {
      let attrs = "";
      for (let prop in line) {
        attrs += this.pfx;
        if (prop === "type") {
          attrs += `="${line[prop]}" `;
        } else if (prop !== "value") {
          attrs += `-${prop}="${line[prop]}" `;
        }
      }
      return attrs;
    }
  };
  if (document.currentScript.hasAttribute("data-termynal-container")) {
    const containers = document.currentScript.getAttribute("data-termynal-container");
    containers.split("|").forEach((container) => new Termynal(container));
  }
})();
/**
 * termynal.js
 * A lightweight, modern and extensible animated terminal window, using
 * async/await.
 *
 * @author Ines Montani <ines@ines.io>
 * @version 0.0.1
 * @license MIT
 */
