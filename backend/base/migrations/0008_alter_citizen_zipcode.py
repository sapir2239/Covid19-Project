# Generated by Django 4.0.4 on 2022-06-02 21:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_citizen_otherconditions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='citizen',
            name='zipCode',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
