import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import './BarGraph.css';

export class BarGraph extends Component {

    constructor() {
        super();
        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: []
                }
            }
        };
    }

    componentDidMount() {
        const { labels } = this.props;
        const { options } = this.state;
        this.setState({
            options: {
                ...options,
                xaxis: {
                    categories: labels
                }
            }
        });
    }

    componentDidUpdate() {
        const { labels } = this.props;
        const { options } = this.state;
        if (options.xaxis.categories.length === 0) {
            this.setState({
                options: {
                    ...options,
                    xaxis: {
                        categories: labels
                    }
                }
            });
        }
    }

    render() {
        const { options } = this.state;
        const data = [{ name: 'Cost', data: this.props.data }];
        return (
            <div id='chart'>
                <ReactApexChart options={options} series={data} type='bar' height={350} />
            </div>
        );
    }
}

BarGraph.propTypes = {
    data: PropTypes.array.isRequired,
    labels: PropTypes.array.isRequired
};

export default BarGraph;