from django.shortcuts import render,get_object_or_404,redirect
from .models import Template
from django.db.models import Q

# Create your views here.

def mainView(request,cate,ord):
    temps_base=Template.objects.filter(cate=cate,is_base=True)   # 기본 제공 템플릿
    # 추가된 템플릿
    if(ord==1): # 최신순
        temps=Template.objects.filter(cate=cate,is_base=False).order_by('-created_at')       
    else:       # 제목 가나다순
        temps=Template.objects.filter(cate=cate,is_base=False).order_by('title')
    return render (request,'main.html',{'temps_base':temps_base,'temps':temps,'cate':cate})

def mailView(request,temp_id):
    temp=get_object_or_404(Template,id=temp_id)
    cate=temp.cate
    is_base=temp.is_base
    if(cate==3):
        return render (request,'write_basic.html',{'temp':temp,'is_base':is_base})
    return render (request,'write.html',{'temp':temp,'is_base':is_base})

def deleteView(request,temp_id):
    del_temp=get_object_or_404(Template,id=temp_id)
    del_cate=del_temp.cate
    del_temp.delete()
    return redirect('template:main',cate=del_cate,ord=1)

def addPageView(request,cate):
    if(cate==3):
        return render (request,'add_basic.html',{'cate':cate})
    return render (request,'add.html',{'cate':cate})

def addView(request,cate):
    new_temp=Template()
    new_temp.title=request.POST['title']
    new_temp.greet=request.POST['greet']
    new_temp.intro=request.POST['intro']
    new_temp.content=request.POST['content']
    new_temp.bye=request.POST['bye']
    new_temp.cate=cate
    new_temp.save()
    return redirect('template:main',cate=cate,ord=1)

def updatePageView(request,temp_id):
    update_temp=get_object_or_404(Template,id=temp_id)
    cate=update_temp.cate
    if(cate==3):
        return render (request,'update_basic.html',{'temp':update_temp,'temp_id':temp_id})
    return render (request,'update.html',{'temp':update_temp,'temp_id':temp_id})

def updateView(request,temp_id):
    update_temp=get_object_or_404(Template,id=temp_id)
    cate=update_temp.cate
    update_temp.title=request.POST['title']
    update_temp.greet=request.POST['greet']
    update_temp.intro=request.POST['intro']
    update_temp.content=request.POST['content']
    update_temp.bye=request.POST['bye']
    update_temp.save()
    return redirect('template:main',cate=cate,ord=1)

def searchView(request):
    search=request.GET.get('search','')
    search_temps=Template.objects.filter(        #제목 또는 내용에 search가 있는것 필터링 #2
     Q(title__icontains = search) | Q(intro__icontains = search)| Q(content__icontains = search)| Q(bye__icontains = search)
    )
    return render(request,'search.html',{'temps':search_temps})
