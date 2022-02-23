from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfileInfo(models.Model):

    user = models.OneToOneField(User, on_delete=CASCADE)

    portfolio_site = models.URLField(blank=True)
    # Optional: pip install pillow --global-option=”build_ext” --global-option=”--disable-jpeg”
    profile_pic = models.ImageField(upload_to= 'profile_pics', blank=True)

    def __str__(self):
        return self.user.username