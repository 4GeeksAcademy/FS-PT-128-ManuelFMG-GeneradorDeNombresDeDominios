
//  Posición     0      1
let pronoun = ['the', 'our'];
//  Posición  0       1
let adj = ['great', 'big'];
//  Posición   0          1
let noun = ['jogger', 'racoon'];

// Bucle Loop Anidado

// Primer arreglo pronun (indice = i)
for (let i = 0; i < pronoun.length; i++) {
  // Segundo arreglo adj (indice = i2)
  for (let i2 = 0; i2 < adj.length; i2++) {
    // Tercer arreglo noun (indice = i3)
    for (let i3 = 0; i3 < noun.length; i3++) {
     
      // Impresión con distintos tipos de extensiones: .com/.net/.us/.io
      
       // Impresión 1
       console.log(pronoun[i]+adj[i2]+noun[i3]+".com");
       
       // Impresión 2
       console.log(pronoun[i]+adj[i2]+noun[i3]+".net");
       
       // Impresión 3
       console.log(pronoun[i]+adj[i2]+noun[i3]+".us");
       
       // Impresión 4
       console.log(pronoun[i]+adj[i2]+noun[i3]+".io");
       
       
    }

  }

}

