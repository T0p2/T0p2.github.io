document.addEventListener('DOMContentLoaded', function() {
    var words = [
        ['JavaScript', 12],
        ['HTML', 8],
        ['CSS', 8],
        ['Node.js', 7],
        ['Python', 5],
        ['Django', 4],
        ['Flask', 4],
        ['Java', 3]
    ];

    WordCloud(document.getElementById('wordCloud'), {
        list: words,
        gridSize: 30,
        weightFactor: 5,
        fontFamily: 'Times, serif',
        color: 'white',
        backgroundColor: 'dark',
        rotateRatio: 0,
        rotationSteps: 0,
        shape: 'circle'
    });
});
