/**
 * Created by session1 on 10/7/15.
 */


google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Democrat',     40],
        ['Republican',      22],
        ['Independent',  23],
        ['Other', 9],
        ['Refused, N/A',    6]
    ]);

    var options = {
        title: 'Twitter users electoral group.'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}


/** Another thing to commit */


google.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart() {

    var data = google.visualization.arrayToDataTable([
        ['ID', 'Statisic Number', '',     'Population'],
        ['Mobile Social Media Users',    1,              0,    1.7],
        ['Mobile Users',    2,              0,    2.1],
        ['Social Media Usrs',    3,              0,    3],
        ['Internet Users',    4,               0,         3.7],
        ['Total Population',    5,              0,  7.2]
    ]);

    var options = {
        title: 'Population of users of different social media connections.',
        hAxis: {title: 'Statistic Number'},
        vAxis: {title: ''},
        bubble: {textStyle: {fontSize: 11}}
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
    chart.draw(data, options);
}


function popup () {
    prompt("Do you use social media daily?")
}


setTimeout(popup, 10000);