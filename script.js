// Simulación de catálogo de competencias
const catalogo = [
  { id: 'C001', text: 'C001 - Liderazgo' },
  { id: 'C002', text: 'C002 - Trabajo en equipo' },
  { id: 'C003', text: 'C003 - Comunicaciones' },
  { id: 'C004', text: 'C004 - Resolución de problemas' },
  { id: 'C005', text: 'C005 - Pensamiento crítico' }
];

// Inicializar Select2
$(document).ready(function () {
  $('#selector-competencias').select2({
    data: catalogo,
    placeholder: 'Escribe el código o nombre de la competencia',
    allowClear: true,
    closeOnSelect: false // Mantener el desplegable abierto tras cada selección
  });

  $('#selector-competencias').on('change', function () {
    const seleccionadas = $(this).val();
    const lista = $('#competencias-seleccionadas');
    lista.empty();

    seleccionadas.forEach(id => {
      const comp = catalogo.find(c => c.id === id);
      const item = `<li data-id="${comp.id}">${comp.text}</li>`;
      lista.append(item);
    });
  });

  // Hacer la lista ordenable
  new Sortable(document.getElementById('competencias-seleccionadas'), {
    animation: 150
  });
});
