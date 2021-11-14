class Operations {
  constructor({ target, onClick }) {
    this.element = document.querySelector(target);
    this.init(onClick);
  }

  init(onClick) {
    if (!this.element) {
      return;
    }

    this.bindEvents(onClick);
  }

  bindEvents(onClick) {
    this.element.addEventListener('click', ({ target }) =>
      this.handleClick({
        target,
        onClick,
      }),
    );
  }

  handleClick({ target, onClick }) {
    if (target.className !== 'operation') {
      return;
    }

    onClick(target.innerText);
  }
}

export default Operations;
