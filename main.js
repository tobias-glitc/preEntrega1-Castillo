function saveData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age= document.getElementById("age").value;

  const data = {
      nombre: name,
      email: email,
      años: age
  };

  localStorage.setItem("userData", JSON.stringify(data));
  alert("Datos guardados correctamente.");
}

function loadData() {
  const data = localStorage.getItem("userData");
  if (data) {
      const parsedData = JSON.parse(data);
      document.getElementById("name").value = parsedData.nombre;
      document.getElementById("email").value = parsedData.email;
      document.getElementById("age").value = parsedData.años;
      alert("Datos cargados correctamente.");
  } else {
      alert("No hay datos guardados.");
  }
}

// Algoritmo para sumar los números del 1 al 10 utilizando un ciclo for
function sumNumbers() {
  let sum = 0;

  for (let i = 1; i <= 10; i++) {
      sum += i;
  }

  return sum;
}

const result = sumNumbers();
alert("La suma de los números del 1 al 10 es:", result);
