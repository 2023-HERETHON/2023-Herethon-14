from django.urls import path
from account import views
from account.views import *

app_name = 'account'

urlpatterns = [
    path('login/', views.login, name="login"),
    path('signup/', views.signup, name="signup"),
    path('logout/', views.logout, name='logout'),
]