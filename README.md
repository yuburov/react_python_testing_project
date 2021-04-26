# react_python_testing_project

## Setup

The first thing to do is to clone the repository:

```sh
$ https://github.com/yuburov/react_python_testing_project.git
$ cd sample-django-app
```

Create a virtual environment to install dependencies in and activate it:

```sh
$ virualenv -p python3.8 venv
$ source env/bin/activate
```

Then install the dependencies:

```sh
(env)$ pip install -r requirements.txt
```
Once `pip` has finished downloading the dependencies:
```sh
(env)$ cd project
(env)$ python manage.py migrate
(env)$ python manage.py loaddata fixtures/dump.json
(env)$ python manage.py runserver
```
Superuser's username: admin, password: admin
