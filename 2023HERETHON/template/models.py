from django.db import models

# Create your models here.

class Template(models.Model):
    class Cate(models.IntegerChoices):
        SCHOOL = 1
        CLUB = 2
        BASE = 3
        MY = 4

    id = models.AutoField(primary_key=True)
    cate = models.IntegerField(choices=Cate.choices)
    title = models.TextField()
    greet = models.TextField()
    intro = models.TextField()
    content = models.TextField()
    bye = models.TextField()

    def __str__(self):
        return "{}:{}-{}".format(self.cate,self.id,self.title)