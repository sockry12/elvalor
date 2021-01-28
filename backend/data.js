import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name:'ed',
            email:'971008.ed@gmail.com',
            password: bcrypt.hashSync('12344321',8),
            isAdmin: true,
        },
        {
            name:'edd',
            email:'sockry12@gmail.com',
            password: bcrypt.hashSync('12344321',8),
            isAdmin:false,
        },
        
    ],
    products: [
       {
           
           name:'Gravity',
           category:'wine',
           images:'/images/p-3.jpg',
           price:'130.00',
           countInStock:0,
           brand:'wine',
           rating:'4.5',
           numReviews:10,
           descriptions:'Alta Calidad',  
       },
       {
       
        name:'Gravity Falls',
        category:'wine',
        images:'/images/p-4.jpg',
        price:'140.00',
        countInStock:11,
        brand:'wine',
        rating:'4.5',
        numReviews:10,
        descriptions:'Alta Calidad',   
    },
    
    {
        
        name:'Falls',
        category:'wine',
        images:'/images/p-3.jpg',
        price:'150.00',
        countInStock:14,
        brand:'wine',
        rating:'4.5',
        numReviews:10,
        descriptions:'Alta Calidad',   
    },
    
    {
      
        name:'GravFalls',
        category:'wine',
        images:'/images/p-3.jpg',
        price:'160.00',
        countInStock:0,
        brand:'wine',
        rating:'4.5',
        numReviews:10,
        descriptions:'Alta Calidad',   
    },
    
    {
        
        name:'GravityFalls',
        category:'wine',
        images:'/images/p-3.jpg',
        price:'170.00',
        countInStock:14,
        brand:'wine',
        rating:'4.5',
        numReviews:10,
        descriptions:'Alta Calidad',   
    },
    {
        
        name:'Gravity 1F',
        category:'wine',
        images:'/images/p-3.jpg',
        price:'180.00',
        countInStock:15,
        brand:'wine',
        rating:'4.5',
        numReviews:10,
        descriptions:'Alta Calidad',   

        
    },
    {
    
        name:'Gravity2F',
        category:'wine',
        images:'/images/p-3.jpg',
        price:'200.00',
        countInStock:15,
        brand:'wine',
        rating:'4.5',
        numReviews:10,
        descriptions:'Alta Calidad',   

        
    },
    {
      
        name:'Gravity 3F',
        category:'wine',
        images:'/images/p-3.jpg',
        price:'210.00',
        countInStock:15,
        brand:'wine',
        rating:'4.5',
        numReviews:10,
        descriptions:'Alta Calidad',   

        
    },
    ],
};

export default data;