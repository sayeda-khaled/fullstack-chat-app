from rest_framework import serializers

from .models import Chat


class ChatSerializer(serializers.ModelSerializer):

    is_owner = serializers.SerializerMethodField('get_owner_status')
    owner = serializers.ReadOnlyField(source='user.usermame')

    def get_owner_status(self, obj):
        # import pdb; pdb.set_trace() just type pdb, then hit enter.. this will stop your code and start debugging
        return obj.author == self.context['request'].user  #self is the chat serializer, context is what is targeted

    author= serializers.StringRelatedField()


    class Meta:
        model = Chat
        # fields = ('text', 'author', 'id', 'updated_at')

        fields = '__all__'
