module.exports = {

    addProduct: ( req, res, next ) => {
        const db = req.app.get('db');
        const { name, img, price } = req.body;

        db.create_product(name, img, price)
            .then( product => res.status(200).send())
            .catch ( err => res.status(500).send( err ));
        // console.log('New appropriations hath arrived in thy stores.');
        
        
    },

    getInventory: ( req, res, next ) => {
        const db = req.app.get('db');

        db.get_inventory()
            .then( products => res.status(200).send( products ))
            .catch ( err => res.status(500).send( err ));
        // res.status(200).send('It worked!!! YUSSSS!');
        // console.log('Thine inventory hath been sent!');
        
    }




}