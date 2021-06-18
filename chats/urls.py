from django.urls import path

from .views import ChatListAPIView

app_name='chats'

urlpatterns = [
    path('', ChatListAPIView.as_view(), name ="chat_list") #name is optional, but better use it..
]
