function domainNameGenerator() {
  let pronoun = ["el", "un"];
  let adj = ["tapon", "libro"];
  let noun = ["blanco", "rojo"];
  let final = ["com", "es", "net", "io"];

  let domain = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < final.length; l++) {
          domain.push(pronoun[i] + adj[j] + noun[k] + final[l]);
        }
      }
    }
  }

  return domain;
}
console.log(domainNameGenerator());
