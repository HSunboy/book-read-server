<!-- app/view/news/list.tpl -->
<html>

<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
</head>

<body>
    news
    <div class="news-view view">
        {% for key,value in list %}
        <div class="item">
            {{helper.filterName(value[1])}}
        </div>
        {% endfor %}
    </div>
</body>

</html>