var carro=  [
    { marca: "Porsche", modelo: "911", quilometragem: "200km", ano: 1995, preco: 100000, estado: "Disponível" },
    { marca: "BMW ", modelo: "M3 E30", quilometragem: "500km", ano: 1998, preco: 250000, estado: "Disponível" },
    { marca: "Ferrari ", modelo: "F355", quilometragem: "800km", ano: 2000, preco: 235000, estado: "Disponível" },
    { marca: "Volvo ", modelo: "P1800", quilometragem: "300km", ano: 1995, preco: 200000, estado: "Disponível" },
    { marca: "Mercedes ", modelo: "SL", quilometragem: "900Km", ano: 2003, preco: 325200, estado: "Disponível" },
    { marca: "Land Rover", modelo: "Defender", quilometragem: "300Km", ano: 2001, preco: 324200, estado: "Disponível" },
    { marca: "Audi", modelo: "RS2", quilometragem: "600Km", ano: 2000, preco: 120200, estado: "Disponível" },
    { marca: "Volkswagen ", modelo: "Carocha", quilometragem: "800Km", ano: 1995, preco: 24500, estado: "Disponível" },
]

var reservas=[]
var carrosReservados = 0; 
var valorreserva = 0;

function Adicionar(indice) {
    if (indice >= 0 && indice < carro.length) {
        var carroReservado = carro[indice];
        if (carroReservado.estado === "Disponível") {
            var nome = prompt("Por favor, insira seu nome completo:");
            var contato = prompt("Por favor, insira seu contato:");

            if (nome !== "" && contato !== "") {
                var reserva = {
                    carro: `${carroReservado.marca} ${carroReservado.modelo}`,
                    preco: carroReservado.preco,
                    nome: nome,
                    contato: contato
                };

                reservas.push(reserva);
                carrosReservados++; 
                alert("Reserva efetuada com sucesso! Vamos entrar em contato consigo!");

                carro[indice].estado = "Reservado";
                valorreserva += Number(carroReservado.preco);

                AtualizarReservas();
                AtualizarEstadoCarro(indice + 1);    

            } else {
                alert("Reserva cancelada. Nome e contato são necessários para confirmar a reserva.");
            }
        } else {
            alert("Este carro já foi reservado. Por favor, escolha outro carro disponível.");
        }
    }
        AtualizarTotalCarrosReservados();

}



function AtualizarReservas() {
    var reservasDiv = document.getElementById("lista-reservas");
    reservasDiv.innerHTML = "";

    if (reservas.length > 0) {
        var lista = document.createElement("ul");
        for (var i = 0; i < reservas.length; i++) {
            var reserva = reservas[i];
            var novoItem = document.createElement("li");
            novoItem.textContent = `Carro: ${reserva.carro}  - Preço: ${reserva.preco} €  |||||||||||||| Nome: ${reserva.nome} - Contato: ${reserva.contato}`;
            lista.appendChild(novoItem);
        }
        reservasDiv.appendChild(lista);
    } else {
        reservasDiv.innerHTML = "<li>Ainda não efetuou nenhuma reserva</li>";
    }
}


    function AtualizarEstadoCarro(indice) {
        var estadoCarroDiv = document.getElementById(`estado-carro-${indice}`);
        if (estadoCarroDiv) {
          estadoCarroDiv.textContent = "Estado: Reservado";
        }
      }
    



      function valortotal() {
        var valorElement = document.getElementById("valor");
        var total = 0;
        for (var i = 0; i < carro.length; i++) {
            total += Number(carro[i].preco);
        }
        valorElement.innerHTML = `<h2>Resumo Financeiro </h2><p>Património total: ${total}€.</p>`;

    }

    function calcularDiferencaCarrosReservas() {
        var totalCarros = carro.length;
        var diferenca = totalCarros - reservas.length;
        return diferenca;
    }

    function AtualizarTotalCarrosReservados() {
        var res = document.getElementById("res");
        var totalReservados = 0;
    
        for (var i = 0; i < reservas.length; i++) {
            totalReservados += Number(reservas[i].preco);
        }
        var diferencaCarrosReservas = calcularDiferencaCarrosReservas();

        res.innerHTML = `
        <p>Total de carros reservados: ${reservas.length}</p>
        <p>Carros disponíveis: ${diferencaCarrosReservas}</p>
        <p>Possíveis vendas: ${totalReservados}€</p>`;
   
    }
