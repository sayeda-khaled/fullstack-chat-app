from rest_framework import permissions

class IsAuthOrReadOnly(permissions.BasePermission): # the IsAuthOrReadOnly is the name you create, doesn't mattar what oyu choose..

    def has_object_permission(self, request, view, obj): #has_object_permission has to be stated this way..
        if request.method in permission.SAFE_METHODS: # safe method is the get
            return True

        return obj.author == request.user  #for me the user is author.. the object is the message..

#This give the owner of the message can have access to edit and delete the message..
