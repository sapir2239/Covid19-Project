# Responsible to connect betwee the routes and urls

from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('summary/', views.getCitizen, name="citizens"),
    path('summary/searchByCity/<str:city>/', views.getCitizenByCity, name="citizens-by-city"),
    path('summary/searchByDate/<str:startdate>&<str:enddate>/', views.getCitizenByDate, name="citizens-by-date"),
    path('create/', views.createCitizen, name="citizens-create"),
    path('exportAll/', views.exportAllTable, name="export-data"),
]
