test: dummy.yaml .pre-commit-config.yaml
	pre-commit autoupdate
	git add $^
	git commit -m 'test'

dummy.yaml: .FORCE
	printf 'date: "%s"' "$$(date)" > $@
.FORCE:

sandboxed: dummy.yaml .pre-commit-config.yaml
	git add $^
	sandbox-exec -f sandbox.sb git commit -m 'test: sandboxed'
