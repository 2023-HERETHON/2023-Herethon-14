from django.shortcuts import render, redirect, get_object_or_404
from .models import Contact

def contact(request):
    contacts = Contact.objects.all()
    return render(request, "contact.html", {"contacts":contacts})

def contact_add(request):
    newcontact=Contact.object.all()
    newcontact_professorname=request.POST['professor_name']
    newcontact_subject=request.POST['subject']
    newcontact_email=request.POST['email']
    newcontact.save()
    return redirect('contact:contact_list')

def contact_delete(request, id):
    del_contact=get_object_or_404(Contact,pk=id)
    del_contact.delete()
    return redirect('contact:contact_list')



