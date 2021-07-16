from django.urls import path
from .views import CustomUserCreate

app_name = 'users_api'

urlpatterns = [
    path('register/', CustomUserCreate.as_view(), name='detailcreate'),
]
