
(function addInput() {
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        var paramter0 = document.getElementById('parameter0').value;
        if (paramter0) {
            url = ',' + paramter0;
            window.location = window.location.href + url
        }
        document.getElementById('add_parameters').addEventListener('click', addInput);

        // var redOne = document.querySelector('#deletRed')
        // document.querySelector('#deletRed').addEventListener('click', deleteRow);
        // function deleteRow() {
        //     if (redOne) {
        //         document.querySelector('#deletRed').style.display = "none";
        //     }
        // }

        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';

        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    var tags = getParameterByName('tag');
    tags = tags.split(',');
    tags.forEach((tag) => {
        var el = document.getElementsByClassName(tag)[0];
        el.style.display = 'block';
    });
})();