from django.db import models


# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=100)
    url = models.URLField(blank=True, null=True)
    body = models.TextField()


class Comment(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    comment = models.TextField(blank=False, null=False)
