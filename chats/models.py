from django.db import models

from django.contrib.auth.models import User


class Chat(models.Model):
    text = models.CharField(max_length=255)
    time = models.DateTimeField(auto_now_add=True, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)



    def __str__(self):   
        return "%s %s" % (self.text, self.author)
