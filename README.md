# Sem1_Proy1_Server

## Integrantes Grupo :
```
200310165 - José Abraham Navarro de León.
201503393 - José Daniel De León Ruiz.
201503893 - Brandon Javier Soto Castañeda.
```
## Pasos para crear el Servidor Web y como conectar con el:

**1. Nos conectamos remotamente a nuestro servidor virtual o en la nube con ssh:**
```
	$ IP http://52.15.238.246/
	$ ssh root@52.15.238.246
```

**2. Con docker pull descargamos la imagen de Ubuntu del repositorio oficial en su versión 14.04, donde 14.04 es el tag y ubuntu el nombre del repositorio:**
```
	$ docker pull ubuntu:14.04
```

**3. Ejecutamos docker run con -it para indicar consola interactiva, con -p 80:80 para indicar que redireccionamos el puerto 80 del host al 80 de container, 
es decir exponer los puertos, --name=nginxS2 para que el nombre del container se pueda acceder con el nombre nginxS2 en vez de su id generado, 
ubuntu:14.04 repositorio ubuntu y tag 14.04, /bin/bash es el comando a ejecutarse dentro del container en su ejecución:**
```
	$ docker run -it -p 80:80 --name=nginx ubuntu:14.04 /bin/bash
```

**En el container realizar los siguientes pasos:**

**4. Actualizamos los repositorios de la instalación limpia de Ubuntu 14.04:**
```
	$ apt-get update
```

**5. Instalamos los paquetes necesarios para instalar Nginx con php5 y soporte para MySQL:**
```
	$ apt-get install -y nginx php5-fpm php5-mysql
```

**6. Instalamos nano para editar ciertos archivos de nginx para activar el soporte de php5:**
```
	$ apt-get install nano
```

**7. Editamos el archivo /etc/nginx/sites-available/default y descomentamos las líneas de php, grabamos con Crtl+O y Enter, luego Ctrl+X y Enter para salir.**
```
	$ nano /etc/nginx/sites-available/default

	$ location ~ \.php$ {
       		fastcgi_split_path_info ^(.+\.php)(/.+)$;
	#       # NOTE: You should have "cgi.fix_pathinfo = 0;" in php.ini
	#
	#       # With php5-cgi alone:
	#       fastcgi_pass 127.0.0.1:9000;
	#       # With php5-fpm:
	       fastcgi_pass unix:/var/run/php5-fpm.sock;
	       fastcgi_index index.php;
	       include fastcgi_params;
	}
```

**8. Iniciamos el servicio de Php5 y Nginx:**
```
	$ service php5-fpm start
	$ service nginx start
```

**9. Mostramos los procesos de Nginx corriendo:**
```
	$ ps -A
```

**10. Nos cambiamos al directorio /usr/share/nginx/html para modificar index.html posteriomente.**

**11. Mostramos los contenedores sin importar su estado y filtramos la salida a los campos Names, Image y Status.**
```
	d$ ocker ps -a --format '{{.Names}}\t{{.Image}}\t{{.Status}}'
```

**12. Volvemos a iniciar el container nginx que fue creado anteriormente:**
```
	$ docker start nginx
```

**13. Mostramos los containers activos y filtramos por los campos Names, Image y Status:**
```
	$ docker ps --format '{{.Names}}\t{{.Image}}\t{{.Status}}'
```
**14. Ejecutamos el comando para iniciar el servicio de nginx y php5-fpm dentro del container en ejecución llamado nginxS2:**
```
	$ docker exec nginxS2 /bin/bash service php5-fpm start
	$ docker exec nginxS2 /bin/bash service nginx start
```

**15. Mostramos containers activos con docker ps:**
```
	$ docker ps
```

**16. Accedemos al sitio desde nuestro navegador usando el IP del host y el puerto 8000, en este caso el IP es 67.205.173.14:**
```
	$ http:// http://67.205.173.14:80/
```
