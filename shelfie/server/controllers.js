module.exports = {

    addProduct: ( req, res, next ) => {
        const db = req.app.get('db');
        const { name, img, price } = req.body;
        

        db.create_product(name, img, price)
            .then( () => res.status(200).send())
            .catch ( err => console.log(err) )
        
        // console.log('New appropriations hath arrived in thy stores.');
        
        
    },

    getInventory: ( req, res, next ) => {
        const db = req.app.get('db');

        db.get_inventory()
            .then( products => res.status(200).send( products ))
            .catch ( err => res.status(500).send());
        // res.status(200).send('It worked!!! YUSSSS!');
        // console.log('Thine inventory hath been sent!');
        
    },

    updateProduct: ( req, res, next ) => {
        const db = req.app.get('db');
        const { name, price, img } = req.body;
        const { id } = req.params;

        db.update_product( name, price, img, id )
            .then( () => res.status(200).send() )
            .catch( (err) => res.status(500).send(err) )
    },

    deleteProduct: ( req, res, next ) => {
        const db = req.app.get('db');

        db.delete_product( req.params.id )
            .then( () => res.status(200).send() )
            .catch( err => res.status(500).send(err));

    }




}