export default function obfuscator5(code) {
  const parts = code.match(/.{1,10}/g); // coupe par tranches de 10
  const joined = parts.map(p => `"${p}"`).join(' +\n    ');

  return `
/**
 * Obfusqué par INCONNU BOY OFFUSCATOR
 * Méthode : Fragmentation du code
 */
(function(){
  const code = 
    ${joined};
  eval(code);
})();
`;
}
