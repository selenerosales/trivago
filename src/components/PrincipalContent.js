import React from 'react';
import Container from '@material-ui/core/Container';
import NavHeader from '../pages/NavHeader';
import SearchComponent from './SearchComponent';

class PrincipalContent extends React.Component {
    render(){
        return(
          <React.Fragment>
          <NavHeader/>
          <Container maxWidth="md">
             <SearchComponent/>
          </Container>
        </React.Fragment>
        )
    }
}

export default PrincipalContent