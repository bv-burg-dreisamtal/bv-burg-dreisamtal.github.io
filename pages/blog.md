---
layout: page
title: Blog
permalink: /blog
---

<div class="container mx-auto px-2 py-4">
{% for post in site.posts %}
    {% include post_block.html %}
{% endfor %}
</div>