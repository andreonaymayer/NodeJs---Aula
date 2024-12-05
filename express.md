```javascript
const express = require('express');

const app = express();


const PORT = 3001;


app.use(express.json());


app.get('/items', (req, res) => {
    
    const clientName = req.header('Client-Name');
    res.json({ message: 'List of items', client: clientName });
});


app.post('/items', (req, res) => {
    
    const newItem = req.body;
    res.status(201).json({ message: 'Item created', item: newItem });
});


app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    res.json({ message: `Item ${itemId} updated`, item: updatedItem });
});


app.patch('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const patchData = req.body;
    res.json({ message: `Item ${itemId} partially updated`, changes: patchData });
});


app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    res.json({ message: `Item ${itemId} deleted` });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```
