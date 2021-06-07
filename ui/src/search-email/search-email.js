import React, { Component, useEffect, useState } from 'react';

class SearchEmail extends Component {
    constructor(props) {
        super(props);
        this.state = { color: '#4cb96b' };
    }

    getClick() {
        if (this.state.color === '#4cb96b')
            this.setState({ color: '#aaa' });
        else
            this.setState({ color: '#4cb96b' });
    }

    render() {
        return ('');
    }
}

// Exporting the component
export default SearchEmail;