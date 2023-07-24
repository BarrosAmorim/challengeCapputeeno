'use client'
import { InputHTMLAttributes } from 'react'
import * as S from './styles'
import { FaSearch } from 'react-icons/fa'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export default function Search(props: InputProps) {
    return (
        <div>
            <S.InputContainer>
                <S.PrimaryInput {...props} />
                <FaSearch style={{ position: 'absolute', right: '20', top: '50%', transform: 'translateY(-50%)' }} />
            </S.InputContainer>
        </div>
    )
}
