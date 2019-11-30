import React from 'react';
import Container from '@material-ui/core/Container';
import {SearchComponent }from './SearchComponent';
import { withTranslation } from "react-i18next";
import { NavHeader } from './NavHeader';

class PrincipalContent extends React.Component {
    render(){
        return(
          <React.Fragment>
          <NavHeader/>
          <Container maxWidth="lg">
             <SearchComponent/>
          </Container>
        </React.Fragment>
        )
    }
}
const componenteTraducido = withTranslation()(PrincipalContent);
export { componenteTraducido as PrincipalContent };