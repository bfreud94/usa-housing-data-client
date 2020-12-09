import React from 'react';
import PropTypes from 'prop-types';

class Delayed extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hidden: true };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ hidden: false });
        }, this.props.delay);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

Delayed.propTypes = {
    delay: PropTypes.number.isRequired,
    children: PropTypes.string.isRequired
};

export default Delayed;