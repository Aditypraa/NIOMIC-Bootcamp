// Untuk Pembuatan Private Field gunakan tanda "#"
// Private field hanya bisa di rubah di dalam classnya saja tidak bisa di rubah di luar class

class Counter {
  // Private Field
  #counter = 0;

  increment() {
    this.#counter++;
  }

  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

let counter = new Counter();

// KIta Ingin increment Counter menjadi 5
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.get());
