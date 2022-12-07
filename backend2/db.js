const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_Url).then(() => {
            console.log("DB esta conectada OK")
        });
    } catch (e) {
        console.log("DB NO esta conectada =>" + e.message);
    };
};
