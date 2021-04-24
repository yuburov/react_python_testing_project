from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from mirage import fields


#Создание модели пользователя
class User(models.Model):
    surname = models.CharField(max_length=100, verbose_name='Фамилия')
    name = models.CharField(max_length=100, verbose_name='Имя')
    lastName = models.CharField(max_length=100, verbose_name='Отчество')
    phone = PhoneNumberField(max_length=50, null=True, blank=True, verbose_name='Телефон')
    address = models.CharField(max_length=200, verbose_name='Адрес')
    inn = fields.EncryptedCharField(max_length=50, verbose_name='ИНН') # Данные ИНН будут зашифрованы в базе

    def __str__(self):
        if self.lastName:
            return "{} {} {}".format(self.surname, self.name, self.lastName)
        else:
            return '{} {}'.format(self.name, self.surname)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'