function getUsername(email) {
    var username = " ";
        return {
         user1: "user1@gmail.com",
         user2: "user2@gmail.com",
         user3: "user3@gmail.com",
         user4: "user4@gmail.com",
         user5: "user5@gmail.com",
         user6: "user6@gmail.com",
    }[email];
     
    return username;
}
console.log(lookup("user2@gmail.com"));
getUsername("user2@gmail.com");
module.exports = getUsername;