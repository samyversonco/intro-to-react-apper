function onlyVowelsOf(s){
  return s.match(/[aeiou]/gi).join('')
}

console.log(onlyVowelsOf('amazon'));
console.log(onlyVowelsOf('cloud'))