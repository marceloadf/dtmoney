import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
interface HeaderProps{
    openNewTransactionalModal: () => void;
}

export function Header({ openNewTransactionalModal } : HeaderProps){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={openNewTransactionalModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}