from django.contrib import admin
from django.urls import path
from .views import *

app_name='template'                  # app name작성 후 view와 url연결

urlpatterns = [
    path("main/<int:cate>/", mainView,name="main"),
    path('mail/<int:temp_id>/',mailView,name="mail"),
    path('template/addpage/<int:cate>/',addPageView,name="addPage"),
    path('template/add/<int:cate>/',addView,name="add"),
    path('template/updatepage/<int:temp_id>',updatePageView,name="updatePage"),
    path('template/update/<int:temp_id>',updateView,name="update"),
    path('delete/<int:temp_id>/',deleteView,name="delete"),
    path('search/',searchView,name="search"),
]


