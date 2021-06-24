from rest_framework import serializers

from .models import Chat


class ChatSerializer(serializers.ModelSerializer):

    author= serializers.StringRelatedField()


    class Meta:
        model = Chat
        # fields = ('text', 'author', 'id', 'updated_at')

        fields = '__all__'
