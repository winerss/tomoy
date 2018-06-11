import $ from '@/utils'

export default {
  name: 'masterFirst',
  data() {
    return {
    }
  },
  computed: {
    data() {
    }
  },
  methods: {
    backPage() {
      window.history.back()
    },
    goPage (url) {
      this.$router.push(url)
    }
  },
  beforeMount() {
    
  },
  mounted() {
  },
  destroyed() {
  }
}
