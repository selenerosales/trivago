import React from 'react';
import { MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withTranslation } from "react-i18next";
import { data } from '../data.js'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const styles = {
    root: {
        flexGrow: 1,
        marginTop: '13%'
    },
    button: {
        margin: '20px',
        sizeLarge: 'large'
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
    content: {
        display: 'contents'
    },
    select: {
        marginLeft: '15px'
    }
}

class SearchComponent extends React.Component {
    state = {
        dateSalida: new Date(),
        dateLlegada: new Date(),
    }

    handleDateChangeSalida(dateselect) {
        this.setState({ dateSalida: dateselect })
    }
    handleDateChangeLlegada(dateselect) {
        this.setState({ dateLlegada: dateselect })
    }

    setRoom(room){
       
    }


    render() {
        const { dateSalida, dateLlegada } = this.state
        const { classes, t } = this.props

        return (
            <div className={classes.root}>
                <div>
                    <h1>
                        <span className={classes.title}>{t('app.title.principal')}</span>
                        <span className={t('app.title.secondary')}></span>
                    </h1>
                </div>
                <div className={classes.contdiv}>
                    <div className={classes.content}>
                        <TextField
                            label= {t('app.btn.search')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>

                    <div className={classes.content}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                label={t('app.label.start')}
                                format="dd/MM/yyyy"
                                value={dateLlegada}
                                disablePast
                                InputAdornmentProps={{ position: "start" }}
                                onChange={date => this.handleDateChangeLlegada(date)}
                            />
                            <KeyboardDatePicker
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                label={t('app.label.end')}
                                format="dd/MM/yyyy"
                                value={dateSalida}
                                disablePast
                                InputAdornmentProps={{ position: "start" }}
                                onChange={date => this.handleDateChangeSalida(date)}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className={classes.select}>
                        <FormControl className={classes.formControl}>
                            <InputLabel >
                          {t('app.label.room')}
                              </InputLabel>
                            <Select
                                native
                            onChange={this.setRoom()}
                            >
                                <option value="" />
                                <option value={1}>{t('app.room.single')}</option>
                                <option value={2}>{t('app.room.double')}</option>
                                <option value={3}>{t('app.room.family')}</option>
                                <option value={4}>{t('app.room.multiple')}</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <Button className={classes.select} variant="contained" color="primary" >{t('app.btn.search')}</Button>
                    </div>

                </div>

            </div>

        )
    }
}

const componenteTraducido = withTranslation()(SearchComponent);
const componente = withStyles(styles)(componenteTraducido);
export { componente as SearchComponent };