let vm = new Vue({
	el: "#app",
	data:{
		number:1,
		thing: "",
		list: ["сделать ДЗ", "Сидеть Дома", "Смотреть Netflix"],
		numbers: ["1", "4"]
	},
	methods: {
		double: function (event) {
			console.log(event);
			this.number *= 2;
		},
		addItem: function (event){
			this.list.push(this.thing);
			this.thing = "";
		},
		removeItem: function(index){
			this.list.splice(index, 1);
		}
	},
	computed:{
		average: function(){
			let sum = 0;
			for (n of this.numbers) {
				sum += Number(n);
			}
			return sum/this.numbers.length;
		}
	}
})








