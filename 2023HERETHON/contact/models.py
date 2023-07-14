from django.db import models
from account.models import User

# Create your models here.

class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    con_user = models.ForeignKey(User,related_name='con_user',on_delete=models.CASCADE)
    subject = models.CharField(max_length=30, null=True)
    professor_name = models.CharField(max_length=10, null=True)
    email = models.EmailField(max_length=100)
    
    def __str__(self):
        return "{}:{}-{}".format(self.id,self.professor_name,self.subject)