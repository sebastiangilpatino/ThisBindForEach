let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        let helper = (student) => (student) => console.log(this.title + ": " + student);
        this.students.forEach(helper.call(this));
    }

};

group.showList();