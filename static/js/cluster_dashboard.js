const points = clusterPoints;

const trace = {

    x: points.map(p => p.age),

    y: points.map(p => p.bmi),

    z: points.map(p => p.cluster),

    mode: 'markers',

    marker: {

        size: 5,

        color: points.map(p => p.cluster),

        colorscale: 'Viridis',

        opacity: 0.8
    },

    text: points.map(

        p =>
            `Severity: ${p.severity}`
    ),

    type: 'scatter3d'
};

const layout = {

    paper_bgcolor: '#020817',

    plot_bgcolor: '#020817',

    font: {

        color: 'white'
    },

    scene: {

        xaxis: {

            title: 'Age',

            backgroundcolor: '#020817',

            gridcolor: '#334155',

            zerolinecolor: '#334155'
        },

        yaxis: {

            title: 'BMI',

            backgroundcolor: '#020817',

            gridcolor: '#334155',

            zerolinecolor: '#334155'
        },

        zaxis: {

            title: 'Cluster',

            backgroundcolor: '#020817',

            gridcolor: '#334155',

            zerolinecolor: '#334155'
        }
    }
};

Plotly.newPlot(

    'cluster3dChart',

    [trace],

    layout
);