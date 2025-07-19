import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/obfuscate', upload.single('codefile'), (req, res) => {
  let code = req.body.code || '';
  const method = req.body.method;

  if (req.file) {
    code = fs.readFileSync(req.file.path, 'utf-8');
    fs.unlinkSync(req.file.path);
  }

  // Exemple simple (mock). À remplacer avec vrais obfuscateurs dans obfuscators/
  const result = `// Obfuscation (${method}) par INCONNU BOY\n\n${code.split('').reverse().join('')}`;
  res.send(result);
});

app.listen(3000, () => {
  console.log('INCONNU BOY OFFUSCATOR lancé sur http://localhost:3000');
});
