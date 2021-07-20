from .base import *

DEBUG = True

CORS_ALLOW_ALL_ORIGINS = True

ALLOWED_HOSTS = ['localhost']

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    'https://stevemazin.pythonanywhere.com'
]

try:
    from .credentials import *
except ImportError:
    pass

