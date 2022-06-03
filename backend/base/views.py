from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Citizen
from .serializers import CitizensSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import xlwt

# Create your views here.

def getRoutes(request):
    routes= [
        'api/summary',
        'api/summary/searchByCity',
        'api/summary/searchByDate',
        'api/create'
    ]
    return JsonResponse(routes, safe=False)

@api_view(['GET'])
def getCitizen(request):
    citizens = Citizen.objects.all()
    serializer = CitizensSerializer(citizens, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def getCitizenByCity(request, city):
    citizens = Citizen.objects.filter(City=city)
    serializer = CitizensSerializer(citizens, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def getCitizenByDate(request, startdate, enddate):
    citizens = Citizen.objects.filter(dateOfBirth__range=[startdate, enddate])
    serializer = CitizensSerializer(citizens, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['POST'])
@csrf_exempt
def createCitizen(request):
    data = request.data
    citizens = Citizen.objects.create (
        firstName = data['firstName'],
        lastName = data['lastName'],
        dateOfBirth = data['dateOfBirth'],
        address = data['address'],
        City = data['City'],
        zipCode = data['zipCode'],
        cellular = data['cellular'],
        landLine = data['landLine'],
        hadCovid = data['hadCovid'],
        previousConditions = data['Conditions'],
        otherConditions = data['otherCondition']
    )
    serializer = CitizensSerializer(citizens)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def exportAllTable(request):
    response = HttpResponse(content_type='application/ms-excel')
    response['Content-Disposition'] = 'attachment; filename=Summary-Table.xls'
    citizens = Citizen.objects.all()
    return exportToExcel(citizens, response)

def exportToExcel(data, response):
    wb = xlwt.Workbook(encoding='utf-8')
    ws = wb.add_sheet('Summary Table')
    rowNumber = 0
    
    cols =['firstName','lastName','dateOfBirth','address','City','zipCode','landLine','cellular','hadCovid','previousConditions']

    for colNumber in range(len(cols)):
        ws.write(rowNumber,colNumber,cols[colNumber])

    rows = data.values_list('firstName','lastName','dateOfBirth','address','City','zipCode','landLine','cellular','hadCovid','previousConditions')
  
    for row in rows:
        rowNumber +=1
        for colNumber in range(len(row)):
            ws.write(rowNumber,colNumber,str(row[colNumber]))

    wb.save(response)
    return response