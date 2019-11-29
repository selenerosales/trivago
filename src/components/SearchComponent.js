import React from 'react';
import Select from 'react-select'
import { KeyboardDatePicker, } from '@material-ui/pickers';
class SearchComponent extends React.Component {
    state = {
        date: new Date()
    }


    render() {
        const { date } = this.state
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]
        return (

            <div>
                <h1>
                    <span> Buscá una ciudad, hotel o hasta un lugar famoso</span>
                </h1>
                <Select options={options} />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                </MuiPickersUtilsProvider>
            </div>
        )
    }
}

export default SearchComponent