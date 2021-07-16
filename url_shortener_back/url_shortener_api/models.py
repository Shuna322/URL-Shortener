from django.db import models
from django.utils import timezone
from django.conf import settings


class ShortenedURL(models.Model):
    target = models.CharField(max_length=255)
    slug = models.SlugField(max_length=15)
    created = models.DateTimeField(default=timezone.now)
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='Shortened_URLs')
    views = models.IntegerField(default=0)
    objects = models.Manager()

    def __str__(self):
        return self.slug
