'use client'
import { Saira_Stencil_One } from 'next/font/google'
import * as S from './styles'
import Search from '../Search/search'
import Cart from '../Cart/cart'


interface HeaderProps {

}

const sairaStencilOne = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})


export const Header = (props: HeaderProps) => {
    return (
        <S.TagHeader>
            <S.Logo className={sairaStencilOne.className}>Logo</S.Logo>
            <div>
                <Search placeholder='Procurando por algo específico?' />
                <Cart />
            </div>

        </S.TagHeader>
    )
}
