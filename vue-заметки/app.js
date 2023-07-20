const App = {
  data() {
    return {
      placeholderString: "Введите заметку",
      title: "Список заметок",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    inputChange(event) {
      this.inputValue = event.target.value;
    },
    addNote(event) {
      if(this.inputValue !== ""){
        this.notes.push(this.inputValue);
        this.inputValue = ''  
      }
      else alert("Вы не написали заметку!")
    },
    DeleteNote(ind, event){
        this.notes.splice(ind, 1)
    },
  },
};
Vue.createApp(App).mount("#app");
