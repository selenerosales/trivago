import React from 'react';
import Container from '@material-ui/core/Container';
import {SearchComponent }from './SearchComponent';
import { withTranslation } from "react-i18next";
import { NavHeader } from './NavHeader';
import { DescriptionContent } from './DescriptionContent';

//componente principal donde se incluye el header y el componente con filtros para la busqueda
class PrincipalContent extends React.Component {
    render(){
        return(
          <React.Fragment>
          <NavHeader/>
          <Container maxWidth="lg">
             <SearchComponent/>
             <DescriptionContent />
          </Container>
        </React.Fragment>
        )
    }
}
// Se utiliza el HOC withTranslation donde obtiene la función t y la instancia i18n dentro de su componente
const componenteTraducido = withTranslation()(PrincipalContent);
export { componenteTraducido as PrincipalContent };