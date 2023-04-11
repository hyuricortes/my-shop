import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { BoxHedader, Container, InputHeader } from './styles';


import Image from 'next/image'

interface Props {}

const Header: React.FC<Props> = () => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
       <BoxHedader>
           <Image
                src="../images/logo-uwex.svg"
                alt="Logo"
                width={100}
                height={24}
                priority
              />
       </BoxHedader>
       <BoxHedader>
         <InputHeader type="text" value="" placeholder="Buscar" name="buscar"/>
       </BoxHedader>
    </Container>
  );
};

export default Header;