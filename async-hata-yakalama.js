const user ={id:10,name:'beytullah'};
const friends =[{id: 11,name:'kenan'},{id: 12,name: 'mehmet'}];

const getUser = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(user);
        },500);
    });
};

const getFriends =(userId)=> {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            reject("arkadaş listesine ulaşılanamadı");
        },1000);
    });
};

async function asenkronAkis () {
    try{
    const user = await getUser();
    const friends = await getFriends(user.id);
    console.log(user,friends);
    }catch(error){
        console.log(error);   
    }
    
};
asenkronAkis();