import {
    defineStore
} from 'pinia'

export const useContactStore = defineStore({
    id: 'contacts',
    state: () => ({
        contacts: [],
        contact: null,
        loading: false,
        error: null
    }),
    actions: {
        async fetchContacts() {
            this.contacts = []
            this.loading = true
            try {
                this.contacts = await fetch('https://whispering-cliffs-48655.herokuapp.com/contacts')
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        async fetchSingleContact(id) {
            this.contact = null
            this.loading = true
            try {
                this.contact = await fetch(`https://whispering-cliffs-48655.herokuapp.com/contacts/${id}`)
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        }
    }
})