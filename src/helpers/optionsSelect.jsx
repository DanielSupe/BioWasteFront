export function generarListaNumeros() {
    const lista = [];
    for (let i = 1; i <= 30; i++) {
      lista.push({
          value: i,
          label: i
      });
    }
    return lista;
  }