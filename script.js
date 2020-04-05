let vm = new Vue({
	el: "#app",
	data:{
		number:1,
		thing: "",
		list: ["сделать ДЗ", "Сидеть Дома", "Смотреть Netflix"]
	},
	methods: {
		double: function (event) {
			console.log(event);
			this.number *= 2;
		},
		addItem: function (event){
			if (event.which == 13) {
				this.list.push(this.thing);
				this.thing = "";
			}
		},
		removeItem: function(index){
			this.list.splice(index, 1);
		}
	}
})