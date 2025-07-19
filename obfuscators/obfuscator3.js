export default function obfuscator3(code) {
  const reversed = code.split('').reverse().join('');
  return `
/**
 * Obfusqué par INCONNU BOY OFFUSCATOR
 * Méthode : Inversion de code
 */
(function(){
  const reversed = '${reversed}';
  const normal = reversed.split('').reverse().join('');
  eval(normal);
})();
`;
}
