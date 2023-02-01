const express = require('express')
const mysql = require('mysql')

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection({
    host: '127.0.0.1',
    database: 'Ana',
    user: 'root',
    password: ''
});

// connect to database
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connected to database')
})

const app = express()

app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render('index.ejs')
});
//insert
app.get('/insert_tara', function (req, res) {
    res.render('insert_tara.ejs')
});
app.get('/inserareTara', function (req, res) {
    let insertSql=`INSERT INTO TARA_ANA(cod_tara,den_tara) VALUES('${req.query.cod_tara}', '${req.query.den_tara}')`;
    db.query(insertSql, (err, results) => {
        if (err) {
            throw err
    }
        res.render('index.ejs');
    }) 
});
app.get('/insert_oras', function (req, res) {
    res.render('insert_oras.ejs')
});
app.get('/inserareOras', function (req, res) {
    let insertSql=`INSERT INTO ORAS_ANA(cod_tara,den_oras,cod_postal) VALUES('${req.query.cod_tara}', '${req.query.den_oras}','${req.query.cod_postal}')`;
    db.query(insertSql, (err, results) => {
        if (err) {
            throw err
    }
        res.render('index.ejs');
    }) 
});

app.get('/insert_hotel', function (req, res) {
    res.render('insert_hotel.ejs')
});
app.get('/inserareHotel', function (req, res) {
    let insertSql=`INSERT INTO HOTEL(oras_id,den_hotel,adresa,nr_telefon, capacitate_maxima) VALUES(${req.query.oras_id}, '${req.query.den_hotel}','${req.query.adresa}','${req.query.nr_telefon}',${req.query.capacitate_maxima})`;
    db.query(insertSql, (err, results) => {
        if (err) {
            throw err
    }
        res.render('index.ejs');
    }) 
});

app.get('/insert_angajat', function (req, res) {
    res.render('insert_angajat.ejs')
});
app.get('/inserareAngajat', function (req, res) {
    let insertSql=`INSERT INTO ANGAJAT(job_id,salariu,stare_contract, data_angajare) VALUES(${req.query.job_id}, ${req.query.salariu},${req.query.stare_contract},'${req.query.data_angajare}')`;
    db.query(insertSql, (err, results) => {
        if (err) {
            throw err
    }
        res.render('index.ejs');
    }) 
});

app.get('/insert_departament', function (req, res) {
    res.render('insert_departament.ejs')
});
app.get('/inserareDepartament', function (req, res) {
    let insertSql=`INSERT INTO DEPARTAMENT (hotel_id,den_departament,stare_departament, capacitate_departament) VALUES(${req.query.hotel_id}, '${req.query.den_departament}',${req.query.stare_departament},${req.query.capacitate_departament})`;
    db.query(insertSql, (err, results) => {
        if (err) {
            throw err
    }
        res.render('index.ejs');
    }) 
});
app.get('/insert_job', function (req, res) {
    res.render('insert_job.ejs')
});
app.get('/inserareJob', function (req, res) {
    let insertSql=`INSERT INTO JOB(departament_id,den_job,stare_job,nr_locuri_scoase) VALUES(${req.query.departament_id}, '${req.query.den_job}',${req.query.stare_job},${req.query.nr_locuri_scoase})`;
    db.query(insertSql, (err, results) => {
        if (err) {
            throw err
    }
        res.render('index.ejs');
    }) 
});
app.get('/insert_restaurant', function (req, res) {
    res.render('insert_restaurant.ejs')
});
app.get('/inserareRestaurant', function (req, res) {
    let insertSql=`INSERT INTO RESTAURANT (hotel_id,meniu,pret_meniu,stare_restaurant, capacitate_locuri) VALUES(${req.query.hotel_id},'${req.query.meniu}',${req.query.pret_meniu},${req.query.stare_restaurant},${req.query.capacitate_locuri})`;
    db.query(insertSql, (err, results) => {
        if (err) {
            throw err
    }
        res.render('index.ejs');
    }) 
});

app.get('/insert_camera', function (req, res) {
    res.render('insert_camera.ejs')
});
app.get('/inserareCamera', function (req, res) {
    let insertSql=`INSERT INTO CAMERA (hotel_id,pret,stare_camera, data_ocupare) VALUES(${req.query.hotel_id},${req.query.pret},${req.query.stare_camera},'${req.query.data_ocupare}')`;
    db.query(insertSql, (err, results) => {
        if (err) {
            throw err
    }
        res.render('index.ejs');
    }) 
});

