import { MagnifyingGlass } from '../../../public/icons/magnifyingGlass'
import * as S from './styles'

const Input = ({onChange, value, onClick}) => {
    return (
        <S.ContainerInput>
            <S.ContentIcon onClick={onClick}>
                <MagnifyingGlass />
            </S.ContentIcon>
            <S.TextInput placeholder='Pesquise aqui...' onChange={onChange} value={value}/>
        </S.ContainerInput>
    )
}

export default Input