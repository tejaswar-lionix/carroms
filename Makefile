.PHONY: all build test run

all: build test

build:
	@echo "Building carroms..."
	@npm run build

test:
	@echo "Running test suites for carroms..."
	@npm test

run:
	@echo "Starting carroms..."
	@node server.js
