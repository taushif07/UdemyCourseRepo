

 exports.getDate = () => {
    let today = new Date();
    
    let option = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    let day = today.toLocaleString("en-IN", option);

    return day;

};
