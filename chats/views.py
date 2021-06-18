from rest_framework import generics

from .models import Chat

from .serializers import ChatSerializer

# ListAPIView allows you to do a GET request
# CreateAPIView allows you to do a POST request
# ListCreateAPIView allows you to do a GET and a POST request

class ChatListAPIView(generics.ListCreateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
