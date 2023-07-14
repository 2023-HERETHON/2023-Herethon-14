from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import auth
#from django.contrib import messages

def login(request):
    cate=1
    if request.method == "POST":
        userid = request.POST['username']
        pwd = request.POST['password']
        user = auth.authenticate(request, username=userid, password=pwd)
        if user is not None:
            auth.login(request, user)
            ord=1
            return redirect('template:main', cate,ord)
        else:
            return render(request, 'login.html', {'error': '입력한 내용을 다시 확인해주세요.'})
    else: 
        return render(request, 'login.html')

def signup(request):
    if request.method == 'POST':
        userid = request.POST['userid']
        username = request.POST['userName']
        password = request.POST['password']
        password2 = request.POST['password2']
        
        if User.objects.filter(username=userid).exists():
            #messages.error(request, '이미 존재하는 아이디입니다.')
            return render(request, 'signup.html', {'error': '이미 존재하는 아이디입니다.'})

        if request.POST['password'] == request.POST['password2']:
            user = User.objects.create_user(username=request.POST['userid'], password=request.POST['password'],first_name=request.POST['userName'])
            auth.login(request, user)
            return render(request, 'login.html')
        else:
            return render(request, 'signup.html')
        
    return render(request, 'signup.html')

def logout(request):
    auth.logout(request)
    return render(request, 'login.html')

def do_duplicate_check(request):
    print('아이디 중복 확인')
    userid=request.GET.get('user_id')
    if User.objects.filter(username=userid).exists():
            duplicate = "fail"
    else: duplicate = "pass"
    context={'duplicate':duplicate}
    return JsonResponse(context)