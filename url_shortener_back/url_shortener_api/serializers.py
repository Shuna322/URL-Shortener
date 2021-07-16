from rest_framework import serializers
from url_shortener_api.models import ShortenedURL


class ShortenedURLDetailedSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortenedURL
        fields = ('id', 'target', 'slug', 'owner', 'created', 'views')


class ShortenedURLRedirectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortenedURL
        fields = ('id', 'target', 'slug')
