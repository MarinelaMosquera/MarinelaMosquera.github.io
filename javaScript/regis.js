document.querySelector('#Registrarse').addEventListener('submit', Registrarse);


function Registrarse(){
   var Nombre = document.getElementById('Nombre').value
       Apellido = document.getElementById('Apellido').value
       Email = document.getElementById('Email').value
       Password = document.getElementById('Password').value
       Gender = document.getElementById('Gender').value

    addRegistrarse(Nombre,Apellido,Email,Password,Gender);

    }

    function drawRegistrarse(){
        var Registro = getRegistrarse(),
        tbody = document.querySelector('#Registrotable tbody');

        tbody.innerHTML = 'var row';

        for(var i = 0; i < list,length; i++){
            var row = tbody.insertRow(i)
               Nombre = row.insertNombre(0),
               Apellido = row.insertApellido(1),
               Email  = row.insertEmail(2),
               Password = row.insertPassword(3),
               Gender  = row.insertGender(4);

               Nombre.innerHTML = list[i].Nombre;
               Apellido.innerHTML = list[i].Apellido;
               Email.innerHTML = list[i].Email;
               Password.innerHTML = list[i].Password;
               Gender.innerHTML = list[i].Gender;

               var inputSelect = document.createElement('input');
               inputSelect.type ='text';
               inputSelect.value = list[i].id;
               selectNombre.appendChild(inputSelect);

               var inputSelect = document.createElement('input');
               inputSelect.type ='text';
               inputSelect.value = list[i].id;
               selectApellido.appendChild(inputSelect);

               var inputSelect = document.createElement('input');
               inputSelect.type ='text';
               inputSelect.value = list[i].id;
               selectEmail.appendChild(inputSelect);

               var inputSelect = document.createElement('input');
               inputSelect.type ='text';
               inputSelect.value = list[i].id;
               selectPassword.appendChild(inputSelect);

               var inputSelect = document.createElement('input');
               inputSelect.type ='text';
               inputSelect.value = list[i].id;
               selectGender.appendChild(inputSelect);

               tbody.appendChild(rew);

        }


        
    }