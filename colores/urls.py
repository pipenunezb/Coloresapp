from django.urls import path
from . import views
from django.views.generic import TemplateView

app_name = 'colores'
urlpatterns = [
    path('', views.ColoresView, name='all'),
]