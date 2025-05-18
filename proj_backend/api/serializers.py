from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'role', 'first_name', 'last_name', 'email']
        read_only_fields = ['id']
        
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['role'] = user.role
        token['name'] = user.get_full_name()
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data['role'] = self.user.role
        data['name'] = self.user.get_full_name()
        data['username'] = self.user.username
        return data

class UserListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        users = CustomUser.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
