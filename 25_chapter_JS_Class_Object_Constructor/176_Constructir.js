class credentials{
    #apikey;
    //user;
    constructor(user,password)
    {
        this.user1=user;
        this.#apikey =password;
    }

    getApi()
    {
        return this.#apikey;
    }
}

let creds = new credentials("admin", "1234");
console.log(creds.user1);
//console.log(creds.#apikey);