from django.urls import path

from .views import ChatListAPIView

urlpatterns = [
    path('', ChatListAPIView.as_view(), name ="chat_list") #name is optional, but better use it..
]
