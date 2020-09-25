var reportes = [];

var selectedRow = null

function reportar(l,la,lo,fe,ti,com,cor){
    this.lugar = l;
    this.latitud = la; 
    this.longitud = lo;
    this.fecha = fe;
    this.tipodeviolacion = ti;
    this.comentario =com;
    this.correoelectronico = cor;
}

function guardardatos() {
    datos = JSON.stringify(reportes);
    localStorage.setItem('lapara', datos);
}

function agregarnuevoreporte() {
    const idxVal = document.querySelector('.idxEdit').value;
    let idx = (idxVal === '' ? null : idxVal);
    let l = document.getElementById('txtLugar').value;
    let la = document.getElementById('txtLatitud').value;
    let lo = document.getElementById('txtLongitud').value;
    let fe = document.getElementById('txtFecha').value;
    let ti = document.getElementById('txtViolacion').value;
    let com= document.getElementById('txtComentario').value;
    let cor= document.getElementById('txtCorreo').value;
    localStorage.setItem("Fecha", fe);
    ra = new reportar(l, la, lo, fe, ti,com,cor, fe);
    if(null === idx){
        reportes.push(ra);
    }
    else{
        reportes.splice(idx, 1, ra);
    }
       
        mostrartrabajadores();
        guardardatos();
}


function dce(ra) {
    return document.createElement(ra);
}

function geid(id) {
    return document.getElementById(id);
}


function mostrartrabajadores() {
    destino = document.getElementById('tbDatos');
    destino.innerHTML = '';

    for (x = 0; x < reportes.length; x++) {

        reporte = reportes[x];
        tr = dce('tr');
        tr.setAttribute('indice', x);

        td = dce('td');
        td.innerHTML = reporte.lugar;
        tr.appendChild(td);

        td = dce('td');
        td.innerHTML = reporte.latitud;
        tr.appendChild(td);

        td = dce('td');
        td.innerHTML = reporte.longitud;
        tr.appendChild(td);

        td = dce('td');
        td.innerHTML = reporte.fecha;
        tr.appendChild(td);

        td = dce('td');
        td.innerHTML = reporte.tipodeviolacion;
        tr.appendChild(td);

        td = dce('td');
        td.innerHTML = reporte.comentario;
        tr.appendChild(td);

        td = dce('td');
        td.innerHTML = reporte.correoelectronico;
        tr.appendChild(td);

        td = dce('td');
        btn = dce('button');
        btn.innerHTML = 'x';
        btn.setAttribute('onclick', 'borrarFila(this)');
        td.appendChild(btn);
        tr.appendChild(td);

        td = dce('td'); 
        btn = dce('button');
        btn.innerHTML = 'edit';
        btn.setAttribute('onclick', `editarFila(${x})`);
        td.appendChild(btn);
        tr.appendChild(td);


        destino.appendChild(tr);


    }


}

function limpiarcampos() {
    geid('txtLugar').value = '';
    geid('txtLatitud').value = '';
    geid('txtLongitud').value = '';
    geid('txtFecha').value = '';
    geid('txtViolacion').value = '';
    geid('txtComentario').value = '';
    geid('txtCorreo').value = '';
}

function borrarFila(btn) {
    tr = btn.parentNode.parentNode;
    tr.setAttribute('class', 'borrar');
    if (confirm('seguro que desea eliminar la fila seleccionada ')) {
        indice = tr.getAttribute('indice');
        rarr = [];
        for (x = 0; x < reportes.length; x++) {
            if (x != indice) {

                rarr.push(reportes[x]);

            }
        }
        reportes = rarr;
        tr.parentNode.removeChild(tr);
        guardardatos();
    }
    tr.setAttribute('class', '');
}

function editarFila(idx) {
   
    document.querySelector('.idxEdit').value = idx;
    geid('txtLugar').value = reportes[idx].lugar;
    geid('txtLatitud').value =  reportes[idx].latitud;
    geid('txtLongitud').value =  reportes[idx].longitud;
    geid('txtFecha').value =  reportes[idx].fecha;
    geid('txtViolacion').value =  reportes[idx].tipodeviolacion;
    geid('txtComentario').value =  reportes[idx].comentario;
    geid('txtCorreo').value =  reportes[idx].correoelectronico;
    //document.getElementsByName('txtFechaNacimiento')[0].value = trabajadores[idx].fechanaciemiento
}

function cargarDatos() {
    datos = localStorage.getItem('lapara');
    if (datos != null) {
        reportes = JSON.parse(datos);
        mostrartrabajadores();
    }
}
function actualizar(){location.reload(true);}

function deleteAll(){
    var sure = confirm("Estas seguro que quieres eliminar todo?");
    if(sure){
    window.localStorage.clear();
    setInterval("actualizar()",1000);
    }
}


