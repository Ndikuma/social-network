
from django.urls import path
from .views import *

urlpatterns = [
    path('',index),
    path('profile',profile,name='profile'),
    path('login',login1,name='login'),
    path('siginup',siginup, name='siginup'),
     path('review',review)
]