# Generated by Django 2.2 on 2022-02-18 00:02

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('basic_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserProfileInfoForm',
            new_name='UserProfileInfo',
        ),
    ]
