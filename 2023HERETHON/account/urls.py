from django.urls import path
from account import views
from account.views import *

app_name = 'account'

urlpatterns = [
    path('login/', views.login, name="login"),
    path('signup/', views.signup, name="signup"),
    path('logout/', views.logout, name='logout'),
    path('do_duplicate_check/',views.do_duplicate_check,name='do_duplicate_check'),
]