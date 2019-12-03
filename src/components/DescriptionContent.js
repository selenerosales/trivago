import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";
import LogoMagazine from '../images/trivago-magazine.jpg'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { CarouselComponent } from './CarouselComponent';

const styles = {
    root: {
        flexGrow: 1,
        marginTop: '5%'
    },
    title: {
        fontSize: '28px',
    },
    subtitle: {
        fontSize: '16px',
        fontWeight: '400',
        display: 'block',
        marginTop: '8px'
    },
    contdiv: {
        display: 'flex'
    },
    img: {
        width: '220px'
    },
    card: {
        display:'flex'  
      },
      media: {
        display:'block'  
      },
}

class DescriptionContent extends React.Component {
    state = {
        tabVal: 0
    }

    handleChangeTab = (event, tabValue) => {
        this.setState({ tabVal: tabValue })
    }

    render() {
        const { classes, t } = this.props
        const { tabVal } = this.state
        return (
            <div className={classes.root}>
                <div>
                    <h2>
                        <span className={classes.title}>{t('app.subtitle.principal')}</span>
                        <span className={classes.subtitle}>{t('app.subtitle.secondary')}</span>
                    </h2>
                </div>
                <div className={classes.contdiv}>
                    <img src={LogoMagazine} alt="Logo" className={classes.img} />
                </div>
                <div>
                    <Paper square>
                        <Tabs
                            value={tabVal}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            onChange={this.handleChangeTab}
                            classes={{ root: "w-full h-64" }}
                        >
                            <Tab className="h-64 normal-case" label={t('app.tab.tab1')} />
                            <Tab className="h-64 normal-case" label={t('app.tab.tab2')} />
                        </Tabs>
                        {this.state.tabVal === 0 &&
                            (
                            <CarouselComponent/>
                            )}
                        {this.state.tabVal === 1 && (
                            <p>prueba 2</p>
                        )}
                    </Paper>
                </div>
            </div>
        )
    }
}

// Se utiliza el HOC withTranslation donde obtiene la función t y la instancia i18n dentro de su componente
const componenteTraducido = withTranslation()(DescriptionContent);
const componente = withStyles(styles)(componenteTraducido);
export { componente as DescriptionContent };