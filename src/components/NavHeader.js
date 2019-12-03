import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import LogoTrivago from '../images/trivago.png'
import Typography from '@material-ui/core/Typography';
import { withTranslation } from "react-i18next";
import {appConstants} from "../constants/app.constants";
import Select from '@material-ui/core/Select'
import i18n from '../i18n';
import uuid from "uuidv4";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },  
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  img: {
    width: '102px'
  },

};

//componente header que se incluyo el framework i18next para poder brindarle un marco de internacionalizacion
class NavHeader extends React.Component {
  setLanguage = async (res) => {
    //se obtiene la instancia de 118n para cambiar el idioma,  recibe como propiedad  el idioma en la funcion
    await i18n.changeLanguage(res);
  }
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <img src={LogoTrivago} alt="Logo" className={classes.img} />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
            </Typography>
            <Select
              onChange={(ev) => {
                this.setLanguage(ev.target.value);
              }}
              defaultValue="es_AR"
            >
              {Object.keys(appConstants.languages).map(key => (
                <option key={uuid}  value={key}> {t(appConstants.languages[key].name)}</option>
              ))}
            </Select>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
//hoc withStyles de material ui para el estilado 
// Se utiliza el HOC withTranslation donde obtiene la función t y la instancia i18n dentro de su componente
const componenteTraducido = withTranslation()(NavHeader);
const componente = withStyles(styles)(componenteTraducido);
export { componente as NavHeader };