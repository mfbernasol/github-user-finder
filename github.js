class Github{
    constructor(){
        this.client_id = 'fb783ce55c7a511aabb5';
        this.client_secret = '5dbe860737f5adeb4102fb1714576274c1ab7438';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile= await profileResponse.json();

        return{
            profile
        }
    }
}