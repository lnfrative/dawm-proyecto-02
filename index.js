const submitContactFormHandler = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const data = {}

  formData.forEach((value, key) => {
      data[key] = value;
  })

  const response = await fetch('https://sofg1006-proyecto-02-diaz.infrative.com/api/records', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (response.status === 200) {
    renderizarCotizaciones()
  }
}

const renderizarCotizaciones = async (e) => {
  const response = await fetch("https://sofg1006-proyecto-02-diaz.infrative.com/api/records")
  const cotizaciones = await response.json()

  const cotizacionesContainer = document.getElementById("cotizaciones-container");

  cotizacionesContainer.innerHTML = '';

  cotizaciones.forEach(cotizacion => {
   
  const cotizacionDiv = document.createElement("div");
  cotizacionDiv.classList.add("cotizacion")

  
  cotizacionDiv.innerHTML = `
      <h3>ID: ${cotizacion.id}</h3>
      <p><strong>Nombre:</strong> ${cotizacion.nombre}</p>
      <p><strong>Email:</strong> ${cotizacion.email}</p>
      <p><strong>Asunto:</strong> ${cotizacion.asunto}</p>
      <p><strong>Mensaje:</strong> ${cotizacion.msg}</p>
  `

  cotizacionesContainer.appendChild(cotizacionDiv);
})
}

renderizarCotizaciones()

const contactForm = document.getElementById("Cotizar-form")

contactForm.addEventListener('submit', submitContactFormHandler)