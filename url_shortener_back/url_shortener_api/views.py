from rest_framework import generics
from rest_framework.permissions import AllowAny
from url_shortener_api.models import ShortenedURL
from .serializers import (
    ShortenedURLDetailedSerializer,
    ShortenedURLRedirectSerializer)


class ShortenedURLList(generics.ListCreateAPIView):
    queryset = ShortenedURL.objects.all()
    serializer_class = ShortenedURLDetailedSerializer


class ShortenedURLDetail(generics.RetrieveDestroyAPIView):
    lookup_field = "slug"

    queryset = ShortenedURL.objects.all()
    serializer_class = ShortenedURLDetailedSerializer


class ShortenedURLRedirect(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    lookup_field = "slug"

    queryset = ShortenedURL.objects.all()
    serializer_class = ShortenedURLRedirectSerializer
