
//  Posición     0      1
let pronoun = ['the', 'our'];
//  Posición  0       1
let adj = ['great', 'big'];
//  Posición   0          1
let noun = ['jogger', 'racoon'];
//  Posición          0      1     2     3
let extensiones = ['.com', '.net', '.us', '.io']

// Bucle Loop Anidado

// Primer arreglo pronun (indice = i)
for (let i = 0; i < pronoun.length; i++) {
  // Segundo arreglo adj (indice = i2)
  for (let i2 = 0; i2 < adj.length; i2++) {
    // Tercer arreglo noun (indice = i3)
    for (let i3 = 0; i3 < noun.length; i3++) {
      // Tercer arreglo extensiones (indice = i4)
      for (let i4 = 0; i4 < extensiones.length; i4++) {

        // Impresión con distintos tipos de extensiones: .com/.net/.us/.io

        console.log(pronoun[i] + adj[i2] + noun[i3] + extensiones[i4]);

      }

    }

  }

}

