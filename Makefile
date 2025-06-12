build:
	docker build -t union-contract .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
