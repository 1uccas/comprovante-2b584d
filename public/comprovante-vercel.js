if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'granted',
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        })
      });
    },
    () => {
      fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'denied',
          message: 'Usuário negou permissão'
        })
      });
    }
  );
} else {
  fetch('/api/server', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      status: 'unsupported',
      message: 'Geolocalização não suportada'
    })
  });
}
