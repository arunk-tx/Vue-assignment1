<template>
  <form>
    <v-select v-model="select" :items="items" item-title="state" item-value="code" label="Item" required persistent-hint
      return-object single-line></v-select>
    <v-btn color="green-darken-1" variant="text" @click="runTest">
      Run Test
    </v-btn>
  </form>
  <div class="console" id="consoleId" style="margin-top:50px" v-html="html">
  </div>
</template>

<script>
//import AnsiUp from 'ansi_up'

export default {
  name: 'shellCon',
  props: ['socket'],
  data() {
    return {
      ansi: undefined,
      content: '',
      eventSource: '',
      select: { state: 'Ensure no root account access key exists - iam [critical]', code: "1" },
      items: [
        { state: 'Ensure no root account access key exists - iam [critical]', code: "1" },
        { state: 'Ensure MFA is enabled for the root account - iam [critical]', code: "2" },
        { state: 'Ensure only hardware MFA is enabled for the root account - iam [critical]', code: "3" }
      ]
    }
  },
  methods: {
    runTest() {
      console.log("run")
      console.log("data**", this.content)
      this.content += "abcd"
      this.content += "<br>exceuting...."
      this.content += "<br>exceuting2...."
      //const eventSource = new EventSource('http://localhost:8000/stream')
      //var eventSource = new EventSource("http://localhost:8000/abc.log");

      /*eventSource.onmessage = function(event) {
        //console.log(event.data.type);
        this.content += "exceuting...."
        this.content += "exceuting2...."
        console.log("update", event.data);
        const eventList = document.getElementById("consoleId");
        //console.log("div", eventList)
        const newElement = document.createElement("li");
        newElement.textContent = event.data;
        eventList.appendChild(newElement); */

      //};
    }
  },
  computed: {
    html() {
      // Ensures we have some semblance of lines
      //return this.ansi.ansi_to_html(this.content).replace(/\n/gm, '<br>')
      console.log("html con****", this.content)
      return this.content
    }
  },
  watch: {
    socket() {
      this.socket.on('data', data => {
        console.log("watch trigger")
        this.content += data
      })
      this.socket.send('ready')
    }
  },
  //beforeMount() {
   // this.ansi = new AnsiUp()
  //},
  updated() {
    // auto-scroll to the bottom when the DOM is updated
    this.$el.scrollTop = this.$el.scrollHeight
  }
}
</script>

<style scoped>
.console {
  font-family: monospace;
  text-align: left;
  background-color: black;
  color: #fff;
  overflow-y: auto;
}
</style>
