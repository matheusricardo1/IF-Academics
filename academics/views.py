from django.shortcuts import render


def index(request):
    return render(request, "academics/pages/index.html")