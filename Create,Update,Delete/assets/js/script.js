$(document).ready(function () {


    let people = [];


    if (localStorage.getItem("infos") != null) {
        people = JSON.parse(localStorage.getItem("infos"))
    }
    $("button").click(function (e) {

        e.preventDefault();

        let date = new Date();
        let dataid = date.getMilliseconds();

        let user = {
            id: dataid,
            name: ($(".name").val()),
            surname: ($(".surname").val())
        }

        if (user.name.trim() != "" && user.surname.trim() != "") {

            people.push(user);

            localStorage.setItem("infos", JSON.stringify(people))

            createLi();

        }
        else {
            alert("Please input fulling");
        }


        function createLi() {

            let userid = user.id
            let username = user.name
            let usersurname = user.surname

            let newLi = $(`<li class="list-group-item" data-id ="${userid}">${username} ${usersurname}</li>`)

            $("ul").append(newLi);

            $(".name").val("");
            $(".surname").val("");

        }
    })


    function getLi() {

        let users = JSON.parse(localStorage.getItem("infos"))

        if (users != "") {
            for (const user of users) {
                let userid = user.id
                let username = user.name
                let usersurname = user.surname

                let newLi = $(`<li class="list-group-item" data-id ="${userid}">${username} ${usersurname}</li>`)

                $("ul").append(newLi);
            }
        }
    }

    getLi();


    $(document).on("click", "ul li", function () {

        let id = $(this).attr("data-id");

        $(this).remove();

        deleteLi(id);
    })


    function deleteLi(id) {

        people = people.filter(m => m.id != id);
        localStorage.setItem("infos", JSON.stringify(people));
    }
})


//