app.get('/insert_client', function (req, res) {
    res.render('insert_client.ejs')
});
app.get('/inserareClient', function (req, res) {
    let insertSql=`INSERT INTO CLIENT (camera_id,nume,prenume, varsta, tip_client) VALUES(${req.query.camera_id},'${req.query.nume}','${req.query.prenume}',${req.query.varsta},${req.query.tip_client})`;
    db.query(insertSql, (err, results) => {
        if (err) {
            throw err
    }
        res.render('index.ejs');
    }) 
});
app.get('/insert_oferta', function (req, res) {
    res.render('insert_oferta.ejs')
});
app.get('/inserareOferta', function (req, res) {
    let insertSql=`INSERT INTO OFERTA (camera_id,pret_oferta, tip_oferta) VALUES(${req.query.camera_id},${req.query.pret_oferta},${req.query.tip_oferta})`;
    db.query(insertSql, (err, results) => {
        if (err) {
            throw err
    }
        res.render('index.ejs');
    }) 
});

app.get('/insert_cazare', function (req, res) {
    res.render('insert_cazare.ejs')
});
app.get('/inserareCazare', function (req, res) {
    let insertSql=`INSERT INTO CAZARE(camera_id,client_id, tip_operatie, data_cazare) VALUES(${req.query.camera_id},${req.query.client_id},${req.query.tip_operatie},'${req.query.data_cazare}')`;
    db.query(insertSql, (err, results) => {
        if (err) {
            throw err
    }

        res.render('index.ejs');
    }) 
});

// select
app.get('/tari', function (req, res) {
    let selectSql = "SELECT * FROM tara_ana ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('tari.ejs', {tari: results})
    }) 
});

app.get('/views', function (req, res) {
    let selectSql = "SELECT * FROM view_res";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('views.ejs', {views: results})
    }) 
});
app.get('/complexa', function (req, res) {
    let selectSql = "SELECT * FROM complex";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('complexa.ejs', {complexa: results})
    }) 
});

app.get('/orase', function (req, res) {
    let selectSql = "SELECT * FROM oras_ana";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('orase.ejs', {orase: results})
    }) 
});
app.get('/hoteluri', function (req, res) {
    let selectSql = "SELECT * FROM hotel ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('hoteluri.ejs', {hoteluri: results})
    })
});

app.get('/departamente', function (req, res) {
    let selectSql = "SELECT * FROM departament ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('departamente.ejs', {departamente: results})
    })
});

app.get('/angajati', function (req, res) {
    let selectSql = "SELECT * FROM angajat";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('angajati.ejs', {angajati: results})
    })
});

app.get('/restaurante', function (req, res) {
    let selectSql = "SELECT * FROM  restaurant ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('restaurante.ejs', {restaurante: results})
    })
});

app.get('/oferte', function (req, res) {
    let selectSql = "SELECT * FROM oferta ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('oferte.ejs', {oferte: results})
    })
});

app.get('/joburi', function (req, res) {
    let selectSql = "SELECT * FROM job ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('joburi.ejs', {joburi: results})
    })
});

app.get('/cazari', function (req, res) {
    let selectSql = "SELECT * FROM cazare ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('cazari.ejs', {cazari: results})
    })
});

app.get('/clienti', function (req, res) {
    let selectSql = "SELECT * FROM client ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('clienti.ejs', {clienti: results})
    })
});

app.get('/camere', function (req, res) {
    let selectSql = "SELECT * FROM camera ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('camere.ejs', {camere: results})
    })
});

//delete !!! Se poate realiza doar pentru entitatile copil, din cauza constrangerilor cheilor externe ale entitatilor parinte

app.get("/restaurantDelete/:id", function(req, res) {
    deleteQuery = `DELETE FROM restaurant WHERE restaurant_id= ${req.params.id}`;
    db.query(deleteQuery, function(err, rezQuery) {
        if (err) {
            throw err
        }
        res.render('index.ejs')
        
    });
});

app.get("/onDeleteCascade/:id", function(req, res) {
    deleteQuery = `DELETE FROM job WHERE job_id= ${req.params.id}`;
    db.query(deleteQuery, function(err, rezQuery) {
        if (err) {
            throw err 
        }
        res.render('index.ejs')
        
    });
});

