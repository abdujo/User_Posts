// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const userListEL = document.querySelector('.user-list');



async function manin() {

    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await users.json();

    console.log(usersData);

    userListEL.innerHTML = usersData.map(user => userHTML(user)).join('')

}
manin();
function showUserPosts(id) {
    
   console.log(id);
}


function userHTML(user) {
    return `<div class="user-card" onclick="showUserPosts(${user.Id})>
<div class="user-card__container">
    <h3>${user.name}</h4>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Phone:</b> ${user.phone}/p>
    <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
</div>
</div>`;
}