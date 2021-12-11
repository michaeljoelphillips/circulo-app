.PHONY : build test clean install

SRC::=$(shell fd -e ts -E *.test.ts . src)

# Default Target
test: node_modules
	npx tsc

node_modules:
	npm install

# Phony Targets
start: node_modules
	REACT_APP_GRAPHQL_API_URL=http://localhost:8080 npx react-scripts start

build: clean test
	REACT_APP_GRAPHQL_API_URL=https://circulo.michaelphillips.dev npx react-scripts build

clean:
	rm -rf build/*
	fd -Ie js . ./src/ --exec rm {}
