- docker login https://docker.willclark.org
- docker build . --tag "docker.willclark.org/todo_vuejs:${VERSION}"
- docker push docker.willclark.org/todo_vuejs:${VERSION}
- docker logout https://docker.willclark.org