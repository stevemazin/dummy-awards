from .base import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['stevemazin.pythonanywhere.com', 'localhost']

try:
    from .credentials import *
except ImportError:
    pass
