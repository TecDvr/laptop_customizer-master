import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>ELF Computing</h1>
                <h3>{this.props.type}</h3>
                <h5>Customize your {this.props.subType}</h5>  
            </header> 
        );
    }
}