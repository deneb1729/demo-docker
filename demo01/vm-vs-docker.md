# Virtual Machine vs Docker deploy

VM deploy:

```
time multipass launch --name demo1-vm bionic
multipass info demo1-vm
```

Docker container deploy:

```
time docker run -d --rm --name demo1-container -p 8081:80 nginx:1.18-alpine
docker image ls nginx:1.18-alpine
```
