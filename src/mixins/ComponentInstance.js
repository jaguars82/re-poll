const instances = {}

export const ComponentInstance = {
  methods: {
    getInstance(id) {
      return instances[id]
    },

    setInstance() {
      instances[this.id] = this
    }
  }
}