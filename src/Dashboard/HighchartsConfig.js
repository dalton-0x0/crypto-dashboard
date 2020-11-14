export const HighchartsConfig = (historical) => {
    return {
        title: {
            text: `${historical[0].name} Price Data`
        },
    
        subtitle: {
            text: 'Source: https://www.cryptocompare.com/'
        },
    
        yAxis: {
            title: {
                text: 'Price'
            }
        },
    
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
            },
            title: {
                text: 'Time'
            },
            type: 'datetime'
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: historical,
    
        responsive: {
            rules: [{
                condition: {
                maxWidth: 500
                },
                chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
                }
            }]
        }
    }
}
 
export default HighchartsConfig;