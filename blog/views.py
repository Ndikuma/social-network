from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,"index.html")

def profile(request):
    return render(request,"profile.html")
def login1(request):
    return render(request,"login.html")

def siginup(request):
    return render(request,"siginup.html")

def review(request):
    return render(request,"demo.html")