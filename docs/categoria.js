document.addEventListener("DOMContentLoaded", function() {
    const categoriasList = document.getElementById('categoriasList');
  
    // Agregar 15 categorías de prueba
    for (let i = 1; i <= 15; i++) {
      const row = document.createElement('tr');
  
      const numCell = document.createElement('td');
      numCell.textContent = i;
      row.appendChild(numCell);
  
      const nombreCell = document.createElement('td');
      nombreCell.textContent = `Categoría ${i}`;
      row.appendChild(nombreCell);
  
      const accionesCell = document.createElement('td');
      const editarButton = document.createElement('button');
      editarButton.className = 'btn btn-warning btn-sm';
      editarButton.textContent = 'Editar';
      accionesCell.appendChild(editarButton);
  
      const eliminarButton = document.createElement('button');
      eliminarButton.className = 'btn btn-danger btn-sm ms-2';
      eliminarButton.textContent = 'Eliminar';
      accionesCell.appendChild(eliminarButton);
  
      row.appendChild(accionesCell);
  
      categoriasList.appendChild(row);
    }
  });
  