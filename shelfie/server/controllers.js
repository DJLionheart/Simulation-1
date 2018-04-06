module.exports = {

    getInventory: ( req, res, next ) => {
        const db = req.app.get('db');

        db.get_inventory()
            .then( products => res.status(200).send( products ))
            .catch ( err => res.status(500).send( err ));
        // res.status(200).send('It worked!!! YUSSSS!');
        console.log('Thine inventory hath been sent!');
        
    }




}