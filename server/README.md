# Vet App


Referencia endpoints Backend (/api...)

10, 12, 15, 17, 23, 25

Id  |   Method  |   Path                     |   Description
--- | --------- | -------------------------- |  ------------------------------------------
1   |   post    | /signup                    | Registra al usuario en la BBDD
2   |   post    | /login                     | Loguea al usuario
3   |   get     | /logout                    | Desloguea al usuario
4   |   get     | /vetHospital               | Muestra las clinicas veterinarias
5   |   post    | /vetHospital/signup        | Guarda en la BBDD la nueva clinica registrada
6   |   get     | /vetHospital/edit/:id      | Muestra un formulario para editar la clinica
7   |   post    | /vetHospital/edit/:id      | Guarda la clinica en la BBDD
8   |   get     | /vetHospital/delete/:id    | Borra de la BBDD la clinica
9   |   get     | /client                    | Muestra una lista de clientes
10  |   get     | /client/:id                | Muestra el detalle de cada cliente
11  |   get     | /client/delete/:id         | Elimina de la BBDD el cliente
12  |   get     | /client/edit/:id           | Muestra el formulario para editar el perfil del cliente
13  |   post    | /client/edit/:id           | Edita en la BBDD el cliente
14  |   post    | /client/signup             | Guarda el cliente en la BBDD
15  |   get     | /pet                       | Muestra todas las mascotas
16  |   get     | /pet/:id                   | Muestra los datos de la mascota seleccionada
17  |   get     | /pet/edit/:id              | Muestra el formulario relleno para editar los datos de la mascota
18  |   post    | /pet/edit/:id              | Edita los datos de la mascota en la BBDD
19  |   get     | /pet/delete/:id            | Elimina de la BBDD la mascota
20  |   get     | /citeHospital              | Muestra las citas dadas por la clinica
21  |   get     | /citeHospital/:id          | Muestra el detalle de cada cita
22  |   post    | /citeHospital/create       | Guarda en la BBDD la cita creada
23  |   get     | /citeHospital/edit/:id     | Muestra un formulario para editar la cita
24  |   post    | /citeHospital/edit/:id     | Guarda la cita en la BBDD
25  |   get     | /citeHospital/delete/:id   | Borra de la BBDD la cita
26  |   get     | /queryClient               | Muestra las consultas de los clientes
27  |   get     | /queryClient/:id           | Muestra el detalle de cada consulta
28  |   post    | /queryClient/create        | Guarda en la BBDD la consulta creada
29  |   get     | /queryClient/edit/:id      | Muestra un formulario para editar la consulta
30  |   post    | /queryClient/edit/:id      | Guarda la consulta en la BBDD
31  |   get     | /queryClient/delete/:id    | Borra de la BBDD la consulta
