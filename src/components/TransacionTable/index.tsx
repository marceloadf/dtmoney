import { Container } from "./styles";

export function TransactionTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td>Hamburguer</td>
                        <td className="withdrawn">R$- R$ 59,00</td>
                        <td>Alimenmtação</td>
                        <td>10/04/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel Apartamento</td>
                        <td className="withdrawn">- R$ 1.200,00</td>
                        <td>Casa</td>
                        <td>27/03/2021</td>
                    </tr>
                    <tr>
                        <td>Computador</td>
                        <td className="deposit">R$ 5.400,00</td>
                        <td>Venda</td>
                        <td>15/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}