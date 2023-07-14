from django.db import models
from django.utils import timezone

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
    greet = models.TextField(blank=True)    # 인사말
    intro = models.TextField(blank=True)    # 용건
    content = models.TextField(blank=True)  # 내용
    bye = models.TextField(blank=True)      # 끝인사
    is_base = models.BooleanField(default=False)
    created_at=models.DateTimeField(default=timezone.now)

    def __str__(self):
        return "{}:{}-{}".format(self.cate,self.id,self.title)