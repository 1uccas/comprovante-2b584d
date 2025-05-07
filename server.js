const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  const { status, latitude, longitude, message } = req.body;

  if (status === 'granted') {
    console.log(`✅ Permissão concedida. Latitude: ${latitude}, Longitude: ${longitude}`);
  } else if (status === 'denied') {
    console.log(`⛔ Permissão negada pelo usuário.`);
  } else if (status === 'unsupported') {
    console.log(`⚠️ Geolocalização não suportada pelo navegador.`);
  }

  res.status(200).json({ message: 'Mensagem recebida pelo servidor' });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
