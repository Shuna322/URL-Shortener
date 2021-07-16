from django.contrib import admin
from . import models


# @admin.register(models.ShortenedURL)
# class ShortenedURLAdmin(admin.ModelAdmin):
#     list_display = ('id', 'target', 'slug', 'owner', 'created', 'views')
#     prepopulated_fields = {'slug': ('title',), }

admin.site.register(models.ShortenedURL)
