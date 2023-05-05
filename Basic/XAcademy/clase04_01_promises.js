//Ejemplos visto en clase

// Promise
const platos = [
    "milanesa con ensalada",
    "milanesa con pure",
    "pizza",
];
const mozo = {
    platoDelDia: "milanesa con ensalada",
    pedirPlato: function (plato) {
        // console.log("Se le pidio un " + plato + " al mozo");
        return new Promise((resolve, reject) => {
            if (plato === this.platoDelDia || platos.includes(plato)) {
                // console.log("La cocina esta preparando el plato...");
                setTimeout(() => {
                    resolve(plato);
                }, 3000)
            } else {
                // console.log("Pidiendo el plato a la cocina");
                setTimeout(() => {
                    reject('Lo siento, no tenemos ' + plato);
                }, 2000);
            }
        });
    }
}

const comer = (plato) => {
    console.log("Comiendo " + plato);
};

const meVoy = (error) => {
    console.error(error);
    console.log("Me voy a comer a otro lado")
};

const promesa = mozo.pedirPlato("pizza");
promesa.then(comer).catch(meVoy);

// ---------------------------------------------------------------

// function login(username, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (username === 'gastonf' && password === '1234') {
//                 return resolve({
//                     id: 1,
//                     username: 'gastonf',
//                     name: "Gaston",
//                     lastname: "Fernandez"
//                 });
//             } else {
//                 reject("Usuario o password invalidos");
//             }
//         }, 1000)
//     });
// }

// function getFriends(userId) {
//     return new Promise((resolve, reject) => {
//         console.log("Getting " + userId + " Friends...");
//         setTimeout(() => {
//             resolve([
//                 { id: 2, username: 'mati_77_' },
//                 { id: 3, username: 'XFEDEX' },
//                 { id: 3, username: 'SAN_999' },
//             ])
//         }, 1000);
//     })
// }

// // Utilizando THEN
// function main() {
//     login('gastonf', '1234')
//         .then(usuario => {
//             // Manipulacion del DOM
//             const div = document.createElement("div");
//             div.classList.add('header');
//             div.textContent = `Welcome ${usuario.name} ${usuario.lastname} (${usuario.username})`;
//             document.body.appendChild(div);
//             return getFriends(usuario.id);
//         })
//         .then(friends => {
//             const ul = document.createElement("ul");
//             friends.forEach(friend => {
//                 const li = document.createElement("li");
//                 li.textContent = friend.username;
//                 ul.appendChild(li);
//             });
//             document.body.appendChild(ul);
//         })
//         .catch(error => {
//             console.error(error);
//         })
//         .finally(() => {
//             const footer = document.createElement('footer');
//             footer.textContent = "All rights reserved | 2023";
//             document.body.append(footer);
//         });
// }

// main();

// // Utilizando async / await

// async function main2() {
//     try {
//         const usuario = await login('gastonf', '1234');

//         // Manipulacion del DOM
//         const div = document.createElement("div");
//         div.classList.add('header');
//         div.textContent = `Welcome ${usuario.name} ${usuario.lastname} (${usuario.username})`;
//         document.body.appendChild(div);

//         const friends = await getFriends(usuario.id);
//         const ul = document.createElement("ul");
//         friends.forEach(friend => {
//             const li = document.createElement("li");
//             li.textContent = friend.username;
//             ul.appendChild(li);
//         });
//         document.body.appendChild(ul);

//     } catch (error) {
//         console.error(error);
//     } finally {
//         const footer = document.createElement('footer');
//         footer.textContent = "All rights reserved | 2023";
//         document.body.append(footer);
//     }
// }
// main2();