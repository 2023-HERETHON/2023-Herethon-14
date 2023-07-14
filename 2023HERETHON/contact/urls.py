from django.urls import path
from contact import views
from contact.views import *

app_name = 'contact'

urlpatterns = [
    path("main/", views.contact, name="contact_list"),
    path("addPage/",views.contact_add_page,name="addPage"),
    path("add/",views.contact_add,name="add"),
    path("delete/<int:id>",views.contact_delete,name="delete"),
]