app.get("/clientDelete/:id", function(req, res) {
    deleteQuery = `DELETE FROM client WHERE client_id= ${req.params.id}`;
    db.query(deleteQuery, function(err, rezQuery) {
        if (err) {
            throw err
        }
        res.render('index.ejs')
        
    });
});

app.get("/ofertaDelete/:id", function(req, res) {
    deleteQuery = `DELETE FROM oferta WHERE oferta_id= ${req.params.id}`;
    db.query(deleteQuery, function(err, rezQuery) {
        if (err) {
            throw err
        }
        res.render('index.ejs')
        
    });
});

app.get("/angajatDelete/:id", function(req, res) {
    deleteQuery = `DELETE FROM angajat WHERE angajat_id= ${req.params.id}`;
    db.query(deleteQuery, function(err, rezQuery) {
        if (err) {
            throw err
        }
        res.render('index.ejs')
        
    });
});


//sortare
app.get('/restauranteSortat', function (req, res) {
    let selectSql = "SELECT * FROM  restaurant ORDER BY capacitate_locuri ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('restaurante.ejs', {restaurante: results})
    })
});

app.get('/hoteluriSortat', function (req, res) {
    let selectSql = "SELECT * FROM  hotel ORDER BY capacitate_maxima ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('hoteluri.ejs', {hoteluri: results})
    })
});

app.get('/angajatiSortat', function (req, res) {
    let selectSql = "SELECT * FROM  angajat ORDER BY salariu";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('angajati.ejs', {angajati: results})
    })
});

app.get('/camereSortat', function (req, res) {
    let selectSql = "SELECT * FROM  camera ORDER BY pret";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('camere.ejs', {camere: results})
    })
});

app.get('/clientiSortat', function (req, res) {
    let selectSql = "SELECT * FROM  client ORDER BY varsta";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('clienti.ejs', {clienti: results})
    })
});

app.get('/departamenteSortat', function (req, res) {
    let selectSql = "SELECT * FROM  departament ORDER BY capacitate_departament";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('departamente.ejs', {departamente: results})
    })
});

app.get('/oferteSortat', function (req, res) {
    let selectSql = "SELECT * FROM  oferta ORDER BY pret_oferta";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('oferte.ejs', {oferte: results})
    })
});

app.get('/joburiSortat', function (req, res) {
    let selectSql = "SELECT * FROM  job ORDER BY nr_locuri_scoase";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('joburi.ejs', {joburi: results})
    })
});


app.get('/cazariSortat', function (req, res) {
    let selectSql = "SELECT * FROM  cazare ORDER BY data_cazare";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('cazari.ejs', {cazari: results})
    })
});

app.get('/oraseSortat', function (req, res) {
    let selectSql = "SELECT * FROM  oras_ana ORDER BY cod_postal";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('orase.ejs', {orase: results})
    })
});
app.get('/tariSortat', function (req, res) {
    let selectSql = "SELECT * FROM  tara_ana ORDER BY cod_tara DESC";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('tari.ejs', {tari: results})
    })
});
//cerinta c) Afișare
//rezultatului  unei  cereri  careextrage informațiidin  cel puțin3 tabele 
//şi le filtreazăcu ajutorul a cel puțin2 condiții


// CONDITII hotel cu stare_camera=0 si pret_meniu <50

app.get('/bestHotels', function (req, res) {
    let selectSql = "SELECT den_hotel FROM  hotel h JOIN camera c on c.hotel_id=h.hotel_id JOIN restaurant r on r.hotel_id=h.hotel_id WHERE c.stare_camera=0 AND r.pret_meniu<50 ";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('bestHotels.ejs', {hoteluri: results})
    })
});

// Cerinta d)   Afișareare zultatului  unei  cereri  care folosește funcții grup și o clauza having
app.get('/hotelRooms', function (req, res) {
    let selectSql = "SELECT den_hotel, COUNT(*) cnt  FROM  hotel h JOIN camera c on c.hotel_id=h.hotel_id GROUP BY den_hotel HAVING cnt >=1";
    db.query(selectSql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('hotelRooms.ejs', {hoteluri: results})
    })
});




app.listen('3000', () => {
    console.log('Server started on port 3000')
})

