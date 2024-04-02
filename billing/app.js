import express from 'express';
import path from 'path';
import connectToDatabase from './lib/db.js';
import { Item } from './lib/itemmodel.js';

const app = express();
const PORT = 3000;
app.use(express.static('/static'))
app.use(express.json());


app.get('/', function(req, res) {
    res.sendFile(path.resolve()+'/static/additem.html');
});

app.get('/list',function(req,res){
    res.sendFile(path.resolve()+'/static/item-list.html')
})



app.post('/additem',async function(req, res) {
    const newItem = req.body;
   await connectToDatabase();
    await Item.create(newItem)
    console.log(newItem)
 });


app.get('/itemlist',async function(req, res) {
    try{
        await connectToDatabase();
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (error) {
        console.error('Error fetching item list:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.delete('/delete-item/:itemId', async function(req, res) {
    try {
        const itemId = req.params.itemId;
        await connectToDatabase();
        await Item.findByIdAndDelete(itemId);
        console.log('item deleted '+itemId)
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/bill',function(req,res){
    res.sendFile(path.resolve()+'/static/bill.html')
})

app.listen(PORT, () => console.log(`Server is up at PORT ${PORT}`));
