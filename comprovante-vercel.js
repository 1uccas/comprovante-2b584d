if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // Permissão concedida
        const data = {
          status: 'granted',
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        };
  
        fetch("http://localhost:3000/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      },
      (err) => {
        // Permissão negada
        const data = {
          status: 'denied',
          message: 'Usuário negou a permissão de localização'
        };
  
        fetch("http://localhost:3000/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      }
    );
  } else {
    // Geolocalização não suportada
    const data = {
      status: 'unsupported',
      message: 'Geolocalização não suportada pelo navegador'
    };
  
    fetch("http://localhost:3000/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
  