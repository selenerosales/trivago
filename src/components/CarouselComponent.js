import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";
import Carousel from 'react-material-ui-carousel'
import CardHotels from './CardHotels';
import { data } from '../data.js'
const styles = {
    card: {
        display: 'flex'
    }
};

class CarouselComponent extends React.Component {
    state = {
        hotel: data.hotels
    }

    render() {
        const { hotel } = this.state
        const { classes} = this.props
        return (
            <Carousel
                autoPlay={true}>
                <div className={classes.card}>
                    <CardHotels
                        hotels={hotel}
                    />
                </div>
                <div className={classes.card}>
                    <CardHotels
                        hotels={hotel}
                    />
                </div>
            </Carousel>
        )
    }
}
//hoc withStyles de material ui para el estilado 
// Se utiliza el HOC withTranslation donde obtiene la función t y la instancia i18n dentro de su componente
const componenteTraducido = withTranslation()(CarouselComponent);
const componente = withStyles(styles)(componenteTraducido);
export { componente as CarouselComponent };