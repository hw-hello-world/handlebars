// hmm, probably not as easy as this
// otherwise why handlebars generate function src and eval it?
//
const compile = (spec) => {
  const t1, t2, t3; // constant strings.
  const a, b; // dynamic

  return function (options) => {
    const x, y, z; // utilies

    return t1 + options[a] + t2 + options[b] + t3;
  }
};
