export default function obfuscator6(code) {
  const minified = code
    .replace(/\/\/.*$/gm, '')     // commentaires simples
    .replace(/\/\*[\s\S]*?\*\//g, '') // commentaires multi-ligne
    .replace(/\s+/g, ' ')         // espaces multiples
    .replace(/\n/g, '')           // retours à la ligne
    .trim();

  return `
/**
 * Obfusqué par INCONNU BOY OFFUSCATOR
 * Méthode : Minification simple
 */
eval("${minified}");
`;
}
