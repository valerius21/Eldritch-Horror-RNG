import React, { Component } from "react";

class App extends Component {

    constructor() {
        super();
        this.state = {
            pool: [],
            rdm: this.getField(),
        };
        this.getField = this.getField.bind(this);
    }

    getField() {
        /**
         * Expansions
         */
        const antarticaMap = ['Miskatonic Outpost', 'Lake Camp', 'Frozen Waste', 'City of the Elder Things',
        'Snowy Mountains', 'Plateau of Leng', ];
        const pyramidsMap = ['Alexandria', 'The Bent Pyramid', 'Cairo', 'The Sahara Desert', 'Tel el-Amarna', 'The Nile River', ];
        const dreamlandsMap = ['Celephaïs', 'Dylath-Leen', 'The Enchanted Wood', 'The Moon', 'The Underworld', 'Ulthar', 'Unknown Kadath', ];
        
        // base field pool
        let pool = ['Field 1', 'Field 2', 'Field 3', 'Field 4', 'Field 5', 'Field 6', 'Field 7', 'Field 8',
            'Field 9', 'Field 10', 'Field 11', 'Field 12', 'Field 13', 'Field 14', 'Field 15', 'Field 16', 'Field 17', 'Field 18',
            'Field 19', 'Field 20', 'Field 21',
            'San Francisco', 'Arkham', 'The Amazon', 'Buenos Aires', 'London', 'Rome', 'Istandbul', 'The Pyramids',
            'The Heart of Africa', 'Antartica', 'Tunguska', 'The Himalayas', 'Shanghai', 'Tokyo', 'Sydney', ];

        if (document.getElementById('mom').checked) pool = [...pool, ...antarticaMap];
        if (document.getElementById('pyram').checked) pool = [...pool, ...pyramidsMap];
        if (document.getElementById('dlands').checked) pool = [...pool, ...dreamlandsMap];
        
        return pool[
            Math.floor(Math.random() * pool.length)
        ];
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState({rdm: this.getField()});
        document.getElementById('result').innerText = this.state.rdm;
    }

    render() {
        return (
            <div>
                <p className="button is-link is-fullwidth is-large" onClick={this.handleClick}>Roll</p>
            </div>
        );
    }
}

export default App;