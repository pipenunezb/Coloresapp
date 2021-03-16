from django.shortcuts import render

# Create your views here.
def ColoresView(request):
    return render(request, 'colores/index.html')