const STORAGE = 'todo-storage';

let myVue = new Vue ({
    el : '#myApp',
    data : {
        title : "Todo",
        todo : "",
        myList : [],
        myDate : [],
        edited : false,
        selectedIndex : null
    },

    created () {
        this.myList = JSON.parse(localStorage.getItem(STORAGE) || '[]');
    },

    methods : {
        addTodo() {
            this.myList.push(this.todo);
            this.myDate.push(getDate());
            this.todo = "";
            localStorage.setItem(STORAGE, JSON.stringify(this.myList));
        },

        toggleDone(i) {
            document.getElementById("todoItem").className = "strikeout";
            this.selectedIndex = i;
            localStorage.setItem(STORAGE, JSON.stringify(this.myList));  
        },

        editTodo(i, todo) {
            this.todo = todo;
            this.selectedIndex = i;
            this.edited = true;
            localStorage.setItem(STORAGE, JSON.stringify(this.myList));
        },

        deleteTodo(i) {
            this.myList.splice(this.selectedIndex, 1);
            this.myDate.splice(this.selectedIndex, 1);
            localStorage.setItem(STORAGE, JSON.stringify(this.myList));
        },

        updateTodo() {
            this.myList.splice(this.selectedIndex, 1, this.todo);
            this.myDate.splice(this.selectedIndex, 1, getDate());
            this.edited = false;
            localStorage.setItem(STORAGE, JSON.stringify(this.myList));
        },

        getDate() {
            let date = new Date();
            return date.toUTCString();
        },

        categorisePriority(i) {
            document.getElementById("todoItem").className = "highPriority";
            this.selectedIndex = i;
            localStorage.setItem(STORAGE, JSON.stringify(this.myList));
        }
    } 
})