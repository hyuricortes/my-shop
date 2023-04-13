import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { SearchContext } from '../../contexts/SeachContext'

import { BoxHedader, Container, InputHeader } from './styles';


import Image from 'next/image'
import { useRouter } from 'next/navigation';

interface Props {}

const Header: React.FC<Props> = () => {
  const { colors, title } = useContext(ThemeContext);
  const { handleSeachAll, stateSearchAll } = useContext(SearchContext);
  const { push } = useRouter()

  return (
    <Container>
       <BoxHedader>
           <Image
                onClick={() => push('/')}
                src="../images/logo-uwex.svg"
                alt="Logo"
                width={100}
                height={24}
                priority
              />
       </BoxHedader>
       <BoxHedader>
         <InputHeader onChange={(e) => handleSeachAll(e.target.value)} type="text" value={stateSearchAll} placeholder="Buscar" name="buscar"/>
       </BoxHedader>
    </Container>
  );
};

export default Header;