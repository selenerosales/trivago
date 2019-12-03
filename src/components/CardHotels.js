import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    media: {
        display: 'block',
        marginLeft:'6%',
        marginTop:'2%'
    }
};
//componente Card reutilizable
function CardHotels(props) {
    const { classes, hotels } = props;
    return (
        hotels.map(hotel => {
            return (
                <Card className={classes.media} >
                    <CardActionArea>
                         <img src= {hotel.url} alt="Logo" className={classes.img} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h6">
                                {hotel.name}
                            </Typography>
                            <Typography component="p">
                                {hotel.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card >
            )
        })
    );
}

export default withStyles(styles)(CardHotels);