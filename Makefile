.PHONY: clean test test-ui report trace

clean:
	@rm -rf test-results
	@rm -rf playwright-report

test: clean
	@npx playwright test

test-ui:
	@npx playwright test --ui

report:
	@npx playwright show-report

trace:
	@npx playwright show-trace
