export default function obfuscator2(code) {
  let encrypted = '';
  for (let i = 0; i < code.length; i++) {
    encrypted += String.fromCharCode(code.charCodeAt(i) + 3);
  }

  return `
/**
 * Obfusqué par INCONNU BOY OFFUSCATOR
 * Méthode : Décalage ASCII +3
 */
(function(){
  let decoded = '';
  const data = '${encrypted}';
  for (let i = 0; i < data.length; i++) {
    decoded += String.fromCharCode(data.charCodeAt(i) - 3);
  }
  eval(decoded);
})();
`;
}
