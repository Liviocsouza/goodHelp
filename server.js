const { ENGINE_METHOD_ALL } = require('constants');
const express = require('express');
const bodyParser = require('body-parser')
const { ObjectID, ObjectId } = require('bson');
const mongoose = require('mongoose')
const app = express();

const MongoClient = require('mongodb').MongoClient 
const uri = ("mongodb://localhost:27017/bancotest");
  
MongoClient.connect(uri, (err, client) => {
	if(err) return console.log(err)
		db = client.db('bancotest')

	app.listen(3000, () => {
		console.log('Servidor conectado na porta 3000')
	})
})

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.post('/show', (req, res) => {
    console.log(req.body)
})

// Definindo os models


//model medico
const medicoSchema = mongoose.Schema({
	nome: {
		type: String,
		require: true
	},
	crm: {
		type: Number,
		requore: true
	},
	idade: {
		type: Number,
		require: true
	},
	sexo: {
		type: String,
		require: true
	},
	telefone: {
		type: Number,
		require: true
	},
	email: {
		type: String,
        require: true
    },
    senha: {
        type: Number,
        require: true
    },
	especialidade: {
		type: String,
		require: true
	},
	disponilidade_mensal: {
		type: String,
		require: true
	},

})


//model paciente
const pacienteSchema = mongoose.Schema({

	nome: {
		type: String,
		require: true
	},
	numero_paciente: {
		type: Number,
		require: true
	},
	idade: {
		type: Number,
		require: true
	},
	sexo: {
		type: String,
		require: true
	},
	telefone: {
		type: Number,
		require: true
    },
    email: {
		type: String,
        require: true
    },
    senha: {
        type: Number,
        require: true
    },
	motivo: {
		type: String,
		require: true
	}	
	
})


//Collections
mongoose.model("medicos", medicoSchema)
mongoose.model("pacientes", pacienteSchema)


const medico = mongoose.model('medicos')

new medico({
	nome: "Aline Morais",
	crm: 8652,
	idade: 30,
	sexo: "F",
	telefone: 111111111,
    email: "aline@email.com",
    senha: 12345,
	disponibilidade_mensal: 2,
	especialidade: "Psicologa",

}).save().then(() => {
	console.log("cadastro do Medico cirado com Sucesso!")
}).catch((err) => {
	console.log("Houve um erro ao registrar o medico: "+err)
})

const paciente = mongoose.model('pacientes')

new paciente({
	nome: "Marcos Alencar",
	telefone: 999999999,
	sexo: "M",
    idade: 35,
    email: "marcos@email.com",
    senha: 12345,
	motivo:"Depressão",

}).save().then(() => {
	console.log("Cadastro do Paciente criado com sucesso!")
}).catch((err) => {
	console.log("Houve um erro ao registrar o Paciente: "+err)
})



//Salvando nossos dados no banco

app.get('/show', (req, res) => {
    db.collections('data').find().toAraay((err, results) => {
        if(err) return console.log(err)
        res.render('/show.ejs', {data: results})
    })
})


app.post('/show', (req, res ) => {
	db.collection('data').save(req.body, (err, result) => {
		if(err) return console.log(err)

		console.log('salvo no banco de dados')
		res.redirect('/show')		
	})
})


//CRUD — READ

app.get('/', (req, res) => {
	let cursor = db.collection('data').find()
})

//CRUD — UPDATE-----------
app.route('/edit/:id')
    .get((req, res) => {
    var id = req.params.id

    db.collection('data').find(ObjectId(id)).toArray((err, result) => {
        if(err) return res.send(err)
        res.render('edit.ejs', {data: result})
    })
})
.post((req, res) => {
    var id = req.params.id
    var name = req.body.name
    var surname = req.body.surname

    db.collection('data').updateOne({_id: ObjectId(id)}, {
        $set: {
            name: name,
            surname: surname
        }
    }, (err, result) => {
        if(err) return res.send(err)
        res.redirect('/show')
        console.log('Atualizado no Banco de Dados');
    })
})

//CRUD — DELETE
app.route('/delete/:id')
.get((req, res) => {
    var id = req.params.id

    db.collection('data').deleteOne({ id: ObjectId(id)}, (err, result) => {
        if(err) return res.send(500, err)
        console.log("Deletando do Banco de Dados!")
        res.redirect('/show')
    })
})

