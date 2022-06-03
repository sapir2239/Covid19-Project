from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Citizen

class CitizensSerializer(serializers.ModelSerializer):
    class Meta:
        model = Citizen
        fields = '__all__'
