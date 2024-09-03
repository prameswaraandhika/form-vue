members = [
    {
        firstName: 'John',
        lastName: 'Lennon',
        instrument: 'Acoustic Guitar',
        active: true
    },
    {
        firstName: 'George',
        lastName: 'Harrison',
        instrument: 'Electric Guitar',
        active: true
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {}
        }
    },
    methods: {
        createMember() {
            if (this.newMember.firstName && this.newMember.lastName && this.newMember.instrument
                && this.newMember.active !== undefined
            ) {
                this.members.push(this.newMember)
                this.newMember = {}
            } else {
                alert("Please filled all field's")
            }
        }
    }
};

Vue.createApp(handlingForms).mount('#app');
