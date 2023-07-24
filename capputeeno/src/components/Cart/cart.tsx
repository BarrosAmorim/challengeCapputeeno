import * as S from './styles'
import { LuShoppingBag } from 'react-icons/lu'
import CartCount from '../CartCount/cartCount'

export default function Cart() {

    return (
        <S.Container>
            <LuShoppingBag size={25} />
            <CartCount />
        </S.Container>
    )
}
