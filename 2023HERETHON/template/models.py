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
    title = models.TextField(blank=True)
    greet = models.TextField(blank=True)
    intro = models.TextField(blank=True)
    content = models.TextField(blank=True)
    bye = models.TextField(blank=True)

    def __str__(self):
        return "{}:{}-{}".format(self.cate,self.id,self.title)