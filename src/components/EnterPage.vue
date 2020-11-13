<template>
    <div class="CopClass">
        <h1>{{ msg }}</h1>
        <h2>Element UI Button</h2>
        <el-button type="primary" @click="show">Show Channels</el-button>
        <el-table :data="channel_data" border justify="center" style="width: 100%">
            <el-table-column prop="title_chinese" label="ChannelName"></el-table-column>
            <el-table-column prop="short_description_chinese" label="Description"></el-table-column>
            <el-table-column prop="visible" label="Visible"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'CopName',
  data () {
    return {
      msg: 'Welcome to Your Vue App Webpage!',
        checked: true,
        channel_data:[]
    }
  },
    methods: {
        show: function(){
          var url = "/channelinfos"
          Vue.axios.get(url).then((response) => {
              console.log("response: "+ response.data.status);
              console.log("response: "+ response.data.data);
              this.channel_data = response.data.data;

          }).catch((error) => {
              console.log("error: "+error)
          });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
