
const rp = require('request-promise');

class BaseController{

    saveObject(url, obj, res){
        var options = {
            method: 'POST',
            uri: url,
            body: obj,
            json: true 
        };
        rp(options)
            .then(function (parsedBody) {
                return res.status(201).json({
                    ok: true,
                    message: 'Operación realizada de forma exitosa.',
                    data: parsedBody
                });
            })
            .catch(function (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'No se pudo guardar el registro',
                    errors: err,
                    data: obj
                });
            });
    }

    getObject(url, id, res){
    
        var options = {
            uri: url+id,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };
        console.log(options);
        rp(options)
            .then(function (data) {
                return res.status(200).json({
                    ok: true,
                    message: 'Operación realizada de forma exitosa.',
                    data: data                   
                });
            })
            .catch(function (err) {
                return res.status(404).json({
                    ok: false,
                    message: 'No se encontraron resultados',
                });
            });
    }

    getObjects(url, res){
        var options = {
            uri: url,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };
        console.log(options);
        rp(options)
            .then(function (data) {
                return res.status(200).json({
                    ok: true,
                    message: 'Operación realizada de forma exitosa.',
                    data: data                   
                });
            })
            .catch(function (err) {
                return res.status(404).json({
                    ok: false,
                    message: 'No se encontraron resultados',
                });
            });
    }

    updateObject(url ,obj, id ,res){
        var options = {
            method: 'PUT',
            uri: url+id,
            body: obj,
            json: true 
        };
        rp(options)
            .then(function (parsedBody) {
                return res.status(201).json({
                    ok: true,
                    message: 'Operación realizada de forma exitosa.',
                    data: parsedBody
                });
            })
            .catch(function (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'No se pudo actualizar el registro',
                    errors: err,
                    data: obj
                });
            });
    }

    deleteObject(url, id ,res){
        var options = {
            method: 'DELETE',
            uri: url+id,
            json: true
        };
        
        rp(options)
            .then(function (data) {
                return res.status(200).json({
                    ok: true,
                    message: 'Operación realizada de forma exitosa.',
                    data: data                   
                });
            })
            .catch(function (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'No se puede eliminar el registro',
                });
            });
    }


}

module.exports = BaseController;