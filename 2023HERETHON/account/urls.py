from django.urls import path
from account import views
from account.views import *

app_name = 'account'

urlpatterns = [
    path('login/', views.login, name="login"),
]