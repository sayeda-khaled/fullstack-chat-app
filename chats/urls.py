from django.urls import path

from .views import ChatListAPIView
from .views import ChatDetailAPIView

app_name='chats'

urlpatterns = [
    path('', ChatListAPIView.as_view(), name ="chat_list"), #name is optional, but better use it..
    path('<int:pk>/', ChatDetailAPIView.as_view(), name='chat_list_detail')
]
