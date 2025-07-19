export default function obfuscator1(code) {
  const encoded = btoa(code);
  return `
/**
 * Obfusqué par INCONNU BOY OFFUSCATOR
 * Méthode : Base64 Encode
 */
eval(atob('${encoded}'));
`;
}
