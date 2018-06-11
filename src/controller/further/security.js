import $ from '@/utils'

export default {
  name: 'security',
  data() {
    return {
      title: '安防-展厅客厅',
      titlestatus: '已布防',
      rangeValue: 0,
      rangemoonValue: 0
    }
  },
  computed: {
    data() {
      return this.$store.state.Home
    }
  },
  methods: {

  },
  beforeMount() {

  },
  mounted() {
  },
  destroyed() {
  }
}
