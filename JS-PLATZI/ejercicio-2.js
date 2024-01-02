function manufacture(gifts, materials) {
    return gifts.filter(gift => {
      const giftLetras = new Set(gift);  // Utilizamos un conjunto para las letras únicas del regalo
      for (const letra of giftLetras) {
        if (!materials.includes(letra)) {
          return false;  // Si una letra no está en los materiales, no se puede fabricar
        }
      }
      return true;  // Todas las letras del regalo están en los materiales, se puede fabricar
    });
  }
  

  const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
  
  manufacture(gifts, materials) 
  
  const gifts1 = ['juego', 'puzzle']
  const materials1 = 'jlepuz'
  
  manufacture(gifts1, materials1) 

  const gifts2 = ['libro', 'ps5']
  const materials2 = 'psli'
  
  manufacture(gifts2, materials2) 