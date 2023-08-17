class CaixaDaLanchonete {
    
    // Cardápio e valores
    constructor() {
        this.cardapio = {
            'cafe': { descricao: 'Café', valor: 3.00 },
            'chantily': { descricao: 'Chantily (extra do Café)', valor: 1.50 },
            'suco': { descricao: 'Suco Natural', valor: 6.20 },
            'sanduiche': { descricao: 'Sanduíche', valor: 6.50 },
            'queijo': { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            'salgado': { descricao: 'Salgado', valor: 7.25 },
            'combo1': { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
            'combo2': { descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
        };

        // Métodos de pagamento
        this.metodoDePagamento = ['dinheiro', 'debito', 'credito'];

    };

    // Calcular valor da compra
    calcularValorDaCompra(metodoDePagamento, itens) {
        
        // Verificação pagamento
        if (!this.metodoDePagamento.includes(metodoDePagamento)) {
            return 'Forma de Pagamento Inválida!';
        }
        
        // Verificação itens
        if (itens.lenght === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        let valorTotal = 0;

        // Loop itens
        for (const itemInfo of itens) {
            const [codigo, quantidade] = itemInfo.split(',');

            // Verificar item válido
            if (!this.cardapio.hasOwnProperty(codigo)) {
                return 'Item inválido!';
            }

            const item = this.cardapio[codigo];
            valorTotal += item.valor * parseInt(quantidade, 10);
        }

        // Desconto e acréscimo
        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= 0.95;
        }

        else if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03;
        }

        // Retorno valor total
        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;

    }
    

};

export { CaixaDaLanchonete };