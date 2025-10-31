let saldo = 0;

    function depositar() {
        let valor = parseFloat(document.getElementById('valor').value);
        if (valor > 0) {
            saldo += valor;
            document.getElementById('mensagem').innerText = `Depósito realizado: R$ ${valor.toFixed(2)}\nSaldo atual: R$ ${saldo.toFixed(2)}`;
        } else {
            document.getElementById('mensagem').innerText = 'Digite um valor válido para depositar!';
        }
        document.getElementById('valor').value = '';
    }

    function sacar() {
        let valor = parseFloat(document.getElementById('valor').value);
        if (valor > 0) {
            if (valor <= saldo) {
                saldo -= valor;
                document.getElementById('mensagem').innerText = `Saque realizado: R$ ${valor.toFixed(2)}\nSaldo atual: R$ ${saldo.toFixed(2)}`;
            } else {
                document.getElementById('mensagem').innerText = 'Saldo insuficiente!';
            }
        } else {
            document.getElementById('mensagem').innerText = 'Digite um valor válido para sacar!';
        }
        document.getElementById('valor').value = '';
    }

    function consultar() {
        document.getElementById('mensagem').innerText = `Saldo atual: R$ ${saldo.toFixed(2)}`;
    }