export default function obfuscator4(code) {
  const unicode = code.split('')
    .map(c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'))
    .join('');

  return `
/**
 * Obfusqué par INCONNU BOY OFFUSCATOR
 * Méthode : Encodage Unicode
 */
eval("${unicode}");
`;
}
