# Vet App


Referencia endpoints frontend


Id  | Method |   Path                         |   Description
--- | ------ | ------------------------------ |  ------------------------------------------
1   |  get   | /                              | Muestra la página principal 
3   |  get   | /contact                       | Muestra el formulario de contacto 
19  |  get   | /signup                        | Muestra el formulario para registrarse 
21  |  get   | /login                         | Muestra el formulario para loguearse 
1   |  get   | /vetHospital                   | Muestra las clinicas veterinarias (consulta a getAllVetHospital)
3   |  get   | /indexVetHospital              | Muestra la informacion relevante para la clinica, como las citas,los mensajes recibidos
7   |  get   | /indexVetHospital/client       | Muestra una lista de clientes (para la pagina del indexVetHospital)
24  |  get   | /indexVetHospital/citeHospital | Muestra las citas dadas por la clinica
31  |  get   | /indexVetHospital/queryClient  | Muestra las consultas de los clientes
3   |  get   | /indexClient                   | Muestra la informacion relevante para el cliente, como las citas
31  |  get   | /indexClient/queryClient       | Muestra las consultas del cliente
8   |  get   | /profile/:id                   | Muestra el perfil del usuario, sea cliente o clinica




14  |   get     | /signup                    | Muestra el formulario para registrarse 
1   |   get     | /login                     | Muestra el formulario para loguearse
4   |   get     | /vetHospital/signup        | Muestra el formulario para que la nueva clinica se registre
4   |   get     | /client/signup             | Muestra el formulario para que el nuevo cliente se registre
    |   get     | /pet/create                | Muestra el formulario para crear una nueva mascota
26  |   get     | /citeHospital/create       | Formulario para crear una nueva cita
33  |   get     | /queryClient/create        | Formulario para crear una nueva consulta