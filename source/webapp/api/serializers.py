from rest_framework import serializers
from webapp.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        # Tuple of serialized model fields
        fields = ('id', 'surname', 'name', 'lastName', 'phone', 'address', 'inn')