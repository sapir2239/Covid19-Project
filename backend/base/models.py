from django.db import models
from django.contrib.auth.models import User



# Create your models here.

class Citizen(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    dateOfBirth = models.DateField(auto_now_add=False)
    cellular = models.IntegerField()
    landLine = models.IntegerField()
    address = models.CharField(max_length=200)
    City = models.CharField(max_length=200)
    zipCode = models.CharField(max_length=200, null=True)
    hadCovid = models.BooleanField(null=False, blank=False)
    previousConditions = models.CharField(max_length=200, null=True)
    otherConditions = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.firstName
