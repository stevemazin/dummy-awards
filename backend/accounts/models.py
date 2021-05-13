from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        normalized_email = self.normalize_email(email)
        user = self.model(email=normalized_email, **extra_fields)

        user.set_password(password)
        user.save(using=self.db)

        return user

    def create_staffuser(self, email, password=None, **extra_fields):
        """
        Creates and saves a staff user with the given credentials and password.
        """
        user = self.create_user(email, password, **extra_fields)
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """Create and save a new super user"""
        user = self.create_user(email, password, **extra_fields)
        user.staff = True
        user.superuser = True

        user.save(using=self.db)
        return user

    


class User(AbstractBaseUser, PermissionsMixin):
    # Use email as login field instead of username
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False) # a admin user; non super-user
    superuser = models.BooleanField(default=False) # a superuser

    objects = UserManager()

    USERNAME_FIELD = 'email' #username
    REQUIRED_FIELDS = ['first_name', 'last_name']


    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return self.first_name
    
    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.staff

    @property
    def is_admin(self):
        "Is the user a admin member?"
        return self.admin