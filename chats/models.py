from django.db import models

from django.contrib.auth.models import User

class Chat(models.Model): # we are inheriting from the model we are inheriting the model from django..
    text = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)


    def __str__(self):   #This lists the title in the page now.. You don't have to make migration, but you would if you are changing your model, cos this is how the database is updated
        return self.text
