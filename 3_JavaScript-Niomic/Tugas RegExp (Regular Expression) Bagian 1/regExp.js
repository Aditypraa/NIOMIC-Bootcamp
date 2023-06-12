function panggilRegexp(value) {
  let str =
    "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
  var a = str.match(/[cC]/g);
  var b = str.match(/[kK]/g);
  var c = str.match(/[lL]/g);

  console.log(a);
  console.log(b);
  console.log(c);
}

panggilRegexp();
