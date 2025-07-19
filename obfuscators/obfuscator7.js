export default function obfuscator7(code) {
  const fakeCode = `
let _x1 = 123456;
function fakeFunc() {
  return _x1 * Math.random();
}
`;

  const wrapped = `
(function(){
  ${fakeCode}
  eval(\`${code.replace(/`/g, '\\`')}\`);
})();
`;

  return `
/**
 * Obfusqué par INCONNU BOY OFFUSCATOR
 * Méthode : Injection de leurres
 */
${wrapped}
`;
}
