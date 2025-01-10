import ApexChart from 'react-apexcharts';

const Grafico = () => {

    const options = {
        
        chart: {
            id: 'apexchart-example'
        },
        xaxis: {
            categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028]
        },
        yaxis: {
            labels: {
                formatter: function(value) {
                    return 'R$ ' + value.toLocaleString('pt-BR');
                }
            }
        }
    }

    const series = [{
        name: 'Faturamento',
        data: [12000, 40000, 35000, 50000, 49300, 60100, 70500, 91000, 125000, 30000, 24000, 39350, 12000]
    }]

    return (
        <ApexChart 
            options={options} 
            series={series} 
            type="bar" 
            width='100%' 
            height={320} 
        />
    )
}

export default Grafico;
