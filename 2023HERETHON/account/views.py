from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib import messages

def login(request):
    if request.method == "POST":
        userid = request.POST['username']
        pwd = request.POST['password']
        user = auth.authenticate(request, username=userid, password=pwd)
        if user is not None:
            auth.login(request, user)
            return redirect('template:main')
        else:
            return render(request, 'login.html')
    else: 
        return render(request, 'login.html')

def signup(request):
    if request.method == 'POST':
        username = request.POST['userid']
        password = request.POST['password']
        password2 = request.POST['password2']
        
        if User.objects.filter(username=username).exists():
            messages.error(request, '이미 존재하는 아이디입니다.')
            return render(request, 'signup.html')

        if request.POST['password'] == request.POST['password2']:
            user = User.objects.create_user(username=request.POST['userid'], password=request.POST['password'])
            auth.login(request, user)
            return render(request, 'login.html')
        else:
            messages.error(request, '비밀번호를 동일하게 입력하세요.')
            return render(request, 'signup.html')
        
    return render(request, 'signup.html')