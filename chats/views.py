from rest_framework import generics

from .models import Chat

from .serializers import ChatSerializer

from .permissions import IsAuthOrReadOnly

# ListAPIView allows you to do a GET request
# CreateAPIView allows you to do a POST request
# ListCreateAPIView allows you to do a GET and a POST request

class ChatListAPIView(generics.ListCreateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)#when a new form is created, the author is going to be the logged in user..

        # serializer.save(author=self.request.user) #when a new form is created, the author is going to be the logged in user..

class ChatDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer

    permission_classes = (IsAuthOrReadOnly,)






# class MessageDetailAPIView(generics.RetrieveupdateDestroyAPIView);
