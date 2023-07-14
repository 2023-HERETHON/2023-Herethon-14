from django.shortcuts import render, redirect, get_object_or_404
from .models import Contact

def contact(request):
    if request.user.is_authenticated:
        print("로그인 상태")
        print("Username --> {request.user.username}")

    else:
        print("로그인 되어있지 않음")
        return redirect("account:login")
    now_user=request.user
    contacts = Contact.objects.filter(con_user=now_user)
    return render(request, "contact.html", {"contacts":contacts})

def contact_add_page(request):
    return render(request, "contact_create.html")

def contact_add(request):
    now_user=request.user
    print(now_user)
    newcontact=Contact()
    newcontact.professor_name=request.POST['professor_name']
    newcontact.subject=request.POST['subject']
    newcontact.email=request.POST['email']
    newcontact.con_user=now_user
    newcontact.save()
    return redirect('contact:contact_list')

def contact_delete(request, id):
    del_contact=get_object_or_404(Contact,pk=id)
    del_contact.delete()
    return redirect('contact:contact_list')

