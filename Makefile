deploy-demo: ## Deploy the demo at http://marmelab.com/mml/
	cd www && \
	git init && \
	git add . && \
	git commit -m "Update demo" && \
	git remote add origin git@github.com:marmelab/mml.git && \
	git push --force origin master:gh-pages