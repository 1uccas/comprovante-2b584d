export default async function handler(req, res) {
  if (req.method === 'POST') {
    let body = '';

    // Coleta os dados do corpo da requisição
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const { status, latitude, longitude, message } = data;

        if (status === 'granted') {
          console.log(`✅ Permissão concedida. Latitude: ${latitude}, Longitude: ${longitude}`);
        } else if (status === 'denied') {
          console.log('⛔ Permissão negada pelo usuário.');
        } else if (status === 'unsupported') {
          console.log('⚠️ Geolocalização não suportada.');
        }

        res.status(200).json({ ok: true });
      } catch (err) {
        console.error('❌ Erro ao processar o JSON:', err);
        res.status(400).json({ error: 'Erro no JSON' });
      }
    });
  } else {
    res.status(405).send('Método não permitido');
  }
}
