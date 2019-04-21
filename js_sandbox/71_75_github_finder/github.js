class GitHub {
    constructor() {
        this.client_id = 'cf4fd5f903e14527fe91';
        this.client_secret = '825bc2bccd2db4e3775f9c2fd565850299167638';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}