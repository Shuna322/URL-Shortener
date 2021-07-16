from django.urls import path
from .views import ShortenedURLDetail, ShortenedURLList

app_name = 'url_shortener_api'

urlpatterns = [
    path('<slug:slug>/', ShortenedURLDetail.as_view(), name='detailcreate'),
    path('', ShortenedURLList.as_view(), name='listcreate'),
]
