import React from 'react';
import Select from 'react-select'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import SaveIcon from '@material-ui/icons/Save';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { data } from '../data.js'
const styles = {
    root: {
        flexGrow: 1,
    },
    button: {

        margin: '20px',
        sizeLarge: 'large'
    },

}

class SearchComponent extends React.Component {
    state = {
        date: new Date(),
        anchorEl: null
    }


    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {
        const { date, anchorEl } = this.state
        const { classes } = this.props
        const open = Boolean(anchorEl);

        const optionsButton = ['Individual', 'Doble', 'Familiar', 'Multiple'];
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1>
                            <span> Buscá una ciudad, hotel o hasta un lugar famoso</span>
                        </h1>
                    </Grid>
                    <Grid item xs={3}>
                        <Select options={data.cities}
                            getOptionValue={option => option.value}
                            getOptionLabel={option => option.name} />
                    </Grid>
                    <Grid item xs={5}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                disableToolbar
                                variant="inline"
                                value={date}
                                disablePast
                            // onChange={handleDateChange}
                            />
                            <DatePicker
                                disableToolbar
                                variant="inline"
                                value={date}
                                disablePast
                            // onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>

                    <Grid item xs={4}>
                        <Button
                            aria-owns={open ? 'simple-popper' : undefined}
                            aria-haspopup="true"
                            variant="contained"
                            onClick={this.handleClick}
                        >
                            Open Popover
                         </Button>
                        <Popover
                            id="simple-popper"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={this.handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <ClickAwayListener onClickAway={this.handleClose}>
                                <MenuList id="split-button-menu">
                                    {optionsButton.map((options, index) => (
                                        <MenuItem
                                            key={options}
                                        //onClick={event => handleMenuItemClick(event, index)}
                                        >
                                            <Button className={classes.button} startIcon={<SaveIcon />} > {options}</Button>
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Popover>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

export default withStyles(styles)(SearchComponent)