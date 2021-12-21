export const createMatrix = (n) => {
    let elements = []
    const uniqElementsNumber = (n*n) / 2

    for (let i = 0; i < uniqElementsNumber; i++) {
      elements.push(i)
    }
  
    elements = elements.concat(elements)
    elements.sort(() => (Math.random() - 0.5))
    elements = elements.map((element, index) => ({ id: index, value: element }))

    const matrix = []
    for (let i = 0; i < n; i++) {
      const row = []
      for (let j = 0; j < n; j++) {
        row.push(elements.pop())
      }
      matrix.push(row)
    }
    return matrix
}