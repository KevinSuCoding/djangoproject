from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

def home(request):
    context  = {}
    return render(request,'kevfolio/home.html',context)

