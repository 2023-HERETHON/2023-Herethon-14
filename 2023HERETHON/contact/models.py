from django.db import models

# Create your models here.

class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    subject = models.CharField(max_length=30)
    professor_name = models.CharField(max_length=10)
    email = models.EmailField(max_length=100)
    
    def __str__(self):
        return "{}:{}-{}".format(self.id,self.professor_name,self.subject)