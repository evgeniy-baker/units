const result = (string) => {

    let count = 0
    
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '(') {
        count++;
      }
      if (string[i] === ')') {
        count--;
      }
      if (count < 0) {
        break;
      }
    }
  
    if (count === 0){
        console.log('Последовательность кавычек верна')
    }
    if (count !== 0){
        console.log('Последовательность кавычек нарушена')
    }

}
  
result('()')
result('())')