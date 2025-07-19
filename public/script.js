document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('themeSwitch');
  const menuBtn = document.getElementById('menuBtn');
  const dashboardContent = document.getElementById('dashboardContent');
  const fileInput = document.getElementById('fileInput');
  const codeInput = document.getElementById('codeInput');
  const obfuscatorType = document.getElementById('obfuscatorType');
  const obfuscateBtn = document.getElementById('obfuscateBtn');
  const output = document.getElementById('output');

  // 🌙 Thème clair/sombre
  themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark', themeSwitch.checked);
  });

  // 📋 Menu dashboard (bouton ⋮)
  menuBtn.addEventListener('click', () => {
    dashboardContent.classList.toggle('hidden');
  });

  // 📂 Lire le fichier uploadé
  fileInput.addEventListener('change', async () => {
    const file = fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      codeInput.value = e.target.result;
    };
    reader.readAsText(file);
  });

  // 🚀 Obfuscation
  obfuscateBtn.addEventListener('click', async () => {
    const code = codeInput.value;
    if (!code) {
      alert('Veuillez coller ou uploader un code à obfusquer.');
      return;
    }

    const type = obfuscatorType.value;

    try {
      const module = await import(`./obfuscators/obfuscator${type}.js`);
      const result = module.default(code);
      output.textContent = result;
    } catch (err) {
      output.textContent = 'Erreur dans l’obfuscation : ' + err.message;
    }
  });
});
