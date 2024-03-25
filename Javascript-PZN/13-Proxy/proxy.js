const target = {};

const handler = {
  get: function (target, property) {
    return target[property];
  },
  set: function (target, property, value) {
    target[property] = value;
  },
};

const proxy = new Proxy(target, handler);
proxy.firstName = "John";
proxy.lastName = "Biden";
console.log(proxy);
