# probando un servidor nginx
sudo docker run -d --name server01 -p 80:80 nginx:1.19.5-alpine
# crear un index.html y copiarlo en el contenedor
sudo docker cp index.html server01:/usr/share/nginx/html/
# escaneo de imágenes con trivy
trivy image -o report.txt <name-image>