import React from 'react';
import Select from 'react-select'
class SearchComponent extends React.Component {
    state = {
        date: new Date()
    }


    render() {
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

            
            </div>
        )
    }
}

export default SearchComponent