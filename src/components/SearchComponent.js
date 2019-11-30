import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
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
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
        open: false,
        cities: data.cities,
        listFilter: [],
        optSelected: ''
    }

    handleDateChangeSalida(dateselect) {
        this.setState({ dateSalida: dateselect })
    }
    handleDateChangeLlegada(dateselect) {
        this.setState({ dateLlegada: dateselect })
    }

    onfocus = () => {
        this.setState({ open: true })
    }

    onBlur = () => {
        this.setState({ open: false })
    }

    componentDidMount = () => {
        this.setState({ listFilter: data.cities })
    }

    onClick = (city) => {
        this.setState({ optSelected: city.name })
    }
    onChange = (ev) => {
        let search = ev.target.value
        let cities = this.state.cities
        let filter = []
        // eslint-disable-next-line
        cities.map(city => {
            if (city.name.toLowerCase().startsWith(search.toLowerCase())) {
                let obj = {}
                obj.name = city.name
                obj.description = city.description
                filter.push(obj)
            }
        })
        this.setState({ listFilter: filter })
        this.setState({ optSelected: ev.target.value })
    }




    render() {
        const { dateSalida, dateLlegada, open, listFilter, optSelected } = this.state
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
                            label={t('app.btn.search')}
                            value={optSelected} onBlur={ev => this.onBlur()}
                            onChange={ev => this.onChange(ev)}
                            onFocus={ev => this.onfocus()}
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
                        {open ? <Paper style={{ width: 'fit-content' }}>
                            {listFilter.map((city, index) => {
                                return (
                                    <MenuItem value={city.name} onMouseDown={ev => this.onClick(city)} key={index} className={classes.menuItem}>
                                        <ListItemIcon className={classes.icon}>
                                            <span class="icon-ic ssg-suggestion__icon"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><g class="svg-color--primary" fill="#007FAD" fill-rule="evenodd">
                                                <path d="M12 5C9.8 5 8 6.8 8 9s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 7c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z"></path>
                                                <path d="M18 8.2C17.6 5.3 15 3 12 3S6.4 5.3 6 8.2V9c0 .7.1 1.4.4 2.1l4.8 9.4c.2.3.5.5.9.5s.7-.2.9-.5l4.8-9.4c.1-.7.2-1.4.2-2.1v-.8zm-1.3 2.5L12 20l-4.7-9.3C7.1 10.2 7 9.6 7 9v-.6C7.4 5.9 9.5 4 12 4s4.6 1.9 5 4.4V9c0 .6-.1 1.2-.3 1.7z"></path>
                                            </g></svg></span>
                                        </ListItemIcon>
                                        <ListItemText classes={{ primary: classes.primary }} inset primary={city.name} secondary={city.description} />
                                    </MenuItem>)
                            })}
                        </Paper>
                            : ''
                        }
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
                               // onChange={this.setRoom()}
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