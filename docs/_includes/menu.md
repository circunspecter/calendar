{% assign page_url = page.url | split: '/' | shift | join: "/" %}
{: .menu}
- [Init]({{ site.baseurl }}/ "Init"){% if page_url == '' %}{: .active}{% endif %}
- {: .section} REF
- [Calendar]({{ site.baseurl }}/calendar/ "Calendar"){% if page_url == 'calendar' %}{: .active}{% endif %}
- [Month]({{ site.baseurl }}/month/ "Month"){% if page_url == 'month' %}{: .active}{% endif %}
- [Week]({{ site.baseurl }}/week/ "Week"){% if page_url == 'week' %}{: .active}{% endif %}
- [Day]({{ site.baseurl }}/day/ "Day"){% if page_url == 'day' %}{: .active}{% endif %}
- [DateTime]({{ site.baseurl }}/datetime/ "DateTime"){% if page_url == 'datetime' %}{: .active}{% endif %}
