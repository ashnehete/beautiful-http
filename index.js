const methodSelect = document.querySelector('#method');
const pathInput = document.querySelector('#path');
const headersInput = document.querySelector('#requestHeaders');
const box = document.querySelector('#box');

// Method colors mapping
const methodColors = {
  'GET': 'var(--method-get)',
  'POST': 'var(--method-post)',
  'PUT': 'var(--method-put)',
  'DELETE': 'var(--method-delete)'
};

// Handle method change to update color
methodSelect.addEventListener('change', (event) => {
  const method = event.target.value;
  methodSelect.style.color = methodColors[method] || 'var(--text-primary)';
});

// Initialize color
methodSelect.style.color = methodColors[methodSelect.value];

pathInput.addEventListener('input', event => {
  if (event.target.innerText.trim() === '') {
    // Keep it empty or handle placeholder logic if desired
  }
});

headersInput.addEventListener('input', event => {
  if (event.target.innerText.trim() === '') {
    // Keep it empty or handle placeholder logic if desired
  }
});


const bodyInput = document.querySelector('#requestBody');

// Initialize CodeJar for syntax highlighting
const initCodeJar = () => {
  if (window.CodeJar) {
    const highlight = editor => {
      if (window.Prism) {
        editor.innerHTML = Prism.highlight(
          editor.textContent,
          Prism.languages.json,
          'json'
        );
      }
    };
    const jar = window.CodeJar(bodyInput, highlight);
  }
};

if (window.CodeJar) {
  initCodeJar();
} else {
  window.addEventListener('codejar-ready', initCodeJar);
}
const exportBtn = document.querySelector('#exportBtn');

exportBtn.addEventListener('click', () => {
  // Use html2canvas
  html2canvas(document.querySelector("#box"), {
    backgroundColor: null,
    scale: 2, // Higher resolution
    useCORS: true,
    logging: false
  }).then(canvas => {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = 'beautiful-http-request.png';
    link.href = image;
    link.click();
  });
});
