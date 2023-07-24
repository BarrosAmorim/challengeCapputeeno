import UseLocalStorage from '@/hooks/useLocalStorage'
import * as S from './styles'

export default function CartCount() {
    const { value } = UseLocalStorage('cart-items')
    return (
        <S.CartCount>
            {value && value.length}
        </S.CartCount>
    )
}
