<template>
  <div class="home">
    <loading v-if="busy"/>
    <div v-if="isAuthenticated" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
      <feed-item v-for="(appeal, index) in appeals" :key="index" :appeal="appeal"/>
    </div>
    <div v-if="!isAuthenticated && authStatus !== 'loading'">
      <h1>Welcome to DogeBook !</h1>
      <p>When meeting new doge friends is harder than ever, Dogebook closes the gap between all paws in the world</p>
      <login/>
    </div>
  </div>
</template>

<style>
.home {
  padding:2px 6px 2px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

<script>
import { getAll } from '@/resources/resources.js'
import FeedItem from './feedItem.vue'
import { mapGetters } from 'vuex'
import Login from '@/components/login'

export default {
  components: {
    Login,
    FeedItem
  },
  name: 'home',

  computed: {
    ...mapGetters(['isAuthenticated', 'authStatus']),
    loading: function () {
      return this.authStatus === 'loading' && !this.isAuthenticated
    }
  },     
  data () {
    return {
      args: { pageSize:8, pageIndex:0, lengthRecord:0, filter:{} },
      pageCount: 0,
      lastPage: false,
      appeals: [],
      busy: false
    }
  },
  methods: {
    testPage: function() {
      this.pageCount = Math.ceil(this.args.lengthRecord / this.args.pageSize);
      console.log( this.lastPage, this.args.pageIndex, this.pageCount)
      //if(this.args.pageIndex === this.pageCount) {
      //this.lastPage = true
      //this.busy = false;
      //}
    },
    getDocuments: function() {
      this.busy = true
      getAll('documents', this.args)
        .then(data => {
          console.log(data.body)
          let appeals = data.body.documents
          if(appeals) {
            this.args.lengthRecord = data.body.count
            this.pageCount =  Math.ceil(this.args.lengthRecord / this.args.pageSize);
            //console.log( this.pageCount, this.args.pageIndex );
            if (this.args.pageIndex == this.pageCount) { this.lastPage = true; } else {
              for (let n=0; n < appeals.length; n++) {
                if (appeals[n].images && appeals[n].images.length > 0) {
                  appeals[n].images[0] = 'https://control26.ru/public/uploads/' + appeals[n].images[0]   
                } else {
                  let image='https://control26.ru/public/uploads/no-photo.jpg'
                  appeals[n].images.push(image)
                }
                this.appeals.push(appeals[n])
              }
            }
            this.busy = false

          }
        })
        .catch(err => console.log('ERROR DETECTED', err)) // TODO: Handler Errors
    },
    loadMore: function() { 
      if (!this.lastPage) {
        this.getDocuments() 
        this.args.pageIndex = this.args.pageIndex + 1 
      } 
    }
  }
}
</script>
