$(document).ready(function(){
    var searchstring = $('.searchField');
    var input = searchstring.focus();
    var valueSearch = input.val();
    $('#input-excel').change(function(e){
        var reader = new FileReader();
        reader.readAsArrayBuffer(e.target.files[0]);
        reader.onload = function(e) {
            var data = new Uint8Array(reader.result);
            var wb = XLSX.read(data,{type:'array'});
            $.each(wb, function(index,val){
                console.log(val)
            })
            var htmlstr = XLSX.write(wb,{type:'binary',bookType:'html'});
            var fixedstring = decodeURIComponent(escape(htmlstr));
            $ ('.Content')[0].innerHTML += fixedstring;
            }
    });
});
